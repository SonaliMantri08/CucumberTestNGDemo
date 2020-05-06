package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;
import pages.LandingPage;
import pages.SignInPage;
import testBase.TestBase;

public class SignInStepDefinition extends TestBase {

	LandingPage landingPage;
	SignInPage signInPage;
	HomePage homePage;

	@Given("^I am on application landing page$")
	public void i_am_on_application_landing_page() {
		TestBase.initialization();
		System.out.println("I am on application landing page");

	}

	@When("^I click on Sign in link$")
	public void i_click_on_Sign_in_link() {
		landingPage=new LandingPage();
		signInPage = landingPage.click_SignIn();
		System.out.println("I click on Sign in link");

	}

	@Then("^I am navigated to Sign in page$")
	public void i_am_navigated_to_Sign_in_page() {
		signInPage.validatePage();
		System.out.println("I am successfully navigated to Sign in page");

	}

	@When("^I fill \"([^\"]*)\" in email address field$")
	public void i_fill_in_email_address_field(String arg1) {
		signInPage.enter_Email(arg1);
		System.out.println("I filled the email id");

	}

	@When("^I fill \"([^\"]*)\" in password field$")
	public void i_fill_in_password_field(String arg1) {
		signInPage.enter_Password(arg1);
		System.out.println("I filled the password");

	}

	@When("^I unselect checkbox$")
	public void i_unselect_checkbox() {
		signInPage.unselect_stay_signed_in_checkbox();
		System.out.println("I unselect the checkbox");

	}

	@When("^I click on the Sign In button$")
	public void i_click_on_the_Sign_In_button() {
		homePage = signInPage.click_SignIn_Button();
		System.out.println("I click the Sign In button");

	}

	@Then("^I am on the Home page$")
	public void i_am_on_the_Home_page() {
		homePage.user_Is_On_Home_Page();
		System.out.println("I am on the Home page");

	}

	@Then("^I should see user icon$")
	public void i_should_see_user_icon() {
		homePage.viewUserIcon();
		System.out.println("I see the user icon");

	}

	@Then("^I close the browser$")
	public void i_close_the_browser() {
		TestBase.closeBrowser();
		System.out.println("I close the browser");

	}

}
