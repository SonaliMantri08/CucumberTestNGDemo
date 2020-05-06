package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import testBase.TestBase;

public class HomePage extends TestBase {

	public static WebDriverWait wait;

	/********** Initializing Page Objects **********/

	public HomePage() {
		PageFactory.initElements(driver, this);
	}

	/********** PageFactory or Object Repository **********/
	@FindBy(css = "div[aria-label='Toggle menu']")
	WebElement userIcon;

	/********************** Actions ***********************/

	public String validateTitle() {
		return driver.getTitle();
	}

	public void user_Is_On_Home_Page() {
		wait = new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div[aria-label='Toggle menu']")));
		Assert.assertEquals("Job Search | Indeed", new HomePage().validateTitle());
	}

	public void viewUserIcon() {
		Assert.assertTrue(userIcon.isDisplayed());
	}

}
