Feature: Admin adds a new role with permissions

  Scenario: Successfully adding a new role with permissions
    Given I am on the login page to add a role
    When I log in with email "Admin@gmail.com" and password "123456" to add a role
    And I navigate to the admin manage order page to add a role
    And I click on "Role" to add a role
    And I click on "Add Role" to add a role
    And I fill in the role details
    And I select the role permissions
    And I click on "Add Role" to add a role
    Then I should see a success message indicating the role was created successfully