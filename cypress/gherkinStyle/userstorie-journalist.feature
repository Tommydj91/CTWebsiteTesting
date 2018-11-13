Feature: journalist

  Scenario Outline: On newsPage
    Given I am on the Computest newspage
    When I search for "<keyword>"
      And I navigate to the related topic containing "<keyword>"
    Then I can see the "<keyword>" on the news items page

 Examples:
 |keyword   |
 |Openrunner|
 |Award     |
 |Museum    |




