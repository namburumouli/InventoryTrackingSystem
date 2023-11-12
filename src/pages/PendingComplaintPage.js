import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PendingComplaintPage = () => {
  const [complaints, setComplaints] = useState();
  const [newTask, setNewTask] = useState("");
  const [checked, setIsChecked] = useState();

  useEffect(() => {
    getComplaint();
  }, []);

  const getComplaint = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/inventory/getCompliant",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      setComplaints(data);
      enableCheck();
    } catch (error) {
      alert("Error during login: Invalid Credentials", error.message);
    }
  };

  const enableCheck = () => {
    let checkStatus = [];

    complaints?.existingInventory.map((complaint, index) => {
      if (complaint.status === "Active") {
        checkStatus[index] = true;
      } else {
        checkStatus[index] = false;
      }
    });
    setIsChecked(checkStatus);
  };

  const toggleTaskCompletion = (index) => {
    if (complaints.existingInventory[index].status === "Active") {
      complaints.existingInventory[index].status = "Under Maintenance";
    } else {
      complaints.existingInventory[index].status = "Active";
    }
    console.log("data", complaints);
  };

  const handleClickApprove = () => {
    updateDate()
  };

  const updateDate = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/inventory/updateInventories",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            complaints
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Approval Failed");
      }
      const data = await response.json();
      alert(data.message);
      getComplaint()

    } catch (error) {
      alert("Error ", error.message);
      getComplaint()
    }
  };

  return (
    <Container>
      <Title>Pending Complaints</Title>
      <TaskContainer>
        {complaints?.existingInventory.map((complaint, index) => (
          <Task key={index}>
            <Checkbox
              type="checkbox"
              checked={checked[index]}
              onChange={() => toggleTaskCompletion(index)}
            />
            <TaskText completed={complaint.completed}>
              {complaint.inventoryNumber} - {complaint.comments}
            </TaskText>
          </Task>
        ))}
      </TaskContainer>
      <Button onClick={() => handleClickApprove()}>Approve</Button>
    </Container>
  );
};

export default PendingComplaintPage;

const Container = styled.div`
  width: 50%;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;

const Title = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 3%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 2%;
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px;
  cursor: pointer;
`;

const TaskContainer = styled.div`
  margin-top: 10px;
`;

const Task = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const TaskText = styled.div`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;
