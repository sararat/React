import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fb-container">

      <div className="fb-left">
        <h1 className="fb-logo">facebook</h1>

        <p>
          Facebook helps you connect and share
          <br />
          with the people in your life.
        </p>
      </div>

      <div className="fb-right">

        <div className="login-card">

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>

            <Form.Control
              className="mb-3"
              type="email"
              placeholder="Email address or phone number"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Form.Control
              className="mb-3"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button className="login-btn" type="submit">
              Log In
            </Button>

          </Form>

          <div className="forgot">
            <a href="#">Forgotten password?</a>
          </div>

          <div class="divider"></div>
          
          <Link to="/signup">
            <button className="signup-btn">
              Create new account
            </button>
          </Link>

        </div>
        
        <p className="create-page">
          <b>Create a Page</b> for a celebrity, brand or business.
        </p>

      </div>

    </div>
  );
}

export default Login;