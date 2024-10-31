Feature: Get Orders By User

  Scenario: Retrieve orders for a valid user
    Given a valid user ID
    When the getOrdersByUser function is called
    Then the orders should be retrieved successfully

  Scenario: Retrieve orders for an invalid user
    Given an invalid user ID
    When the getOrdersByUser function is called
    Then no orders should be retrieved