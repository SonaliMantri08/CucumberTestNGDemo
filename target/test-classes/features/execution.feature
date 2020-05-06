Feature: Project execution

Scenario: Successful project execution

Given I opened the ide
When I execute project
Then I should see logs on console
And I should see the report folder