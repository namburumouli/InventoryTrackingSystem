// RegistrationForm.js
import React, { useState } from "react";
import styled from "styled-components";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("Student");
  const [password, setPassword] = useState("");
  const [reenteredPassword, setReenteredPassword] = useState("");

  const handleRegister = () => {
    // Add your registration logic here
    console.log("Registration clicked");
  };

  return (
    <Container>
      <Title>New Profile Registration</Title>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="Student">Student</option>
        <option value="Lab Incharge">Lab Incharge</option>
      </Select>
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Re-enter Password"
        value={reenteredPassword}
        onChange={(e) => setReenteredPassword(e.target.value)}
      />
      <Button onClick={handleRegister}>Register</Button>
    </Container>
  );
};

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

const Select = styled.select`
  width: 52%;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export default RegistrationPage;
