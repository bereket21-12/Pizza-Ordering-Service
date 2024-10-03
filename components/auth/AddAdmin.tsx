'use client'
import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";

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
  const [extraToppings, setExtraToppings] = useState<string[]>([]);
  const [checkedToppings, setCheckedToppings] = useState<string[]>([
    "Mozzarella",
    "Onions",
    "Bell Peppers",
    "Olives"
  ]);

  // Handler to add new text field for toppings
  const handleAddTopping = () => {
    setExtraToppings([...extraToppings, ""]);
  };

  // Handler to toggle checkbox selection for predefined toppings
  const handleCheckboxChange = (topping: string) => {
    setCheckedToppings((prev) =>
      prev.includes(topping) ? prev.filter((t) => t !== topping) : [...prev, topping]
    );
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('Name') as string,
      price: formData.get('Price') as string,
      toppings: [
        ...checkedToppings, // Include selected predefined toppings
        ...extraToppings.filter((topping) => topping.trim() !== ""), // Include non-empty custom toppings
      ],
    };
    console.log('Form submitted:', data);
    // Add further logic to handle form submission (e.g., sending data to the server).
  }

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
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
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedToppings.includes("Mozzarella")}
                onChange={() => handleCheckboxChange("Mozzarella")}
                sx={{
                  "& .MuiSvgIcon-root": { color: "#FFA500" },
                  "&.Mui-checked .MuiSvgIcon-root": { color: "#FFA500" },
                }}
              />
            }
            label="Mozzarella"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedToppings.includes("Onions")}
                onChange={() => handleCheckboxChange("Onions")}
                sx={{
                  "& .MuiSvgIcon-root": { color: "#FFA500" },
                  "&.Mui-checked .MuiSvgIcon-root": { color: "#FFA500" },
                }}
              />
            }
            label="Onions"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedToppings.includes("Bell Peppers")}
                onChange={() => handleCheckboxChange("Bell Peppers")}
                sx={{
                  "& .MuiSvgIcon-root": { color: "#FFA500" },
                  "&.Mui-checked .MuiSvgIcon-root": { color: "#FFA500" },
                }}
              />
            }
            label="Bell Peppers"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedToppings.includes("Olives")}
                onChange={() => handleCheckboxChange("Olives")}
                sx={{
                  "& .MuiSvgIcon-root": { color: "#FFA500" },
                  "&.Mui-checked .MuiSvgIcon-root": { color: "#FFA500" },
                }}
              />
            }
            label="Olives"
          />
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
            size="small" // Small size for the added fields
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
            width: 200,
            height: 50,
            alignSelf: "center",
          }}
          component="label"
          variant="outlined"
          role={undefined}
          tabIndex={-1}
          startIcon={<CloudUploadIcon sx={{ color: "#FFA500" }} />}
        >
          Upload files
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
          />
        </Button>
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
