"use client";
import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  TextField,
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Button,
  Switch,
  IconButton,
} from "@mui/material";
import {
  createRoleWithPermissions,
  getRole,
  UpdateRole,
  deleteRole,
  searchRole,
} from "@/actions/adminAction";
import toast from "react-hot-toast";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import ReusableTable from "@/components/Dashboard/Reusable";
import { useSession } from "next-auth/react";

type RoleData = {
  id: number;
  name: string;
  createdAt: string;
  permissions: { action: string; subject: string }[];
  Active: boolean;
};

const RolePage = () => {
  const [open, setOpen] = useState(false);
  const [roles, setRoles] = useState<RoleData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState<{
    name: string;
    permissions: { [key: string]: boolean };
  }>({
    name: "",
    permissions: {
      addUser: false,
      seeCustomer: false,
      addRole: false,
    },
  });
  const { data: session } = useSession();
  const permissionsList = [
    { label: "Update Order Status", action: "Update", subject: "Order" },
    { label: "See Order", action: "read", subject: "Order" },
    { label: "Add User", action: "create", subject: "User" },
    { label: "See Customer", action: "read", subject: "Customer" },
    { label: "Create Role", action: "create", subject: "role" },
  ];

  const fetchRoles = async () => {
    try {
      if (!session) return; // Ensure session is available
      const restaurantId = session.user.restaurantId || 0;
      const rolesData = await getRole(restaurantId);
      setRoles(
        rolesData.map((role: any) => ({
          id: role.id,
          name: role.name,
          createdAt: new Date(role.createdAt).toLocaleString(), // Format the date
          Active: role.Active,
          permissions: role.permissions,
        }))
      );
    } catch (error) {
      console.error("Failed to fetch roles:", error);
    }
  };

  const handleToggleActive = async (roleId: number, isActive: boolean) => {
    try {
      await UpdateRole(roleId, isActive);
      await fetchRoles();
      toast.success("Role status updated successfully!");
    } catch (error) {
      console.error("Failed to update role status:", error);
      toast.error("Failed to update role status.");
    }
  };

  const handleDeleteRole = async (id: number) => {
    try {
      await deleteRole(id);
      await fetchRoles();
      toast.success("Role deleted successfully!");
    } catch (error) {
      console.error("Failed to delete role:", error);
      toast.error("Failed to delete role.");
    }
  };

  const handleSearch = async (query: string) => {
    try {
      const restaurantId = session?.user?.restaurantId ?? 0; // Default to 0 if undefined
      const searchResults = await searchRole(query, restaurantId);
      setRoles(
        searchResults.map((role: any) => ({
          id: role.id,
          name: role.name,
          createdAt: new Date(role.createdAt).toLocaleString(), // Format the date
          Active: role.Active,
          permissions: role.permissions,
        }))
      );
    } catch (error) {
      console.error("Failed to search roles:", error);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, [session]);

  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery);
    } else {
      fetchRoles();
    }
  }, [searchQuery]);

  const handleAddRole = () => {
    setFormData({
      name: "",
      permissions: {
        addUser: false,
        seeCustomer: false,
        addRole: false,
      },
    });
    setOpen(true);
  };

  const handleViewRole = (role: RoleData) => {
    console.log("Viewing role:", role);
  };

  const handleFormSubmit = async () => {
    const selectedPermissions = Object.keys(formData.permissions)
      .filter((key) => formData.permissions[key])
      .map((key) => {
        const [action, subject] = key.split(/(?=[A-Z])/);
        return { action, subject: subject.toLowerCase() };
      });

    try {
      await createRoleWithPermissions(
        formData.name,
        selectedPermissions
      );
      await fetchRoles();
      toast.success("Role created successfully!");
      setOpen(false);
    } catch (error) {
      console.error("Error creating role:", error);
      toast.error("Failed to create role.");
    }
  };

  const columns = [
    { accessorKey: "name", header: "Role Name" },
    { accessorKey: "createdAt", header: "Created At" },
    {
      accessorKey: "Active",
      header: "Actions",
      Cell: ({ row }: any) => (
        <Box display="flex" alignItems="center">
          {row.original && (
            <>
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
                sx={{
                  color: row.original.Active ? "green" : "red",
                  fontSize: "0.7rem",
                }}
              />
              <IconButton
                sx={{ color: "#FFA500" }}
                onClick={() => handleViewRole(row.original)}
              >
                <VisibilityIcon />
              </IconButton>
              <IconButton
                sx={{ color: "black" }}
                color="error"
                onClick={() => handleDeleteRole(row.original.id)}
              >
                <DeleteIcon />
              </IconButton>
            </>
          )}
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ pt: 12, pr: 1 }}>
      <ReusableTable
        columns={columns}
        data={roles}
        action="Add Role"
        onAdd={handleAddRole}
        onEdit={(role) => console.log("Edit role:", role)}
        onDelete={handleDeleteRole}
        onFilterChange={setSearchQuery} // Pass the search query handler
      />

      {/* Modal for Adding/Editing Role */}
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
            {formData.name ? "Edit Role" : "Add New Role"}
          </Typography>
          <TextField
            label="Role Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            fullWidth
          />
          <Typography variant="subtitle1">Permissions:</Typography>
          <FormGroup>
            {permissionsList.map(({ label, action, subject }) => (
              <FormControlLabel
                key={action + subject}
                control={
                  <Checkbox
                    name={`${action}${subject}`}
                    checked={!!formData.permissions[`${action}${subject}`]}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        permissions: {
                          ...formData.permissions,
                          [`${action}${subject}`]: e.target.checked,
                        },
                      })
                    }
                  />
                }
                label={label}
              />
            ))}
          </FormGroup>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFA500",
              color: "white",
              "&:hover": {
                backgroundColor: "#e69500",
              },
            }}
            onClick={handleFormSubmit}
          >
            {formData.name ? "Update Role" : "Add Role"}
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default RolePage;