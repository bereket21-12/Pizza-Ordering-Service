import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { handleOrderForm } from "../../actions/adminAction.ts";

let previousState: any;
let formData: FormData;
let result: any;

Given("a form with valid order data", function () {
  previousState = {};
  formData = new FormData();
  formData.append("userId", "1");
  formData.append("quantity", "2");
  formData.append("pizzaId", "1");
  formData.append("restaurantId", "1");
  formData.append("checkedToppings", JSON.stringify([1, 2]));
});

Given("a form with missing required fields", function () {
  previousState = {};
  formData = new FormData();
  formData.append("userId", "1");
  formData.append("quantity", "2");
  formData.append("checkedToppings", JSON.stringify([1, 2]));
});

Given("a form with invalid toppings data", function () {
  previousState = {};
  formData = new FormData();
  formData.append("userId", "1");
  formData.append("quantity", "2");
  formData.append("pizzaId", "1");
  formData.append("restaurantId", "1");
  formData.append("checkedToppings", JSON.stringify("invalid data"));
});

When("the handleOrderForm function is called", async function () {
  try {
    result = await handleOrderForm(previousState, formData);
  } catch (error) {
    if (error instanceof Error) {
      result = { error: error.message };
    } else {
      result = { error: "An unknown error occurred" };
    }
  }
});

Then("the order should be created successfully", function () {
  expect(result.success).to.be.true;
  expect(result.order).to.exist;
});

Then("an error message should be returned", function () {
  expect(result.errors).to.exist;
  expect(result.errors.message).to.be.a("string");
});
