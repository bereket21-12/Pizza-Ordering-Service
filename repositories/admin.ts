import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

// Function to create a restaurant with the admin's user ID
export const createRestaurantWithAdmin = async (
  data: Prisma.RestaurantCreateInput
) => {
  return prisma.restaurant.create({
    data,
    include: { superAdmin: true }, // Include the admin user in the returned data
  });
};

// Function to create a restaurant with the admin's user ID
export const createRestaurant = async (data: Prisma.RestaurantCreateInput) => {
  return prisma.restaurant.create({
    data,
  });
};
// Function to create a restaurant with the admin's user ID
export const createTopping = async (data: Prisma.ToppingCreateInput) => {
  return prisma.topping.create({
    data,
  });
};

// Fetch a restaurant by ID
export const getRestaurantById = async (id: number) => {
  return prisma.restaurant.findUnique({ where: { id } });
};

// Update restaurant details
export const updateRestaurant = async (
  id: number,
  data: Prisma.RestaurantUpdateInput
) => {
  return prisma.restaurant.update({
    where: { id },
    data,
  });
};

// Delete a restaurant by ID
export const deleteRestaurant = async (id: number) => {
  return prisma.restaurant.delete({
    where: { id },
  });
};

// Get all restaurants
export const getAllRestaurants = async () => {
  return prisma.restaurant.findMany();
};

// Function to create a pizza
export const createPizza = async (data: Prisma.PizzaCreateInput) => {
  return prisma.pizza.create({
    data,
    include: { toppings: true }, // Include the related toppings in the returned data
  });
};

// Fetch a pizza by ID
export const getPizzaById = async (id: number) => {
  return prisma.pizza.findUnique({ where: { id } });
};

export const updatePizza = async (
  id: number,
  data: Prisma.PizzaUpdateInput
) => {
  return prisma.pizza.update({ where: { id }, data });
};
// Delete a pizza by ID
export const deletePizza = async (id: number) => {
  return prisma.pizza.delete({ where: { id } });
};

// Get all pizzas
export const getAllPizzas = async () => {
  return await prisma.pizza.findMany({
    include: {
      restaurant: {
        select: {
          name: true,
          location: true,
          imgUrl: true,
        },
      },
      toppings: {
        select: {
          topping: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
};
