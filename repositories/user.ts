"use server";
import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";
export const createUser = async (data: Prisma.UserCreateInput) => {
  return prisma.user.create({
    data,
  });
};

export const getUserByEmail = async (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};

type UpdateUserData = Partial<Omit<Prisma.UserUpdateInput, "email">>;

export const updateUser = async (id: number, data: UpdateUserData) => {
  return prisma.user.update({ where: { id }, data });
};

export const deleteUser = async (id: number) => {
  return prisma.user.delete({ where: { id } });
};
export const getAllUsers = async () => {
  return prisma.user.findMany();
};

export const orderPizza = async (data: Prisma.OrderCreateInput) => {
  return prisma.order.create({
    data,
  });
};

export const orderPizzaById = async (id: number) => {
  return prisma.pizza.findUnique({ where: { id } });
};
