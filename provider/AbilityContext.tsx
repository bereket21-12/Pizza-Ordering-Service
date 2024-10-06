"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Ability } from "@casl/ability";
import { defineDynamicAbilitiesFor, transformSession } from "@/lib/ability";
import { useSession, SessionContextValue } from "next-auth/react";
import { AppAbility } from "@/types/Appability";

const AbilityContext = createContext<AppAbility | null>(null);

export const AbilityProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: session, status }: SessionContextValue = useSession();
  const [ability, setAbility] = useState<AppAbility>(
    new Ability([]) as AppAbility
  );

  useEffect(() => {
    if (status === "authenticated" && session) {
      const fetchAbilities = async () => {
        const transformedSession = transformSession(session);
        const userAbility = (await defineDynamicAbilitiesFor(
          transformedSession
        )) as AppAbility;
        console.log("Defined Abilities:", userAbility.rules);
        setAbility(userAbility);
      };
      fetchAbilities();
    }
  }, [session, status]);

  return (
    <AbilityContext.Provider value={ability}>
      {children}
    </AbilityContext.Provider>
  );
};

export const useAbility = () => {
  const context = useContext(AbilityContext);
  if (!context) {
    throw new Error("useAbility must be used within an AbilityProvider");
  }
  return context;
};
