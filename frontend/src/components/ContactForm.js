import React from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <div className="form-container">
      <Form>
        <Form.Group controlId="emailAddress">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text>We'll never share your email with anyone</Form.Text>
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Comment:</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default ContactForm;
