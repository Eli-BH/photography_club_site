import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import DatePickerComponent from "./DatePickerComponent";

const NewEventForm = () => {
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="container"
    >
      <Form.Group>
        <Form.Label>Title:</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      {/*date picker component*/}
      <Form.Group>
        <Form.Label>{`Date: `}</Form.Label>
        <DatePickerComponent
          startDate={startDate}
          setStartDate={setStartDate}
        />
      </Form.Group>

      {/* Type Dropdown*/}
      <Form.Group>
        <Form.Label>Event Type</Form.Label>
        <Form.Control
          as="select"
          className="my-1 m-auto"
          id="eventTypeSelect"
          size="sm"
          onChange={(e) => setType(e.target.value)}
          required
          feedback="You must select an event type."
          defaultValue={type.value}
        >
          <option value="meeting">Meeting</option>
          <option value="workshop">Workshop</option>
          <option value="outing">Outing</option>
        </Form.Control>
      </Form.Group>

      {/* Description text area*/}
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          required
          feedback="What is this event about?"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default NewEventForm;
