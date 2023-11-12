// RegistrationForm.js
import React, { useState } from "react";
import styled from "styled-components";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Student");
  const [password, setPassword] = useState("");
  const [reenteredPassword, setReenteredPassword] = useState("");

  const handleRegister = async () => {
    if(validateFields()){
      try {
        const response = await fetch("http://localhost:8080/auth/registration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: reenteredPassword,
            role :role
          }),
        });
  
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }
        alert(data.message);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const validateFields = () =>{
     if(password !== reenteredPassword){
      alert("password and reenter password should be same")
      return false 
     }else if(!email.includes("@nitc.ac.in")){
      alert("not a valid email mail should be <username>@nitc.ac.in")
      return false 
     }
     else if(password === ""){
      alert("password should not be empty")
      return false 
     }
     return true
  }

  return (
    <Container>
      <Title>New Profile Registration</Title>
      <Input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
