"use client";
import React, { useState, useEffect } from "react";
import { Box, Button, Modal, TextField, Typography, MenuItem } from "@mui/material";
import { getRole, createAdmin, getUserByRestaurant } from "@/actions/adminAction"; 
import ReusableTable from "@/components/Dashboard/Reusable";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

type UserData = {
  id: number;
  name: string | null;
  email: string;
  location: string | null;
  phoneNumber: string;
  role: string; 
};

const MyTable = () => {
  const { data: session } = useSession(); 
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

  useEffect(() => {
    const id = Number(session?.user?.restaurantId); 
    const fetchRolesAndUsers = async () => {
      try {
        // Fetch roles
        const rolesData = await getRole();
        setRoles(rolesData);

        // Fetch users with roles from the backend
        const usersData = await getUserByRestaurant(id);
        const transformedUsersData = usersData.map((user: any) => ({
          ...user,
          role: user.roles[0]?.role.name || "", // Extract the role name from the nested roles array
        }));
        setUsers(transformedUsersData);

      } catch (error) {
        console.error("Failed to fetch roles or users:", error);
      }
    };

    fetchRolesAndUsers(); // Call fetch function on mount
  }, [session]);

  // Define columns for the reusable table
  const columns = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phoneNumber", header: "Phone Number" },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: (row: any) => (
        <Box sx={{ backgroundColor: "black" }} display="flex" alignItems="center">
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
            onClick={() => handleDeleteUser(row.original.id)}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

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

  // Handle form submission for creating a new user
  const handleFormSubmit = async () => {
    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });
    formDataToSubmit.append("restaurantId", "1"); // Hardcoded restaurant ID for now

    try {
      await createAdmin(formDataToSubmit);
      setUsers((prev) => [
        ...prev,
        { ...formData, id: Math.random(), role: roles.find((r) => r.id.toString() === formData.role)?.name || "" },
      ]); // Add user to state with role name
      setOpen(false); // Close the modal after submission
      toast.success("User added successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Failed to create user.");
    }
  };

  // Handle viewing a user
  const handleViewUser = (user: UserData) => {
    console.log("Viewing user:", user);
  };

  // Handle deleting a user
  const handleDeleteUser = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    toast.success("User deleted successfully!");
  };

  return (
    <Box sx={{ pt: 12, pr: 1 }}>
      <ReusableTable
        columns={columns}
        data={users}
        action="Add User"
        onAdd={() => setOpen(true)} // Open the modal for adding a user
        onEdit={(user) => console.log("Edit user:", user)} // Placeholder for edit logic
        onDelete={handleDeleteUser} // Handle user deletion
      />

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
          <TextField label="Name" name="name" value={formData.name} onChange={handleInputChange} fullWidth />
          <TextField label="Email" name="email" value={formData.email} onChange={handleInputChange} fullWidth />
          <TextField label="Location" name="location" value={formData.location} onChange={handleInputChange} fullWidth />
          <TextField label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} fullWidth />
          <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleInputChange} fullWidth />
          <TextField label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleInputChange} fullWidth />
          <Box display="flex" flexDirection="row" gap={2} alignItems="center">
            <TextField label="Role" name="role" value={formData.role} onChange={handleRoleChange} select sx={{ flex: 1 }}>
              {roles.map((role) => (
                <MenuItem key={role.id} value={role.id}>
                  {role.name}
                </MenuItem>
              ))}
            </TextField>
            <Button variant="contained" sx={{ backgroundColor: "#FFA500", color: "white", "&:hover": { backgroundColor: "#e69500" }, height: "56px" }} onClick={handleFormSubmit}>
              Add User
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default MyTable;