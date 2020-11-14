import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listUsers } from "../actions/userActions";
import { Accordion, Spinner, Alert, Jumbotron } from "react-bootstrap";
import MemberCard from "../components/MemberCard";

import "../styles/members.scss";

const MembersScreen = () => {
  const [user, setUser] = useState("");

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { error, users, loading, success } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listUsers());
    userInfo && setUser(userInfo._id);
  }, [dispatch, userInfo]);

  return (
    <div className="container members-container">
      <Jumbotron className="members-jumbotron-div">
        <h2 className="jumbotron-h2">P.A.M. Club Members</h2>
        <p>Check out some of our members</p>
      </Jumbotron>
      {loading ? <Spinner animation="border" /> : null}
      {error ? <Alert variant="danger">{error}</Alert> : null}
      <Accordion>
        <>
          {success &&
            users.map((item, index) => (
              <div key={index}>
                <MemberCard
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  website={item.website}
                  bio={item.bio}
                  position={item.position}
                  eventKey={index}
                  user={user}
                />
              </div>
            ))}
        </>
      </Accordion>
    </div>
  );
};

export default MembersScreen;
