$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Datta/git/CucumberProject/CucumbercrmProProject/features/login1.feature");
formatter.feature({
  "line": 1,
  "name": "Free crm pro test login",
  "description": "",
  "id": "free-crm-pro-test-login",
  "keyword": "Feature"
});
formatter.write("before going to launch the browser set system variable path for browser");
formatter.before({
  "duration": 1917878,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Parameter testing with valid credentials (Parameterizing without Example Keyword)",
  "description": "",
  "id": "free-crm-pro-test-login;parameter-testing-with-valid-credentials-(parameterizing-without-example-keyword)",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open browser As \"Chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to url As \"https://www.crmpro.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter user name As \"Mayuri_257\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter password As \"Mayuri$257\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicked on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user shoukd be on home page \"CRMPRO\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 17
    }
  ],
  "location": "Login1StepDefinantion.open_browser_As(String)"
});
formatter.result({
  "duration": 5891832994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.crmpro.com",
      "offset": 20
    }
  ],
  "location": "Login1StepDefinantion.navigate_to_url_As(String)"
});
formatter.result({
  "duration": 10209999708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mayuri_257",
      "offset": 20
    }
  ],
  "location": "Login1StepDefinantion.enter_user_name_As(String)"
});
formatter.result({
  "duration": 162185270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mayuri$257",
      "offset": 19
    }
  ],
  "location": "Login1StepDefinantion.enter_password_As(String)"
});
formatter.result({
  "duration": 129037552,
  "status": "passed"
});
formatter.match({
  "location": "Login1StepDefinantion.clicked_on_Login_Button()"
});
formatter.result({
  "duration": 11709242363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRMPRO",
      "offset": 29
    }
  ],
  "location": "Login1StepDefinantion.user_shoukd_be_on_home_page(String)"
});
formatter.result({
  "duration": 8508683,
  "status": "passed"
});
formatter.after({
  "duration": 1459258977,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": ": Test login frm pro with valid credentials (Parameterization with Example Keyword)",
  "description": "",
  "id": "free-crm-pro-test-login;:-test-login-frm-pro-with-valid-credentials-(parameterization-with-example-keyword)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Open browser As \"\u003cbrowsername\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "navigate to url As \"\u003curl\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "enter user name As \"\u003cUserId\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "enter password As \"\u003cUserPass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "clicked on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user shoukd be on home page \"\u003cTitle\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "free-crm-pro-test-login;:-test-login-frm-pro-with-valid-credentials-(parameterization-with-example-keyword);",
  "rows": [
    {
      "cells": [
        "browsername",
        "url",
        "UserId",
        "UserPass",
        "wait",
        "Title"
      ],
      "line": 23,
      "id": "free-crm-pro-test-login;:-test-login-frm-pro-with-valid-credentials-(parameterization-with-example-keyword);;1"
    },
    {
      "cells": [
        "Chrome",
        "https://www.crmpro.com",
        "Mayuri_257",
        "Mayuri$",
        "15 seconds",
        "CRMPRO"
      ],
      "line": 24,
      "id": "free-crm-pro-test-login;:-test-login-frm-pro-with-valid-credentials-(parameterization-with-example-keyword);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.write("before going to launch the browser set system variable path for browser");
formatter.before({
  "duration": 346458,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": ": Test login frm pro with valid credentials (Parameterization with Example Keyword)",
  "description": "",
  "id": "free-crm-pro-test-login;:-test-login-frm-pro-with-valid-credentials-(parameterization-with-example-keyword);;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Open browser As \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "navigate to url As \"https://www.crmpro.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "enter user name As \"Mayuri_257\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "enter password As \"Mayuri$\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "clicked on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user shoukd be on home page \"CRMPRO\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 17
    }
  ],
  "location": "Login1StepDefinantion.open_browser_As(String)"
});
formatter.result({
  "duration": 4061248902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.crmpro.com",
      "offset": 20
    }
  ],
  "location": "Login1StepDefinantion.navigate_to_url_As(String)"
});
formatter.result({
  "duration": 5866001413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mayuri_257",
      "offset": 20
    }
  ],
  "location": "Login1StepDefinantion.enter_user_name_As(String)"
});
formatter.result({
  "duration": 143021892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mayuri$",
      "offset": 19
    }
  ],
  "location": "Login1StepDefinantion.enter_password_As(String)"
});
formatter.result({
  "duration": 114576275,
  "status": "passed"
});
formatter.match({
  "location": "Login1StepDefinantion.clicked_on_Login_Button()"
});
formatter.result({
  "duration": 4153580957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRMPRO",
      "offset": 29
    }
  ],
  "location": "Login1StepDefinantion.user_shoukd_be_on_home_page(String)"
});
formatter.result({
  "duration": 13291423,
  "status": "passed"
});
formatter.after({
  "duration": 1693070274,
  "status": "passed"
});
});