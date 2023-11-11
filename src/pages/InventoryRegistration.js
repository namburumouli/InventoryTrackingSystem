import React, { useState } from "react";
import styled from "styled-components";

const InventoryRegistration = () => {
  const [inventoryNumber, setInventoryNumber] = useState();
  const [licenceExpiryDate, setLicenceExpiryDate] = useState();
  const [WorkingStatus, setWorkingStatus] = useState();
  const [category, setCategory] = useState();

  return (
    <Container>
      <Title>New Inventory Registration</Title>
      <Input
        type="text"
        placeholder="InventoryNumber"
        value={inventoryNumber}
        onChange={(e) => setInventoryNumber(e.target.value)}
      />
      <Text>Category</Text>
      <Select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="KeyBoard">KeyBoard</option>
        <option value="Printer">Printer </option>
      </Select>
      <Input
        type="text"
        placeholder="Licence Expiry Date"
        value={licenceExpiryDate}
        onChange={(e) => setLicenceExpiryDate(e.target.value)}
      />
      <Text>Working Status</Text>
      <Select
        value={WorkingStatus}
        onChange={(e) => setWorkingStatus(e.target.value)}
      >
        <option value="Yes">Yes</option>
        <option value="No">No </option>
      </Select>
      <Button>Generate BarCode and Register</Button>
    </Container>
  );
};

export default InventoryRegistration;

const Container = styled.div`
  width: 50%;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 2%;
`;

const Select = styled.select`
  width: 103%;
  max-height: 40px;
  padding: 10px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 3%;
`;

const Text = styled.div`
  font-size: 12px;
  font-weight: 700;
  margin-top: 1%;
  margin-bottom: 0.5%;
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px;
  cursor: pointer;
  min-width: 150px;
  margin-left:35%;
  margin-top:5%;
`;
