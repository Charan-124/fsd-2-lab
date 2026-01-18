import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

function Login() {
  const { isLoggedIn, login, logout, username } = useContext(AppContext);
  const [name, setName] = useState("");

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Welcome, {username}</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please Login</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <button
            onClick={() => {
              if (name.trim() !== "") {
                login(name);
              }
            }}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default Login;
