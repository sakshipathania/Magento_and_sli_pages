@Free_Magento_pages_test
Feature: pagination & Mouse Hovers on Free Magento pages



@without_Login
  Scenario: pagination & Mouse Hovers on Free Magento pages test without log in
  Given User is on Home Pagei
  Then click on Free PPts under Free Stuff 
  Then mouse hover on any of one free ppt and verify the pop-up 
  Then click on any of page number and verify the listing page for free ppts
  Then click on any of one ppt under free ppts 
  Then verify the navigation on correct ppt page 
  Then click on Free Business PPTs under Free stuff
  Then mouse hover on any of one ppt and verify the pop-up
  Then click on any of page numberi
  Then click on any of one ppts 
  Then verify the navigation on cottect ppt page 
 
  
  
@With_login
Scenario: pagination & Mouse Hovers on Free Magento pages test with log in
  Then Click on signin page
  Then Enter username "nishadhiman0027@gmail.com" and passwordi "Qwerty@1"
  Then Click on Free Ppts under Free Stuff 
  Then Mouse Hover on any of one free ppt and verify the pop-up 
  Then Click on any of page number and verify the listing page for free ppts
  Then Click on any of one ppt under free ppts 
  Then Verify the navigation on correct ppt page 
  Then Click on Free Business PPTs under Free stuff
  Then Mouse hover on any of one ppt and verify the pop-up
  Then Click on any of page numberii
  Then Click on any of one ppts 
  Then Verify the navigation on cottect ppt pageii 

  