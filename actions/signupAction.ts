"use server";
import { signUpSchema } from "../utils/schema";
import { createUser } from "@/repositories";
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

  const { confirmPassword, password, email, ...userData } = formValues;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await createUser({
      ...userData,
      email,
      password: hashedPassword,
    });
    console.log("Submitted successfully", formValues);

    return { ...previousState, success: true, user: newUser };
  } catch (error) {
    console.error("Error creating user", error);
    return { ...previousState, success: false, error: "Email already exists" };
  }
}
