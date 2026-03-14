// src/App.jsx
import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import seedTasks from "./data/seedTasks.json";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("tasks");

    if (stored) {
      setTasks(JSON.parse(stored));
    } else if (import.meta.env.VITE_USE_SEED === "true") {
      const tasksWithIds = seedTasks.map((task) => ({
        ...task,
        id: crypto.randomUUID(),
      }));

      setTasks(tasksWithIds);
      localStorage.setItem("tasks", JSON.stringify(tasksWithIds));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks((prev) => [newTask, ...prev]);
  };

  const handleToggleDone = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleLoadSeedTasks = () => {
    const tasksWithIds = seedTasks.map((task) => ({
      ...task,
      id: crypto.randomUUID(),
    }));

    setTasks((prev) => [...tasksWithIds, ...prev]);
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Gestor de Tasques canvit</h1>
      <div className="mb-4">
        <button className="btn btn-info" onClick={handleLoadSeedTasks}>
          Carrega dades de prova
        </button>
      </div>

      <TaskForm onAddTask={handleAddTask} />

      <h2 className="mt-3 mb-3">Les meves tasques</h2>
      <TaskList
        tasks={tasks}
        onToggleDone={handleToggleDone}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
