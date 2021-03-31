import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setPageLoading(true);
    const handleComplete = () => setPageLoading(false);

    router.events.on('routerChangeStart', handleStart);
    router.events.on('routerChangeComplete', handleComplete);
    router.events.on('routerChangeError', handleComplete);
  }, [router]);

  return (
    <>{pageLoading ? <div>Loading...</div> : <Component {...pageProps} />}</>
  );
}
