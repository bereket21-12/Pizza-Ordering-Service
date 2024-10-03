// RoleTable.tsx
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
} from "@mui/material";
import { createRoleWithPermissions, getRole } from "@/actions/adminAction";
import toast from "react-hot-toast"; // Import toast for notifications
import VisibilityIcon from "@mui/icons-material/Visibility"; // Eye icon
import DeleteIcon from "@mui/icons-material/Delete"; // Delete icon
import ReusableTable from "./Reusable"; // Adjust the path to your ReusableTable

type RoleData = {
  id: number;
  name: string;
  createdAt: string;
  permissions: { action: string; subject: string }[];
  isActive: boolean; // Track active/inactive status
};

const RoleTable = () => {
  const [open, setOpen] = useState(false);
  const [roles, setRoles] = useState<RoleData[]>([]);
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

  // Define the permissions list
  const permissionsList = [
    { label: "Add User", action: "add", subject: "User" },
    { label: "See Customer", action: "see", subject: "Customer" },
    { label: "Add Role", action: "add", subject: "Role" },
  ];

  // Define columns for the reusable table
  const columns = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Role Name" },
    { accessorKey: "createdAt", header: "Created At" },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: (row:any) => (
        <Box display="flex" alignItems="center">
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleViewRole(row.original)}
          >
            <VisibilityIcon />
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleDeleteRole(row.original.id)}
          >
            <DeleteIcon />
          </Button>
        </Box>
      ),
    },
  ];

  // Fetch roles when the component mounts
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const rolesData = await getRole(); // Fetch role data from the backend
        setRoles(rolesData.map((role: any) => ({
          id: role.id,
          name: role.name,
          createdAt: role.createdAt || new Date().toISOString(),
          isActive: role.isActive,
          permissions: role.permissions,
        })));
      } catch (error) {
        console.error("Failed to fetch roles:", error);
      }
    };

    fetchRoles();
  }, []);

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

  const handleDeleteRole = (id: number) => {
    console.log("Deleting role with ID:", id);
    // Implement delete logic if needed
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
      const newRole = await createRoleWithPermissions(formData.name, selectedPermissions);
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

  return (
    <div>
      <ReusableTable
        columns={ columns }
        data={ roles }
        onAdd={ handleAddRole } // Pass the add handler
        onEdit={ ( role ) => console.log( "Edit role:", role ) } // Example edit handler
        onDelete={ handleDeleteRole } // Pass the delete handler
        action={ "" }      />

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
                    onChange={(e) => setFormData({
                      ...formData,
                      permissions: {
                        ...formData.permissions,
                        [`${action}${subject}`]: e.target.checked,
                      },
                    })}
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
    </div>
  );
};

export default RoleTable;
