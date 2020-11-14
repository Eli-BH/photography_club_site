import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert, Form, Button, Row, Col, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { updateUser } from "../actions/userActions";
import FormContainer from "./FormContainer";

const CardEditForm = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");

  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");
  const [position, setPosition] = useState("");

  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, user } = userUpdate;

  useEffect(() => {
    setId(userInfo._id);
    if (user) {
      history.push("/members");
    }
  }, [userInfo, history, user]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file); //image same as backed
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(false);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateUser(id, name, email, password, image, website, bio, position)
    );
  };

  return (
    <div className="edit-container">
      <div className="edit-form-container">
        <FormContainer>
          <h1>Edit</h1>
          {error && (
            <Alert variant="danger"> Please check your information</Alert>
          )}
          {loading && <Spinner />}

          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <hr />
            <Form.Group>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={uploadFileHandler}
              >
                {image && image}
              </Form.File>
              {uploading && <Spinner />}
            </Form.Group>

            <Form.Group>
              <Form.Label>Website </Form.Label>
              <Form.Control
                placeholder="ex: https://www.instagram.com/jjay.pam.photography/"
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </Form.Group>

            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Position:
                </Form.Label>
                <Col sm={10}>
                  <div onChange={(e) => setPosition(e.target.value)}>
                    <Form.Check
                      type="radio"
                      label="Photographer"
                      name="formHorizontalRadios"
                      id="Photographer"
                      value="Photographer"
                    />
                    <Form.Check
                      type="radio"
                      label="Model"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                      value="Model"
                    />
                    <Form.Check
                      type="radio"
                      label="Both"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                      value="Photographer/Model"
                    />
                  </div>
                </Col>
              </Form.Group>
            </fieldset>
            <Form.Group>
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Tell us about yourself"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" variant="primary">
              Submit Changes
            </Button>
          </Form>
        </FormContainer>
      </div>
    </div>
  );
};

export default CardEditForm;
