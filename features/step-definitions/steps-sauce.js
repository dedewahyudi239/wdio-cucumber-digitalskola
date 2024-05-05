const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $, browser } = require("@wdio/globals");

// Scenario: User login successfully
Given("user is on sauce-demo page", async () => {
  await browser.url("https://www.saucedemo.com/");
});

When(/^user input username with "(.*)"$/, async (username) => {
  await browser.$("#user-name").setValue(username);
});

When(/^user input password with "(.*)"$/, async (password) => {
  await browser.$("#password").setValue(password);
});

When(/^user click button$/, async () => {
  (await browser.$("#login-button")).click();
});

Then(/^user should redirect to hompage$/, async () => {
  const pageText = await browser.$("body");
  expect(pageText).toHaveTextContaining("Sauce labs Backpack");
});

// Scenario: User add cart button
Given("user is on sauce-demo homepage inventory", async () => {
  await browser.url("https://www.saucedemo.com/inventory.html");
});

When(/^user click add to cart button$/, async () => {
  (await browser.$("#add-to-cart-sauce-labs-backpack")).click();
});

Then(/^user click cart button$/, async () => {
  await browser.url("https://www.saucedemo.com/cart.html");
  const pageText = await browser.$("body");
  expect(pageText).toHaveTextContaining("Your Cart");
});
