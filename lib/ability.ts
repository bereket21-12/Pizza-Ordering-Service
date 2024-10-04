import { AbilityBuilder, Ability, AbilityClass } from "@casl/ability";
import { Actions, Subjects } from "@/types/Appability";
import { MongoAbility } from "@casl/ability";
import { Session as NextAuthSession } from "next-auth";

export type AppAbility = MongoAbility<[Actions, Subjects]>;

interface Permission {
  permission: {
    action: Actions;
    subject: Subjects;
  };
}

interface Role {
  role: {
    name: string;
    permissions: Permission[];
  };
}

interface User {
  id: number;
  email: string;
  name?: string | null;
  roles: Role[];
  restaurantId: number | null;
}

interface Session {
  user: User;
}


export const transformSession = (nextAuthSession: NextAuthSession) : Session | null => {
  return {
    user: {
      id: nextAuthSession.user.id,
      email: nextAuthSession.user.email,
      name: nextAuthSession.user.name,
      roles: nextAuthSession.user.roles.map((role) => ({
        role: {
          name: role.role.name,
          permissions: role.role.permissions.map((permission) => ({
            permission: {
              action: permission.permission.action as Actions,
              subject: permission.permission.subject as Subjects,
            },
          })),
        },
      })),
      restaurantId: nextAuthSession.user.restaurantId,
    },
  };
};

export const defineDynamicAbilitiesFor = async (
  session: Session | null
): Promise<AppAbility> => {
  const { can, rules } = new AbilityBuilder<AppAbility>(
    Ability as AbilityClass<AppAbility>
  );

  const roles = session?.user?.roles;

  if (roles) {
    console.log("User Roles:", roles);

    roles.forEach((role) => {
      const permissions = role.role.permissions || [];

      permissions.forEach((permission) => {
        can(permission.permission.action, permission.permission.subject); // Map ability
      });
    });
  } else {
    console.log("No roles defined for the user.");
  }

  return new Ability(rules) as AppAbility;
};
