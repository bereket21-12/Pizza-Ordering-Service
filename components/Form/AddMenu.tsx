'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from 'next/navigation';
import { useActionStateCompat } from "@strozw/use-action-state-compat";
import { handleCreateMenu } from '@/actions/adminAction';

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

function AddMenu() {
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [extraToppings, setExtraToppings] = useState<string[]>([]);
  const [checkedToppings, setCheckedToppings] = useState<string[]>([
    "Mozzarella",
    "Onions",
    "Bell Peppers",
    "Olives"
  ]);
  const [state, executeAction] = useActionStateCompat(handleCreateMenu, null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  // Handler to add new text field for toppings
  const handleAddTopping = () => {
    setExtraToppings([...extraToppings, ""]); // Add an empty string for the new topping
  };

  // Handler to toggle checkbox selection for predefined toppings
  const handleCheckboxChange = (topping: string) => {
    setCheckedToppings((prev) =>
      prev.includes(topping) ? prev.filter((t) => t !== topping) : [...prev, topping]
    );
  };

  // Form submission handler
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    // Constructing the toppings array
    const data = {
      name: formData.get('Name') as string,
      price: formData.get('Price') as string,
      toppings: [
        ...checkedToppings, // Include selected predefined toppings
        ...extraToppings.filter((topping) => topping.trim() !== ""), // Include non-empty custom toppings
      ],
    };
    
    console.log('Form submitted:', data);

    // Prepare FormData for sending
    const formDataToSend = new FormData();
    formDataToSend.append('name', data.name);
    formDataToSend.append('price', data.price);
    data.toppings.forEach((topping, index) => {
      formDataToSend.append(`toppings[${index}]`, topping); // Use array indexing for toppings
    });
    
    if (selectedFile) {
      formDataToSend.append('image', selectedFile);
    }

    executeAction(formDataToSend); // Execute the server action
  };

  useEffect(() => {
    if (state?.success) {
      ref.current?.reset(); // Reset the form after submission
      router.push("/admin/dashboard");
    }
  }, [state?.success, router]);

  return (
    <Box
      ref={ref}
      component="form"
      onSubmit={handleSubmit}
      method="post"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
        height: "100%",
        mx: "auto",
        mt: 9,
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "40%", m: "auto", display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography sx={{ alignSelf: "center", fontSize: "1.3rem" }}>Add Menu</Typography>
        <TextField label={"Name"} type={"text"} name={"Name"} />

        <Typography sx={{ fontSize: "1.4rem", color: "gray", alignSelf: "start" }}>Topping</Typography>
        <FormGroup sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
          {/* Predefined Checkboxes */}
          {["Mozzarella", "Onions", "Bell Peppers", "Olives"].map((topping) => (
            <FormControlLabel
              key={topping}
              control={
                <Checkbox
                  checked={checkedToppings.includes(topping)}
                  onChange={() => handleCheckboxChange(topping)}
                  sx={{
                    "& .MuiSvgIcon-root": { color: "#FFA500" },
                    "&.Mui-checked .MuiSvgIcon-root": { color: "#FFA500" },
                  }}
                />
              }
              label={topping}
            />
          ))}
          {/* Button to add new text field */}
          <Button
            sx={{ width: 30, height: 30, minWidth: 30, backgroundColor: "#FFA500" }}
            variant="contained"
            onClick={handleAddTopping}
          >
            <AddIcon fontSize="small" />
          </Button>
        </FormGroup>

        {/* Render additional text fields for new toppings */}
        {extraToppings.map((topping, index) => (
          <TextField
            key={index}
            label={`Additional Topping ${index + 1}`}
            type={"text"}
            size="small"
            sx={{ width: 200, alignSelf: "start" }}
            value={topping}
            onChange={(e) => {
              const updatedToppings = [...extraToppings];
              updatedToppings[index] = e.target.value;
              setExtraToppings(updatedToppings);
            }}
          />
        ))}

        <TextField label={"Price"} type={"number"} name={"Price"} />
        <Button
          sx={{
            color: "#FFA500",
            borderStyle: "dotted",
            borderColor: "black",
            width: 250,
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
            onChange={handleFileChange}
            multiple={false}
            name="image"
          />
        </Button>
        {/* <Typography sx={{color:"red",fontWeight:"italic",fontSize:"1rem"}}>{state?.errors['image']}</Typography> */}
        
        <Button
          type='submit'
          sx={{
            color: "white",
            backgroundColor: "#FFA500",
            width: 200,
            height: 50,
            borderRadius: 5,
            alignSelf: "center",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default AddMenu;
