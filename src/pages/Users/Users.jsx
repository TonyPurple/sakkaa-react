import React, { Component } from "react";
import { getAllUsers } from "../../services/userService";
import { ListGroup } from "react-bootstrap";

class Users extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const users = await getAllUsers();
    this.setState({ users });
  }

  render() {
    return (
      <>
        <h1>Our Supporters' Stand</h1>
        {this.state.users.map((user) => (
          <ListGroup as="ol" numbered>
  <ListGroup.Item variant="info"
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">
          <p key={user._id}>{user.name} </p>
          </div>
          </div>
          </ListGroup.Item>
          </ListGroup>
        ))}
      </>
    );
  }
}

export default Users;