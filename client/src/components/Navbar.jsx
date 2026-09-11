function Navbar({ page, setPage, darkMode, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="brand">
        Pranav<span>.dev</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <button
              className={`nav-btn ${page === "profile" ? "active" : ""}`}
              onClick={() => setPage("profile")}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              className={`nav-btn ${page === "tasks" ? "active" : ""}`}
              onClick={() => setPage("tasks")}
            >
              Tasks
            </button>
          </li>
          <li>
            <button className="nav-btn theme-btn" onClick={onToggleTheme}>
              {darkMode ? "☀ Light" : "🌙 Dark"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
