Feature: Test login functionality

  Scenario: User should be able to login with valid credentials successfully
    Given I am on the nopCommerce webpage
    And I click on login button
    When I enter user email
    And I enter user password
    And I click on the login
    Then I should be able to login successfully