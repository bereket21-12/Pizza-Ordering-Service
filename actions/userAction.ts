"use server";
import prisma from "@/lib/prisma";
import { signUpSchema } from "../utils/schema"; // Adjust import based on your folder structure
import { createUser, getAllPizzas } from "@/repositories";
import { PrismaClientInitializationError } from "@prisma/client/runtime/library";
import bcrypt from "bcryptjs";

export async function handleSignUp(previousState: any, formData: FormData) {
  const formValues = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    location: formData.get("location") as string,
    phoneNumber: formData.get("phoneNumber") as string,
    name: formData.get("name") as string | null,
  };
  console.log("formValues", formValues);

  const results = signUpSchema.safeParse(formValues);

  if (!results.success) {
    return { ...previousState, errors: results.error.flatten().fieldErrors };
  }
  const customerPermission = await prisma.permission.create({
    data: {
      action: "read",
      subject: "pizza",
    },
  });

  const customerRole = await prisma.role.create({
    data: {
      name: "Customer",
      permissions: {
        create: {
          permissionId: customerPermission.id,
        },
      },
    },
  });

  const { confirmPassword, password, email, ...userData } = formValues;

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = await createUser({
      ...userData,
      email,
      Active: true,
      password: hashedPassword,
      roles: {
        create: {
          roleId: customerRole.id,
        },
      },
    });
    console.log("Submitted successfully", formValues);

    return { ...previousState, success: true, user: newUser };
  } catch (error) {
    console.error("Error creating user", error);
    return { ...previousState, success: false, error: "Email already exists" };
  }
}

export async function handleGetAllPizzas() {
  try {
    const pizzas = await getAllPizzas();

    const formattedPizzas = pizzas.map((pizza: any) => ({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      imgurl: pizza.imgurl,
      restaurant: {
        name: pizza.restaurant?.name || "Unknown",
        location: pizza.restaurant?.location || "Unknown",
        imgUrl: pizza.restaurant?.imgUrl || "Unknown",
      },
      toppings: pizza.toppings.map((t: any) => t.topping.name).join(", "),
    }));

    return { success: true, pizzas: formattedPizzas };
  } catch (error) {
    console.error("Error fetching pizzas", error);
    return { success: false, error: "Could not retrieve pizzas" };
  }
}

export async function orderPizzaById(id: number) {
  const detail = await prisma.pizza.findUnique({
    where: { id },
    select: {
      restaurantId: true,
      price: true,
      name: true,
      imgurl: true,
      toppings: {
        include: {
          topping: true,
        },
      },
      restaurant: true,
    },
  });
  return detail;
}

export async function getOrdersByUser(userId: number) {
  const userOrders = await prisma.order.findMany({
    where: {
      customerId: userId,
    },
    select: {
      customer: true, // Includes user details in the result
      Pizza: true,
      status: true,
      toppings: {
        select: {
          topping: {
            select: {
              name: true,
            },
          },
        },
      },
      // Includes pizza details for each order
    },
  });

  return userOrders;
}

export async function getOrders(id: number) {
  const orders = await prisma.order.findMany({
    where: {
      restaurantId: id,
    },
    select: {
      customer: {
        select: {
          name: true,
          email: true,
          location: true,
          phoneNumber: true,
        },
      },
      Pizza: true,
      status: true,
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

  return orders;
}
