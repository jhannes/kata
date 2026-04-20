import type { TaskItem } from "./taskItem.js";

export function TaskList({
  tasks,
  onUpdate,
  onSelected,
}: {
  tasks: TaskItem[];
  onUpdate: (delta: Partial<TaskItem>) => void;
  onSelected: (t: TaskItem) => void;
}) {
  return (
    <ul>
      {tasks.map((t) => (
        <li>
          <label>
            <input
              type="checkbox"
              checked={t.complete}
              onChange={(e) =>
                onUpdate({ id: t.id, complete: e.target.checked })
              }
            />{" "}
            {t.title} <button onClick={() => onSelected(t)}>Oppdater</button>
          </label>
          {t.description && <p>{t.description}</p>}
        </li>
      ))}
    </ul>
  );
}
