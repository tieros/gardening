import { createContext, useEffect, useState } from 'react';

type Auth = {
    uid: string;
    isAuthenticated: boolean;
};
type AuthProviderProps = {
    children: React.ReactNode;
};

export const AuthContext = createContext({
    uid: '',
    isAuthenticated: false,
    setAuthData: (values: Auth) => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [authData, setAuthData] = useState<Auth>({
        uid: '',
        isAuthenticated: false,
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedUID = localStorage.getItem('uid');
        const isAuthenticated = localStorage.getItem('accessToken')
            ? true
            : false;

        setAuthData({
            uid: storedUID ?? '',
            isAuthenticated,
        });
        setIsLoading(false);
    }, []);

    const updateAuthData = (newData: Auth) => {
        setAuthData((prevData) => ({ ...prevData, ...newData }));
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider
            value={{ ...authData, setAuthData: updateAuthData }}
        >
            {children}
        </AuthContext.Provider>
    );
};
