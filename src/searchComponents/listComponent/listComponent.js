import React from "react";

class ListComponent extends React.Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map((user, i) => (
              <tr key={`${user.name}${i}`}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ListComponent;
