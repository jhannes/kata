import type { TaskItem } from "./taskItem.js";
import { type SubmitEvent, useState } from "react";

export function CompletionForm({
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
