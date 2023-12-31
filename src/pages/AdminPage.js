import React from "react";
import styled from "styled-components";

const AdminPage = () => {
  return (
    <div>
      <Container>
        <Button
          onClick={() => {
            window.location.href = "/InventoryDisplay";
          }}
        >
          Display Inventory Catalogue
        </Button>
        <Button
          onClick={() => {
            window.location.href = "/PendingComplaint";
          }}
        >
          Pending Complaint
        </Button>
      </Container>
    </div>
  );
};

export default AdminPage;

const Title = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15%;
`;

const Button = styled.button`
  padding: 10px;
  width: 30%;
  cursor: pointer;
  margin: auto;
  margin-bottom: 10px;
`;
