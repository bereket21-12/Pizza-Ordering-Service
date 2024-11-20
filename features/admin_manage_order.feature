Feature: Admin manages order status
  As an admin, I want to log in and change the status of orders to manage their lifecycle effectively.

  Scenario: Successfully logging in and changing an order's status
    Given I am on the login page to manage orders
    When I log in with email "Admin@gmail.com" and password "123456" to manage orders
    And I change the order status to "pending"
    Then I should see the order status updated to "DELIVERED"
