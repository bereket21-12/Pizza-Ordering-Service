"use client";
import {
  Box,
  IconButton,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
  TextField,
} from "@mui/material";
import toast from "react-hot-toast";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/utils/schema"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { getSession } from "next-auth/react";
export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    console.log(result);

    if (result?.error) {
      setError("email", { type: "manual", message: result.error });
      setError("password", { type: "manual", message: result.error });
      toast.error("User name or password incorrect");
    } else {
      reset();
      clearErrors();

      // Fetch the updated session
      const session = await getSession();

      console.log(session?.user.roles[0]);

      if (session?.user.roles[0]?.role?.name === "Super Admin") {
        router.push("/admin/adduser");
      } else {
        router.push("/");
      }
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
      {/* Left Pizza Icon Box */}
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

      {/* Right Input Fields Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          justifyContent: "center",
          height: "100%",
          width: { xs: "100%", md: "50%" },
          px: 2,
        }}
      >
        {/* Icon and Title */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Image
              width={40}
              height={40}
              src={"/emojione_pizza.png"}
              alt="Pizza Logo"
            />
          </IconButton>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "#AF5901" }}
          >
            Pizza
          </Typography>
        </Box>

        {/* Login Title */}
        <Typography
          sx={{ fontSize: "1.5rem", color: "black", alignSelf: "flex-start" }}
        >
          Login
        </Typography>
        <Divider sx={{ fontSize: "1rem", color: "black" }} />

        {/* Input Fields */}
        {[
          { label: "Email Address", name: "email" as const, type: "email" },
          { label: "Password", name: "password" as const, type: "password" },
        ].map(({ label, name, type }) => (
          <Box key={name} sx={{ width: { xs: "100%", md: 450 }, height: 80 }}>
            <TextField
              sx={{
                width: "100%",
                display: "flex",
                gap: 1,
                flexDirection: "column",
              }}
              label={label}
              type={type}
              {...register(name)}
              error={Boolean(errors[name])}
              helperText={errors[name]?.message}
            />
          </Box>
        ))}

        {/* Remember Me Checkbox */}
        <FormControlLabel
          control={<Checkbox />}
          label="Remember Me"
          sx={{ alignSelf: "flex-start" }}
        />

        {/* Login Button */}
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#FFA500",
            fontSize: "1rem",
            fontWeight: "bold",
            width: { xs: "100%", md: 450 },
            height: 30,
            "&:hover": {
              backgroundColor: "#FFA500",
            },
          }}
        >
          Login
        </Button>
        <Typography
          sx={{
            fontWeight: "italic",
            fontSize: "0.85rem",
            color: "black",
            alignSelf: "center",
          }}
        >
          Don&apos;t have an account?{" "}
          <span style={{ color: "#FFA500" }}>
            
          <Link style={{color:"#FFA500",textDecoration:"none"}} href={'/signup'}>
            
          Sign Up
          </Link>
            </span>
        </Typography>
      </Box>
    </Box>
  );
}
