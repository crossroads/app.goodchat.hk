require 'json'

module ReleaseUtils
  module_function

  def root_folder
    File.expand_path(
      File.join([File.dirname(__FILE__), '..'])
    )
  end

  def prepare_assets!
    Shell.xsh %{ npm run cap:sync }
  end

  def package_json
    @@data_hash ||= begin
      file = File.read File.join(root_folder, './package.json')
      JSON.parse(file)
    end
  end

  def app_version_number
    package_json['version']
  end

  def copyright
    "#{Time.now.year} Crossroads Foundation Limited"
  end

  def get_env_var(key)
    assert_env_vars_exist!([key])
    ENV[key]
  end

  def assert_env_vars_exist!(required_vars)
    missing_vars = required_vars.select { |key| !ENV[key] }
    
    if missing_vars.length > 0
      Shell.info("Error: Missing Environment variables:")
      missing_vars.each { |key|  Shell.info("- #{key}") }
      exit(1)
    end
  end

  module Shell
    module_function

    def self.info(str)
      puts("==> #{str}")
    end
  
    def sh(cmd)
      Dir.chdir(ReleaseUtils.root_folder) { system(ENV, cmd) }
    end

    def xsh(cmd)
      unless sh(cmd)
        info('Shell command failed, exiting')
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
        Shell.info('Error: You are not logged in to Azure')
        exit(1)
      end
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

    def assert_environment!
      ReleaseUtils.assert_env_vars_exist! [
        'APPSTORE_CONNECT_API_KEY_ID',
        'APPSTORE_CONNECT_API_KEY_ISSUER_ID',
        'APPSTORE_CONNECT_API_KEY',
        'APPLE_DEVELOPER_TEAM_ID',
        'APP_STORE_CONNECT_TEAM_ID',
        'APPLE_ID',
        'AZURE_GOODCITY_STORAGE_NAME',
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

    def download_provisioning_profiles!
      assert_environment!
      Shell.info("Downloading iOS provisioning profiles")
      Shell.xsh %{ az storage file download-batch -d #{provisioning_profiles_folder} -s ci-store/goodchat --account-name #{ENV['AZURE_GOODCITY_STORAGE_NAME']} }
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

    def certificate_folder
      File.join [ReleaseUtils.root_folder, 'fastlane']
    end

    def certificate_path
      File.join [certificate_folder, ENV['CERTIFICATE']]
    end

    def download_cert!
      assert_environment!
      Shell.info("Downloading iOS cert")
      Shell.xsh %{ az storage file download --dest #{certificate_folder} -s ci-store -p #{certificate_name} --account-name #{ENV['AZURE_GOODCITY_STORAGE_NAME']} }
    end
  end
end
