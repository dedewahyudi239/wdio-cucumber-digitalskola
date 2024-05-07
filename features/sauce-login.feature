@sauce
Feature: Sauce demo login test

    @login @v1
    Scenario: User login successfully
        Given user is on sauce-demo page
        When user input username with "standard_user"
        When user input password with "secret_sauce"
        When user click button
        Then user should redirect to hompage
    @login @v2
    Scenario: User login successfully - v2
        Given user is on sauce-demo page
        When user login using username "standard_user" and password "secret_sauce"
        Then user should redirect to hompage