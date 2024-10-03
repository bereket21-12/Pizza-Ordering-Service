'use client';

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Box, TextField, Typography, FormControlLabel, Checkbox, CircularProgress, IconButton } from "@mui/material";
import Image from "next/image";
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "next/link";
import toast from "react-hot-toast";
import { handleSignUp } from "@/actions";
import { useActionStateCompat } from "@strozw/use-action-state-compat";

export default function SignUp() {
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [state, dispatch, ispending] = useActionStateCompat(handleSignUp, null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (!ref.current) return;

    const formData = new FormData(ref.current);
    try {
      dispatch(formData);
      if (state?.success) {
        toast.success("Sign up successful");
        ref.current.reset();
        router.push("/login");
      }
    } catch (error) {
      console.error("Sign up failed:", error);
    }
  }

  // Use `useEffect` to handle state changes safely
  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    } else if (state?.success) {
      toast.dismiss();
      router.push("/login");
    }
  }, [state?.error, state?.success, router]);

  return (
    <Box
      ref={ref}
      component="form"
      onSubmit={handleSubmit} // Use handleSubmit to trigger server action
      method="post"
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
        <Image src={"/emojione_pizza.png"} width={150} height={150} alt="pizza_img" />
      </Box>

      {/* Right Input Fields Box */}
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
        <Box sx={{ display: "flex", flexDirection: "row", pr: { xs: 0, md: 39 }, alignItems: "center" }}>
          <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2, alignSelf: "flex-start" }}>
            <Image width={40} height={40} src={"/emojione_pizza.png"} alt={"Pizza Logo"} />
          </IconButton>
          <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "#AF5901" }}>Pizza</Typography>
        </Box>
        {/* Input Fields */}
        {[
          { label: "Full Name", name: "name", type: "text" },
          { label: "Email Address", name: "email", type: "email" },
          { label: "Password", name: "password", type: "password" },
          { label: "Confirm Password", name: "confirmPassword", type: "password" },
          { label: "Location", name: "location", type: "text" },
          { label: "Phone Number", name: "phoneNumber", type: "number" },
        ].map(({ label, name, type }) => (
          <Box key={name} sx={{ width: { xs: "100%", md: 450 }, height: 80 }}>
            <TextField
              sx={{ width: "100%", display: "flex", gap: 1, flexDirection: "column" }}
              label={label}
              type={type}
              name={name}
              error={Boolean(state?.errors && state?.errors[name])}
              helperText={state?.errors && state?.errors[name]?.join(", ")}
            />
          </Box>
        ))}

        {/* Remember Me Checkbox */}
        <FormControlLabel control={<Checkbox name="acceptTerms" />} label="I accept terms and conditions" sx={{ alignSelf: "flex-start" }} />

        {/* Sign Up Button */}
        <LoadingButton
          variant="contained"
          type="submit"
          loading={ispending}
          loadingPosition="start"
          startIcon={
            ispending ? (
              <CircularProgress size={18} sx={{ color: "#ffffff" }} />
            ) : null
          }
          sx={{
            backgroundColor: ispending ? "#FF8C00" : "#FFA500",
            fontSize: "1rem",
            fontWeight: "bold",
            width: { xs: "100%", md: 450 },
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            "& .MuiLoadingButton-loadingIndicator": { color: "#ffffff" },
            "&:hover": { backgroundColor: ispending ? "#FF8C00" : "#FF7F00" },
          }}
        >
          {ispending ? "Signing Up..." : "Sign Up"}
        </LoadingButton>

        <Typography sx={{ fontWeight: "italic", fontSize: "0.85rem", color: "black", alignSelf: "center" }}>
          Already have an account?{" "}
          <span style={{ color: "#FFA500" }}>
            <Link style={{ color: "#FFA500", textDecoration: "none" }} href={'/login'}>
              Login
            </Link>
          </span>
        </Typography>

        {state?.success && <Typography sx={{ fontWeight: "bold", fontSize: "1rem", color: "green" }}>Sign Up Successful!</Typography>}
        {state?.error && <Typography sx={{ fontWeight: "italic", fontSize: "1rem", color: "red" }}> Error : {state.error}</Typography>}
      </Box>
    </Box>
  );
}
