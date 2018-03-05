var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "0.3.2",
        "Test Environment": "PR",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Linux",
        "Parallel": "Scenarios",
        "Executed": "Parallel"
    }
};

reporter.generate(options);