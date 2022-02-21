import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { InputEmailPassword, H3, ButtonLogin, Container, Erro } from "./styles";

export const Login = () => {
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [erro, setErro] = useState(false);

  const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleInputPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleLogin = async () => {
    if (email && password) {
      setErro(false);

      const isLogged = await auth.signIn(email, password);

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

      <InputEmailPassword
        type="email"
        value={email}
        placeholder="type your email"
        onChange={handleInputEmail}
        // onChange={(e) => setEmail(e.target.value)}
      ></InputEmailPassword>

      <InputEmailPassword
        type="password"
        value={password}
        placeholder="type your password"
        onChange={handleInputPassword}
        // onChange={(e) => setPassword(e.target.value)}
      ></InputEmailPassword>

      {erro && <Erro>Authentication failed</Erro>}

      <ButtonLogin onClick={handleLogin}>Login</ButtonLogin>
    </Container>
  );
};
