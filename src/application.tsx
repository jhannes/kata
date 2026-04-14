import { useState } from "react";
import "./application.css";
import { Dialog } from "./dialog.js";

interface TaskItem {
  id: number;
  summary: string;
  completed: boolean;
  comments?: string;
}

function CompletionForm({
  selectedTask,
  onUpdate,
  onCancel,
}: {
  selectedTask: TaskItem;
  onUpdate(delta: Partial<TaskItem>): void;
  onCancel: () => void;
}) {
  const [comments, setComments] = useState(selectedTask.comments || "");
  const [completed, setCompleted] = useState(selectedTask.completed);
  return (
    <form>
      <h1>Task: {selectedTask.summary}</h1>
      <div>
        Comments:
        <br />
        <textarea
          autoFocus
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />{" "}
          Completed
        </label>
      </div>
      <div>
        <button onClick={() => onUpdate({ comments, completed })}>
          Complete
        </button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

function TaskList({
  tasks,
  onSelectTask,
}: {
  tasks: TaskItem[];
  onSelectTask(t: TaskItem): void;
}) {
  return (
    <>
      {tasks.map((t) => (
        <li key={t.id}>
          <input type="checkbox" checked={t.completed} /> {t.summary}
          <button onClick={() => onSelectTask(t)}>Complete</button>
          {t.comments && <p>{t.comments}</p>}
        </li>
      ))}
    </>
  );
}

export function Application() {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: 0, summary: "Fly to Bodø", completed: true },
    { id: 1, summary: "Show tasks", completed: false },
    { id: 2, summary: "Mark tasks as complete", completed: false },
    { id: 3, summary: "Receive applaus", completed: false },
  ]);
  const [selectedTask, setSelectedTask] = useState<TaskItem | undefined>();

  function handleUpdate(delta: Partial<TaskItem>) {
    setTasks((old) =>
      old.map((o) => (o.id === selectedTask?.id ? { ...o, ...delta } : o)),
    );
    setSelectedTask(undefined);
  }

  return (
    <div>
      <h1>Tasks</h1>
      <TaskList tasks={tasks} onSelectTask={(t) => setSelectedTask(t)} />
      <Dialog
        visible={!!selectedTask}
        onClose={() => setSelectedTask(undefined)}
      >
        {selectedTask && (
          <CompletionForm
            selectedTask={selectedTask}
            onUpdate={handleUpdate}
            onCancel={() => setSelectedTask(undefined)}
          />
        )}
      </Dialog>
    </div>
  );
}
