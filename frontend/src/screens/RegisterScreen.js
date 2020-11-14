import React, { useEffect, useState } from "react";
import { Form, Button, Col, Row, Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/userActions";
import FormContainer from "../components/FormContainer";
import axios from "axios";

const RegisterScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");
  const [position, setPosition] = useState("");

  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

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

    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(register(name, email, password, image, website, bio, position));
    }
  };

  return (
    <div className="register-container">
      <div className="register-form-container">
        <FormContainer>
          <h1>Register</h1>
          {error && (
            <Alert variant="danger"> Please check your information</Alert>
          )}
          {loading && <Spinner />}
          {message && (
            <Alert variant="danger">Please check your information</Alert>
          )}

          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
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

            <Form.Group>
              <Form.Label>Confirmed Password</Form.Label>
              <Form.Control
                autoComplete="new-password"
                placeholder="Confirm password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              Register
            </Button>
          </Form>

          <Row className="py-3">
            <Col>
              Have an Account?
              <Link to="/login">Login</Link>
            </Col>
          </Row>
        </FormContainer>
      </div>
    </div>
  );
};

export default RegisterScreen;
