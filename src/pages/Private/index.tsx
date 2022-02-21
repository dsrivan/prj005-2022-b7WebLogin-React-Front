import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Private = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h1>Private page's content</h1>
      <h3>User logged: {auth.user?.name}</h3>
    </div>
  );
};
