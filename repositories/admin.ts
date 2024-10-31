import prisma from "../lib/prisma.ts";
import { Prisma } from "@prisma/client";

export const createRestaurantWithAdmin = async (
  data: Prisma.RestaurantCreateInput
) => {
  return prisma.restaurant.create({
    data,
    include: { superAdmin: true },
  });
};

export const createRestaurant = async (data: Prisma.RestaurantCreateInput) => {
  return prisma.restaurant.create({
    data,
  });
};
export const createTopping = async (data: Prisma.ToppingCreateInput) => {
  return prisma.topping.create({
    data,
  });
};

export const getRestaurantById = async (id: number) => {
  return prisma.restaurant.findUnique({ where: { id } });
};

export const updateRestaurant = async (
  id: number,
  data: Prisma.RestaurantUpdateInput
) => {
  return prisma.restaurant.update({
    where: { id },
    data,
  });
};

export const deleteRestaurant = async (id: number) => {
  return prisma.restaurant.delete({
    where: { id },
  });
};

export const getAllRestaurants = async () => {
  return prisma.restaurant.findMany();
};

export const createPizza = async (data: Prisma.PizzaCreateInput) => {
  return prisma.pizza.create({
    data,
    include: { toppings: true },
  });
};

export const getPizzaById = async (id: number) => {
  return prisma.pizza.findUnique({ where: { id } });
};

export const updatePizza = async (
  id: number,
  data: Prisma.PizzaUpdateInput
) => {
  return prisma.pizza.update({ where: { id }, data });
};
export const deletePizza = async (id: number) => {
  return prisma.pizza.delete({ where: { id } });
};

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
