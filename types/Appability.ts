import { MongoAbility } from "@casl/ability";
export type Actions = "manage" | "create" | "read" | "update" | "delete";

export type Subjects =
  | "Pizza"
  | "Topping"
  | "Order"
  | "User"
  | "Restaurant"
  | "all"
  | "Role";

export type AppAbility = MongoAbility<[Actions | string, Subjects | string]>;
