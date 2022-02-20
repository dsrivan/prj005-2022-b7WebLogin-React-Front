import { useState } from "react";
import { InputTextPassword, H3, ButtonLogin, Container } from "./styles";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

  return (
    <Container>
      <H3>Página Fechada</H3>

      <InputTextPassword
        type="text"
        value={email}
        placeholder="type your email"
      ></InputTextPassword>

      <InputTextPassword
        type="password"
        value={password}
        placeholder="type your password"
      ></InputTextPassword>

      <ButtonLogin onClick={handleLogin}>Login</ButtonLogin>
    </Container>
  );
};
