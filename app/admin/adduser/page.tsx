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
import {
  getRole,
  createAdmin,
  getUserByRestaurant,
  searchUser,
  updateUser,
  deleteUser,
} from "@/actions/adminAction";
import ReusableTable from "@/components/Dashboard/Reusable";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import DeleteIcon from "@mui/icons-material/Delete";

type UserData = {
  id: number;
  name: string | null;
  email: string;
  location: string | null;
  phoneNumber: string;
  role: string;
  Active: boolean;
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
          Active: user.Active || false,
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
            Active: user.Active || false, // Initialize Active property
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
      const id = Number(session?.user?.restaurantId);

      const searchResults = await searchUser(query, id);
      const transformedSearchResults = searchResults.map((user: any) => ({
        ...user,
        role: user.roles[0]?.role.name || "",
        Active: user.Active || false,
      }));
      setUsers(transformedSearchResults);
    } catch (error) {
      console.error("Failed to search users:", error);
    }
  };

  const handleToggleActive = (userId: number, isActive: boolean) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, Active: isActive } : user
      )
    );
    try {
      updateUser(userId, isActive);
      toast.success("User status updated successfully!");
    } catch (error) {
      console.error("Failed to update user status:", error);
      toast.error("Failed to update user status.");
    }
  };

  const handleFilterChange = async ({
    filters,
    globalFilter,
  }: {
    filters: { id: string; value: string | number | null }[];
    globalFilter: string;
  }) => {
    console.log("Filtering users:", filters, globalFilter);
    try {
      const restaurantId = session?.user?.restaurantId;
      if (typeof restaurantId === "number") {
        let searchResults;
        if (globalFilter) {
          searchResults = await searchUser(globalFilter, restaurantId);
        } else if (filters.length > 0) {
          const filterParams = filters.reduce(
            (acc: Record<string, string | number | null>, filter) => {
              const value = filter.value;
              if (
                typeof value === "string" ||
                typeof value === "boolean" ||
                value === null
              ) {
                switch (filter.id) {
                  case "name":
                    acc.name = value;
                    break;
                  case "email":
                    acc.email = value;
                    break;
                  case "phoneNumber":
                    acc.phoneNumber = value;
                    break;
                  case "Active":
                    acc.Active = value;
                    break;
                  default:
                    acc[filter.id] = value;
                }
              }
              return acc;
            },
            {} as Record<string, string | number | null>
          );

          console.log("Filter params before calling searchUser:", filterParams);

          searchResults = await searchUser(filterParams, restaurantId);
          console.log("Column filter results:", searchResults);
          setUsers(
            Array.isArray(searchResults)
              ? searchResults.map((user: any) => ({
                  ...user,
                  role: user.roles[0]?.role.name || "",
                  Active: user.Active || false,
                }))
              : []
          );
        } else {
          searchResults = await getUserByRestaurant(restaurantId);
        }
        console.log("Filter results:", searchResults);
        setUsers(
          Array.isArray(searchResults)
            ? searchResults.map((user: any) => ({
                ...user,
                role: user.roles[0]?.role.name || "",
                Active: user.Active || false,
              }))
            : []
        );
      } else {
        console.error("Invalid restaurant ID:", restaurantId);
      }
    } catch (error) {
      console.error("Failed to filter users:", error);
    }
  };

  const columns = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phoneNumber", header: "Phone Number" },
    {
      accessorKey: "Active",
      header: "Actions",
      Cell: ({ row }: any) => (
        <Box display="flex" alignItems="center">
          <Typography
            sx={{
              ml: 1,
              fontSize: "0.8rem",
              color: row.original.Active ? "green" : "red",
            }}
          >
            {row.original.Active ? "Active" : "Inactive"}
          </Typography>
          <Switch
            checked={row.original.Active}
            onChange={() =>
              handleToggleActive(row.original.id, !row.original.Active)
            }
            color="primary"
          />
          <IconButton
            sx={{ color: "black" }}
            color="error"
            onClick={() => handleDeleteUser(row.original.id)}
          >
            <DeleteIcon />
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
      const response = await createAdmin(formDataToSubmit);

      if (response.success == true) {
        setUsers((prev) => [
          ...prev,
          {
            ...formData,
            id: Math.random(),
            role:
              roles.find((r) => r.id.toString() === formData.role)?.name || "",
            Active: true,
          },
        ]);
        setOpen(false);
        toast.success("User added successfully!");
      } else {
        console.error(
          "Error creating user:",
          response.errors || response.error
        );
        toast.error("Failed to create user.");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Failed to create user.");
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser(id);
      toast.success("User deleted successfully!");
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Failed to delete user:", error);
      toast.error("Failed to delete user.");
    }
  };

  return (
    <Box sx={{ pt: 12, pr: 1 }}>
      <ReusableTable
        columns={columns}
        data={users}
        onFilterChange={handleFilterChange}
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
