import { Ability } from "@casl/ability";

export type Actions = "create" | "read" | "update" | "delete" | "manage";

export type AppAbility = Ability<[Actions, string]>;

export type ResourcePermission = {
  resource: string;
  actions: Actions[];
};
