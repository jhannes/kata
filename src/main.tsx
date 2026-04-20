import { createRoot } from "react-dom/client";
import { useState, type SubmitEvent, useEffect, useRef } from "react";

import "./application.css";

interface TaskItem {
  id: number;
  completed: boolean;
  title: string;
  description?: string | undefined;
}

const INITIAL_TASKS: TaskItem[] = [
  { id: 1, title: "Fly til Body", completed: true },
  { id: 2, title: "Sette opp React", completed: true },
  { id: 3, title: "Vise todos", completed: true },
  { id: 4, title: "Sjekke av todos", completed: true },
  { id: 5, title: "Vise dialog", completed: false },
];

function TaskList({
  tasks,
  onChangeTask,
  onSelectTask,
}: {
  tasks: TaskItem[];
  onChangeTask: (delta: Partial<TaskItem>) => void;
  onSelectTask: (t: TaskItem) => void;
}) {
  return (
    <ul>
      {tasks.map((t) => (
        <li>
          <label>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={(e) =>
                onChangeTask({ id: t.id, completed: e.target.checked })
              }
            />{" "}
            {t.title}
          </label>
          <button onClick={() => onSelectTask(t)}>Endre</button>
          {t.description && <p>{t.description}</p>}
        </li>
      ))}
    </ul>
  );
}

function CompletionForm({
  task,
  onChangeTask,
  onCancel,
}: {
  task: TaskItem;
  onChangeTask: (delta: Partial<TaskItem>) => void;
  onCancel: () => void;
}) {
  const [completed, setCompleted] = useState(task.completed);
  const [description, setDescription] = useState(task.description);

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    onChangeTask({ id: task.id, completed, description });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Oppdatert oppgave: {task.title}</h2>
      <div>
        <p>Beskrivelse</p>
        <textarea
          autoFocus
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          Ferdig
        </label>
      </div>
      <div>
        <button>Lagre</button>
      </div>
      <div>
        <button onClick={onCancel}>Avbryt</button>
      </div>
    </form>
  );
}

function Application() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [selectedTask, setSelectedTask] = useState<TaskItem | undefined>();

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  function handleChangeTask(delta: Partial<TaskItem>) {
    const { id } = delta;
    setSelectedTask(undefined);
    return setTasks((old) =>
      old.map((o) => (o.id === id ? { ...o, ...delta } : o)),
    );
  }

  useEffect(() => {
    console.log({ selectedTask });
    if (selectedTask) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [selectedTask]);

  return (
    <div>
      <h1>Oppgaver</h1>
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onSelectTask={(t) => setSelectedTask(t)}
      />
      <dialog ref={dialogRef}>
        {selectedTask && (
          <CompletionForm
            key={selectedTask.id}
            task={selectedTask}
            onChangeTask={handleChangeTask}
            onCancel={() => setSelectedTask(undefined)}
          />
        )}
      </dialog>
    </div>
  );
}

createRoot(document.getElementById("app")!).render(<Application />);
