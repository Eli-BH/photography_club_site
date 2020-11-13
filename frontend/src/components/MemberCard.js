import React from "react";
import { Accordion, Media, Card, Button, Badge } from "react-bootstrap";

const MemberCard = ({
  name,
  location,
  website,
  bio,
  position,
  eventKey,
  user,
  id,
}) => {
  return (
    <Card>
      <Card.Header style={{ textAlign: "center" }}>
        <Accordion.Toggle as={Button} variant="link" eventKey={eventKey}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>{name}</h3>{" "}
            {user === id ? <Badge variant="secondary"> Edit Card</Badge> : null}
          </div>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>
          <Media>
            <img
              width={164}
              height={164}
              className="mr-3"
              src="https://ca-times.brightspotcdn.com/dims4/default/14fca85/2147483647/strip/true/crop/2011x2131+0+0/resize/840x890!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F59%2F87%2Fbc6f33724dce882804ac393468a7%2Fball1.jpg"
              alt="Generic Placeholder"
            />
            <Media.Body>
              <h5>{name}</h5>
              <h6>{location}</h6>
              <h6>{website}</h6>
              <h6>{position}</h6>
              <p>{bio}</p>
            </Media.Body>
          </Media>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default MemberCard;
