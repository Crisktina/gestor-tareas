import React from "react";
import "../styles/TareaForm.css";

function TaskForm(props) {
  return (
    <form className="tarea-formulario">
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default TaskForm;
