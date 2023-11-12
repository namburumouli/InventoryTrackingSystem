import React, { useState } from "react";
import styled from "styled-components";
import Barcode from "react-barcode";

const InventoryRegistration = () => {
  const [inventoryNumber, setInventoryNumber] = useState();
  const [labNumber, setLabNumber] = useState();
  const [licenceExpiryDate, setLicenceExpiryDate] = useState();
  const [WorkingStatus, setWorkingStatus] = useState();
  const [category, setCategory] = useState();
  const [generateBarCode, setGenerateBarCode] = useState();

  const handleInventoryRegistration  = async () =>{
    try {
      const response = await fetch("http://localhost:8080/inventory/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          InventoryNumber: inventoryNumber,
          LabNumber: labNumber,
          Category: category,
          LicenceExpiryDate: licenceExpiryDate,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert("Error", error.message);
    }
  }

  return (
    <Container>
      <Title>New Inventory Registration</Title>
      <Input
        type="text"
        placeholder="InventoryNumber"
        value={inventoryNumber}
        onChange={(e) => {
          setGenerateBarCode(false);
          setInventoryNumber(e.target.value);
        }}
      />
      <Text>Lab Number</Text>
      <Input
        type="text"
        placeholder="LabNumber"
        value={labNumber}
        onChange={(e) => setLabNumber(e.target.value)}
      />
      <Text>Category</Text>
      <Select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="KeyBoard">KeyBoard</option>
        <option value="Printer">Printer </option>
      </Select>
      <Text>Licence Expiry Date</Text>
      <Input
        type="date"
        placeholder="Licence Expiry Date"
        value={licenceExpiryDate}
        onChange={(e) => setLicenceExpiryDate(e.target.value)}
      />
      <Button onClick={() => handleInventoryRegistration()}>
        Generate BarCode and Register
      </Button>

      {/* <BarcodeWrapper style={{ marginTop: "20px" }}>
        {generateBarCode && <Barcode value={inventoryNumber} />}
      </BarcodeWrapper> */}
    </Container>
  );
};

export default InventoryRegistration;

const BarcodeWrapper = styled.div`
margin-left: 30%;
`;

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
  margin-left: 35%;
  margin-top: 5%;
`;
