import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InventoryList from "./InventoryList";

const InventoryDisplay = () => {
  const [inventoryList, setInventoryList] = useState("");
  const [labNumber, setLabNumber] = useState("");
  const [getDate, setGetData] = useState(false);

  useEffect(() => {
    // const sessionValue = sessionStorage.getItem("login");
    // if (sessionValue !== "true") {
    //   window.location.href = "/login";
    // }
  }, []);

  const handleLogout = () => {
    window.location.href = "/";
    sessionStorage.removeItem("login");
  };

  return (
    <div>
      <Container>
        <LogoutButton onClick={() => handleLogout()}>Logout</LogoutButton>
        <Text>Inventory Catalogue</Text>
        <Wrapper>
          <WrapperContainer>
            <h1>Inventory List</h1>
            <Select value={inventoryList} onChange={(e) => setInventoryList(e.target.value)}>
              <option value="Select">Select</option>
              <option value="KeyBoard">KeyBoard</option>
              <option value="Printer">Printer </option>
            </Select>
          </WrapperContainer>

          <WrapperContainer>
            <h1>Lab Number</h1>
            <Input
              type="text"
              placeholder="Lab Number"
              value={labNumber}
              onChange={(e) => setLabNumber(e.target.value)}
            />
          </WrapperContainer>
        </Wrapper>
        <Button onClick={() => setGetData(!getDate)}>Get Data</Button>
      </Container>
      <InventoryListContainer>
        {getDate ? <InventoryList inventoryList = {inventoryList} labNumber = {labNumber} /> : <></>}
      </InventoryListContainer >
    </div>
  );
};

export default InventoryDisplay;

const LogoutButton = styled.button`
  padding: 1%;
  margin-left: 90%;
`;

const Container = styled.div`
  align-items: center;
  margin: 20px;
  margin-top: 10%;
`;

const InventoryListContainer = styled.div`
  max-width: 80%;
  margin: auto;
`;

const Button = styled.button`
  margin-left: 48%;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
`;

const Text = styled.h1`
  text-align: center;
`;

const WrapperContainer = styled.div`
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  margin: auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const Select = styled.select`
  width: 100%;
  max-height: 40px;
  padding: 10px;
  margin-bottom: 10px;
`;
