"use server";
// import {
//   createPizza,
//   createRestaurantWithAdmin,
//   createTopping,
//   orderPizza,
// } from "@/repositories";
import { createPizza } from "../repositories/admin.ts";
import { createRestaurantWithAdmin } from "../repositories/admin.ts";
import { orderPizza } from "../repositories/user.ts";
import { createTopping } from "../repositories/admin.ts";
import bcrypt from "bcryptjs";
import {
  adminSchema,
  MenuSchema,
  restaurantSchema,
  signUpSchema,
} from "../utils/schema.ts";
import { uploadImage } from "./uploadImage.ts";
import prisma from "../lib/prisma.ts";
import { OrderStatus, User } from "@prisma/client";

export async function handleCreateRestaurant(
  previousState: any,
  formData: FormData
) {
  console.log("formData", formData);
  const formValues = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    location: formData.get("location") as string,
    RestaurantName: formData.get("RestaurantName") as string,
    phoneNumber: formData.get("phoneNumber") as string,
    imgUrl: formData.get("image") as File,
  };

  const results = restaurantSchema.safeParse(formValues);
  let uploadedImageUrl = "";
  if (results.success) {
    console.log("data", results.data);
    uploadedImageUrl = await uploadImage(formValues.imgUrl, "restaurant");
    formValues.imgUrl = new File([uploadedImageUrl], formValues.imgUrl.name, {
      type: formValues.imgUrl.type,
    });
  }

  if (!results.success) {
    return { ...previousState, errors: results.error.flatten().fieldErrors };
  }

  const { confirmPassword, email, password, ...restaurantData } = results.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  // Create  restaurant
  try {
    const newRestaurant = await createRestaurantWithAdmin({
      name: restaurantData.RestaurantName || "",
      location: restaurantData.location || "",
      imgUrl: uploadedImageUrl,
      adminName: restaurantData.name,
      phoneNumber: restaurantData.phoneNumber || "",
      email: email,
    });

    return { ...previousState, success: true, restaurant: newRestaurant.id };
  } catch (error) {
    console.error("Error creating restaurant and admin", error);
    return {
      ...previousState,
      success: false,
      error: "Could not create the restaurant",
    };
  }
}

export async function handleCreateMenu(previousState: any, formData: FormData) {
  console.log("formData", formData);

  const formValues = {
    name: formData.get("name") as string,
    price: formData.get("price") as string,
    imgUrl: formData.get("image") as File,
    restaurantId: formData.get("id"),
  };

  const results = MenuSchema.safeParse(formValues);
  let uploadedImageUrl = "";

  if (results.success) {
    console.log("data", results.data);
    uploadedImageUrl = await uploadImage(formValues.imgUrl, "pizza");
    formValues.imgUrl = new File([uploadedImageUrl], formValues.imgUrl.name, {
      type: formValues.imgUrl.type,
    });
  }

  if (!results.success) {
    return { ...previousState, errors: results.error.flatten().fieldErrors };
  }

  const { name, price } = results.data;

  // Extract toppings from FormData
  const toppings = [];
  for (let [key, value] of formData.entries()) {
    if (key.startsWith("toppings[")) {
      toppings.push(value as string);
    }
  }

  // Filter out any empty values
  const uniqueToppings = [
    ...new Set(toppings.filter((topping) => topping.trim() !== "")),
  ];

  try {
    // Create toppings in the database
    const createdToppings = await Promise.all(
      uniqueToppings.map((topping) => createTopping({ name: topping }))
    );

    console.log("Toppings created successfully", createdToppings);

    const newPizza = await createPizza({
      name: name || "",
      price: parseFloat(price) || 0,
      imgurl: uploadedImageUrl,
      restaurant: {
        connect: {
          id: Number(formValues.restaurantId),
        },
      },
      toppings: {
        create: createdToppings.map((topping) => ({
          topping: { connect: { id: topping.id } },
        })),
      },
    });

    console.log("Pizza created successfully", newPizza);
    return { ...previousState, success: true, restaurant: newPizza };
  } catch (error) {
    console.error("Error creating Pizza", error);
    return {
      ...previousState,
      success: false,
      error: "Could not create the Pizza",
    };
  }
}

