import type { TaskItem } from "./taskItem.js";
import { type SubmitEvent, useState } from "react";

export function UpdateTaskForm({
  task,
  onCancel,
  onUpdated,
}: {
  task: TaskItem;
  onCancel: () => void;
  onUpdated: (delta: Partial<TaskItem>) => void;
}) {
  const [complete, setComplete] = useState(task.complete);
  const [description, setDescription] = useState(task.description || "");

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    onUpdated({ id: task.id, complete, description });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Oppdater oppgave {task.title}</h2>

      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <input
          type="checkbox"
          onChange={(e) => setComplete(e.target.checked)}
          checked={complete}
        />
      </div>
      <div>
        <button>Oppdater</button>
      </div>
      <div>
        <button onClick={onCancel}>Avbryt</button>
      </div>
    </form>
  );
}
