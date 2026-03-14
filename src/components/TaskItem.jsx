export default function TaskItem({ task, onToggleDone, onDelete }) {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-start ${
        task.done ? "list-group-item-success" : ""
      }`}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {task.taskName}
          {task.taskImportant && (
            <span className="badge bg-warning text-dark ms-2">Important</span>
          )}
        </div>

        <div className="small text-muted">
          Categoria: {task.taskCategory} <br />
          Data límit: {new Date(task.taskDueDate).toLocaleDateString()} <br />
          Prioritat: {task.taskPriority}
        </div>

        {task.taskDescription && (
          <p className="mt-2 mb-0">{task.taskDescription}</p>
        )}
      </div>

      <div className="d-flex gap-2 align-items-center">
        <button
          className={`btn btn-sm ${
            task.done ? "btn-secondary" : "btn-success"
          }`}
          onClick={() => onToggleDone(task.id)}
        >
          {task.done ? "Desfer" : "Fet"}
        </button>

        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(task.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}
