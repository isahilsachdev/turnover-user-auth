import { useEffect } from 'react';
import { useRouter } from 'next/router';
 
export default function PrivateRoute({ protectedRoutes, children }) {
  const router = useRouter();
  const isAuthenticated = localStorage.getItem('token');
 
  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;
 
  useEffect(() => {
    if (!isAuthenticated && pathIsProtected) {
      router.push('/login');
    }
  }, [isAuthenticated, pathIsProtected]);
 
  return children;
}