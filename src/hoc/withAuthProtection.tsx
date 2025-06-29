import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export function withAuthProtection<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> {
  const ComponentWithAuth = (props: P) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
      if (!isAuthenticated) {
        navigate('/sign-in');
      }
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated) return null;

    return <WrappedComponent {...props} />;
  };

  ComponentWithAuth.displayName = `withAuthProtection(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return ComponentWithAuth;
}
