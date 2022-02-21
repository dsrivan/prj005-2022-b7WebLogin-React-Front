import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");

      if (storageData) {
        const data = await api.validateToken(storageData);
        const { user } = data;

        if (user) {
          setUser(user);
        }
      }
    };

    validateToken();
  }, [api]);

  const signIn = async (name: string, password: string) => {
    const data = await api.signIn(name, password);
    const { user, token } = data;

    if (user && token) {
      setUser(user);
      setToken(token);
      return true;
    }
    return false;
  };

  const signOut = async () => {
    await api.logOut();
    setToken("");
    setUser(null);
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
