import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (event) => {
    setLoading(true);
    event.preventDefault();

    setTimeout(() => {
      setLoading(false);
      navigate("/app/dashboard");
    }, 1500);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        {loading ? <p>Loading...</p> : <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export default Login;
