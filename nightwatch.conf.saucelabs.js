const seleniumServer = require('selenium-server')
const chromedriver = require('chromedriver')

require('nightwatch-cucumber')({
  cucumberArgs: ['--require', 'features/step_definitions', '--format', 'json:reports/cucumber.json', 'features']
})

module.exports = {
    output_folder : "reports",
    custom_commands_path : "",
    custom_assertions_path : "",
    page_objects_path : "page_objects",
    globals_path : "",
  
    selenium : {
      start_process : false,
      server_path : "",
      log_path : "",
      host : "127.0.0.1",
      port : 4444,
      cli_args : {
        'webdriver.chrome.driver' : '',
        'webdriver.ie.driver' : ''
      }
    },
  
    test_workers : {enabled : false, workers : 2},
  
    test_settings : {
      default : {
        launch_url : "http://localhost",
        selenium_port  : 80,
        selenium_host  : "ondemand.saucelabs.com",
        silent: true,
        screenshots : {
          enabled : false,
          path : ""
        },
        username : "RECOMMENDATIONS",
        access_key : "qatest",
  
        skip_testcases_on_fail: false,
  
        desiredCapabilities: {
          javascriptEnabled: true,
          acceptSslCerts: true
        }
      },
  
      chrome: {
        desiredCapabilities: {
          platform: "Windows 7",
          browserName: "chrome",
          version: "latest"
        }
      },
  
      firefox : {
        desiredCapabilities: {
          platform: "Windows 8",
          browserName: "firefox",
          version: "33"
        }
      },
  
      internet_explorer_edge : {
        desiredCapabilities: {
          platform: "Windows 10",
          browserName: "MicrosoftEdge",
          version: "latest"
        }
      },
  
      android_s4_emulator: {
        desiredCapabilities: {
          browserName: "android",
          deviceOrientation: "portrait",
          deviceName: "Samsung Galaxy S4 Emulator"
        }
      },
  
      iphone_6_simulator: {
        desiredCapabilities: {
          browserName: "iPhone",
          deviceOrientation: "portrait",
          deviceName: "iPhone 6",
          platform: "OSX 10.10",
          version: "8.4"
        }
      }
  
    }
  };
