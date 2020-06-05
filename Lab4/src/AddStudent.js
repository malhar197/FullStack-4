import React from "react";
import { render } from "react-dom";
import axios from "axios";

class AddStudent extends React.Component{

    constructor(props) {
        super(props);
      
        this.state = {
          name : "",
          refreshFunction : props.trigger
        };
      
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="Name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }

    handleChange = event =>{
        this.setState({name: event.target.value});
    }

    handleSubmit = event =>{
        event.preventDefault();

        const user = {
            name: this.state.name
          };

        axios.post(`https://jsonplaceholder.typicode.com/users`,{
            user
        }).then(function(response){
            console.log(response);
            this.state.refreshFunction();
        }).catch(function(error){
            console.log(error);
        })
    }
}

export default AddStudent;