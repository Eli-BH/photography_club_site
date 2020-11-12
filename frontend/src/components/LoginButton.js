import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/login">
      <Button className="ml-1" variant="danger" size="sm">
        Login
      </Button>
    </Link>
  );
};

export default LoginButton;
