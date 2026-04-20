import { createRoot } from "react-dom/client";
import { useState, type SubmitEvent } from "react";

interface TaskItem {
  description?: string;
  id: number;
  completed: boolean;
  title: string;
}

const INITIAL_TASKS: TaskItem[] = [
  { id: 1, title: "Fly til Bodø", completed: true },
  { id: 2, title: "Lag react application", completed: true },
  { id: 3, title: "Vise oppgaver", completed: true },
  { id: 4, title: "Sette oppgaver til ferdige", completed: true },
  { id: 5, title: "Legge på kommentar på oppgaver", completed: true },
  { id: 6, title: "Lage dialog", completed: false },
  { id: 7, title: "Rydde litt?", completed: false },
];

function TaskList({
  tasks,
  onUpdate,
  onSelect,
}: {
  tasks: TaskItem[];
  onUpdate: (id: number, completed: boolean) => void;
  onSelect: (t: TaskItem) => void;
}) {
  return (
    <ul>
      {tasks.map((t) => (
        <li>
          <label>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={(e) => onUpdate(t.id, e.target.checked)}
            />
            {t.title}
          </label>
          <button onClick={() => onSelect(t)}>Oppdater</button>
          {t.description && <p>{t.description}</p>}
        </li>
      ))}
    </ul>
  );
}

function UpdateTaskForm({
  task,
  onUpdate,
  onCancel,
}: {
  task: TaskItem;
  onUpdate: (id: number, completed: boolean, description?: string) => void;
  onCancel: () => void;
}) {
  const [completed, setCompleted] = useState(task.completed);
  const [description, setDescription] = useState(task.description || "");

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    onUpdate(task.id, completed, description);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update {task.title}</h2>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </div>
      <button>Lagre</button>
      <button onClick={onCancel}>Avbryt</button>
    </form>
  );
}

function Application() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  function handleUpdate(id: number, completed: boolean, description?: string) {
    setTasks((old) =>
      old.map((o) =>
        id === o.id ? { ...o, description: description || "", completed } : o,
      ),
    );
    setSelectedTask(undefined);
  }

  const [selectedTask, setSelectedTask] = useState<TaskItem | undefined>();

  return (
    <div>
      <h1>Oppgavehåndtering</h1>
      <TaskList
        tasks={tasks}
        onUpdate={handleUpdate}
        onSelect={(t) => setSelectedTask(t)}
      />
      {selectedTask && (
        <UpdateTaskForm
          task={selectedTask}
          onUpdate={handleUpdate}
          onCancel={() => setSelectedTask(undefined)}
        />
      )}
    </div>
  );
}

createRoot(document.getElementById("app")!).render(<Application />);
