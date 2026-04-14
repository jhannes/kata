import { useState } from "react";
import "./application.css";

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
  return (
    <div>
      <h1>Task: {selectedTask.summary}</h1>
      <div>
        Comments:
        <br />
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button onClick={() => onUpdate({ comments, completed: true })}>
          Complete
        </button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export function Application() {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: 0, summary: "Fly to Bodø", completed: true },
    { id: 1, summary: "Show tasks", completed: false },
    { id: 2, summary: "Mark tasks as complete", completed: false },
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
      {tasks.map((t) => (
        <li key={t.id}>
          <input type="checkbox" checked={t.completed} /> {t.summary}
          <button onClick={() => setSelectedTask(t)}>Complete</button>
          {t.comments && <p>{t.comments}</p>}
        </li>
      ))}
      <div className={"completionDialog" + (selectedTask ? " visible" : "")}>
        <div className={"backdrop"}></div>
        <div className={"dialog"}>
          {selectedTask && (
            <CompletionForm
              selectedTask={selectedTask}
              onUpdate={handleUpdate}
              onCancel={() => setSelectedTask(undefined)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
