import { useState } from "react";
import "./Welcome.css";

function WelcomePage() {
  const [showForm, setShowForm] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (form) => {
    setShowForm(form);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:9999/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName, email, password }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9999/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="welcome-page">
      <div className="welcome-header">
        <img src="/logo.png" alt="Logo" />
        <h1>Welcome!</h1>
      </div>
      <div className="welcome-buttons">
        <button onClick={() => handleForm("signup")}>Sign Up</button>
        <button onClick={() => handleForm("login")}>Sign In</button>
      </div>
      {showForm === "signup" && (
        <div className="form-overlay">
          <form className="form-container" onSubmit={handleSignupSubmit}>
            <h2>Sign Up</h2>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
            <p>
              Already a member?{" "}
              <button type="button" onClick={() => handleForm("login")}>
                Sign In
              </button>
            </p>
          </form>
        </div>
      )}
      {showForm === "login" && (
        <div className="form-overlay">
          <form className="form-container" onSubmit={handleLoginSubmit}>
            <h2>Sign In</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <p>
              Not a member?{" "}
              <button type="button" onClick={() => handleForm("signup")}>
                Sign Up
              </button>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default WelcomePage;