export async function expermantal(previousState: any, formData: FormData) {
  console.log("formData", formData);

  const formValues = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    location: formData.get("location") as string,
    RestaurantName: formData.get("RestaurantName") as string,
    phoneNumber: formData.get("phoneNumber") as string,
    imgUrl: formData.get("image") as File,
  };

  const results = restaurantSchema.safeParse(formValues);
  let uploadedImageUrl = "";

  if (results.success) {
    console.log("data", results.data);
    uploadedImageUrl = await uploadImage(formValues.imgUrl, "restaurant");
    formValues.imgUrl = new File([uploadedImageUrl], formValues.imgUrl.name, {
      type: formValues.imgUrl.type,
    });
  }

  if (!results.success) {
    return { ...previousState, errors: results.error.flatten().fieldErrors };
  }

  const { confirmPassword, email, password, ...restaurantData } = results.data;

  // Hash the admin's password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const superAdminPermission = await prisma.permission.create({
      data: {
        action: "manage",
        subject: "all",
      },
    });

    // Step 1: Create the restaurant first
    const newRestaurant = await createRestaurantWithAdmin({
      name: restaurantData.RestaurantName || "",
      location: restaurantData.location || "",
      imgUrl: uploadedImageUrl,
      adminName: restaurantData.name,
      phoneNumber: restaurantData.phoneNumber || "",
      email: email,
    });

    console.log("Restaurant created successfully", newRestaurant);

    const superAdminRole = await prisma.role.create({
      data: {
        name: "Super Admin",
        restaurantId: newRestaurant.id,
        permissions: {
          create: {
            permissionId: superAdminPermission.id,
          },
        },
      },
    });

    // Step 2: Create the superAdmin with the new restaurant's ID
    const newAdmin = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        name: restaurantData.name,
        location: restaurantData.location,
        phoneNumber: restaurantData.phoneNumber || "",
        restaurantId: newRestaurant.id,
        superAdminRestaurants: {
          connect: {
            id: newRestaurant.id,
          },
        },
        roles: {
          create: {
            roleId: superAdminRole.id,
          },
        },
      },
    });

    console.log("Submitted successfully", formValues);

    console.log("Admin created successfully", newAdmin);

    return {
      ...previousState,
      success: true,
      restaurant: newRestaurant,
      admin: newAdmin,
    };
  } catch (error) {
    console.error("Error creating restaurant and admin", error);
    return {
      ...previousState,
      success: false,
      error: "Could not create the restaurant or admin",
    };
  }
}

