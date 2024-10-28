"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import {
  Box,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { handleCreateAdmin } from "@/actions/adminAction"; // Ensure to import the server action

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  adminName: string;
  phoneNumber: string;
  acceptTerms: boolean;
}


const registrationSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm password must be at least 6 characters" }),
    adminName: z.string().min(1, { message: "Admin Name is required" }),
    phoneNumber: z
      .string()
      .min(10, { message: "Phone number must be at least 10 digits" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });


const AddAdminForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const restaurantId = searchParams.get("restaurantId"); // Get restaurantId from query parameters
  const [loading, setLoading] = useState(false);

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registrationSchema),
  });

 
  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      if (restaurantId) {
        formData.append("restaurantId", restaurantId as string); 
      }

      const result = await handleCreateAdmin(formData); 

      if (result.success) {
        
        router.push("/login");
      } else {
      
        console.error(result.message);
      }
    } catch (error) {
      console.error("Error creating admin:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 3,
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFA500",
          height: { xs: "150px", md: "100%" },
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Image
          src={"/emojione_pizza.png"}
          width={150}
          height={150}
          alt="pizza_img"
        />
      </Box>

     
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "flex-start",
          justifyContent: "center",
          height: "90%",
          width: { xs: "100%", md: "50%" },
          px: 2,
        }}
      >
        {[
          { label: "Admin Name", name: "adminName", type: "text" },
          { label: "Email Address", name: "email", type: "email" },
          { label: "Phone Number", name: "phoneNumber", type: "text" },
          { label: "Password", name: "password", type: "password" },
          {
            label: "Confirm Password",
            name: "confirmPassword",
            type: "password",
          },
        ].map(({ label, name, type }) => (
          <TextField
            key={name}
            label={label}
            type={type}
            {...register(name as keyof FormData)}
            error={Boolean(errors[name as keyof FormData])}
            helperText={errors[name as keyof FormData]?.message}
            sx={{ width: { xs: "100%", md: 450 }, mb: 2 }}
          />
        ))}

        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          sx={{
            width: { xs: "100%", md: 450 },
            height: 50,
            fontSize: "1rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: loading ? "#FF8C00" : "#FFA500",
            "&:hover": { backgroundColor: loading ? "#FF8C00" : "#FF7F00" },
          }}
          startIcon={
            loading ? (
              <CircularProgress size={18} sx={{ color: "#ffffff" }} />
            ) : null
          }
        >
          {loading ? "CONTINUE..." : "CONTINUE"}
        </Button>
      </Box>
    </Box>
  );
};

export default AddAdminForm;
