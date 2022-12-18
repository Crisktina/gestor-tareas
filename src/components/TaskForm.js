import React, { useState } from "react";
import "../styles/TareaForm.css";
import { v4 as uuidv4 } from "uuid";

function TaskForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSend = (event) => {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      complet: false,
    };
    props.onSubmit(newTask);
  };

  return (
    <form className="tarea-formulario" onSubmit={handleSend}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
        onChange={handleChange}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default TaskForm;
