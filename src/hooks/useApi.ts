/*
  import axios from "axios";
  
  const api = axios.create({
    baseURL: process.env.REACT_APP_API,
  });
*/

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: {
        id: 23,
        name: "Usuário",
        email: "email@domain.net",
      },
    };

    /*
    const response = await api.post("/validate", { token });
    return response.data;
  */
  },
  signIn: async (email: string, password: string) => {
    return {
      user: {
        id: 23,
        name: "Usuário",
        email: "email@domain.net",
      },
      token: "122334455667788990",
    };

    /*
      const response = await api.post("/signin", { email, password });
      return response.data;
    */
  },
  logOut: async () => {
    return {
      status: true,
    };

    /*
      const response = await api.post("/logout");
      return response.data;
    */
  },
});
