'use client';
import { logoutUser } from '@/appwrite/utils';
import useAuth from '@/contexts/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LogoutPage = () => {
  const router = useRouter();
  const { setAuthStatus } = useAuth();

  useEffect(() => {
    logoutUser().then(() => {
      setAuthStatus(false);
      router.replace('/');
    });
  }, []);

  return <></>;
};

export default LogoutPage;
