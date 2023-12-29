import React, { useState } from "react";
import styled from "styled-components";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", { email, password });
  };

  const handleCancel = () => {
    setEmail("");
    setPassword("");
    onClose();
  };

  const isFormEmpty = !email.trim() || !password.trim();

  return (
    <ModalContainer>
      <FormWrapper>
        <FormTitle>Login</FormTitle>
        <FormControl>
          <label>Username Or Email:</label>
          <input
            type="email"
            placeholder="UserName/Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <SubmitButton onClick={handleLogin} disabled={isFormEmpty}>
          Login
        </SubmitButton>
        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
      </FormWrapper>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
  transition: background-color 0.3s ease;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const FormControl = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    color: #333;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const CancelButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 10px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export default Login;
