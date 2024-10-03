// types/abilityTypes.ts
import { MongoAbility } from "@casl/ability"; // Import CASL's core types

// Define the types of actions users can take in the application
export type Actions = "manage" | "create" | "read" | "update" | "delete";

// Define the types of subjects/resources users can perform actions on
export type Subjects =
  | "Pizza"
  | "Topping"
  | "Order"
  | "User"
  | "Restaurant"
  | "all"
  | "Role";

// Define a tuple representing a CASL ability for the app
export type AppAbility = MongoAbility<[Actions, Subjects | string]>; // Or Ability<[Actions, Subjects]>
