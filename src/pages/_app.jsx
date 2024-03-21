import 'tailwindcss/tailwind.css';
import '../globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

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
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
