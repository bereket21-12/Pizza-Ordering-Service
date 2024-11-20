Feature: User Registration
  As a new user, I want to register for the pizza ordering service so that I can place orders online.

  Scenario: Successful registration with valid details
    Given I am on the pizza order home page
    When I click on the "Register" button to submit the registration form
    And I select "Register Self"
    And I fill in "Full Name" with "somebody"
    And I fill in "Email Address" with "some4@gmail.com"
    And I fill in "Password" with "123456"
    And I fill in "Confirm Password" with "123456"
    And I fill in "Location" with "Addis Ababa"
    And I fill in "Phone Number" with "1234567890"
    And I check "I accept terms and conditions"
    And I click on the "Sign Up" button to submit the registration form
    Then I should go to login page

  Scenario: Registration with an existing email
    Given I am on the pizza order home page
    When I click on the "Register" button to submit the registration form
    And I select "Register Self"
    And I fill in the registration form with an existing email
    Then I should see an error message indicating the email already exists
