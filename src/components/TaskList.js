import React, { useState } from "react";
import TaskForm from "./TaskForm";
import "../styles/TareaList.css";
import Task from "./Task";

function TaskList() {
  const [task, setTask] = useState([]);
  return (
    <>
      <TaskForm />
      <div className="tareas-lista-contenedor">
        {task.map((task) => (
          <Task text={task.text} complet={task.complet} />
        ))}
      </div>
    </>
  );
}

export default TaskList;
