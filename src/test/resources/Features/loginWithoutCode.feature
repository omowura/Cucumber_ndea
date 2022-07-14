Feature: Test login functionality

  Scenario: User should be able to login with valid credentials
    Given Users are on the homepage
    And Users click on login
    When Users enter valid email
    And Users enter valid password
    And Users click on the login button
    Then Users should be able to login successfully