'use client';
import { isLoggedIn } from '@/appwrite/utils';
import Blog from '@/components/blog';
import Header from '@/components/header';
import AuthContext from '@/contexts/authContext';
import { useEffect, useState } from 'react';

const ProtectedLayout = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    isLoggedIn()
      .then(setAuthStatus)
      .finally(() => setLoader(false));
  }, []);

  return (
    <AuthContext.Provider value={{ authStatus, setAuthStatus }}>
      {!loader && (
        <>
          <div className="text-primary">
            <div className="fixed -z-[1] left-1/3 w-12 top-2/3 blur-2xl">
              <Blog blur />
            </div>
            <div className="fixed -z-[1] left-2/3 w-12 top-1/3 blur-2xl">
              <Blog blur />
            </div>
            <div className="fixed -z-[1] left-1/4 w-40 top-1/4 blur-2xl opacity-50">
              <Blog blur />
            </div>
            <div className="fixed -z-[1] left-1/2 w-32 top-1/2 blur-2xl opacity-60">
              <Blog blur />
            </div>
            <div className="fixed -z-[1] left-[45%] w-12 top-1/3 blur-2xl">
              <Blog blur />
            </div>
            <div className="fixed -z-[1] left-3/4 w-60 top-1/3 opacity-20 blur-2xl">
              <Blog blur />
            </div>
          </div>
          <Header />
          <main className="px-2 py-4">{children}</main>
        </>
      )}
    </AuthContext.Provider>
  );
};

export default ProtectedLayout;
