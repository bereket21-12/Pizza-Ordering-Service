import { Ability } from "@casl/ability";

// Actions that can be performed on resources
export type Actions = "create" | "read" | "update" | "delete" | "manage";

// CASL Ability configuration for defining user permissions
export type AppAbility = Ability<[Actions, string]>;

// Represents a resource and the actions a user can take on it
export type ResourcePermission = {
  resource: string; // Resource name (e.g., 'Order')
  actions: Actions[]; // List of allowed actions
};
