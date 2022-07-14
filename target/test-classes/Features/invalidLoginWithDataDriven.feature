Feature: Test invalid login functionality

  Scenario Outline: Invalid login credentials should return correct error message
    Given User launches browser
    And User is on the homepage and click login button
    When User enters "<email>" and "<password>"
    And User clicks on the login button
    Then Correct "<errormessage>" should be returned

    Examples:
      | email            | password | errormessage               |
      | iwa@gmail.com    | testing  | Authentication failed.     |
      | iwa+55@gmail.com | test     | Invalid password.          |
      |                  | testing  | An email address required. |
      | iwa+55@gmail.com |          | Password is required.      |
      |                  |          | An email address required. |
