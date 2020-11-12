import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Spinner, Card, Button } from "react-bootstrap";

import NewEventButton from "../components/NewEventButton";
import { listAllEvents, deleteEvent } from "../actions/eventActions";
import "../styles/activities.scss";

const ActivitiesScreen = () => {
  const dispatch = useDispatch();

  const listEvents = useSelector((state) => state.listEvents);
  const { events, success, error, loading } = listEvents;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listAllEvents());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
    window.location.reload(false);
  };

  return (
    <div className="activities-screen">
      {userInfo && userInfo.isAdmin ? <NewEventButton /> : null}
      <div>
        {error && (
          <Alert variant="danger">{`An error occured while fetching Events`}</Alert>
        )}
        {loading ? (
          <Spinner animation="border" size="lg" />
        ) : (
          success &&
          events.map((event) => (
            <div key={event._id} className="container my-2">
              <Card bg="smoke" text="light">
                <Card.Header>
                  <h3>
                    <span className="ml-auto">
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(event._id)}
                      >
                        X
                      </Button>
                    </span>{" "}
                    {event.title}{" "}
                  </h3>
                  <h6>{new Date(event.date).toLocaleString()}</h6>
                </Card.Header>

                <Card.Body>
                  <Card.Title>
                    <h4>{event.type}</h4>
                  </Card.Title>
                  <Card.Text>{event.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ActivitiesScreen;
