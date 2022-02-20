import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post("/validate", { token });
    return response.data;
  },
  signIn: async (email: string, password: string) => {
    const fakeData = {
      user: {
        id: 23,
        name: "Usuário",
        email: "email@dominio.net",
      },
      token: "122334455667788990",
    };
    return fakeData;

    /*
      const response = await api.post("/signin", { email, password });
      return response.data;
    */
  },
  signOut: async () => {
    const response = await api.post("/logout");
    return response.data;
  },
});
