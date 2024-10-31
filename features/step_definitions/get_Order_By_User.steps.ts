import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { getOrdersByUser } from "../../actions/userAction.ts";

let userId: number;
let result: any;

Given("a valid user ID", async function () {
  userId = 1;
});

Given("an invalid user ID", function () {
  userId = -1;
});

When("the getOrdersByUser function is called", async function () {
  result = await getOrdersByUser(userId);
});

Then("the orders should be retrieved successfully", function () {
  expect(result).to.be.an("object");
  expect(result.success).to.be.true;
  expect(result.userOrders).to.be.an("array");
  expect(result.userOrders.length).to.be.greaterThan(0);
  expect(result.userOrders[0]).to.have.property("customer");
  expect(result.userOrders[0]).to.have.property("Pizza");
  expect(result.userOrders[0]).to.have.property("status");
  expect(result.userOrders[0]).to.have.property("toppings");
});

Then("no orders should be retrieved", function () {
  expect(result.success).to.be.false;
  expect(result.error).to.equal("Could not retrieve user orders");
});
