import React, { Component } from "react";
//import Modal, { closeStyle } from "simple-react-modal";
import Modal from "react-modal";
import "../Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container, Button } from "react-bootstrap";

const customStyles = {
  content: {
    height: "50%",
    width: "50%",
    marginTop: "5%",
    marginLeft: "20%",
    backgroundColor: "#f1f1f1",
  },
};
class Fetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoaded: false,
      id: "",
    };
    this.handleClickTable = this.handleClickTable.bind(this);
    this.close = this.close.bind(this);
    this.handleClickModalPrev = this.handleClickModalPrev.bind(this);
    this.handleClickModalNext = this.handleClickModalNext.bind(this);
  }

  componentDidMount() {
    fetch("https://userjanani7.free.beeceptor.com/user")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          isLoaded: true,
          users: json,
          show: false,
        });
      });
  }

  close() {
    this.setState({ show: false, id: "" });
  }
  handleClickModalPrev(id) {
    for (let i = 0; i < this.state.users.length; i++) {
      if (id == this.state.users[0].id) {
      } else {
        this.setState({ id: this.state.id - 1 });
      }
    }
  }
  handleClickModalNext(id) {
    for (let i = 0; i < this.state.users.length; i++) {
      if (id > this.state.users[i].id || id == this.state.users[i].id) {
      } else {
        this.setState({ id: this.state.id + 1 });
      }
    }
  }

  handleClickTable(id) {
    this.setState({ id: id, show: true });
  }

  render() {
    const { isLoaded, users } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Modal
            isOpen={this.state.show}
            onRequestClose={this.close}
            className={this.props.className}
            style={customStyles}
          >
            {this.state.users.map((objDisplay) =>
              objDisplay.id === this.state.id ? (
                <div>
                    <Button
                    id="close"
                    variant="dark"
                    onClick={() => this.close()}
                  >
                    X
                  </Button>
                  <Button
                    id="button"
                    variant="dark"
                    onClick={() => this.handleClickModalNext(objDisplay.id)}
                  >
                    &#62;
                  </Button>
                  <Button
                    id="button"
                    variant="dark"
                    onClick={() => this.handleClickModalPrev(objDisplay.id)}
                  >
                    &#60;
                  </Button>

                  <h3 className="center"> {objDisplay.firstName} Details</h3>
                  <Table id="table-bg" striped bordered hover>
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <td>{objDisplay.id}</td>
                      </tr>
                      <tr>
                        <th>Full Name</th>
                        <td>
                          {objDisplay.firstName} {objDisplay.lastName}
                        </td>
                      </tr>
                      <tr>
                        <th>Age</th>
                        <td>{objDisplay.age}</td>
                      </tr>
                      <tr>
                        <th>Date Of Birth</th>
                        <td>{objDisplay.dob}</td>
                      </tr>
                      <tr>
                        <th>Street</th>
                        <td>{objDisplay.address}</td>
                      </tr>
                      <tr>
                        <th>City</th>
                        <td>{objDisplay.city}</td>
                      </tr>
                      <tr>
                        <th>State</th>
                        <td>{objDisplay.state}</td>
                      </tr>
                      <tr>
                        <th>Phone</th>
                        <td>{objDisplay.phone}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>{objDisplay.email}</td>
                      </tr>
                    </thead>
                  </Table>
                </div>
              ) : (
                ""
              )
            )}
          </Modal>

          <Container>
            <h3 className="center">User_Details</h3>
            <br />
            <Table striped bordered hover size="lg">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Contact Number</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((obj) => (
                  <tr
                    className="row1"
                    onClick={() => this.handleClickTable(obj.id)}
                  >
                    <td>{obj.id}</td>
                    <td>{obj.name}</td>
                    <td>{obj.phone}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </div>
      );
    }
  }
}
export default Fetch;
