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
  updateRoleWithPermissions,
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
  permissions: {
    action: string;
    subject: string;
  }[];
  active: boolean;
};

const RolePage = () => {
  const [open, setOpen] = useState(false);
  const [roles, setRoles] = useState<RoleData[]>([]);
  const [searchQuery] = useState("");
  const [formData, setFormData] = useState<{
    id?: number;
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
    { label: "Update Order Status", action: "update", subject: "order" },
    { label: "See Order", action: "read", subject: "order" },
    { label: "Add User", action: "create", subject: "user" },
    { label: "See Customer", action: "read", subject: "customer" },
    { label: "Create Role", action: "create", subject: "role" },
  ];

  const fetchRoles = async () => {
    try {
      if (!session) return; // Ensure session is available
      const restaurantId = session?.user?.restaurantId || 0;
      const rolesData = await getRole(restaurantId);
      setRoles(
        rolesData.map((role: any) => ({
          id: role.id,
          name: role.name,
          createdAt: new Date(role.createdAt).toLocaleString(),
          active: role.Active,
          permissions: role.permissions.map((perm: any) => ({
            action: perm.permission.action,
            subject: perm.permission.subject,
          })),
        }))
      );
    } catch (error) {
      console.error("Failed to fetch roles:", error);
    }
  };

  const handleToggleActive = async (roleId: number, isActive: boolean) => {
    try {
      await UpdateRole(roleId, isActive);
      setRoles((prevRoles) =>
        prevRoles.map((role) =>
          role.id === roleId ? { ...role, active: isActive } : role
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
      const restaurantId = session?.user?.restaurantId ?? 0;
      const searchResults = await searchRole({ global: query }, restaurantId);
      setRoles(
        searchResults.map((role: any) => ({
          id: role.id,
          name: role.name,
          createdAt: new Date(role.createdAt).toLocaleString(),
          active: role.Active,
          permissions: role.permissions.map((perm: any) => ({
            action: perm.permission.action,
            subject: perm.permission.subject,
          })),
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

  const handleEditRole = (role: RoleData) => {
    const permissions = role.permissions.reduce(
      (acc: { [key: string]: boolean }, perm) => {
        console.log("perm", perm);
        if (perm) {
          const { action, subject } = perm;
          acc[
            `${action}${subject.charAt(0).toUpperCase() + subject.slice(1)}`
          ] = true;
        }
        return acc;
      },
      {}
    );
    setFormData({
      id: role.id,
      name: role.name,
      permissions,
    });
    setOpen(true);
  };

  const handleFormSubmit = async () => {
    const restaurantId = session?.user?.restaurantId || 0;

    const selectedPermissions = Object.keys(formData.permissions)
      .filter((key) => formData.permissions[key])
      .map((key) => {
        const [action, subject] = key.split(/(?=[A-Z])/);
        return { action, subject: subject ? subject.toLowerCase() : "" };
      });

    try {
      let response;
      if (formData.id) {
        response = await updateRoleWithPermissions(
          formData.id,
          formData.name,
          selectedPermissions
        );
      } else {
        response = await createRoleWithPermissions(
          formData.name,
          restaurantId,
          selectedPermissions
        );
      }

      if ("success" in response && response.success) {
        toast.success(
          formData.id
            ? "Role updated successfully!"
            : "Role created successfully!"
        );
        await fetchRoles();
        setOpen(false);
      } else {
        toast.error(
          formData.id ? "Failed to Update role!" : "Failed to Create role!"
        );
      }
    } catch (error) {
      console.error("Error creating/updating role:", error);
      toast.error("Failed to create/update role.");
      await fetchRoles();
      setOpen(false);
    }
  };

  const handleFilterChange = async ({
    filters,
    globalFilter,
  }: {
    filters: { id: string; value: string | number | null }[];
    globalFilter: string;
  }) => {
    console.log("Filtering roles:", filters, globalFilter);
    try {
      const restaurantId = session?.user?.restaurantId;
      if (typeof restaurantId === "number") {
        let searchResults;
        if (globalFilter) {
          searchResults = await searchRole(
            { global: globalFilter },
            restaurantId
          );
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
                  case "active":
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

          console.log("Filter params before calling searchRole:", filterParams);

          searchResults = await searchRole(filterParams, restaurantId);
          console.log("Column filter results:", searchResults);
          setRoles(
            Array.isArray(searchResults)
              ? searchResults.map((role: any) => ({
                  id: role.id,
                  name: role.name,
                  createdAt: new Date(role.createdAt).toLocaleString(),
                  active: role.Active,
                  permissions: role.permissions.map((perm: any) => ({
                    action: perm.permission.action,
                    subject: perm.permission.subject,
                  })),
                }))
              : []
          );
        } else {
          searchResults = await getRole(restaurantId);
        }
        console.log("Filter results:", searchResults);
        setRoles(
          Array.isArray(searchResults)
            ? searchResults.map((role: any) => ({
                id: role.id,
                name: role.name,
                createdAt: new Date(role.createdAt).toLocaleString(),
                active: role.Active, // Correctly map the active property
                permissions: role.permissions.map((perm: any) => ({
                  action: perm.permission.action,
                  subject: perm.permission.subject,
                })),
              }))
            : []
        );
      } else {
        console.error("Invalid restaurant ID:", restaurantId);
      }
    } catch (error) {
      console.error("Failed to filter roles:", error);
    }
  };

  const columns = [
    { accessorKey: "name", header: "Role Name" },
    { accessorKey: "createdAt", header: "Created At" },
    {
      accessorKey: "active",
      header: "Actions",
      Cell: ({ row }: any) => (
        <Box display="flex" alignItems="center">
          {row.original && (
            <>
              <Typography
                sx={{
                  ml: 1,
                  fontSize: "0.8rem",
                  color: row.original.active ? "green" : "red",
                }}
              >
                {row.original.active ? "Active" : "Inactive"}
              </Typography>
              <Switch
                checked={row.original.active}
                onChange={() =>
                  handleToggleActive(row.original.id, !row.original.active)
                }
                sx={{
                  color: row.original.active ? "green" : "red",
                  fontSize: "0.7rem",
                }}
              />
              <IconButton
                sx={{ color: "#FFA500" }}
                onClick={() => handleEditRole(row.original)}
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
        onEdit={(role) => handleEditRole(role)}
        onDelete={handleDeleteRole}
        onFilterChange={handleFilterChange}
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
            boxShadow: 4,
            borderRadius: 2,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            {formData.id ? "Edit Role" : "Add New Role"}
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
                    name={`${action}${
                      subject.charAt(0).toUpperCase() + subject.slice(1)
                    }`}
                    checked={
                      !!formData.permissions[
                        `${action}${
                          subject.charAt(0).toUpperCase() + subject.slice(1)
                        }`
                      ]
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        permissions: {
                          ...formData.permissions,
                          [`${action}${
                            subject.charAt(0).toUpperCase() + subject.slice(1)
                          }`]: e.target.checked,
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
            {formData.id ? "Update Role" : "Add Role"}
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default RolePage;
