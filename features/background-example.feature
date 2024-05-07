Feature: Background example

    Background: 
        Given user is on sauce-demo page
        When user login using username "standard_user" and password "secret_sauce"

    Scenario: Validate empty cart
        Then user should redirect to homepage
        When user click cart button
        Then user should see empty cart

    Scenario: User buy Sauce Labs Backpack
        Then user should redirect to homepage
        And user add "Sauce Labs Backpack" to cart
        When user click cart button
        Then user should see "Sauce Labs Backpack" on cart page

    Scenario: User buy Sauce Labs Fleece Jacket
        Then user should redirect to homepage
        And user add "Sauce Labs Fleece Jacket" to cart
        When user click cart button
        Then user should see "Sauce Labs Fleece Jacket" on cart page