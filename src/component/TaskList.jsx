import React from "react";
import { List, ListItem, ListItemText, Button, Box } from "@mui/material";

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {tasks.map((task, index) => (
        <ListItem
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            textDecoration: task.done ? "line-through" : "none",
          }}
        >
          <ListItemText primary={task.name} />
          <Box>
            <Button
              variant={task.done ? "outlined" : "contained"}
              color={task.done ? "secondary" : "success"}
              onClick={() => toggleTask(index)}
            >
              {task.done ? "Undo" : "Done"}
            </Button>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
