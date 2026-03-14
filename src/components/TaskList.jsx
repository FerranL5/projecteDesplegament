import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggleDone, onDelete }) {
  if (tasks.length === 0) {
    return <p className="text-muted">No hi ha tasques creades.</p>;
  }

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleDone={onToggleDone}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
