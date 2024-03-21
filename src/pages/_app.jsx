import 'tailwindcss/tailwind.css';
import '../globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PrivateRoute from '@/components/PrivateRoute';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const protectedRoutes = ['/category'];

  useEffect(() => {
    if (!router.isReady) return;

    setLoading(false);
  }, [router.isReady]);

  if (loading) {
    // Show loader or any loading indicator until redirection happens
    return <div>Loading...</div>;
  }

  return (
    <>
      <PrivateRoute protectedRoutes={protectedRoutes}>
        <Component {...pageProps} />
      </PrivateRoute>
    </>
  );
};

export default MyApp;
