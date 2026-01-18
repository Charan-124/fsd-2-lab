import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const login = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <AppContext.Provider
      value={{ theme, toggleTheme, isLoggedIn, login, logout, username }}
    >
      {children}
    </AppContext.Provider>
  );
};
