'use client'
import {
  Box,
  IconButton,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
  TextField,
  CircularProgress,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/navigation";
import { useActionStateCompat } from "@strozw/use-action-state-compat";
import { expermantal } from "@/actions/adminAction";
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "next/link";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function RegisterRestaurant() {

  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();

  // State to store the selected file(s)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [state, executeAction, isPending] = useActionStateCompat(
    expermantal,
    null
  );

  // Form submission handler using the `executeAction` function from `useActionState`
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget); // Get the form data

    // If a file is selected, append it to the FormData object


    // Execute server action with formData
    executeAction(formData);
  };

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]); // Take the first file (single file upload)
    }
  };

  if (state?.success) {
    ref.current?.reset(); // Reset the form after submission
    router.push("/login");
  }

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
        height: "100%",
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
          height: { xs: "250px", md: "1100px" },
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
          alignItems: "center", // Changed to flex-start for alignment
          justifyContent: "center",
          height: "100%",
          width: { xs: "100%", md: "50%" },
          px:1, // Padding for inner spacing
        }}
      >
        {/* Icon and Title */}
        <Box sx={{ display: "flex", flexDirection: "row", pt:15, pr: { xs: 0, md: 39 }, alignItems: "center" }}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, alignSelf: "flex-start" }}
          >
            <Image
              width={40}
              height={40}
              src={"/emojione_pizza.png"}
              alt={"Pizza Logo"}
            />
          </IconButton>
          <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "#AF5901" }}>
            Pizza
          </Typography>
        </Box>

        <Divider sx={{ fontSize: "1rem", color: "black" }} />

        {/* Input Fields */}
        {[
          { label: "Admin Name", name: "name", type: "text" },
          { label: "Email Address", name: "email", type: "email" },
          { label: "Password", name: "password", type: "password" },
          { label: "Confirm Password", name: "confirmPassword", type: "password" },
          { label: "Restaurant Name", name: "RestaurantName", type: "text" },
          { label: "Phone Number", name: "phoneNumber", type: "number" },
          { label: "Location", name: "location", type: "text" },
        ].map(({ label, name, type }) => (
          <Box key={name} sx={{ width: { xs: "100%", md: 450 }, height: 70 }}>
            <TextField
              sx={{
                width: "100%",
                display: "flex",
                gap: 1,
                flexDirection: "column",
                fontSize: "0.5rem",
              }}
              label={label}
              type={type}
              name={name} // Attach name for FormData extraction
              error={Boolean(state?.errors && state?.errors[name])}
              helperText={state?.errors && state?.errors[name]?.join(", ")}
            />
          </Box>
        ))}

        {/* File Upload Button */}
        {selectedFile?.name}
        <Button
          sx={{
            color: "#FFA500",
            borderStyle: "dotted",
            borderColor: "black",
            width: 450,
            height: 50,
            alignSelf: "center",
          }}
          key="image"
          component="label"
          variant="outlined"
          role={undefined}
          tabIndex={-1}
          startIcon={<CloudUploadIcon sx={{ color: "#FFA500" }} />}
        >
          Upload files
          <VisuallyHiddenInput
            type="file"
            onChange={handleFileChange} // Update the file state on change
            multiple={false} // Single file upload
            name="image" // Attach name for FormData extraction
          />
        </Button>
          {/* {<Typography sx={{color:"red",fontWeight:"italic",fontSize:"1rem"}}>{state?.errors['image']}</Typography> } */}

        {/* Remember Me Checkbox */}
        <FormControlLabel
          control={<Checkbox />}
          label="I accept terms and conditions"
          sx={{ alignSelf: "start", pl: { xs: 0, md: 9 } }} // Align self to start
        />

        {/* Sign Up Button */}
        <LoadingButton
  variant="contained"
  type="submit"
  loading={isPending}
  loadingPosition="start" // Set loading position to add an icon or spinner
  startIcon={
    isPending ? (
      <CircularProgress
        size={18}
        sx={{
          color: "#ffffff",
        }}
      />
    ) : null
  }
  sx={{
    backgroundColor: isPending ? "#FF8C00" : "#FFA500", // Different color during loading
    fontSize: "1rem",
    fontWeight: "bold",
    width: { xs: "100%", md: 450 },
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    "& .MuiLoadingButton-loadingIndicator": {
      color: "#ffffff", // Adjust loader color
    },
    "&:hover": {
      backgroundColor: isPending ? "#FF8C00" : "#FF7F00", // Different hover color for loading state
    },
  }}
>

  {isPending ? "Signing Up..." : "Sign Up"} {/* Show different text during loading */}
</LoadingButton>
<Typography
          sx={{
            fontWeight: "italic",
            fontSize: "0.85rem",
            color: "black",
            alignSelf: "center",
          }}
        >
          Already have  an account?{" "}
          <span style={{ color: "#FFA500" }}>
<Link style={{color:"#FFA500",textDecoration:"none"}} href={'/login'}>
            
            Login
  </Link>
            </span>
        </Typography>
      </Box>
    </Box>
  );
}
