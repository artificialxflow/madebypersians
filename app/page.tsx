'use client';
import { useState, useEffect } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  // دریافت لیست تودوها
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    const res = await fetch("/api/todo");
    const data = await res.json();
    setTodos(data);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    setLoading(true);
    const res = await fetch("/api/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    if (res.ok) {
      setTitle("");
      fetchTodos();
    }
    setLoading(false);
  };

  return (
    <div className="container py-5" style={{maxWidth: 500}}>
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h2 className="card-title text-center mb-4 fw-bold">تودو لیست</h2>
          <form onSubmit={handleSubmit} className="row g-2 align-items-center mb-3">
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="عنوان تودو..."
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="col-4 d-grid">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "در حال افزودن..." : "افزودن"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="mb-3 text-secondary">لیست کارها</h5>
          {loading && <div className="text-center text-muted">در حال بارگذاری...</div>}
          <ul className="list-group list-group-flush">
            {todos.map((todo: any) => (
              <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{todo.title}</span>
                {todo.completed && <span className="badge bg-success">انجام شد</span>}
              </li>
            ))}
            {todos.length === 0 && !loading && <li className="list-group-item text-center text-muted">تودی وجود ندارد.</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}
