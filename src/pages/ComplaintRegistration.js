import React, { useState } from "react";
import styled from "styled-components";

const ComplaintRegistration = () => {
  const [category, setCategory] = useState();
  const [labNumber, setLabNumber] = useState("");
  const [comments, setComments] = useState("");
  const [loadItemNumber, setLoadItemNumber] = useState(false);

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      setLoadItemNumber(true);
    }
  };

  return (
    <Container>
      <Title>Complaint Registration</Title>
      <WrapperContainer>
        <Text>Inventory Item</Text>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="KeyBoard">KeyBoard</option>
          <option value="Printer">Printer </option>
        </Select>
      </WrapperContainer>
      <Input
        type="text"
        placeholder="Lab Number"
        value={labNumber}
        onChange={(e) => {
          setLabNumber(e.target.value);
          setLoadItemNumber(false);
        }}
        onKeyDown={handleEnterKeyPress}
      />
      {loadItemNumber && (
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="KeyBoard">KeyBoard</option>
          <option value="Printer">Printer </option>
        </Select>
      )}

      <Input
        type="text"
        placeholder="Comments"
        value={comments}
        onChange={(e) => {
          setComments(e.target.value);
        }}
      />
      <Button>Submit</Button>
    </Container>
  );
};

export default ComplaintRegistration;

const Container = styled.div`
  width: 50%;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 1%;
  margin-bottom: 0.5%;
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px;
  cursor: pointer;
  min-width: 150px;
  margin-left: 35%;
  margin-top: 5%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 2%;
`;

const Title = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 3%;
`;

const WrapperContainer = styled.div`
  margin: auto;
`;

const Select = styled.select`
  width: 103%;
  max-height: 40px;
  padding: 10px;
  margin-bottom: 10px;
`;
