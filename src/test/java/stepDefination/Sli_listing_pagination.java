package stepDefination;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;

import SetUpClass.BaseClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Sli_listing_pagination extends BaseClass {

	private WebElement page_number;
	private int product_size;
	private String pageNumber;
	private WebElement select_ppt;
	private String verify_ppt_page;

	@Given("^User is on Home Page$")
	public void user_is_on_Home_Page() throws Throwable {

		driver.get(AppURL);
		BaseClass.ClearBrowserCache();
	}

	@Then("^Enter keyword \"(.*)\" in search field$")
	public void enter_keyword_in_search_field(String Text) throws Throwable {
		try {
			WebElement search_field = wait
					.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='search']")));
			search_field.sendKeys(Text);
			Thread.sleep(3000);
		} catch (NoSuchElementException e) {

		}
	}

	@Then("^Go to the listing page$")
	public void go_to_the_listing_page() throws Throwable {

		try {
			Thread.sleep(2000);
			WebElement project_progress = wait.until(ExpectedConditions.elementToBeClickable(By.xpath(
					"//a[@data-suggested-term='project progress']//span[@class='highlight'][normalize-space()='progress']")));
			project_progress.click();
			System.out.println();
		} catch (NoSuchElementException e) {

		}
	}

	@Then("^mouse hover on any of one ppts$")
	public void mouse_hover_on_any_of_one_ppts() throws Throwable {

		try {
			select_ppt = wait.until(ExpectedConditions.elementToBeClickable(By.xpath(
					"//div[@data-direct-url='https://www.slideteam.net/board-to-track-project-progress-ppt-powerpoint-presentation-portfolio.html']")));
			Actions action = new Actions(driver);
			js.executeScript("arguments[0].scrollIntoView();", select_ppt);
			action.moveToElement(select_ppt).perform();

		} catch (NoSuchElementException e) {

		}

	}

	@Then("^verify the whether the pop-up is visible$")
	public void verify_the_whether_the_pop_up_is_visible() throws Throwable {
		try {
			Thread.sleep(3000);
			// to verify the pop-up
			String display = driver.findElement(By.xpath("//div[@id = 'imgtip216672']")).getCssValue("display");
			System.out.println("display= " + display);
			
			Assert.assertTrue("pop-up is not visible", display.equals("block"));		
		} catch (NoSuchElementException e) {

		}

	}

	@Then("^click on any of page number and verify the product below$")
	public void click_on_any_of_page_number_and_verify_the_product_below() throws Throwable {
		// click on 3rd page
		try {
			page_number = wait.until(ExpectedConditions
					.elementToBeClickable(By.xpath("//div[3]//div[1]//div[1]//div[3]//ul[1]//li[3]//a[1]")));
			pageNumber = page_number.getText();
			page_number.click();

			List<WebElement> productSize = driver.findElements(
					By.xpath("//div[@class = 'container listing-container sli_generic_container']//ul//li"));

			System.out.println("Total product on " + pageNumber + "rd page = " + productSize.size());

			product_size = productSize.size();
			Assert.assertTrue("No product is displayed", product_size > 0);
		} catch (NoSuchElementException e) {

		}

	}

	@Then("^click on any of ppt$")
	public void click_on_any_of_ppt() throws Throwable {
		try {
			Thread.sleep(3000);
			select_ppt = wait.until(ExpectedConditions.elementToBeClickable(By.xpath(
					"//div[@class = 'container listing-container sli_generic_container']//ul//li[7]")));
			js.executeScript("arguments[0].scrollIntoView();", select_ppt);
			select_ppt.click();
		} catch (NoSuchElementException e) {

		}
	}

	@Then("^verify the ppt page$")
	public void verify_the_ppt_page() throws Throwable {

		try {
			Thread.sleep(2000);
			verify_ppt_page = wait
					.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[normalize-space()='Download this presentation']")))
					.getText();
			Assert.assertTrue("user is not on corect page",
					verify_ppt_page.contains("Download this presentation"));
			Thread.sleep(2000);
		} catch (NoSuchElementException e) {

		}
	}

	@Then("^Click on signup page$")
	public void click_on_signup_page() throws Throwable {
		try {
			Thread.sleep(3000);
			WebElement sign_in = wait
					.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[normalize-space()='Sign In']")));
			//sign_in.click();
			js.executeScript("arguments[0].click();", sign_in);
		} catch (NoSuchElementException e) {

		}
	}

	@Then("^Enter username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void enter_username_and_password(String username, String password) throws Throwable {
		try {
			WebElement email = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='email']")));
			email.sendKeys(username);

			WebElement password_field = wait.until(ExpectedConditions
					.elementToBeClickable(By.xpath("//fieldset[@class='fieldset login']//input[@id='pass']")));
			password_field.sendKeys(password);

			WebElement login_btn = wait
					.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[normalize-space()='Login']")));
			login_btn.click();
			Thread.sleep(5000);
			if (!driver.findElements(By.xpath("//div[@class='login-attempt-popup']")).isEmpty()) {
				WebElement approve = wait
						.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='confirm-approve']")));
				approve.click();
				Thread.sleep(5000);
			}

		} catch (NoSuchElementException e) {

		}

	}

	@Then("^Enter keyword \"([^\"]*)\" in search fields$")
	public void enter_keyword_in_search_fields(String Text1) throws Throwable {
		try {
			WebElement search_field = wait
					.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='search']")));
			search_field.sendKeys(Text1);
			Thread.sleep(3000);
		} catch (NoSuchElementException e) {

		}
	}

	@Then("^Go to the listing pagei$")
	public void go_to_the_listing_pagei() throws Throwable {

		try {
			WebElement change_Management_training_plans = wait.until(ExpectedConditions.elementToBeClickable(By.xpath(
					"//a[@data-suggested-term='change management training plan']//span[@class='highlight'][normalize-space()='management']")));
			change_Management_training_plans.click();
			System.out.println();
		} catch (NoSuchElementException e) {

		}
	}

	@Then("^mouse hover on any of one pptsi$")
	public void mouse_hover_on_any_of_one_pptsi() throws Throwable {
		try {
			select_ppt = wait.until(ExpectedConditions.elementToBeClickable(By.xpath(
					"//div[@data-direct-url='https://www.slideteam.net/quarterly-roadmap-for-product-training-process-by-manager.html']//img[@id='zoomImg']")));
			Actions action = new Actions(driver);
			js.executeScript("arguments[0].scrollIntoView();", select_ppt);
			action.moveToElement(select_ppt).perform();

		} catch (NoSuchElementException e) {

		}

	}

	@Then("^verify the whether the pop-up is visiblei$")
	public void verify_the_whether_the_pop_up_is_visiblei() throws Throwable {
		try {
			Thread.sleep(2000);
			// to verify the pop-up
			String display = driver.findElement(By.xpath("//div[@id = 'imgtip282558']")).getCssValue("display");
			System.out.println("display= " + display);
			
			Assert.assertTrue("pop-up is not visible", display.equals("block"));		
		} catch (NoSuchElementException e) {

		}

	}

	@Then("^click on Any of page number and verify the listing pagebelowi$")
	public void click_on_Any_of_page_number_and_verify_the_listing_pagebelow() throws Throwable {
		// click on 4th page
		try {
			page_number = wait.until(ExpectedConditions
					.elementToBeClickable(By.xpath("//div[3]//div[1]//div[1]//div[3]//ul[1]//li[4]//a[1]")));
			pageNumber = page_number.getText();
			page_number.click();

			List<WebElement> productSize = driver.findElements(
					By.xpath("//div[@class = 'container listing-container sli_generic_container']//ul//li"));

			System.out.println("Total product on " + pageNumber + "th page = " + productSize.size());

			product_size = productSize.size();
			Assert.assertTrue("No product is displayed", product_size > 0);
		} catch (NoSuchElementException e) {

		}
	}

	@Then("^click on any of ppti$")
	public void click_on_any_of_ppti() throws Throwable {
		try {
			Thread.sleep(3000);
			select_ppt = wait.until(ExpectedConditions.elementToBeClickable(
					By.xpath("//div[@class = 'container listing-container sli_generic_container']//ul//li[4]")));
			js.executeScript("arguments[0].scrollIntoView();", select_ppt);
			select_ppt.click();
		} catch (NoSuchElementException e) {

		}
	}

	@Then("^verify the navigation on cottect ppt pageii$")
	public void verify_the_navigation_on_cottect_ppt_pageii() throws Throwable {
		try {
			// verify that whether the download button is visible or not?
			Thread.sleep(2000);
			verify_ppt_page = wait
					.until(ExpectedConditions
							.elementToBeClickable(By.xpath("//button[@class = 'btn btn-default get-button clicking']")))
					.getText();
			Assert.assertTrue("Download button is not visible", verify_ppt_page.contains("Download this presentation"));
			Thread.sleep(2000);
		} catch (NoSuchElementException e) {

		}
	}

	@Then("^click on Sign out button and verify the pagei$")
	public void click_on_Sign_out_button_and_verify_the_page() throws Throwable {

		try {
			Thread.sleep(2000);
			WebElement sign_Out = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("Sign Out")));
			sign_Out.click();
		} catch (NoSuchElementException e) {

		}
		try {
			String verifySignOutMessage = wait
					.until(ExpectedConditions.elementToBeClickable(By.xpath("//h3[@class='base']"))).getText();

			Assert.assertTrue("user is not logout from the application",
					verifySignOutMessage.contains("YOU ARE NOW LOGGED OUT"));
		} catch (NoSuchElementException e) {

		}
	}

}
