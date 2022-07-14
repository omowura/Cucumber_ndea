$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepageLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Test login functionality",
  "description": "",
  "id": "test-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to login with valid credentials successfully",
  "description": "",
  "id": "test-login-functionality;user-should-be-able-to-login-with-valid-credentials-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the nopCommerce webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter user email",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter user password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on the login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "homepageLogin.i_am_on_the_nopCommerce_webpage()"
});
formatter.result({
  "duration": 5913638100,
  "status": "passed"
});
formatter.match({
  "location": "homepageLogin.i_click_on_login_button()"
});
formatter.result({
  "duration": 587218400,
  "status": "passed"
});
formatter.match({
  "location": "homepageLogin.i_enter_user_email()"
});
formatter.result({
  "duration": 98262001,
  "status": "passed"
});
formatter.match({
  "location": "homepageLogin.i_enter_user_password()"
});
formatter.result({
  "duration": 76801999,
  "status": "passed"
});
formatter.match({
  "location": "homepageLogin.i_click_on_the_login()"
});
formatter.result({
  "duration": 1064770300,
  "status": "passed"
});
formatter.match({
  "location": "homepageLogin.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 685231500,
  "status": "passed"
});
formatter.uri("invalidLoginWithDataDriven.feature");
formatter.feature({
  "line": 1,
  "name": "Test invalid login functionality",
  "description": "",
  "id": "test-invalid-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Invalid login credentials should return correct error message",
  "description": "",
  "id": "test-invalid-login-functionality;invalid-login-credentials-should-return-correct-error-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on the homepage and click login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Correct \"\u003cerrormessage\u003e\" should be returned",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "test-invalid-login-functionality;invalid-login-credentials-should-return-correct-error-message;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errormessage"
      ],
      "line": 11,
      "id": "test-invalid-login-functionality;invalid-login-credentials-should-return-correct-error-message;;1"
    },
    {
      "cells": [
        "iwa@gmail.com",
        "testing",
        "Authentication failed."
      ],
      "line": 12,
      "id": "test-invalid-login-functionality;invalid-login-credentials-should-return-correct-error-message;;2"
    },
    {
      "cells": [
        "iwa+55@gmail.com",
        "test",
        "Invalid password."
      ],
      "line": 13,
      "id": "test-invalid-login-functionality;invalid-login-credentials-should-return-correct-error-message;;3"
    },
    {
      "cells": [
        "",
        "testing",
        "An email address required."
      ],
      "line": 14,
      "id": "test-invalid-login-functionality;invalid-login-credentials-should-return-correct-error-message;;4"
    },
    {
      "cells": [
        "iwa+55@gmail.com",
        "",
        "Password is required."
      ],
      "line": 15,
      "id": "test-invalid-login-functionality;invalid-login-credentials-should-return-correct-error-message;;5"
    },
    {
      "cells": [
        "",
        "",
        "An email address required."
      ],
      "line": 16,
      "id": "test-invalid-login-functionality;invalid-login-credentials-should-return-correct-error-message;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Invalid login credentials should return correct error message",
  "description": "",
  "id": "test-invalid-login-functionality;invalid-login-credentials-should-return-correct-error-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on the homepage and click login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User enters \"iwa@gmail.com\" and \"testing\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Correct \"Authentication failed.\" should be returned",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "invalidLoginWithDataDriven.user_launches_browser()"
});
formatter.result({
  "duration": 7005372801,
  "status": "passed"
});
formatter.match({
  "location": "invalidLoginWithDataDriven.user_is_on_the_homepage_and_click_login_button()"
});
formatter.result({
  "duration": 1346783700,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: unexpected command response\n  (Session info: chrome\u003d103.0.5060.114)\nBuild info: version: \u00274.1.4\u0027, revision: \u0027535d840ee2\u0027\nSystem info: host: \u0027LAPTOP-R890KMMG\u0027, ip: \u0027192.168.1.97\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.15\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [efb154a6be331571d5348368fd35fd43, clickElement {id\u003d46a177f1-9da0-45c5-a9b1-f0185d6ebc3b}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\omowu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59970}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59970/devtoo..., se:cdpVersion: 103.0.5060.114, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (efb154a6be331571d5348368fd35fd43)] -\u003e xpath: //a[contains(text(),\u0027Sign in\u0027)]]\nSession ID: efb154a6be331571d5348368fd35fd43\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat StepDefinitions.invalidLoginWithDataDriven.user_is_on_the_homepage_and_click_login_button(invalidLoginWithDataDriven.java:24)\r\n\tat ✽.And User is on the homepage and click login button(invalidLoginWithDataDriven.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "iwa@gmail.com",
      "offset": 13
    },
    {
      "val": "testing",
      "offset": 33
    }
  ],
  "location": "invalidLoginWithDataDriven.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "invalidLoginWithDataDriven.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 9
    }
  ],
  "location": "invalidLoginWithDataDriven.correct_should_be_returned(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Invalid login credentials should return correct error message",
  "description": "",
  "id": "test-invalid-login-functionality;invalid-login-credentials-should-return-correct-error-message;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on the homepage and click login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User enters \"iwa+55@gmail.com\" and \"test\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Correct \"Invalid password.\" should be returned",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "invalidLoginWithDataDriven.user_launches_browser()"
});
formatter.result({
  "duration": 7881497800,
  "status": "passed"
});
formatter.match({
  "location": "invalidLoginWithDataDriven.user_is_on_the_homepage_and_click_login_button()"
});
formatter.result({
  "duration": 2417699501,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: unexpected command response\n  (Session info: chrome\u003d103.0.5060.114)\nBuild info: version: \u00274.1.4\u0027, revision: \u0027535d840ee2\u0027\nSystem info: host: \u0027LAPTOP-R890KMMG\u0027, ip: \u0027192.168.1.97\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.15\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3d946f9a739a732032dc0606ba235bc7, clickElement {id\u003d9c521c21-8069-473f-9a15-74718a171499}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\omowu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60023}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60023/devtoo..., se:cdpVersion: 103.0.5060.114, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (3d946f9a739a732032dc0606ba235bc7)] -\u003e xpath: //a[contains(text(),\u0027Sign in\u0027)]]\nSession ID: 3d946f9a739a732032dc0606ba235bc7\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat StepDefinitions.invalidLoginWithDataDriven.user_is_on_the_homepage_and_click_login_button(invalidLoginWithDataDriven.java:24)\r\n\tat ✽.And User is on the homepage and click login button(invalidLoginWithDataDriven.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "iwa+55@gmail.com",
      "offset": 13
    },
    {
      "val": "test",
      "offset": 36
    }
  ],
  "location": "invalidLoginWithDataDriven.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "invalidLoginWithDataDriven.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid password.",
      "offset": 9
    }
  ],
  "location": "invalidLoginWithDataDriven.correct_should_be_returned(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Invalid login credentials should return correct error message",
  "description": "",
  "id": "test-invalid-login-functionality;invalid-login-credentials-should-return-correct-error-message;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on the homepage and click login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\" and \"testing\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Correct \"An email address required.\" should be returned",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "invalidLoginWithDataDriven.user_launches_browser()"
});
formatter.result({
  "duration": 7018676800,
  "status": "passed"
});
formatter.match({
  "location": "invalidLoginWithDataDriven.user_is_on_the_homepage_and_click_login_button()"
});
formatter.result({
  "duration": 1151235200,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: unexpected command response\n  (Session info: chrome\u003d103.0.5060.114)\nBuild info: version: \u00274.1.4\u0027, revision: \u0027535d840ee2\u0027\nSystem info: host: \u0027LAPTOP-R890KMMG\u0027, ip: \u0027192.168.1.97\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.15\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8e9beb75f526a61751c8ac47c2108f72, clickElement {id\u003d6d12a7f8-7c48-4507-b147-ec7a09d74796}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\omowu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60092}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60092/devtoo..., se:cdpVersion: 103.0.5060.114, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (8e9beb75f526a61751c8ac47c2108f72)] -\u003e xpath: //a[contains(text(),\u0027Sign in\u0027)]]\nSession ID: 8e9beb75f526a61751c8ac47c2108f72\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat StepDefinitions.invalidLoginWithDataDriven.user_is_on_the_homepage_and_click_login_button(invalidLoginWithDataDriven.java:24)\r\n\tat ✽.And User is on the homepage and click login button(invalidLoginWithDataDriven.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "testing",
      "offset": 20
    }
  ],
  "location": "invalidLoginWithDataDriven.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "invalidLoginWithDataDriven.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 9
    }
  ],
  "location": "invalidLoginWithDataDriven.correct_should_be_returned(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Invalid login credentials should return correct error message",
  "description": "",
  "id": "test-invalid-login-functionality;invalid-login-credentials-should-return-correct-error-message;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on the homepage and click login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User enters \"iwa+55@gmail.com\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Correct \"Password is required.\" should be returned",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "invalidLoginWithDataDriven.user_launches_browser()"
});
formatter.result({
  "duration": 3711669901,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d103.0.5060.114)\nBuild info: version: \u00274.1.4\u0027, revision: \u0027535d840ee2\u0027\nSystem info: host: \u0027LAPTOP-R890KMMG\u0027, ip: \u0027192.168.1.97\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.15\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [1150836aefd4048bf209a12545aa780c, get {url\u003dhttp://automationpractice.com/index.php}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\omowu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60150}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60150/devtoo..., se:cdpVersion: 103.0.5060.114, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1150836aefd4048bf209a12545aa780c\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:330)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:1022)\r\n\tat StepDefinitions.invalidLoginWithDataDriven.user_launches_browser(invalidLoginWithDataDriven.java:17)\r\n\tat ✽.Given User launches browser(invalidLoginWithDataDriven.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "invalidLoginWithDataDriven.user_is_on_the_homepage_and_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "iwa+55@gmail.com",
      "offset": 13
    },
    {
      "val": "",
      "offset": 36
    }
  ],
  "location": "invalidLoginWithDataDriven.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "invalidLoginWithDataDriven.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 9
    }
  ],
  "location": "invalidLoginWithDataDriven.correct_should_be_returned(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Invalid login credentials should return correct error message",
  "description": "",
  "id": "test-invalid-login-functionality;invalid-login-credentials-should-return-correct-error-message;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on the homepage and click login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Correct \"An email address required.\" should be returned",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "invalidLoginWithDataDriven.user_launches_browser()"
});
formatter.result({
  "duration": 2556352501,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d103.0.5060.114)\nBuild info: version: \u00274.1.4\u0027, revision: \u0027535d840ee2\u0027\nSystem info: host: \u0027LAPTOP-R890KMMG\u0027, ip: \u0027192.168.1.97\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.15\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9ab23a72868108136110043dbcee7e48, get {url\u003dhttp://automationpractice.com/index.php}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\omowu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60187}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60187/devtoo..., se:cdpVersion: 103.0.5060.114, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9ab23a72868108136110043dbcee7e48\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:330)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:1022)\r\n\tat StepDefinitions.invalidLoginWithDataDriven.user_launches_browser(invalidLoginWithDataDriven.java:17)\r\n\tat ✽.Given User launches browser(invalidLoginWithDataDriven.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "invalidLoginWithDataDriven.user_is_on_the_homepage_and_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "invalidLoginWithDataDriven.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "invalidLoginWithDataDriven.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 9
    }
  ],
  "location": "invalidLoginWithDataDriven.correct_should_be_returned(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("loginWithDataDriven.feature");
