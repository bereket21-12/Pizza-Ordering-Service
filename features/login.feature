Feature: Login

  Scenario: User successfully logs in with valid credentials
    Given I am on the login page
    When I enter a valid email and password
    And I click on the login button
    Then I should be redirected to the dashboard
    And I should see a welcome message

  Scenario: User fails to log in with invalid credentials
    Given I am on the login page
    When I enter an invalid email or password
    And I click on the login button
    Then I should see an error message indicating invalid login

  Scenario: User tries to log in with empty email or password
    Given I am on the login page
    When I leave the email or password field empty
    And I click on the login button
    Then I should see an error message prompting me to fill in all fields
