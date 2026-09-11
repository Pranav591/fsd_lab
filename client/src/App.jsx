import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Profile from "./pages/Profile.jsx";
import Tasks from "./pages/Tasks.jsx";
import "./App.css";

function App() {
  const [page, setPage] = useState("profile");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar
        page={page}
        setPage={setPage}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((d) => !d)}
      />
      <main>{page === "profile" ? <Profile /> : <Tasks />}</main>
      <footer className="site-footer">
        <p>&copy; 2026 Pranav Adhikari. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
