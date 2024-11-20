Feature: Admin updates role status

    Scenario: Admin updates the status of a role
        Given I am logged in as an admin with email "Admin@gmail.com" and password "123456" to update role status
        When I navigate to the admin manage order page to update role status
        And I click on "Role" to update role status
        And I uncheck the checkbox for the role "role"
        Then I should see a success message indicating the role status was updated successfully