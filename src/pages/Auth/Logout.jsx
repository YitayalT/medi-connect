import { useEffect } from 'react';
import { useAuth } from '../../auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

export function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function handleLogout() {
      await logout();
      navigate('/login');
    }
    handleLogout();
  }, [logout, navigate]);

  return null;
}