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
      </div>
    );
  }
}
export default ViewUsers;
