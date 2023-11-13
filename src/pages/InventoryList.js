import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";  // Import ReactDOM
import styled from "styled-components";
import Barcode from "react-barcode";
import html2canvas from "html2canvas";

const InventoryList = (props) => {
  const [itemsData, setItemData] = useState();
  const barcodeRef = useRef(null);  // Define barcodeRef using useRef

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
          },
          body: JSON.stringify({
            LabNumber: props.labNumber,
            Category: props.inventoryList,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      setItemData(data);
    } catch (error) {
      alert("Error during login: Invalid Credentials", error.message);
    }
  };

  const downloadBarcode = async (barcodeValue) => {
    const tempDiv = document.createElement("div");
    document.body.appendChild(tempDiv);

    ReactDOM.render(<Barcode value={barcodeValue} ref={barcodeRef} />, tempDiv);

    const canvas = await html2canvas(tempDiv);

    document.body.removeChild(tempDiv);

    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "barcode.png";
    link.click();
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Item Number</th>
            <th>Status</th>
            <th>Barcode</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {itemsData?.result?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.inventoryNumber}</td>
              <td>{item.status}</td>
              <td>
                <Barcode value={item.inventoryNumber} ref={barcodeRef} />
              </td>
              <td>
                <button onClick={() => downloadBarcode(item.inventoryNumber)}>
                  Download Barcode
                </button>
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

  button {
    cursor: pointer;
  }
`;
