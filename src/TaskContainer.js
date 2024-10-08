import { useState } from "react";
import CreateNewTaskButton from "./CreateNewTaskButton";
import { Grid } from "@mui/material";
import TaskEntry from "./TaskEntry";

// TaskContainer stores objects containing the data for each individual task

function TaskContainer({ extended }) {
  const sampleTasks = [
    {
      id: 0,
      label: "sample task!",
      description: "sample task description!",
      completed: false,
    },
  ];

  const [tasks, setTasks] = useState(sampleTasks);
  const [taskId, setTaskId] = useState(1);

  function addTask() {
    setTasks([
      ...tasks,
      {
        id: taskId,
        label: "",
        description: "",
      },
    ]);
    setTaskId(taskId + 1);
  }

  function deleteTask(event, id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function modifyTask({ id, label, description, completed }) {
    let updatedTask = { id, label, description, completed };
    setTasks(
      tasks.map((task) => {
        if (task.id === updatedTask.id) {
          return updatedTask;
        } else {
          return task;
        }
      })
    );
  }

  return (
    <Grid
      justifyContent="flex-start"
      className="taskContainer"
      alignItems="center"
    >
      {tasks.map((task) => (
        <TaskEntry
          key={task.id}
          className="task"
          task={task}
          modifyTask={modifyTask}
          deleteTask={deleteTask}
          extended={extended}
        />
      ))}
      <CreateNewTaskButton className="classButton" handleClick={addTask} />
    </Grid>
  );
}

export default TaskContainer;
