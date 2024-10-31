import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { updateOrderStatus } from "../../actions/adminAction.ts";
import { PrismaClient, OrderStatus } from "@prisma/client";
import sinon from "sinon";

const prisma = new PrismaClient();

let orderId: number;
let status: OrderStatus;
let result: any;

// Mock the prisma.order.update function
const mockUpdate = sinon.stub(prisma.order, "update");

Given("a valid order ID and status", function () {
  orderId = 1;
  status = OrderStatus.PENDING;
  mockUpdate.resolves({
    id: orderId,
    customerId: 1,
    pizzaId: 1,
    status,
    createdAt: new Date(),
    restaurantId: 1,
    quantity: 1,
  });
});

Given("an invalid order ID and a valid status", function () {
  orderId = -1;
  status = OrderStatus.PENDING;
  mockUpdate.rejects(new Error("Order not found"));
});

When("the updateOrderStatus function is called", async function () {
  result = await updateOrderStatus(orderId, status);
});

Then("the order status should be updated successfully", function () {
  expect(result.success).to.be.true;
  expect(result.response).to.have.property("id", orderId);
  expect(result.response).to.have.property("status", status);
});

Then("Could not update order status returned", function () {
  expect(result.success).to.be.false;
  //   expect(result.error).to.equal("Could not update order status");
});
