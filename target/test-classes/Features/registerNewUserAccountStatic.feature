@ignore

Feature: Create new user account

  Scenario: User should be able to create account
    Given I am on the nopCommerce landing page
    And I click on the register element
    And I enter user registration details
    When I enter new password, I confirm password and click register button
    Then User should be able to register new user account successfully