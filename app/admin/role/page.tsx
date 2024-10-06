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
import { createRoleWithPermissions, getRole, UpdateRole, deleteRole, searchRole } from "@/actions/adminAction";
import toast from "react-hot-toast"; 
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete"; 
import ReusableTable from "@/components/Dashboard/Reusable"; 

type RoleData = {
  id: number;
  name: string;
  createdAt: string;
  permissions: { action: string; subject: string }[];
  isActive: boolean; 
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

  const permissionsList = [
    { label: "Update Order Status", action: "Update", subject: "Order" },
    { label: "See Order", action: "read", subject: "Order" },
    { label: "Add User", action: "create", subject: "User" },
    { label: "See Customer", action: "read", subject: "Customer" },
    { label: "Create Role", action: "create", subject: "role" },
  ];

  const handleToggleActive = async (roleId: number, isActive: boolean) => {
    try {
      await UpdateRole(roleId, isActive);
      setRoles((prevRoles) =>
        prevRoles.map((role) =>
          role.id === roleId ? { ...role, isActive } : role
        )
      );
      toast.success("Role status updated successfully!");
    } catch (error) {
      console.error("Failed to update role status:", error);
      toast.error("Failed to update role status.");
    }
  };

  const handleDeleteRole = async (id: number) => {
    try {
      await deleteRole(id); // Delete the role in the backend
      setRoles((prevRoles) => prevRoles.filter((role) => role.id !== id));
      toast.success("Role deleted successfully!");
    } catch (error) {
      console.error("Failed to delete role:", error);
      toast.error("Failed to delete role.");
    }
  };

  const columns = [
    { accessorKey: "name", header: "Role Name" },
    { accessorKey: "createdAt", header: "Created At" },
    {
      accessorKey: "actions",
      header: "Actions",
      Cell: ({ row }: any) => (
        <Box display="flex" alignItems="center">
          {row.original && (
            <>
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
                sx={{ color: row.original.isActive ? "green" : "red", fontSize: "0.7rem" }}
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

  // Fetch roles when the component mounts
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const rolesData = await getRole(); // Fetch role data from the backend
        setRoles(
          rolesData.map((role: any) => ({
            id: role.id,
            name: role.name,
            createdAt: role.createdAt || new Date().toISOString(),
            isActive: role.isActive,
            permissions: role.permissions,
          }))
        );
      } catch (error) {
        console.error("Failed to fetch roles:", error);
      }
    };

    fetchRoles();
  }, []);

  const handleSearch = async (query: string) => {
    try {
      const searchResults = await searchRole(query);
      setRoles(
        searchResults.map((role: any) => ({
          id: role.id,
          name: role.name,
          createdAt: role.createdAt || new Date().toISOString(),
          isActive: role.isActive,
          permissions: role.permissions,
        }))
      );
    } catch (error) {
      console.error("Failed to search roles:", error);
    }
  };

  const handleAddRole = () => {
    // Reset form data and open the modal
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
    // Construct permissions from the formData state
    const selectedPermissions = Object.keys(formData.permissions)
      .filter((key) => formData.permissions[key])
      .map((key) => {
        const [action, subject] = key.split(/(?=[A-Z])/);
        return { action, subject: subject.toLowerCase() };
      });

    try {
      const newRole = await createRoleWithPermissions(
        formData.name,
        selectedPermissions
      );
      setRoles((prevRoles) => [
        ...prevRoles,
        {
          id: newRole.id,
          name: newRole.name,
          createdAt: new Date().toISOString(),
          permissions: newRole.permissions.map((perm: any) => ({
            action: perm.action,
            subject: perm.subject,
          })),
          isActive: true,
        },
      ]);
      toast.success("Role created successfully!");
      setOpen(false);
    } catch (error) {
      console.error("Error creating role:", error);
      toast.error("Failed to create role.");
    }
  };

  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery);
    } else {
      const fetchRoles = async () => {
        try {
          const rolesData = await getRole(); // Fetch role data from the backend
          setRoles(
            rolesData.map((role: any) => ({
              id: role.id,
              name: role.name,
              createdAt: role.createdAt || new Date().toISOString(),
              isActive: role.isActive,
              permissions: role.permissions,
            }))
          );
        } catch (error) {
          console.error("Failed to fetch roles:", error);
        }
      };

      fetchRoles();
    }
  }, [searchQuery]);

  return (
    <Box sx={{ pt: 12, pr: 1 }}>
      <ReusableTable
        columns={columns}
        data={roles}
        action="Add Role"
        onAdd={handleAddRole} 
        onEdit={(role) => console.log("Edit role:", role)}
        onDelete={handleDeleteRole} 
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
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
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