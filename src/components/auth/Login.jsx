import { useState } from "react";
import { Button } from "../UI/Button";
import { FormInput } from "../UI/FormInput";
import styled from "styled-components";

export const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setInputPassword(event.target.value);
  };

  const handleSubmitValue = (event) => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmitValue}>
      <FormInput
        inputType="email"
        labelText="Email"
        id="userEmail"
        onChange={handleEmailChange}
        value={inputEmail}
      />

      <FormInput
        inputType="password"
        labelText="Password"
        id="userPassword"
        onChange={handlePasswordChange}
        value={inputPassword}
      />

      <Button type="submit">Войти</Button>

      <DisplayValues>
        <p>Email: {inputEmail}</p>
        <p>Password: {inputPassword}</p>
      </DisplayValues>
    </StyledForm>
  );
};

const StyledForm = styled("form")`
  width: 400px;
  height: 300px;
  background-color: #fff;
  border-radius: 12px;
  margin: 20px 0 0 35%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 0 30px 0 30px;

  input {
    max-width: 100%;
    border: 1px solid grey;
  }
  button {
    width: 100%;
  }
  label {
    font-size: 16px;
    font-weight: 600;
    color: #000;
  }
`;

const DisplayValues = styled.div`
  margin-top: 20px;
  p {
    margin: 5px 0;
    font-size: 14px;
  }
`;
