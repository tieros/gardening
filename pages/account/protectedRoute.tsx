import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const protectedRoute = <P extends object>(
    WrappedComponent: React.ComponentType<P>,
) => {
    const AuthComponent = (props: P) => {
        const router = useRouter();
        const { isAuthenticated } = useContext(AuthContext);

        useEffect(() => {
            if (!isAuthenticated) {
                router.push('/login'); // Redirect to the login page if not authenticated
            }
        }, [isAuthenticated, router]);

        return <WrappedComponent {...props} />;
    };

    return AuthComponent;
};

export default protectedRoute;
