import { useState } from "react";
import "../css/Sign_up.css";
import { useNavigate } from "react-router-dom";
import signInBackground from "../assets/sign_in_background.jpg";
import loginImage from "../assets/login_image.png";
import { Link } from "react-router-dom";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a user object to send to the backend
    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      // Send the POST request to the server
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      
      if (response.ok) {
        alert("Sign Up Successful!");
        // Redirect to login page or home page
        setTimeout(() => {
          navigate("/"); // Redirect after successful sign-in
        }, 2000); // Delay for user to see success message
      } else {
        console.log("Error:", data);
        alert("Sign Up Failed! Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error signing up. Please try again.");
    }
  };

  return (
    <div className="background-container">
      <img src={signInBackground} alt="Background" className="background-image" />
      <div className="signup-container">
        <div className="signup-box">
          <div className="man">
            <img src={loginImage} alt="user icon" />
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName" style={{color:"black"}}>First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor="lastName" style={{color:"black"}}>Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

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

            <button type="submit" id="signup-btn">
              Sign Up
            </button>

            <div className="links">
              <Link to="/signin">Already have an account? Sign in here.</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
