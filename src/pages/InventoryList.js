import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Barcode from "react-barcode";

const InventoryList = (props) => {
  const [itemsData, setItemData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/inventory/catalogue",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            //  "Access-Control-Allow-Origin": "*,http://192.168.29.7:8080",
          },
          body: JSON.stringify({
            LabNumber: props.labNumber,
            Category: "keyboard",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      setItemData(data);
      console.log("data", itemsData);
    } catch (error) {
      alert("Error during login: Invalid Credentials", error.message);
    }
  };

  // const itemsData = [
  //   {
  //     serialNumber: 1,
  //     itemNumber: "ABC123",
  //     status: "Active",
  //     barcode: "123456789",
  //   },
  //   {
  //     serialNumber: 2,
  //     itemNumber: "XYZ789",
  //     status: "Under Maintanence",
  //     barcode: "987654321",
  //   },
  //   // Add more items as needed
  // ];

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Item Number</th>
            <th>Status</th>
            <th>Barcode</th>
          </tr>
        </thead>
        {console.log("itemdate", itemsData)}
        <tbody>
          {itemsData?.result?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.inventoryNumber}</td>
              <td>Active</td>
              <td>
                {
                  <>
                    <Barcode value={item.inventoryNumber} />
                  </>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default InventoryList;

const Container = styled.div`
  margin: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;
