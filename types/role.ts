export type Role = "customer" | "manager" | "super-admin" | "kitchen-manager";

export type RolePermission = {
  roleId: string;
  actions: string[];
  resource: string;
};
