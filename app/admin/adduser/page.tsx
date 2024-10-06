"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  MenuItem,
  IconButton,
  Switch,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  getRole,
  createAdmin,
  getUserByRestaurant,
  searchUser,
} from "@/actions/adminAction";
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
  const [searchQuery] = useState("");
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
        const rolesData = await getRole(id);
        setRoles(rolesData);

        const usersData = await getUserByRestaurant(id);
        const transformedUsersData = usersData.map((user: any) => ({
          ...user,
          role: user.roles[0]?.role.name || "",
        }));
        setUsers(transformedUsersData);
      } catch (error) {
        console.error("Failed to fetch roles or users:", error);
      }
    };

    fetchRolesAndUsers();
  }, [session]);

  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery);
    } else {
      const id = Number(session?.user?.restaurantId);
      const fetchUsers = async () => {
        try {
          const usersData = await getUserByRestaurant(id);
          const transformedUsersData = usersData.map((user: any) => ({
            ...user,
            role: user.roles[0]?.role.name || "",
          }));
          setUsers(transformedUsersData);
        } catch (error) {
          console.error("Failed to fetch users:", error);
        }
      };

      fetchUsers();
    }
  }, [searchQuery, session]);

  const handleSearch = async (query: string) => {
    try {
      const searchResults = await searchUser(query);
      const transformedSearchResults = searchResults.map((user: any) => ({
        ...user,
        role: user.roles[0]?.role.name || "",
      }));
      setUsers(transformedSearchResults);
    } catch (error) {
      console.error("Failed to search users:", error);
    }
  };

  const handleToggleActive = (userId: number, isActive: boolean) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isActive } : user
      )
    );
  };

  const columns = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phoneNumber", header: "Phone Number" },
    {
      accessorKey: "actions",
      header: "Actions",
      Cell: ({ row }: any) => (
        <Box display="flex" alignItems="center">
          <Typography
            sx={{
              ml: 1,
              fontSize: "0.8rem",
              color: row.original.isActive ? "green" : "red",
            }}
          >
            {row.original.isActive ? "Active" : "Inactive"}
          </Typography>
          <Switch
            checked={row.original.isActive}
            onChange={() =>
              handleToggleActive(row.original.id, !row.original.isActive)
            }
            color="primary"
          />
          <IconButton sx={{ color: "#FFA500" }}>
            <VisibilityIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      role: e.target.value,
    }));
  };

  const handleFormSubmit = async () => {
    const id = Number(session?.user?.restaurantId);
    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });
    formDataToSubmit.append("restaurantId", id.toString());

    try {
      await createAdmin(formDataToSubmit);
      setUsers((prev) => [
        ...prev,
        {
          ...formData,
          id: Math.random(),
          role:
            roles.find((r) => r.id.toString() === formData.role)?.name || "",
        },
      ]);
      setOpen(false);
      toast.success("User added successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Failed to create user.");
    }
  };

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
        onAdd={() => setOpen(true)}
        onEdit={(user) => console.log("Edit user:", user)}
        onDelete={handleDeleteUser}
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
          <Box display="flex" flexDirection="row" gap={2} alignItems="center">
            <TextField
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleRoleChange}
              select
              sx={{ flex: 1 }}
            >
              {roles.map((role) => (
                <MenuItem key={role.id} value={role.id}>
                  {role.name}
                </MenuItem>
              ))}
            </TextField>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFA500",
                color: "white",
                "&:hover": { backgroundColor: "#e69500" },
                height: "56px",
              }}
              onClick={handleFormSubmit}
            >
              Add User
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default MyTable;
