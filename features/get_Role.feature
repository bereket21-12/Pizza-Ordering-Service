Feature: Get Role

  Scenario: Successfully retrieve roles for a valid restaurant ID
    Given a valid restaurant ID
    When the getRole function is called
    Then the roles should be retrieved successfully

  Scenario: Fail to retrieve roles for an invalid restaurant ID
    Given an invalid restaurant ID
    When the getRole function is called
    Then no roles should be retrieved