import { useAbility } from '@/provider/AbilityContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Actions, Subjects } from '@/types/Appability';
import { Typography} from '@mui/material';
import Loading from './common/Loding';

const ProtectedRoute = ({
  action,
  subject,
  children,
}: {
  action: Actions;
  subject: Subjects;
  children: React.ReactNode;
}) => {
  const ability = useAbility();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null); 

  useEffect(() => {
   
    if (ability) {
      const canAccess = ability.can(action, subject);
      setIsAuthorized(canAccess);

      
      if (!canAccess) {
        router.push('/login');
      }
    }
  }, [ability, action, subject, router]);

  
  if (isAuthorized === null) {
    return (
       <Loading/>
    );
  }

  // Show an unauthorized message if user cannot access this page
  if (!isAuthorized) {
    return (
      <Typography variant="h6" color="error" sx={{ textAlign: 'center', mt: 30 }}>
        You are not authorized to access this page.
      </Typography>
    );
  }

  // Render children if authorized
  return <>{children}</>;
};

export default ProtectedRoute;
