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
  "duration": 70737900,
  "status": "passed"
});
formatter.match({
  "location": "ExecutionStepDefinition.i_execute_project()"
});
formatter.result({
  "duration": 34500,
  "status": "passed"
});
formatter.match({
  "location": "ExecutionStepDefinition.i_should_see_logs_on_console()"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.match({
  "location": "ExecutionStepDefinition.i_should_see_the_report_folder()"
});
formatter.result({
  "duration": 41200,
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
  "duration": 7152817200,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefinition.i_click_on_Sign_in_link()"
});
formatter.result({
  "duration": 2743215900,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefinition.i_am_navigated_to_Sign_in_page()"
});
formatter.result({
  "duration": 287611800,
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
  "duration": 648909800,
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
  "duration": 87333600,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefinition.i_unselect_checkbox()"
});
formatter.result({
  "duration": 80387600,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefinition.i_click_on_the_Sign_In_button()"
});
formatter.result({
  "duration": 68786000,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefinition.i_am_on_the_Home_page()"
});
formatter.result({
  "duration": 5137098400,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.cssSelector: div[aria-label\u003d\u0027Toggle menu\u0027] (tried for 5 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat pages.HomePage.user_Is_On_Home_Page(HomePage.java:35)\r\n\tat stepDefinitions.SignInStepDefinition.i_am_on_the_Home_page(SignInStepDefinition.java:69)\r\n\tat ✽.Then I am on the Home page(signIn.feature:17)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"div[aria-label\u003d\u0027Toggle menu\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7965B6N\u0027, ip: \u002710.0.0.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: C:\\Users\\AnkSonali\\AppData\\...}, goog:chromeOptions: {debuggerAddress: localhost:58332}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 21b1950d187a8322369f8a48179a54bb\n*** Element info: {Using\u003dcss selector, value\u003ddiv[aria-label\u003d\u0027Toggle menu\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pages.HomePage.user_Is_On_Home_Page(HomePage.java:35)\r\n\tat stepDefinitions.SignInStepDefinition.i_am_on_the_Home_page(SignInStepDefinition.java:69)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat runner.TestRunner.feature(TestRunner.java:34)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:354)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:312)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:261)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1191)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1116)\r\n\tat org.testng.TestNG.run(TestNG.java:1024)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:178)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:92)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:96)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray2(ReflectionUtils.java:208)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:159)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:87)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:153)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:95)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignInStepDefinition.i_should_see_user_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInStepDefinition.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});