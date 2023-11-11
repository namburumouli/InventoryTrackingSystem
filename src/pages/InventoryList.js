import React from "react";
import styled from 'styled-components';

const InventoryList = () =>{

    const itemsData = [
        { serialNumber: 1, itemNumber: 'ABC123', barcode: '123456789' },
        { serialNumber: 2, itemNumber: 'XYZ789', barcode: '987654321' },
        // Add more items as needed
      ];

        return (
            <Container>
              <Table>
                <thead>
                  <tr>
                    <th>Serial Number</th>
                    <th>Item Number</th>
                    <th>Barcode</th>
                  </tr>
                </thead>
                <tbody>
                  {itemsData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.serialNumber}</td>
                      <td>{item.itemNumber}</td>
                      <td>{item.barcode}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
          );

}

export  default InventoryList;

const Container = styled.div`
  margin: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;