import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { InputTextPassword, H3, ButtonLogin, Container, Erro } from "./styles";

export const Login = () => {
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [erro, setErro] = useState(false);

  const handleInputName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleInputPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleLogin = async () => {
    if (name && password) {
      setErro(false);

      const isLogged = await auth.signIn(name, password);

      if (isLogged) {
        navigate("/");
      } else {
        setErro(true);
      }
    } else {
      setErro(true);
    }
  };

  return (
    <Container>
      <H3>Private page</H3>

      <InputTextPassword
        type="text"
        value={name}
        placeholder="type your name"
        onChange={handleInputName}
        // onChange={(e) => setEmail(e.target.value)}
      ></InputTextPassword>

      <InputTextPassword
        type="password"
        value={password}
        placeholder="type your password"
        onChange={handleInputPassword}
        // onChange={(e) => setPassword(e.target.value)}
      ></InputTextPassword>

      {erro && <Erro>Authentication failed</Erro>}

      <ButtonLogin onClick={handleLogin}>Login</ButtonLogin>
    </Container>
  );
};
