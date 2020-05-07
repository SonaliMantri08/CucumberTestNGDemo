$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("execution.feature");
formatter.feature({
  "line": 1,
  "name": "Project execution",
  "description": "",
  "id": "project-execution",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successful project execution",
  "description": "",
  "id": "project-execution;successful-project-execution",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I opened the ide",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I execute project",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see logs on console",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see the report folder",
  "keyword": "And "
});
formatter.match({
  "location": "ExecutionStepDefinition.i_opened_the_ide()"
});
formatter.result({
  "duration": 83473500,
  "status": "passed"
});
formatter.match({
  "location": "ExecutionStepDefinition.i_execute_project()"
});
formatter.result({
  "duration": 36700,
  "status": "passed"
});
formatter.match({
  "location": "ExecutionStepDefinition.i_should_see_logs_on_console()"
});
formatter.result({
  "duration": 35900,
  "status": "passed"
});
formatter.match({
  "location": "ExecutionStepDefinition.i_should_see_the_report_folder()"
});
formatter.result({
  "duration": 69000,
  "status": "passed"
});
formatter.uri("signIn.feature");
formatter.feature({
  "line": 1,
  "name": "Application Sign In",
  "description": "\r\nAs a web application user\r\nI want to sign in to the application using my credentials\r\nIn order to view applied jobs",
  "id": "application-sign-in",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "User navigates to the application landing page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on application landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I am navigated to Sign in page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepDefinition.i_am_on_application_landing_page()"
});
formatter.result({
  "duration": 8291015600,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefinition.i_click_on_Sign_in_link()"
});
formatter.result({
  "duration": 3247312900,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefinition.i_am_navigated_to_Sign_in_page()"
});
formatter.result({
  "duration": 415414200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Successful sign in",
  "description": "",
  "id": "application-sign-in;successful-sign-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I fill \"john_doe1@mailinator.com\" in email address field",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I fill \"john_doe\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I unselect checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I should see user icon",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "john_doe1@mailinator.com",
      "offset": 8
    }
  ],
  "location": "SignInStepDefinition.i_fill_in_email_address_field(String)"
});
formatter.result({
  "duration": 249324800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john_doe",
      "offset": 8
    }
  ],
  "location": "SignInStepDefinition.i_fill_in_password_field(String)"
});
formatter.result({
  "duration": 100917600,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefinition.i_unselect_checkbox()"
});
formatter.result({
  "duration": 72330400,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefinition.i_click_on_the_Sign_In_button()"
});
formatter.result({
  "duration": 60970400,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefinition.i_am_on_the_Home_page()"
});
formatter.result({
  "duration": 1996873600,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefinition.i_should_see_user_icon()"
});
formatter.result({
  "duration": 56223400,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefinition.i_close_the_browser()"
});
formatter.result({
  "duration": 749561300,
  "status": "passed"
});
});