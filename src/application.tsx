import type { TaskItem } from "./taskItem.js";
import { useState } from "react";
import { TaskList } from "./taskList.js";
import { Dialog } from "./dialog.js";
import { CompletionForm } from "./completionForm.js";

const INITIAL_TASKS: TaskItem[] = [
  { id: 1, title: "Fly til Body", completed: true },
  { id: 2, title: "Sette opp React", completed: true },
  { id: 3, title: "Vise todos", completed: true },
  { id: 4, title: "Sjekke av todos", completed: true },
  { id: 5, title: "Vise dialog", completed: false },
];

export function Application() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [selectedTask, setSelectedTask] = useState<TaskItem | undefined>();

  function handleChangeTask(delta: Partial<TaskItem>) {
    const { id } = delta;
    setSelectedTask(undefined);
    return setTasks((old) =>
      old.map((o) => (o.id === id ? { ...o, ...delta } : o)),
    );
  }

  return (
    <div>
      <h1>Oppgaver</h1>
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onSelectTask={(t) => setSelectedTask(t)}
      />
      <Dialog visible={!!selectedTask}>
        {selectedTask && (
          <CompletionForm
            key={selectedTask.id}
            task={selectedTask}
            onChangeTask={handleChangeTask}
            onCancel={() => setSelectedTask(undefined)}
          />
        )}
      </Dialog>
    </div>
  );
}
