import { useAuth } from './AuthProvider';
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}