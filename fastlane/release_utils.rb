require 'json'
require 'colorize'
require 'fastlane'

require_relative './file_utils'

module ReleaseUtils
  module_function

  def root_folder
    File.expand_path(
      File.join([File.dirname(__FILE__), '..'])
    )
  end

  def fastlane_folder
    File.join [root_folder, 'fastlane']
  end

  def package_json
    @@data_hash ||= begin
      file = File.read File.join(root_folder, './package.json')
      JSON.parse(file)
    end
  end

  def app_version
    package_json['version']
  end

  def copyright
    "#{Time.now.year} Crossroads Foundation Limited"
  end

  def get_env_var(key)
    assert_env_vars_exist!([key])
    ENV[key]
  end

  def ci_build_number
    ENV['CIRCLE_BUILD_NUM'] || ENV['BUILD_BUILDNUMBER']
  end

  def assert_env_vars_exist!(required_vars)
    missing_vars = required_vars.select { |key| !ENV[key] }
    
    if missing_vars.length > 0
      Shell.error("Missing Environment variables:")
      missing_vars.each { |key|  Shell.info("- #{key}") }
      exit(1)
    end
  end

  module Ionic
    module_function

    def ionic_app_id
      ReleaseUtils.get_env_var('IONIC_APP_ID')
    end

    def ionic_config_path
      File.join(ReleaseUtils.root_folder, 'ionic.config.json')
    end
  
    def inject_ionic_app_id
      Shell.info("Injecting the Ionic App ID into config files")

      FileUtils.edit_json(ionic_config_path) { |cfg| cfg["id"] = ionic_app_id }

      IOS.plist_set('IonAppId', ionic_app_id)
      Android.strings_xml_set('ionic_app_id', ionic_app_id)
    end  

    def enable_code_push(channel:, method:)
      IOS.plist_set('IonChannelName', channel)
      IOS.plist_set('IonUpdateMethod', method)
      Android.strings_xml_set('ionic_channel_name', channel)
      Android.strings_xml_set('ionic_update_method', method)
    end
  end

  module Shell
    module_function

    def log(str)
      puts "[#{Time.now.strftime("%H:%M:%S")}] >> #{str}"
    end

    def info(str)
      log(str.colorize('light_blue'))
    end

    def error(str)
      log("Error: #{str}".colorize('red'))
    end
  
    def sh(cmd)
      Dir.chdir(ReleaseUtils.root_folder) { system(ENV, cmd) }
    end

    def read(prompt)
      Fastlane::Actions::PromptAction.run(text: prompt)
    end

    def xsh(cmd)
      unless sh(cmd)
        error('Shell command failed, exiting')
        exit(1)
      end
    end
  end

  module Azure
    module_function

    def logged_in?
      @@logged_in ||= Shell.sh %{ az account show }
    end

    def assert_logged_in!
      unless logged_in?
        Shell.error('You are not logged in to Azure')
        exit(1)
      end
    end

    def download_file(filepath, dest: ReleaseUtils.fastlane_folder)
      Shell.info %{ Downloading file #{filepath} from ci-store }
      Shell.xsh %{ az storage file download --dest #{dest} -s ci-store -p #{filepath} --account-name goodcitystorage }
    end

    def download_folder(folder, dest:)
      Shell.info %{ Downloading folder #{folder} from ci-store }
      Shell.xsh %{ az storage file download-batch -d #{dest} -s ci-store/#{folder} --account-name goodcitystorage }
    end
  end

  module Web
    module_function

    def upload_staging
      upload_to_azure('goodchatstaging')
    end

    def upload_prod
      upload_to_azure('goodchatprod')
    end

    def upload_to_azure(storage_name)
      Shell.xsh %{ az storage blob upload-batch -s ./build -d '$web' --account-name #{storage_name} }
    end
  end

  module Android
    module_function

    def prepare_assets!
      Shell.xsh %{ npm run cap:sync -- android }
    end
    
    def assert_environment!
      ReleaseUtils.assert_env_vars_exist! [
        'GOOGLE_PLAY_KEY_FILE'
      ]
    end
    
    def project_folder
      File.join [ReleaseUtils.root_folder, 'android']
    end
    
    def strings_xml_set(key, value)
      FileUtils.edit_xml(Android.strings_xml_path, "string[@name='#{key}']") do |e|
        e.text = value
      end
    end

    def strings_xml_path
      File.join [project_folder, 'app/src/main/res/values/strings.xml']
    end

    def gradle_path
      File.join [project_folder, "app/build.gradle"]
    end

    def apk_path
      File.join [project_folder, 'app', 'build', 'outputs', 'apk', 'release', 'app-release.apk']
    end

    def keystore_filename
      'goodchat.keystore'
    end

    def keystore_file_path
      File.join [ReleaseUtils.fastlane_folder, keystore_filename]
    end

    def keystore_password
      ReleaseUtils.get_env_var('GOODCITY_KEYSTORE_PASSWORD')
    end

    def keystore_alias
      ReleaseUtils.get_env_var('GOODCITY_KEYSTORE_ALIAS')
    end

    def json_key_filepath
      File.join [ReleaseUtils.fastlane_folder, ReleaseUtils.get_env_var('GOOGLE_PLAY_KEY_FILE')]
    end

    def download_json_key_file
      Azure.download_file("google-play/#{ReleaseUtils.get_env_var('GOOGLE_PLAY_KEY_FILE')}")
    end

    def download_keystore_file
      Azure.download_file("goodchat/#{keystore_filename}")
    end

    def download_google_services_file
      Azure.download_file("goodchat/google-services.json", dest: File.join([project_folder, 'app']))
    end

    def version_code
      @@version_code ||= ReleaseUtils.ci_build_number || Shell.read('Please input the build number:') || 1
    end

    def version_name
      ReleaseUtils.app_version
    end
  end

  module IOS
    include ReleaseUtils::Shell

    module AppStore

      module_function

      def api_key_payload
        {
          key_id:       ENV['APPSTORE_CONNECT_API_KEY_ID'],
          issuer_id:    ENV['APPSTORE_CONNECT_API_KEY_ISSUER_ID'],
          key_content:  ENV['APPSTORE_CONNECT_API_KEY']
        }
      end

      def pilot_username
        ENV['APPLE_ID']
      end
    end

    module_function

    def prepare_assets!
      Shell.xsh %{ npm run cap:sync -- ios}
    end

    def assert_environment!
      ReleaseUtils.assert_env_vars_exist! [
        'APPSTORE_CONNECT_API_KEY_ID',
        'APPSTORE_CONNECT_API_KEY_ISSUER_ID',
        'APPSTORE_CONNECT_API_KEY',
        'APPLE_DEVELOPER_TEAM_ID',
        'APP_STORE_CONNECT_TEAM_ID',
        'APPLE_ID',
        'CERTIFICATE',
        'CERTIFICATE_PASSWORD',
        'KEYCHAIN_PWD'
      ]
    end

    def provisioning_profiles_folder
      File.join ['~', 'Library', 'MobileDevice', 'Provisioning\ Profiles']
    end

    def staging_profile_path
      File.join [provisioning_profiles_folder, 'GoodChatStaging.mobileprovision']
    end

    def prod_profile_path
      File.join [provisioning_profiles_folder, 'GoodChat.mobileprovision']
    end

    def info_plist_path
      File.join [ReleaseUtils.root_folder, 'ios/App/App/Info.plist']
    end

    def plist_set(key, value)
      FileUtils.edit_xml(info_plist_path, "//key[text()='#{key}']/following::string[1]") do |e|
        e.text = value
      end
    end

    def download_provisioning_profiles!
      assert_environment!
      Shell.info("Downloading iOS provisioning profiles")
      Azure.download_folder('goodchat', dest: provisioning_profiles_folder)
    end

    def certificate_name
      ENV["CERTIFICATE"]
    end

    def certificate_password
      ENV["CERTIFICATE_PASSWORD"]
    end

    def keychain_password
      ENV["KEYCHAIN_PWD"]
    end

    def certificate_path
      File.join [ReleaseUtils.fastlane_folder, ENV['CERTIFICATE']]
    end

    def download_cert!
      assert_environment!
      Shell.info("Downloading iOS cert")
      Azure.download_file(certificate_name)
    end
  end
end
