Feature: Admin adds a new pizza to the menu

    Scenario: Successfully adding a new pizza to the menu
        Given I am on the login page to add pizza
        When I log in with email "Admin@gmail.com" and password "123456" to add pizza
        And I navigate to the admin manage order page to add a pizza
        And I click on "Add Menu" to add a pizza
        And I fill in the pizza details
        And I upload the pizza image
        And I click on the "Submit" button to add the pizza
        Then I should see a success message indicating the menu was added successfully