export async function handleCreateAdmin(data: FormData) {
  try {
    const parsedData = adminSchema.parse({
      email: data.get("email"),
      password: data.get("password"),
      adminName: data.get("adminName"),
      phoneNumber: data.get("phoneNumber"),
      confirmPassword: data.get("confirmPassword"),
      restaurantId: data.get("restaurantId"),
    });

    const superAdminPermission = await prisma.permission.create({
      data: {
        action: "manage",
        subject: "all",
      },
    });

    const superAdminRole = await prisma.role.create({
      data: {
        name: "Super Admin",
        restaurantId: Number(parsedData.restaurantId),
        permissions: {
          create: {
            permissionId: superAdminPermission.id,
          },
        },
      },
    });

    if (parsedData.password !== parsedData.confirmPassword) {
      return { success: false, message: "Passwords do not match" };
    }

    const existingAdmin = await prisma.user.findUnique({
      where: { email: parsedData.email },
    });

    if (existingAdmin) {
      return {
        success: false,
        message: "Admin with this email already exists",
      };
    }

    const hashedPassword = await bcrypt.hash(parsedData.password, 10);

    const newAdmin = await prisma.user.create({
      data: {
        email: parsedData.email,
        password: hashedPassword,
        name: parsedData.adminName,
        phoneNumber: parsedData.phoneNumber,
        restaurantId: Number(parsedData.restaurantId),
        superAdminRestaurants: {
          connect: {
            id: Number(parsedData.restaurantId),
          },
        },
        roles: {
          create: {
            roleId: superAdminRole.id,
          },
        },
      },
    });

    return { success: true, admin: newAdmin };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

export async function handleOrderForm(previousState: any, formData: FormData) {
  const formValues = {
    customerId: Number(formData.get("userId")),
    quantity: Number(formData.get("quantity")),
    pizzaId: Number(formData.get("pizzaId")),
    restaurantId: Number(formData.get("restaurantId")),
    toppings: JSON.parse(formData.get("checkedToppings") as string),
  };

  console.log("Parsed Form Data:", formValues);

  if (
    !formValues.customerId ||
    !formValues.pizzaId ||
    !formValues.restaurantId
  ) {
    return {
      ...previousState,
      errors: {
        message: "Customer, Pizza, and Restaurant are required fields.",
      },
    };
  }

  let toppings;
  try {
    toppings = formValues.toppings;
    if (
      !Array.isArray(toppings) ||
      toppings.some((topping) => isNaN(Number(topping)))
    ) {
      throw new Error("Invalid toppings format");
    }
  } catch (error) {
    return {
      ...previousState,
      errors: { message: "Invalid toppings data." },
    };
  }

  try {
    const orderData = {
      customer: { connect: { id: formValues.customerId } },
      Pizza: { connect: { id: formValues.pizzaId } },
      restaurant: { connect: { id: formValues.restaurantId } },
      status: OrderStatus.PENDING,
      quantity: formValues.quantity,
      toppings: {
        create: toppings.map((toppingId) => ({
          topping: {
            connect: { id: Number(toppingId) },
          },
        })),
      },
    };

    // Call the `orderPizza` function with the constructed order data
    const createdOrder = await orderPizza(orderData);

    console.log("Order successfully created:", createdOrder);

    return { ...previousState, success: true, order: createdOrder };
  } catch (error) {
    console.error("Error creating order:", error);
    return {
      ...previousState,
      success: false,
      error: "Could not create the order.",
    };
  }
}

export const createRoleWithPermissions = async (
  roleName: string,
  id: number,
  permissions: { action: string; subject: string }[]
) => {
  // Step 1: Ensure all permissions exist before creating the role
  const permissionIds = await Promise.all(
    permissions.map(async ({ action, subject }) => {
      // Use findFirst or create the permission if it doesn't exist
      const existingPermission = await prisma.permission.findFirst({
        where: { action, subject },
      });

      const permission = existingPermission
        ? existingPermission
        : await prisma.permission.create({
            data: { action, subject },
          });
      return permission.id;
    })
  );

  // Step 2: Create the role and connect the existing permissions
  const newRole = await prisma.role.create({
    data: {
      name: roleName,
      restaurant: {
        connect: { id: id }, // Assuming you have a restaurant ID to connect
      },
      permissions: {
        create: permissionIds.map((permissionId) => ({
          permission: {
            connect: { id: permissionId },
          },
        })),
      },
    },
    include: {
      permissions: { include: { permission: true } },
    },
  });

  return newRole;
};

// Assign a role to a user
export const assignRoleToUser = async (userId: number, roleId: number) => {
  return await prisma.userRole.create({
    data: {
      userId,
      roleId,
    },
  });
};

// Fetch roles and permissions for a specific user
export const getUserRolesAndPermissions = async (userId: number) => {
  const userWithRoles = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      roles: {
        select: {
          role: {
            select: {
              name: true,
              permissions: {
                select: {
                  permission: {
                    select: {
                      action: true,
                      subject: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  return userWithRoles;
};

export const getRole = async (id: number) => {
  return await prisma.role.findMany({
    where: {
      restaurantId: id,
    },
    select: {
      name: true,
      id: true,
      Active: true,
      createdAt: true,
      permissions: {
        select: {
          permission: {
            select: {
              action: true,
              subject: true,
            },
          },
        },
      },
    },
  });
};

export const createAdmin = async (formData: FormData) => {
  const formValues = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    restaurantId: Number(formData.get("restaurantId")),
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    location: formData.get("location") as string,
    phoneNumber: formData.get("phoneNumber") as string,
    role: formData.get("role") as string,
  };

  const results = signUpSchema.safeParse(formValues);

  if (!results.success) {
    return { errors: results.error.flatten().fieldErrors };
  }

  const { confirmPassword, ...userData } = results.data;

  // Hash the admin's password
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  try {
    const newAdmin = prisma.user.create({
      data: {
        email: formValues.email,
        password: hashedPassword,
        name: formValues.name,
        location: formValues.location,
        restaurantId: formValues.restaurantId,
        phoneNumber: formValues.phoneNumber || "",
        roles: {
          create: {
            roleId: Number(formValues.role),
          },
        },
      },
    });

    console.log("Admin created successfully", newAdmin);
    return { success: true, admin: newAdmin };
  } catch (error) {
    console.error("Error creating admin", error);
    return { success: false, error: "Could not create the admin" };
  }
};

export const getUserByRestaurant = async (restaurantId: number) => {
  return await prisma.user.findMany({
    where: {
      restaurantId,
    },
    select: {
      id: true,
      Active: true,
      name: true,
      email: true,
      location: true,
      phoneNumber: true,
      roles: {
        select: {
          role: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
};

export const getUserById = async (userId: number) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      location: true,
      phoneNumber: true,
      roles: {
        select: {
          role: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
};

export const getOrder = async (id: number) => {
  return await prisma.order.findMany({
    where: {
      restaurantId: id,
    },
    select: {
      id: true,
      quantity: true,
      status: true,
      customer: {
        select: {
          name: true,
          email: true,
          location: true,
          phoneNumber: true,
        },
      },
      Pizza: {
        select: {
          name: true,
        },
      },
      toppings: {
        include: {
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

export const updateOrderStatus = async (
  orderId: number,
  status: OrderStatus
) => {
  try {
    const response = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        status,
      },
    });

    return { success: true, response };
  } catch (error) {
    return { success: false, error: "Could not update order status" };
  }
};

export const updateUser = async (id: number, active: boolean) => {
  return await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      Active: active,
    },
  });
};
export const deleteRole = async (id: number) => {
  return await prisma.role.delete({
    where: {
      id: id,
    },
  });
};

export const UpdateRole = async (id: number, Active: boolean) => {
  return await prisma.role.update({
    where: {
      id: id,
    },
    data: {
      Active,
    },
  });
};

export const searchRole = async (name: string, id: number) => {
  return await prisma.role.findMany({
    where: {
      restaurantId: id,
      name: {
        contains: name,
        mode: "insensitive",
      },
    },
    select: {
      id: true,
      name: true,
      createdAt: true,
      Active: true,
      permissions: {
        select: {
          permission: {
            select: {
              action: true,
              subject: true,
            },
          },
        },
      },
    },
  });
};

export const searchUser = async (name: string, id: number) => {
  return await prisma.user.findMany({
    where: {
      restaurantId: id,
      name: {
        contains: name,
        mode: "insensitive",
      },
    },
    select: {
      email: true,
      name: true,
      phoneNumber: true,
      Active: true,
      roles: {
        select: {
          role: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
};

export const searchOrder = async (name: string, id: number) => {
  return await prisma.order.findMany({
    where: {
      restaurantId: id,
      Pizza: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
    },
    include: {
      customer: {
        select: {
          phoneNumber: true,
        },
      },
      Pizza: true,
    },
  });
};
