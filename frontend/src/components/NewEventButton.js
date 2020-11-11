import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import NewEventForm from "./NewEventForm";

const NewEventButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container p-5">
      <Button variant="outline-primary" size="lg" block onClick={handleShow}>
        Create New Event
      </Button>

      <Modal centered show={show} onHide={handleClose}>
        <NewEventForm setShow={setShow} />
      </Modal>
    </div>
  );
};

export default NewEventButton;