formatter.feature({
  "line": 1,
  "name": "Test login functionality for valid user",
  "description": "",
  "id": "test-login-functionality-for-valid-user",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify login is successful with valid credentials",
  "description": "",
  "id": "test-login-functionality-for-valid-user;verify-login-is-successful-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user is on the homepage",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should be able to navigate to the homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "test-login-functionality-for-valid-user;verify-login-is-successful-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 11,
      "id": "test-login-functionality-for-valid-user;verify-login-is-successful-with-valid-credentials;;1"
    },
    {
      "cells": [
        "summer+2022a@gmail.com",
        "testing123"
      ],
      "line": 12,
      "id": "test-login-functionality-for-valid-user;verify-login-is-successful-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Verify login is successful with valid credentials",
  "description": "",
  "id": "test-login-functionality-for-valid-user;verify-login-is-successful-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user is on the homepage",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enters \"summer+2022a@gmail.com\" and \"testing123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should be able to navigate to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "loginWithDataDriven.browser_is_launched()"
});
formatter.result({
  "duration": 2335247001,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d103.0.5060.114)\nBuild info: version: \u00274.1.4\u0027, revision: \u0027535d840ee2\u0027\nSystem info: host: \u0027LAPTOP-R890KMMG\u0027, ip: \u0027192.168.1.97\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.15\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [78c46700c22b3812b329572c7db97eab, get {url\u003dhttps://demo.nopcommerce.com/}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\omowu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60212}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60212/devtoo..., se:cdpVersion: 103.0.5060.114, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 78c46700c22b3812b329572c7db97eab\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:330)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:1022)\r\n\tat StepDefinitions.loginWithDataDriven.browser_is_launched(loginWithDataDriven.java:18)\r\n\tat ✽.Given browser is launched(loginWithDataDriven.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginWithDataDriven.user_is_on_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "summer+2022a@gmail.com",
      "offset": 13
    },
    {
      "val": "testing123",
      "offset": 42
    }
  ],
  "location": "loginWithDataDriven.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginWithDataDriven.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginWithDataDriven.user_should_be_able_to_navigate_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("registerNewUserAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Register new user account",
  "description": "",
  "id": "register-new-user-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to register new account",
  "description": "",
  "id": "register-new-user-account;user-should-be-able-to-register-new-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the nopCommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter user personal details",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter new password, confirm password and click register button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be able to register new user account successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "registerNewUserAccount.i_am_on_the_nopCommerce_homepage()"
});
formatter.result({
  "duration": 2434686400,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d103.0.5060.114)\nBuild info: version: \u00274.1.4\u0027, revision: \u0027535d840ee2\u0027\nSystem info: host: \u0027LAPTOP-R890KMMG\u0027, ip: \u0027192.168.1.97\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.15\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f244e73ab89142bf087ac69e9151e3ae, get {url\u003dhttps://demo.nopcommerce.com/}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\omowu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60235}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60235/devtoo..., se:cdpVersion: 103.0.5060.114, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f244e73ab89142bf087ac69e9151e3ae\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:330)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:1022)\r\n\tat StepDefinitions.registerNewUserAccount.i_am_on_the_nopCommerce_homepage(registerNewUserAccount.java:19)\r\n\tat ✽.Given I am on the nopCommerce homepage(registerNewUserAccount.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "registerNewUserAccount.i_click_on_the_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registerNewUserAccount.i_enter_user_personal_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registerNewUserAccount.i_enter_new_password_confirm_password_and_click_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registerNewUserAccount.i_should_be_able_to_register_new_user_account_successfully()"
});
formatter.result({
  "status": "skipped"
});
});