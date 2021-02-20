import React from "react";
import "./App.css";
import ViewUsers from "./components/Users";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", users: [] };
  }
  handleNamechange = (e) => {
    this.setState = {
      email: e.target.value,
    };
    console.log(this.state.name);
  };
  handleEmailchange = (e) => {
    this.setState = {
      password: e.target.value,
    };
    console.log(this.state.email);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let newUser = { name: this.state.name, email: this.state.email };
    this.setState({ users: [...this.state.users, newUser] });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          type="name"
          placeholder="name"
          // onChange={(e) => this.handleEmailchange(e)}
          value={this.state.name}
        />
        <br />
        <input
          name="email"
          type="email"
          placeholder="email"
          // onChange={(e) => this.handleEmailchange(e)}
          value={this.state.email}
        />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

export default App;
