Feature: Test login functionality for valid user

  Scenario Outline: Verify login is successful with valid credentials
    Given browser is launched
    And user is on the homepage
    When user enters "<email>" and "<password>"
    And user clicks on the login button
    Then user should be able to navigate to the homepage

    Examples:
      | email                    | password   |
      | summer+2022a@gmail.com   | testing123 |

