const { Given, When, Then } = require("@wdio/cucumber-framework");

const SauceLoginPage = require("../pageobjects/sauce-login.page");
const DashboardPage = require("../pageobjects/sauce-dashboard.page");

Given("user is on sauce-demo page", async () => {
  await SauceLoginPage.open();
});

When(/^user input username with "(.*)"$/, async (username) => {
  await SauceLoginPage.inputUsername(username);
});

When(/^user input password with "(.*)"$/, async (password) => {
  await SauceLoginPage.inputPassword(password);
});

When(/^user click button$/, async () => {
  await SauceLoginPage.clickLoginButton();
});

Then(/^user should redirect to hompage$/, async () => {
  await DashboardPage.validateOnPage();
});

Then(
  /^user login using username "(.*)" and password "(.*)"$/,
  async (username, password) => {
    await SauceLoginPage.login(username, password);
  }
);

Then("user should see empty cart", () => {
  // Write code here that turns the phrase above into concrete actions
});

When("user click cart button", () => {
  // Write code here that turns the phrase above into concrete actions
});

Then("user should redirect to homepage", () => {
  // Write code here that turns the phrase above into concrete actions
});

Then("user should see {string} on cart page", (s) => {
  // Write code here that turns the phrase above into concrete actions
});

Then("user add {string} to cart", (s) => {
  // Write code here that turns the phrase above into concrete actions
});
