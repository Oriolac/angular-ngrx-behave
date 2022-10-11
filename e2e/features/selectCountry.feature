Feature: Select a country from the selector
  As a visitant, I want to select a country from the selector so that I can be able to submit.

  Scenario: Selecting a country
    Given I am at Main Page
    When I select a country
    Then Submit button is enabled

  Scenario: Selecting a country
    Given I am at Main Page
    When I select a country
    And I clicked submit button
    Then Submit button is enabled
    And Statistics are shown
