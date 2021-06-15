import React, { Component } from "react";
import Fetch from "./Fetch";
import "../Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Form,
  Button,
  Card,
  Image,
  Jumbotron,
} from "react-bootstrap";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uname: "",
      pwd: "",
      fetch: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    localStorage.setItem("uname", event.target[0].value);
    localStorage.setItem("password", event.target[1].value);
    this.setState({ fetch: true });
  }
  
  render() {
    return this.state.fetch === false ? (
      <div id="bg">
        <Container id="bg">
          <Jumbotron>
            <h1 className="header">Welcome back to Grootan Technologies!</h1>
          </Jumbotron>
          <Card id="card" style={{ width: "38%" }}>
            <Card.Body>
              <h1 class="center">Login</h1>

              <Form onSubmit={this.handleClick}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    size="lg"
                    type="email"
                    ref="username"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    size="lg"
                    type="password"
                    ref="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <br />
                <Button className="button" variant="info" type="submit">
                  Login
                </Button>
              </Form>

              <Card.Link href="#" id="register">
                Register
              </Card.Link>
              <Card.Link href="#" id="forgot">
                Forgot Password?
              </Card.Link>
            </Card.Body>
          </Card>
        </Container>
        
      </div>
    ) : (
      <Fetch />
    );
  }
}

export default Login;
