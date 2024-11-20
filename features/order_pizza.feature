Feature: Ordering a Pizza
  As a user, I want to log in, customize my pizza, and place an order so that I can enjoy my meal.

  Scenario: Successfully customizing and ordering a pizza
    Given I am on the pizza ordering service login page
    When I log in with email "someone@gmail.com" and password "123456"
    And I select a pizza to order
    And I choose toppings "Olives", "Bell Peppers", and "Mozzarella"
    And I adjust the quantity by decreasing once and increasing once
    Then I should see the total price as "68Birr"
    When I place the order
    Then I should see a confirmation message "Your order has been successfully completed!"
