import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import ThemeToggle from "./components/ThemeToggle";
import Login from "./components/Login";
import "./App.css";

function App() {
  const { theme } = useContext(AppContext);

  return (
    <div className={theme}>
      <h1>Theme & Login using Context API</h1>
      <ThemeToggle />
      <Login />
    </div>
  );
}

export default App;
