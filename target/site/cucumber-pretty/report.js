$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Free_magento_pages.feature");
formatter.feature({
  "line": 2,
  "name": "pagination \u0026 Mouse Hovers on Free Magento pages",
  "description": "",
  "id": "pagination-\u0026-mouse-hovers-on-free-magento-pages",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Free_Magento_pages_test"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "pagination \u0026 Mouse Hovers on Free Magento pages test without log in",
  "description": "",
  "id": "pagination-\u0026-mouse-hovers-on-free-magento-pages;pagination-\u0026-mouse-hovers-on-free-magento-pages-test-without-log-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@without_Login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Home Pagei",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "click on Free PPts under Free Stuff",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "mouse hover on any of one free ppt and verify the pop-up",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on any of page number and verify the listing page for free ppts",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on any of one ppt under free ppts",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verify the navigation on correct ppt page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click on Free Business PPTs under Free stuff",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "mouse hover on any of one ppt and verify the pop-up",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "click on any of page numberi",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "click on any of one ppts",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "verify the navigation on cottect ppt page",
  "keyword": "Then "
});
formatter.match({
  "location": "Free_Magento_pages.user_is_on_Home_Pagei()"
});
formatter.result({
  "duration": 11941845400,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.click_on_Free_PPts_under_Free_Stuff()"
});
formatter.result({
  "duration": 41517030900,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 30.000\n  (Session info: chrome\u003d97.0.4692.71)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027SLIDEQA2\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\SLIDEQ~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:55498}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ad6bc903d9425f5c976dacc919422106\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:638)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:594)\r\n\tat stepDefination.Free_Magento_pages.click_on_Free_PPts_under_Free_Stuff(Free_Magento_pages.java:42)\r\n\tat ✽.Then click on Free PPts under Free Stuff(src/test/java/features/Free_magento_pages.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Free_Magento_pages.mouse_hover_on_any_of_one_free_ppt_and_verify_the_pop_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Free_Magento_pages.click_on_any_of_page_number_and_verify_the_listing_page_for_free_ppts()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Free_Magento_pages.click_on_any_of_one_ppt_under_free_ppts()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Free_Magento_pages.verify_the_navigation_on_correct_ppt_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Free_Magento_pages.click_on_Free_Business_PPTs_under_Free_stuff()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Free_Magento_pages.mouse_hover_on_any_of_one_ppt_and_verify_the_pop_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Free_Magento_pages.click_on_any_of_page_numberi()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Free_Magento_pages.click_on_any_of_one_ppts()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Free_Magento_pages.verify_the_navigation_on_cottect_ppt_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 420522400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "pagination \u0026 Mouse Hovers on Free Magento pages test with log in",
  "description": "",
  "id": "pagination-\u0026-mouse-hovers-on-free-magento-pages;pagination-\u0026-mouse-hovers-on-free-magento-pages-test-with-log-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@With_login"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Click on signin page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Enter username \"nishadhiman0027@gmail.com\" and passwordi \"Qwerty@1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click on Free Ppts under Free Stuff",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Mouse Hover on any of one free ppt and verify the pop-up",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click on any of page number and verify the listing page for free ppts",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Click on any of one ppt under free ppts",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Verify the navigation on correct ppt page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Click on Free Business PPTs under Free stuff",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Mouse hover on any of one ppt and verify the pop-up",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Click on any of page numberii",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Click on any of one ppts",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Verify the navigation on cottect ppt pageii",
  "keyword": "Then "
});
formatter.match({
  "location": "Free_Magento_pages.click_on_signin_page()"
});
formatter.result({
  "duration": 7186044000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nishadhiman0027@gmail.com",
      "offset": 16
    },
    {
      "val": "Qwerty@1",
      "offset": 58
    }
  ],
  "location": "Free_Magento_pages.enter_username_and_passwordi(String,String)"
});
formatter.result({
  "duration": 14872126000,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.click_on_Free_Ppts_under_Free_Stuff()"
});
formatter.result({
  "duration": 7103361800,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.mouse_Hover_on_any_of_one_free_ppt_and_verify_the_pop_up()"
});
formatter.result({
  "duration": 3477155600,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.Click_on_any_of_page_number_and_verify_the_listing_page_for_free_ppts()"
});
formatter.result({
  "duration": 6218098900,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.Click_on_any_of_one_ppt_under_free_ppts()"
});
formatter.result({
  "duration": 8829024400,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.Verify_the_navigation_on_correct_ppt_page()"
});
formatter.result({
  "duration": 3083821100,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.Click_on_Free_Business_PPTs_under_Free_stuff()"
});
formatter.result({
  "duration": 10507713500,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.Mouse_hover_on_any_of_one_ppt_and_verify_the_pop_up()"
});
formatter.result({
  "duration": 3345173200,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.click_on_any_of_page_numberii()"
});
formatter.result({
  "duration": 6946902200,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.Click_on_any_of_one_ppts()"
});
formatter.result({
  "duration": 8155504600,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.verify_the_navigation_on_cottect_ppt_pageii()"
});
formatter.result({
  "duration": 13204033000,
  "status": "passed"
});
formatter.after({
  "duration": 22700,
  "status": "passed"
});
formatter.uri("src/test/java/features/Paid_Manento_pages.feature");
formatter.feature({
  "line": 2,
  "name": "pagination \u0026 Mouse Hovers on Magento pages",
  "description": "",
  "id": "pagination-\u0026-mouse-hovers-on-magento-pages",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Paid_Magento_pages_test"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "pagination \u0026 Mouse Hovers on Magento pages test without log in",
  "description": "",
  "id": "pagination-\u0026-mouse-hovers-on-magento-pages;pagination-\u0026-mouse-hovers-on-magento-pages-test-without-log-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@without_Login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Home Pageii",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "click on popular ppts",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "mouse hover on any of one ppt",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify the displayed pop-up is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on Any of page number and verify the popular ppts",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on any of one Ppt",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify the user will navigation on cottect ppt page",
  "keyword": "Then "
});
formatter.match({
  "location": "Paid_magento_pages.user_is_on_Home_Pageii()"
});
formatter.result({
  "duration": 33377287900,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.click_on_popular_ppts()"
});
formatter.result({
  "duration": 4874505800,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.mouse_hover_on_any_of_one_ppt()"
});
formatter.result({
  "duration": 205509600,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.verify_the_displayed_pop_up_is_visible()"
});
formatter.result({
  "duration": 3051588700,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.click_on_Any_of_page_number_and_verify_the_popular_ppts()"
});
formatter.result({
  "duration": 6199702100,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.click_on_any_of_one_Ppt()"
});
formatter.result({
  "duration": 5490896800,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.verify_the_user_will_navigation_on_cottect_ppt_page()"
});
formatter.result({
  "duration": 5082207100,
  "status": "passed"
});
formatter.after({
  "duration": 25200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "pagination \u0026 Mouse Hovers on Magento pages test with log in",
  "description": "",
  "id": "pagination-\u0026-mouse-hovers-on-magento-pages;pagination-\u0026-mouse-hovers-on-magento-pages-test-with-log-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@With_login"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Click on signin pageii",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Enter username \"nishadhiman0027@gmail.com\" and passwordii \"Qwerty@1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on popular ppts",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Mouse hover on any of one ppt",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Verify the displayed pop-up is visibleii",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on any of page number",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Click on any of ppt",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Verify the navigation on cottect ppt page",
  "keyword": "Then "
});
formatter.match({
  "location": "Paid_magento_pages.click_on_signin_pageii()"
});
formatter.result({
  "duration": 3930373600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nishadhiman0027@gmail.com",
      "offset": 16
    },
    {
      "val": "Qwerty@1",
      "offset": 59
    }
  ],
  "location": "Paid_magento_pages.enter_username_and_passwordii(String,String)"
});
formatter.result({
  "duration": 5723939600,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.Click_on_popular_ppts()"
});
formatter.result({
  "duration": 5461365400,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.Mouse_hover_on_any_of_one_ppt()"
});
formatter.result({
  "duration": 531995200,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.verify_the_displayed_pop_up_is_visibleii()"
});
formatter.result({
  "duration": 3042119100,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.click_on_any_of_page_number()"
});
formatter.result({
  "duration": 4136012700,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.click_on_any_of_ppt()"
});
formatter.result({
  "duration": 6270060300,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.verify_the_navigation_on_cottect_ppt_page()"
});
formatter.result({
  "duration": 9662817700,
  "status": "passed"
});
formatter.after({
  "duration": 23100,
  "status": "passed"
});
formatter.uri("src/test/java/features/SLI_pop-up_Check_with_escape_key.feature");
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
  "name": "Click on Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter free valid username and password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "enter data in Search fields",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Press Escape key",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verify the Pop-up",
  "keyword": "Then "
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.Now_user_is_on_home_page()"
});
formatter.result({
  "duration": 12549117400,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.enter_data_in_search_field()"
});
formatter.result({
  "duration": 3113440600,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.press_escape_key()"
});
formatter.result({
  "duration": 3092522500,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.verify_the_pop_up()"
});
formatter.result({
  "duration": 2050060600,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefination.SLI_popup_check_with_escapeKey.verify_the_pop_up(SLI_popup_check_with_escapeKey.java:81)\r\n\tat ✽.Then verify the pop-up(src/test/java/features/SLI_pop-up_Check_with_escape_key.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.click_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.enter_free_valid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.enter_data_in_Search_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.press_Escape_key()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.verify_the_Pop_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 264592400,
  "status": "passed"
});
formatter.uri("src/test/java/features/sli_listing_page.feature");
formatter.feature({
  "line": 2,
  "name": "SLI POP UP test",
  "description": "",
  "id": "sli-pop-up-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sli_pagination_test"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "SLI pagination \u0026 Mouse Hover test without log in",
  "description": "",
  "id": "sli-pop-up-test;sli-pagination-\u0026-mouse-hover-test-without-log-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@without_Login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Enter keyword \"Progress\" in search field",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Go to the listing page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "mouse hover on any of one ppts",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "verify the whether the pop-up is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on any of page number and verify the product below",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click on any of ppt",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "verify the ppt page",
  "keyword": "Then "
});
formatter.match({
  "location": "Sli_listing_pagination.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 14329461700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Progress",
      "offset": 15
    }
  ],
  "location": "Sli_listing_pagination.enter_keyword_in_search_field(String)"
});
formatter.result({
  "duration": 3095438300,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.go_to_the_listing_page()"
});
formatter.result({
  "duration": 94277100,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.mouse_hover_on_any_of_one_ppts()"
});
formatter.result({
  "duration": 12482025200,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.verify_the_whether_the_pop_up_is_visible()"
});
formatter.result({
  "duration": 3039444000,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.click_on_any_of_page_number_and_verify_the_product_below()"
});
formatter.result({
  "duration": 797376300,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.click_on_any_of_ppt()"
});
formatter.result({
  "duration": 5435810600,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.verify_the_ppt_page()"
});
formatter.result({
  "duration": 4091506300,
  "status": "passed"
});
formatter.after({
  "duration": 42600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "SLI pagination \u0026 mouse Hover test with login",
  "description": "",
  "id": "sli-pop-up-test;sli-pagination-\u0026-mouse-hover-test-with-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@With_login"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Click on signup page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Enter username \"nishadhiman0027@gmail.com\" and password \"Qwerty@1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Enter keyword \"Management\" in search fields",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Go to the listing pagei",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "mouse hover on any of one pptsi",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "verify the whether the pop-up is visiblei",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "click on Any of page number and verify the listing pagebelowi",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on any of ppti",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "verify the navigation on cottect ppt pageii",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Sign out button and verify the pagei",
  "keyword": "Then "
});
formatter.match({
  "location": "Sli_listing_pagination.click_on_signup_page()"
});
