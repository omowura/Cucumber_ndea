Feature: Register new user account

  Scenario: User should be able to register new account
    Given I am on the nopCommerce homepage
    And I click on the register button
    And I enter user personal details
    When I enter new password, confirm password and click register button
    Then I should be able to register new user account successfully