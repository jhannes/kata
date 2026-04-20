import { createRoot } from "react-dom/client";
import { useState } from "react";

function Application() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Fly til Body", completed: true },
    { id: 2, title: "Sette opp React", completed: true },
    { id: 3, title: "Vise todos", completed: true },
    { id: 4, title: "Sjekke av todos", completed: false },
    { id: 5, title: "Vise dialog", completed: false },
  ]);
  return (
    <div>
      <h1>Oppgaver</h1>
      {tasks.map((t) => (
        <li>
          <label>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={(e) =>
                setTasks((old) =>
                  old.map((o) =>
                    o.id === t.id ? { ...o, completed: e.target.checked } : o,
                  ),
                )
              }
            />{" "}
            {t.title}
          </label>
        </li>
      ))}
    </div>
  );
}

createRoot(document.getElementById("app")!).render(<Application />);
