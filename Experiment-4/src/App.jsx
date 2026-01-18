import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import ThemeToggle from "./components/ThemeToggle";
import Login from "./components/Login";
import "./App.css";

function App() {
  const { theme } = useContext(AppContext);

  return (
    <div className={theme}>
      <h1>Welcome to App</h1>
      <div className="theme-container">
        <ThemeToggle />
      </div>
      <div className="auth-container">
        <Login />
      </div>
    </div>
  );
}

export default App;
