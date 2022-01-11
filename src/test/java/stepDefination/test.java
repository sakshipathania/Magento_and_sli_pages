package stepDefination;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;


public class test {
	static WebDriver driver;
	public static JavascriptExecutor js;
	public static WebDriverWait wait;
	public static void main(String[] args) throws InterruptedException {
		WebDriverManager.chromedriver().setup();
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--disable-notifications");

		// options.setExperimentalOption("useAutomationExtension", false);
		// options.setExperimentalOption("excludeSwitches",
		// Collections.singletonList("enable-automation"));

		options.addArguments("--incognito"); // DesiredCapabilities object
		DesiredCapabilities c = DesiredCapabilities.chrome(); // set capability to
		c.setCapability(ChromeOptions.CAPABILITY, options);

		driver = new ChromeDriver(options);

		driver.manage().window().maximize();

		driver.get("https://www.slideteam.net/professional-powerpoint-templates?p=2");
		driver.manage().timeouts().implicitlyWait(9000, TimeUnit.MILLISECONDS);
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		js = (JavascriptExecutor) driver;
		wait = new WebDriverWait(driver, 30);
		Thread.sleep(5000);
		
		try {
			WebElement ppt = wait.until(ExpectedConditions.elementToBeClickable(
					By.xpath("//img[@title='Project Management Powerpoint Presentation Slides']")));
			Actions action = new Actions(driver);
			js.executeScript("arguments[0].scrollIntoView();", ppt);
			action.moveToElement(ppt).perform();
			
		} catch (NoSuchElementException e) {

		}
		Thread.sleep(3000);
		String display = driver.findElement(By.xpath("//div[@id = 'imgtip141843']")).getCssValue("display");
		
		Assert.assertTrue("pop-up is not visible", display.equals("block"));
		
		System.out.println("display= " + display);
	}

}
