import React, { useState } from "react";
import styled from "styled-components";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        //  "Access-Control-Allow-Origin": "*,http://192.168.29.7:8080",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Login successful", data);
      alert(data.role)
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  const handleRegister = () => {
    window.location.href = "/Registraion";
  };

  return (
    <Container>
      <Title>Inventory Tracking System</Title>
      <Title>Login</Title>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={handleRegister}>Register for New User</Button>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 50%;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  width: 200px;
`;
