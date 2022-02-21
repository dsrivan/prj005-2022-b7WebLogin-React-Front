import styled from "styled-components";

export const Container = styled.div`
width: 100%;
max-width: 700px;
margin: 0 auto;
border: 1px solid transparent;
padding: 60px 50px;
border-radius: 5px;
box-shadow: 0px 0px 20px 0px #eaeaea;
`;

export const H3 = styled.h3`
  margin-bottom: 30px;
`;

export const InputTextPassword = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  border: 1px solid lightgray;
  outline: transparent;
  
  &:hover,
  &:focus-visible {
    border: 1px solid #5a50f0;
  }
`;

export const Erro = styled.p`
color: red;
`;

export const ButtonLogin = styled.button`
  display: block;
  width: 100%;
  padding: 15px 10px;
  border-radius: 5px;
  margin-top: 15px;
  border: 1px solid #5a50f0;
  background-color: #5a50f0;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    background-color: #4b42d5;
  }
`;
