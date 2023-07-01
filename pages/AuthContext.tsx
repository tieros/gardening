import { createContext, useState } from 'react';

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
    const [authData, setAuthData] = useState({
        uid: '',
        isAuthenticated: false,
    });

    const updateAuthData = (newData: Auth) => {
        setAuthData((prevData) => ({ ...prevData, ...newData }));
    };

    return (
        <AuthContext.Provider
            value={{ ...authData, setAuthData: updateAuthData }}
        >
            {children}
        </AuthContext.Provider>
    );
};
