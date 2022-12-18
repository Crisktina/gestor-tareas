import React from "react";
import "../styles/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ id, text, complet, completTask, deleteTask }) {
  return (
    <div
      className={complet ? "tarea-contenedor completada" : "tarea-contenedor"}
    >
      <div className="tarea-texto" onClick={() => completTask(id)}>
        {text}
      </div>
      <div className="tarea-contenedor-iconos">
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
}

export default Task;
