Feature: Bootcamp E2E

Background: Background name
Given I am on the newegg main page

Scenario: Search bar
When I type Windows in the search bar
Then At least one item appears

Scenario: Internet shop logo button
When I click on the "Today's Best Deals" Tab
* I click on the Internet shop logo
Then I should see newegg main page
