package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ExecutionStepDefinition {
	
	@Given("^I opened the ide$")
	public void i_opened_the_ide()  {
	   System.out.println("I opened the ide");
	    
	}

	@When("^I execute project$")
	public void i_execute_project()  {
	   System.out.println("I execute project");
	    
	}

	@Then("^I should see logs on console$")
	public void i_should_see_logs_on_console()  {
	   System.out.println("I should see logs on console");
	    
	}

	@Then("^I should see the report folder$")
	public void i_should_see_the_report_folder()  {
	   System.out.println("I should see the report folder");
	    
	}
}
