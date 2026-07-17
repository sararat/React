import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import "./Auth.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fb-container">

      {/* Left */}
      <div className="fb-left">
        <h1 className="fb-logo">facebook</h1>

        <p>
          Connect with friends and the world
          <br />
          around you on Facebook.
        </p>
      </div>

      {/* Right */}
      <div className="fb-right">

        <div className="login-card">

          <h2 className="signup-title">Create a new account</h2>
          <p className="signup-subtitle">
            It's quick and easy.
          </p>

          <hr />

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>

            <Form.Control
              className="mb-3"
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Form.Control
              className="mb-3"
              type="password"
              placeholder="New password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button className="signup-btn-full" type="submit">
              Sign Up
            </Button>

          </Form>

          <div className="login-link">
            <Link to="/login">Already have an account?</Link>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;