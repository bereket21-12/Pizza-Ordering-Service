"use server";
import prisma from "@/lib/prisma";
import { signUpSchema } from "../utils/schema"; // Adjust import based on your folder structure
import { createUser, getAllPizzas } from "@/repositories";
import { PrismaClientInitializationError } from "@prisma/client/runtime/library";
import bcrypt from "bcryptjs";

export async function handleSignUp(previousState: any, formData: FormData) {
  // Extract values from FormData
  const formValues = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    location: formData.get("location") as string,
    phoneNumber: formData.get("phoneNumber") as string,
    name: formData.get("name") as string | null, // Handle name as optional
  };
  console.log("formValues", formValues);
  // Validate the form values using the schema
  const results = signUpSchema.safeParse(formValues);

  if (!results.success) {
    // Return structured errors in a way compatible with `useActionState`
    return { ...previousState, errors: results.error.flatten().fieldErrors };
  }

  const { confirmPassword, password, email, ...userData } = formValues;

  // Hash the password before saving it
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

  // Create the user with hashed password
  try {
    const newUser = await createUser({
      ...userData,
      email,
      password: hashedPassword,
    });
    console.log("Submitted successfully", formValues);
    await prisma.userRole.create({
      data: {
        userId: newUser.id,
        roleId: 1, // The ID of the role to assign
      },
    });
    // Return the updated state after successful user creation
    return { ...previousState, success: true, user: newUser };
  } catch (error) {
    console.error("Error creating user", error);
    return { ...previousState, success: false, error: "Email already exists" };
  }
}

export async function handleGetAllPizzas() {
  try {
    // Fetch all pizzas along with restaurant and topping details
    const pizzas = await getAllPizzas();

    // Format the response for easier consumption
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
      }, // Includes user details in the result
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

  return orders;
}

export async function createRole(role: string) {
  const newRole = await prisma.role.create({
    data: {
      name: role,
    },
  });

  return newRole;
}
