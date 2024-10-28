import * as z from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email("Invalid email address."),
    password: z.string().min(6, "Password must be at least 6 characters."),
    confirmPassword: z.string().min(6, "Confirm your password."),
    location: z.string().min(2, "Location is required."),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 digit."),
    restaurantId: z.number().int().optional(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export const loginSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

export const restaurantSchema = z
  .object({
    name: z.string().min(3, "Suber Admin name must be at least 3 characters"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Password confirmation is required"),
    RestaurantName: z
      .string()
      .min(3, "Restaurant name must be at least 3 characters"),
    location: z.string().min(2, "Location is required."),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 digit."),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export const MenuSchema = z.object({
  name: z.string().min(3, "Suber Admin name must be at least 3 characters"),
  price: z.string().min(1, "Phone number must be at least 1 digit."),
});

export const adminSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  adminName: z.string().min(1),
  phoneNumber: z.string().min(10),
  confirmPassword: z.string(),
  restaurantId: z.string().min(1), // Ensure restaurantId is required
});
