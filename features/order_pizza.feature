Feature: Handle Order Form

  Scenario: Successful order creation
    Given a form with valid order data
    When the handleOrderForm function is called
    Then the order should be created successfully

  Scenario: Missing required fields
    Given a form with missing required fields
    When the handleOrderForm function is called
    Then an error message should be returned

  Scenario: Invalid toppings data
    Given a form with invalid toppings data
    When the handleOrderForm function is called
    Then an error message should be returned