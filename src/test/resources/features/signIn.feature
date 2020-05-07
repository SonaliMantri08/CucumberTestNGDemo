Feature: Application Sign In 

	As a web application user
I want to sign in to the application using my credentials
In order to view applied jobs

Background: User navigates to the application landing page 
	Given I am on application landing page 
	When I click on Sign in link 
	Then I am navigated to Sign in page 
	
Scenario: Successful sign in 
	When I fill "john_doe1@mailinator.com" in email address field 
	And I fill "john_doe" in password field 
	And I unselect checkbox 
	And I click on the Sign In button 
	Then I am on the Home page 
	And I should see user icon 
	Then I close the browser