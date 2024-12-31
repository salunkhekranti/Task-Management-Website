
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}
    >
      <TextField
        label="Enter a task"
        variant="outlined"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Add Task
      </Button>
    </Box>
  );
};

export default AddTask;
