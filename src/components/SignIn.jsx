import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Sign_in.css";
import signInBackground from "../assets/sign_in_background.jpg";
import loginImage from "../assets/login_image.png";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset messages
    setError("");
    setSuccess("");

    try {
      // Make a POST request to the server
      const response = await fetch("http://localhost:5000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
        setTimeout(() => {
          navigate("/"); // Redirect after successful sign-in
        }, 2000); // Delay for user to see success message
      } else {
        setError(data.message || "An error occurred. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect to the server. Please try again later.");
      console.error("Error:", err);
    }
  };

  return (
    <div className="background-container">
      <img
        src={signInBackground}
        alt="Background"
        className="background-image"
      />
      <div className="login-container">
        <div className="login-box">
          <div className="man">
            <img src={loginImage} alt="man" />
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{color:"black"}}>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" style={{color:"black"}}>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" id="login-btn">
              Sign In
            </button>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <div className="links">
              <a href="#">Forgot password?</a>
              <Link to="/signup">New? Register here.</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
