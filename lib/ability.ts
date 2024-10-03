import { AbilityBuilder, Ability, AbilityClass } from "@casl/ability";
import { Actions, Subjects } from "@/types/Appability";
import { MongoAbility } from "@casl/ability";

export type AppAbility = MongoAbility<[Actions, Subjects]>;

export const defineDynamicAbilitiesFor = async (
  session: any | null
): Promise<AppAbility> => {
  const { can, rules } = new AbilityBuilder<AppAbility>(
    Ability as AbilityClass<AppAbility>
  );

  const maxRetries = 5;
  let retries = 0;
  let roles;

  while (retries < maxRetries) {
    roles = session?.user?.roles;

    if (roles) {
      console.log("User Roles:", roles);

      roles.forEach(
        (role: { permissions: { action: Actions; subject: Subjects }[] }) => {
          const permissions = role.permissions || [];
          permissions.forEach((permission) => {
            can(permission.action, permission.subject); //
          });
        }
      );
      break;
    } else {
      console.log("No roles defined for the user. Retrying...");
      retries++;
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  if (!roles) {
    console.log(
      "No roles found after retries. Returning abilities with no rules."
    );
  }

  return new Ability(rules) as AppAbility;
};
