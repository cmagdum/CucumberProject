$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Datta/git/CucumberProject/CucumbercrmProProject/features/createNewAccount.feature");
formatter.feature({
  "line": 1,
  "name": "verify new account creation page is created",
  "description": "",
  "id": "verify-new-account-creation-page-is-created",
  "keyword": "Feature"
});
formatter.write("beforeMethod............");
formatter.before({
  "duration": 7205284254,
  "status": "passed"
});
formatter.before({
  "duration": 60783,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "titile of the login page is \"CRMPRO\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter username as \"Mayuri_257\" and password as \"Mayuri$257\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login butten",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "titile of the home page is \"CRMPRO\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login1StepDefinantion.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 16301091408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRMPRO",
      "offset": 29
    }
  ],
  "location": "Login1StepDefinantion.titile_of_the_login_page_is(String)"
});
formatter.write("Title of the login page is : CRMPRO - CRM software for customer relationship management, sales, and support.");
formatter.write("verified the login page title ");
formatter.result({
  "duration": 46196201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mayuri_257",
      "offset": 24
    },
    {
      "val": "Mayuri$257",
      "offset": 53
    }
  ],
  "location": "Login1StepDefinantion.user_enter_username_as_and_password_as(String,String)"
});
formatter.write("Enter valid username and valid password to the text username and password text feild..");
formatter.result({
  "duration": 338265888,
  "status": "passed"
});
formatter.match({
  "location": "Login1StepDefinantion.user_click_on_login_butten()"
});
formatter.write("Click on login btn on login page ...");
formatter.result({
  "duration": 12044369893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRMPRO",
      "offset": 28
    }
  ],
  "location": "Login1StepDefinantion.titile_of_the_home_page_is(String)"
});
formatter.write("User should be on home page with title as :CRMPRO");
formatter.write("Title of the home page is : CRMPRO");
formatter.write("Title of the homepage is verified ......");
formatter.result({
  "duration": 15378743,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "verify new account creation",
  "description": "",
  "id": "verify-new-account-creation-page-is-created;verify-new-account-creation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user should be on home page \"CRMPRO\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "verify user name as \"Mayuri Deshmukh\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "navigate to new contact page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "enter firstname as \"Gaurav\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "enetr lastname as \"Pate\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "enter company name as \"U to Solutions\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on save button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CRMPRO",
      "offset": 29
    }
  ],
  "location": "NewAccountStepDef.user_should_be_on_home_page(String)"
});
formatter.result({
  "duration": 7996525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mayuri Deshmukh",
      "offset": 21
    }
  ],
  "location": "NewAccountStepDef.verify_user_name_as(String)"
});
formatter.write("verify username contains :Mayuri Deshmukh");
formatter.write("actualUname username from appli :  User: Mayuri Deshmukh");
formatter.result({
  "duration": 343636615,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDef.navigate_to_new_contact_page()"
});
formatter.write("navigating to new contact page...");
formatter.write("navigated to new contact page...");
formatter.result({
  "duration": 3026353602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gaurav",
      "offset": 20
    }
  ],
  "location": "NewAccountStepDef.enter_firstname_as(String)"
});
formatter.result({
  "duration": 275821757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pate",
      "offset": 19
    }
  ],
  "location": "NewAccountStepDef.enetr_lastname_as(String)"
});
formatter.result({
  "duration": 139838692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "U to Solutions",
      "offset": 23
    }
  ],
  "location": "NewAccountStepDef.enter_company_name_as(String)"
});
formatter.result({
  "duration": 251810300,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDef.click_on_save_button()"
});
formatter.result({
  "duration": 2801513643,
  "status": "passed"
});
formatter.after({
  "duration": 1270721308,
  "status": "passed"
});
});