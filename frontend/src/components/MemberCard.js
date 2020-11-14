import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import {
  Accordion,
  Media,
  Card,
  Button,
  Badge,
  Image,
  Row,
  Col,
} from "react-bootstrap";

const MemberCard = ({
  name,
  website,
  bio,
  position,
  eventKey,
  user,
  id,
  image,
}) => {
  return (
    <Card>
      <Card.Header style={{ textAlign: "center" }}>
        <Accordion.Toggle as={Button} variant="link" eventKey={eventKey}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>{name}</h3>{" "}
            {user === id ? (
              <LinkContainer to="/edit">
                <Badge variant="secondary" className="ml-2">
                  {" "}
                  Edit Card
                </Badge>
              </LinkContainer>
            ) : null}
          </div>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>
          <Media>
            {" "}
            <Row className="align-items-center justify-content-center">
              <Col sm={12} lg={2}>
                <Image
                  height={150}
                  width={120}
                  alt={name}
                  src={
                    image ||
                    "https://loremipsum.io/21-of-the-best-placeholder-image-generators/"
                  }
                />
              </Col>
              <Col>
                <Media.Body>
                  <h5>{name}</h5>
                  <h6>{position}</h6>
                  <a
                    href={website}
                    style={{
                      cursor: "pointer",
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    <h6>{website}</h6>
                  </a>

                  <p>{bio}</p>
                </Media.Body>
              </Col>
            </Row>
          </Media>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default MemberCard;
