import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { getRole } from "../../actions/adminAction.ts";
import { PrismaClient } from "@prisma/client";

let restaurantId: number;
let result: any;

// Mock the prisma.role.findMany function

Given("a valid restaurant ID", function () {
  restaurantId = 1;
});

Given("an invalid restaurant ID", function () {
  restaurantId = -1;
});

When("the getRole function is called", async function () {
  result = await getRole(restaurantId);
});

Then("the roles should be retrieved successfully", function () {
  expect(result).to.be.an("array");
  expect(result.length).to.be.greaterThan(0);
  expect(result[0]).to.have.property("name");
  expect(result[0]).to.have.property("id");
  expect(result[0]).to.have.property("Active");
  expect(result[0]).to.have.property("createdAt");
  expect(result[0]).to.have.property("permissions");
  expect(result[0].permissions[0]).to.have.property("permission");
  expect(result[0].permissions[0].permission).to.have.property("action");
  expect(result[0].permissions[0].permission).to.have.property("subject");
});

Then("no roles should be retrieved", function () {
  expect(result).to.be.an("array");
  expect(result.length).to.equal(0);
});
