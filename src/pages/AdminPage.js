import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AdminPage = () => {
  const [complaints, setComplaints] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    setComplaints([
      { text: "task1", completed: false },
      { text: "task2", completed: false },
      { text: "task3", completed: false },
    ]);
  }, []);

  const toggleTaskCompletion = (index) => {
    const updatedComplaints = [...complaints];
    updatedComplaints[index].completed = !updatedComplaints[index].completed;
    setComplaints(updatedComplaints);
  };

  const handleClickApprove = () => {
    const updatedComplaints = [...complaints];
    console.log("updatedComplaints", updatedComplaints);
    let data = updatedComplaints.filter((complaints,index) => {if(!complaints.completed) return complaints})
    setComplaints(data)
  };

  return (
    <Container>
      <Title>Pending Complaints</Title>
      <TaskContainer>
        {complaints.map((complaints, index) => (
          <Task key={index}>
            <Checkbox
              type="checkbox"
              checked={complaints.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <TaskText completed={complaints.completed}>
              {complaints.text}
            </TaskText>
          </Task>
        ))}
      </TaskContainer>
      <Button onClick={() => handleClickApprove()}>Approve</Button>
    </Container>
  );
};

export default AdminPage;

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
