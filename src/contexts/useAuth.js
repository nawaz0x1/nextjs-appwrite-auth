import { useContext } from 'react';
import { AuthContext } from './authContext';

const useAuth = () => {
  const value = useContext(AuthContext);
  return value;
};

export default useAuth;
