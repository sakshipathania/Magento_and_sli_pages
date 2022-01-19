$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/SLI_pop-up_Check_with_escape_key.feature");
formatter.feature({
  "line": 2,
  "name": "SLI POP UP test",
  "description": "",
  "id": "sli-pop-up-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sli_test"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "SLI popup test with escape key",
  "description": "",
  "id": "sli-pop-up-test;sli-popup-test-with-escape-key",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Now user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter data in search field",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "press escape key",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify the pop-up",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "open Sli listing page and verify the pop-up",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter free valid username and password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "enter data in Search fields",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Press Escape key",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify the Pop-up",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "open Sli listing pages and verify the pop-up",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click on the sign out button",
  "keyword": "Then "
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.Now_user_is_on_home_page()"
});
formatter.result({
  "duration": 13870793900,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.enter_data_in_search_field()"
});
formatter.result({
  "duration": 3190231400,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.press_escape_key()"
});
formatter.result({
  "duration": 2121221400,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.verify_the_pop_up()"
});
formatter.result({
  "duration": 5064509900,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.open_Sli_listing_page_and_verify_the_pop_up()"
});
formatter.result({
  "duration": 18376025200,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.click_on_sign_in_button()"
});
formatter.result({
  "duration": 6832561200,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.enter_free_valid_username_and_password()"
});
formatter.result({
  "duration": 20195976500,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.enter_data_in_Search_fields()"
});
formatter.result({
  "duration": 6173252700,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.press_Escape_key()"
});
formatter.result({
  "duration": 3075794800,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.verify_the_Pop_up()"
});
formatter.result({
  "duration": 6139210500,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.open_Sli_listing_pages_and_verify_the_pop_up()"
});
formatter.result({
  "duration": 25447174300,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.click_on_the_sign_out_button()"
});
formatter.result({
  "duration": 39242241300,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.linkText: Sign Out (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat stepDefination.SLI_popup_check_with_escapeKey.click_on_the_sign_out_button(SLI_popup_check_with_escapeKey.java:290)\r\n\tat ✽.Then Click on the sign out button(src/test/java/features/SLI_pop-up_Check_with_escape_key.feature:16)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.linkText: Sign Out\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027SLIDEQA2\u0027, ip: \u0027192.168.1.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat stepDefination.SLI_popup_check_with_escapeKey.click_on_the_sign_out_button(SLI_popup_check_with_escapeKey.java:290)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:272)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:236)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:386)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:323)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:143)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 406325600,
  "status": "passed"
});
});