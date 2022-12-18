import React, { useState } from "react";
import TaskForm from "./TaskForm";
import "../styles/TareaList.css";
import Task from "./Task";

function TaskList() {
  const [tasks, setTask] = useState([]);

  const addtask = (task) => {
    console.log(task);
    if (task.text.trim()) {
      task.text = task.text.trim();
      const taskRefresh = [task, ...tasks];
      setTask(taskRefresh);
    }
  };
  const deleteTask = (id) => {
    const taskRefresh = tasks.filter((task) => task.id !== id);
    setTask(taskRefresh);
  };

  const completTask = (id) => {
    const taskRefresh = tasks.map((task) => {
      if (task.id === id) {
        task.complet = !task.complet;
      }
      return task;
    });
    setTask(taskRefresh);
  };

  return (
    <>
      <TaskForm onSubmit={addtask} />
      <div className="tareas-lista-contenedor">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            complet={task.complet}
            completTask={completTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
