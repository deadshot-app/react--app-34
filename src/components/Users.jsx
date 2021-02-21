import React from "react";

class ViewUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  render() {
    return (
      <div className="App">
        <ViewUsers />
        <div>
          {this.state.users.map((user, index) => (
            <ViewUsers key={index} name={user.name} email={user.email} />
          ))}
        </div>
      </div>
    );
  }
}
export default ViewUsers;
