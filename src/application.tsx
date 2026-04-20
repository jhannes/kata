import { useState } from "react";
import type { TaskItem } from "./taskItem.js";
import { TaskList } from "./taskList.js";
import { UpdateTaskForm } from "./updateTaskForm.js";
import { Dialog } from "./dialog.js";

const INITIAL_TASKS: TaskItem[] = [
  { id: 1, title: "Fly til Bodø", complete: true },
  { id: 2, title: "Forberede foredrag", complete: true },
  { id: 3, title: "Vise oppgaver", complete: true },
  { id: 4, title: "Sette oppgaver til fullført", complete: true },
  { id: 5, title: "Legge til kommentar", complete: true },
  { id: 6, title: "Lage en dialog", complete: true },
  { id: 7, title: "Rydde opp litt?", complete: false },
];

export function Application() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [selectedItem, setSelectedItem] = useState<TaskItem | undefined>();

  function handleUpdate(delta: Partial<TaskItem>) {
    setTasks((old) =>
      old.map((o) => (o.id === delta.id ? { ...o, ...delta } : o)),
    );
    setSelectedItem(undefined);
  }

  return (
    <div>
      <h1>Oppgaver</h1>
      <TaskList
        tasks={tasks}
        onUpdate={handleUpdate}
        onSelected={(t) => setSelectedItem(t)}
      />
      <Dialog visible={!!selectedItem}>
        {selectedItem && (
          <UpdateTaskForm
            task={selectedItem}
            onUpdated={handleUpdate}
            onCancel={() => setSelectedItem(undefined)}
          />
        )}
      </Dialog>
    </div>
  );
}
