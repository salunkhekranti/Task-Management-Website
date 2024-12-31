import React, { useState, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import AddTask from './component/AddTask';
import TaskList from "./component/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const addTask = (taskName) => {
    const newTask = { name: taskName, done: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Task Management
      </Typography>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </Container>
  );
};

export default App;
