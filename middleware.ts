import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defineDynamicAbilitiesFor, transformSession } from "@/lib/ability";
import { getToken } from "next-auth/jwt";
import { AppAbility } from "@/types/Appability";


const secret = process.env.NEXTAUTH_SECRET;

interface Permission {
  permission: {
    action: string;
    subject: string;
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
  expires: string;
}

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const token = await getToken({ req: request, secret });
  const userSession: Session | null = token
    ? {
        user: {
          id: token.id as number,
          email: token.email as string,
          name: token.name as string | null,
          roles: token.roles as Role[],
          restaurantId: token.restaurantId as number | null,
        },
        expires: token.exp
          ? new Date(Number(token.exp) * 1000).toISOString()
          : "",
      }
    : null;

  console.log("User Session:", userSession);
  console.log("Current Path:", path);

  if (!userSession && path.startsWith("/admin")) {
    return redirectTo("/login", request);
  }

  try {
    if (userSession) {
      const transformedSession = transformSession(userSession);
      const ability = await defineDynamicAbilitiesFor(transformedSession);
      console.log("User abilities:", ability.rules);

      if (isUnauthorizedAccess(path, ability)) {
        return redirectTo("/", request);
      }
    }
  } catch (error) {
    console.error("Error defining abilities:", error);
    return redirectTo("/login", request);
  }

  
  return NextResponse.next();
}


function redirectTo(destination: string, request: NextRequest) {
  return NextResponse.redirect(new URL(destination, request.url));
}


function isUnauthorizedAccess(path: string, ability: AppAbility) {
  if (path.startsWith("/admin/role") && ability.cannot("manage", "all"))
    return true;
  if (
    path.startsWith("/customer/order_history") &&
    ability.cannot("read", "pizza")
  )
    return true;
  return false;
}


export const config = {
  matcher: ["/admin/:path*", "/customer/:path*"],
};
