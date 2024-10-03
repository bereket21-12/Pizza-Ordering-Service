// Represents a user role
export type Role = "customer" | "manager" | "super-admin" | "kitchen-manager";

// Role permissions for different resources
export type RolePermission = {
  roleId: string; // Role ID or name
  actions: string[]; // List of permitted actions (e.g., 'create', 'read', 'update', 'delete')
  resource: string; // The resource these permissions apply to (e.g., 'Order', 'Pizza', 'User')
};
