const seleniumServer = require('selenium-server')
const phantomjs = require('phantomjs-prebuilt')
const chromedriver = require('chromedriver')

require('nightwatch-cucumber')({
  cucumberArgs: ['--require', 'features/step_definitions', '--format', 'json:reports/cucumber.json', 'features']
})

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  page_objects_path: 'page_objects',
  live_output: false,
  disable_colors: false,
  test_workers: {
    enabled: false,
    workers: 2
  },
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444
  },
  test_settings: {
    default: {
      launch_url: 'http://www.mercadolibre.com.uy',
      selenium_port: 4444,
      selenium_host: 'localhost',
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: "./reports"
    },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['--headless']
        },
        selenium: {
          cli_args: {
            'webdriver.chrome.driver': chromedriver.path
          }
        }
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
};
