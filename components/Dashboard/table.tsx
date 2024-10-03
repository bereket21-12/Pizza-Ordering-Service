"use client";
import React, { useState, useEffect } from "react";
import { Button, Modal, Box, TextField, Typography, MenuItem } from "@mui/material";
import { createAdmin, getRole } from "@/actions/adminAction";
import ReusableTable from "./Reusable"; // Import the reusable table

type UserData = {
  id: number;
  name: string;
  email: string; // Add email to user data
  location: string; // Add location to user data
  phoneNumber: string; // Add phoneNumber to user data
};

const MyTable = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<UserData[]>([]);
  const [roles, setRoles] = useState<{ id: number; name: string }[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    role: "", 
  });

  // Define columns for the reusable table
  const columns = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "location", header: "Location" },
    { accessorKey: "phoneNumber", header: "Phone Number" },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: (row:any) => (
        <Box display="flex" alignItems="center">
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleViewUser(row.original)}
          >
            View
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleDeleteUser()}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  // Fetch roles when the component mounts
  useEffect(() => {
    getRole()
      .then((roles) => {
        console.log("Roles", roles);
        setRoles(roles);
      })
      .catch((error) => {
        console.error("Failed to fetch roles:", error);
      });
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle role selection change
  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      role: e.target.value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = async () => {
    console.log("Form Data Submitted:", formData);
    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });
    formDataToSubmit.append("restaurantId", "1"); // Hardcoded restaurant ID for now

    try {
      await createAdmin(formDataToSubmit);
      setUsers((prev) => [...prev, { ...formData, id: Math.random() }]); // Add user with random ID for now
      setOpen(false); // Close the modal after submission
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  function handleDeleteUser(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <ReusableTable
        columns={ columns }
        data={ users }
        onAdd={ () => setOpen( true ) } // Open the modal when clicked
        onEdit={ ( user ) => console.log( "Edit user:", user ) } // Placeholder for edit
        onDelete={ handleDeleteUser } // Implement delete logic
        action={ "" }      />

      {/* Modal for Adding User */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "white",
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Add New User
          </Typography>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            fullWidth
          />
          {/* Role and Add Button in a Row */}
          <Box display="flex" flexDirection="row" gap={2} alignItems="center">
            {/* Role Drop-down */}
            <TextField
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleRoleChange}
              select
              sx={{ flex: 1 }} // Make the dropdown take equal space
            >
              {/* Assuming roles are fetched earlier */}
              {roles.map((role) => (
                <MenuItem key={role.id} value={role.id}>
                  {role.name}
                </MenuItem>
              ))}
            </TextField>
            {/* Add User Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFA500",
                color: "white",
                "&:hover": {
                  backgroundColor: "#e69500",
                },
                height: "56px", // Match TextField height
              }}
              onClick={handleFormSubmit}
            >
              Add User
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default MyTable;
function handleViewUser(user: UserData): void {
  console.log("View user:", user);
}



