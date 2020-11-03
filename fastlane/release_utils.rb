require 'json'

module ReleaseUtils
  module_function

  def root_folder
    File.join [File.dirname(__FILE__), '..']
  end

  def prepare_assets!
    Shell.sh %{ npx ionic capacitor sync }
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

  module Shell
    module_function

    def self.info(str)
      puts("==> #{str}")
    end
  
    def sh(cmd)
      Dir.chdir(ReleaseUtils.root_folder) do
        unless system(cmd)
          info('Shell command failed, exiting')
          exit(1)
        end
      end
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

    #
    # Ensures the required env variables are set
    #
    def assert_environment!
      required_vars = [
        # 'FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD',
        # 'FASTLANE_SESSION',
        'APPSTORE_CONNECT_API_KEY_ID',
        'APPSTORE_CONNECT_API_KEY_ISSUER_ID',
        'APPSTORE_CONNECT_API_KEY',
        # 'FASTLANE_PASSWORD',
        'APPLE_DEVELOPER_TEAM_ID',
        'APP_STORE_CONNECT_TEAM_ID',
        'APPLE_ID',
        'AZURE_GOODCITY_STORAGE_NAME',
        'CERTIFICATE',
        'CERTIFICATE_PASSWORD',
        'KEYCHAIN_PWD'
      ]
      
      missing_vars = required_vars.select { |key| !ENV[key] }
      
      if missing_vars.length > 0
        Shell.info("Error: Missing Environment variables:")
        missing_vars.each { |key|  Shell.info("- #{key}") }
        exit(1)
      end
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
      Shell.sh %{ az storage file download-batch  -d #{provisioning_profiles_folder} -s ci-store/goodchat --account-name #{ENV['AZURE_GOODCITY_STORAGE_NAME']} }
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
      Shell.sh %{ az storage file download --dest #{certificate_folder} -s ci-store -p #{certificate_name} --account-name #{ENV['AZURE_GOODCITY_STORAGE_NAME']} }
    end
  end
end