Feature: Update Order Status

  Scenario: Successfully update order status
    Given a valid order ID and status
    When the updateOrderStatus function is called
    Then the order status should be updated successfully

  Scenario: Fail to update order status with invalid order ID
    Given an invalid order ID and a valid status
    When the updateOrderStatus function is called
    Then Could not update order status returned