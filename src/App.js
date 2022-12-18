import "./App.css";
import logo from "./images/logo.png";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={logo}
          alt="logo de freeCodeCamp"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
