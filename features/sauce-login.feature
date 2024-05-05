Feature: Sauce demo login test

    Scenario: User login successfully
        Given user is on sauce-demo page
        When user input username with "standard_user"
        When user input password with "secret_sauce"
        When user click button
        Then user should redirect to hompage
    Scenario: User add cart button
        When user click add to cart button
        Then user click cart button
