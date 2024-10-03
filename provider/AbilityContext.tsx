'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Ability} from '@casl/ability';
import { defineDynamicAbilitiesFor } from '@/lib/ability';
import { useSession, SessionContextValue } from 'next-auth/react';
import { AppAbility } from '@/types/Appability';

const AbilityContext = createContext<AppAbility | null>(null);

export const AbilityProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status }: SessionContextValue = useSession();
  const [ability, setAbility] = useState<AppAbility>(new Ability([]) as AppAbility);

  useEffect(() => {
    if (status === 'authenticated') {
      const fetchAbilities = async () => {
        const userAbility = await defineDynamicAbilitiesFor(session) as AppAbility;
        console.log("Defined Abilities:", userAbility.rules); // Debug: Check what rules are being defined
        setAbility(userAbility);
      };
      fetchAbilities();
    }
  }, [session, status]);

  return <AbilityContext.Provider value={ability}>{children}</AbilityContext.Provider>;
};

export const useAbility = () => {
  const context = useContext(AbilityContext);
  if (!context) {
    throw new Error('useAbility must be used within an AbilityProvider');
  }
  return context;
};
