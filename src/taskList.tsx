import type { TaskItem } from "./taskItem.js";

export function TaskList({
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
