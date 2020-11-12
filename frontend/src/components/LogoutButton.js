import React from "react";

import { Button } from "react-bootstrap";

const LogoutButton = ({ handleSubmit }) => {
  return (
    <Button size="sm" onClick={handleSubmit()} variant="info">
      Logout
    </Button>
  );
};

export default LogoutButton;
