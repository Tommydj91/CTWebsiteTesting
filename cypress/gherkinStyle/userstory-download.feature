Feature: userstory-download

Scenario: download whitepaper
    Given I am on the page displaying the car-hack whitepaper
    And I click the download button
    Then I should receive the file