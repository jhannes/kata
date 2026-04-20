import { createRoot } from "react-dom/client";

function Application() {
  const tasks = [
    { id: 1, title: "Fly til Bodø", completed: true },
    { id: 2, title: "Lag react application", completed: true },
    { id: 3, title: "Vise oppgaver", completed: false },
    { id: 4, title: "Sette oppgaver til ferdige", completed: false },
    { id: 5, title: "Legge på kommentar på oppgaver", completed: false },
    { id: 6, title: "Lage dialog", completed: false },
    { id: 7, title: "Rydde litt?", completed: false },
  ];
  return (
    <div>
      <h1>Oppgavehåndtering</h1>
      <ul>
        {tasks.map((t) => (
          <li>
            <label>
              <input type="checkbox" checked={t.completed} />
              {t.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

createRoot(document.getElementById("app")!).render(<Application />);
