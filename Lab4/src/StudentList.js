import React from "react";
import AddStudent from "./AddStudent"
import DeleteStudent from "./DeleteStudent"
import { render } from "react-dom";
import axios from "axios";

class UserList extends React.Component {
    
    state ={
        users : []
    }
  render() {
    return (
      <div>
          <AddStudent trigger={this.handleChange}/>
        <ul>
          {this.state.users.map((users) => (
            <li>{users.name}
            <div>
                <DeleteStudent id={users.id} trigger={this.handleChange} />
            </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  }

  handleChange = () =>{
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
        const users = res.data;
        this.setState({ users });
        console.log(users)
      });
    }

}

export default UserList;
