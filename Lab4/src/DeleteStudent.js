import React from "react";
import { render } from "react-dom";
import axios from "axios";

class DeleteStudent extends React.Component{

    constructor(props) {
        super(props);
      
        this.state = {
          id : props.id,
          refreshFunction : props.trigger
        };
      
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    }

    handleChange = event =>{
        this.setState({name: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        const id = event.target.id;
    
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
            this.state.refreshFunction();
        })
      }
}

export default DeleteStudent;