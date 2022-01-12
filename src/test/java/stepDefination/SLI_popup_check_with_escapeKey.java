package stepDefination;

import static org.junit.Assert.assertTrue;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import SetUpClass.BaseClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class SLI_popup_check_with_escapeKey extends BaseClass {

	boolean pop_up_Value;

	@Given("Now user is on Home Page")
	public void Now_user_is_on_home_page() throws Throwable {

		log.info("It's opening the website URL");
		Thread.sleep(2000);
		driver.get(AppURL);
		BaseClass.ClearBrowserCache();
	}

	@Then("Enter data in search field")
	public void enter_data_in_search_field() throws Throwable {

		try {
			WebElement search_field = wait
					.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='search']")));
			search_field.sendKeys("HR");
			Thread.sleep(3000);
		} catch (NoSuchElementException e) {

		}
	}

	@Then("press escape key")
	public void press_escape_key() throws Throwable {

		try {

			pop_up_Value = wait
					.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//ul[@id='sli_autocomplete']")))
					.isDisplayed();
			if (pop_up_Value == true) {

				System.out.println("pop-up is displayed  " + pop_up_Value);

				Robot robot = new Robot();
				robot.keyPress(KeyEvent.VK_ESCAPE);
				robot.keyRelease(KeyEvent.VK_ESCAPE);
				Thread.sleep(2000);
				robot.keyPress(KeyEvent.VK_ESCAPE);
				robot.keyRelease(KeyEvent.VK_ESCAPE);
				Thread.sleep(1000);
			} else {

				System.out.println("pop-up is not displayed  " + pop_up_Value);
				assertTrue(pop_up_Value == false);
			}
		} catch (AWTException e) {
		}
	}

	@Then("verify the pop-up")
	public void verify_the_pop_up() throws Throwable {
		try {
			Thread.sleep(2000);
			pop_up_Value = wait
					.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//ul[@id='sli_autocomplete']")))
					.isDisplayed();
			System.out.println("pop-up is displayed  " + pop_up_Value);
			assertTrue(pop_up_Value == false);
			boolean img_value = driver.findElement(By.xpath("//div[@class='banner-slides-img']//img[@alt='Banner']"))
					.isDisplayed();
			System.out.println("images are displayed=  " + img_value);
			assertTrue(img_value == true);
			Thread.sleep(2000);
		} catch (NoSuchElementException e) {

		}

	}

	@Then("Click on Sign in button")
	public void click_on_sign_in_button() throws Throwable {
		try {
			driver.navigate().refresh();
			WebElement sign_In = wait
					.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[normalize-space()='Sign In']")));
			sign_In.click();
			Thread.sleep(2000);
		} catch (NoSuchElementException e) {

		}
	}

	@Then("Enter free valid username and password")
	public void enter_free_valid_username_and_password() {
		try {
			WebElement email = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='email']")));
			email.sendKeys("nishadhiman0027@gmail.com");
			WebElement password = wait.until(ExpectedConditions
					.elementToBeClickable(By.xpath("//fieldset[@class='fieldset login']//input[@id='pass']")));
			password.sendKeys("Qwerty@1");
			WebElement login_btn = wait
					.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[normalize-space()='Login']")));
			login_btn.click();
		} catch (NoSuchElementException e) {

		}
	}

	@Then("enter data in Search fields")
	public void enter_data_in_Search_fields() throws Throwable {
		try {
			Thread.sleep(3000);
			WebElement search_field = wait
					.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='search']")));
			search_field.sendKeys("Management");
			Thread.sleep(3000);
		} catch (InterruptedException e) {

		}
	}

	@Then("Press Escape key")
	public void press_Escape_key() throws Throwable {
		try {

			pop_up_Value = wait
					.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//ul[@id='sli_autocomplete']")))
					.isDisplayed();
			if (pop_up_Value == true) {

				System.out.println("pop-up is displayed  " + pop_up_Value);

				Robot robot = new Robot();
				robot.keyPress(KeyEvent.VK_ESCAPE);
				robot.keyRelease(KeyEvent.VK_ESCAPE);
				Thread.sleep(2000);
				robot.keyPress(KeyEvent.VK_ESCAPE);
				robot.keyRelease(KeyEvent.VK_ESCAPE);
				Thread.sleep(1000);
			} else {

				System.out.println("pop-up is not displayed  " + pop_up_Value);
				assertTrue(pop_up_Value == false);
			}
		} catch (AWTException e) {
		}
	}

	@Then("verify the Pop-up")
	public void verify_the_Pop_up() throws Throwable {
		try {
			Thread.sleep(2000);
			pop_up_Value = wait
					.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//ul[@id='sli_autocomplete']")))
					.isDisplayed();
			System.out.println("pop-up is displayed  " + pop_up_Value);
			assertTrue(pop_up_Value == false);

			WebElement search_field = wait
					.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='search']")));
			search_field.clear();
			Thread.sleep(3000);

			// click on sign out button
			WebElement sign_Out = wait
					.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[normalize-space()='Sign Out']")));
			js.executeScript("arguments[0].click();", sign_Out);
			Thread.sleep(3000);

			// verify the message after sign out
			String verification_Message = wait
					.until(ExpectedConditions.elementToBeClickable(By.xpath("//h3[@class='base']"))).getText();

			System.out.println("verification_Message = " + verification_Message);
			Assert.assertTrue("user is not sign out from apploication",
					verification_Message.contains("YOU ARE NOW LOGGED OUT"));
		} catch (NoSuchElementException e) {

		}
	}

}
