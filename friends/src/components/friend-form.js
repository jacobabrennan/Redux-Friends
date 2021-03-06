

//== FriendForm Component ======================================================

//-- Dependencies --------------------------------
import React from "react";

//-- Lifecycle -----------------------------------
export default class extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            name: '',
            age: null,
            email: ''
        }    
    }

//-- Rendering -----------------------------------
    render() {
        let header;
        if(!this.props.update){
            header = <h2>Add Friend:</h2>
        } else{
            header = <h2>Update Friend:</h2>
        }
        return (
            <form onSubmit={this.handleSubmit}>
                {header}
                <input
                    type="text"
                    onChange={this.handleInputChange}
                    placeholder="name"
                    value={this.state.name}
                    name="name"
                />
                <input
                    type="number"
                    onChange={this.handleInputChange}
                    placeholder="age"
                    value={this.state.age || ''}
                    name="age"
                />
                <input
                    type="email"
                    onChange={this.handleInputChange}
                    placeholder="email"
                    value={this.state.email}
                    name="email"
                />
                <button type="submit">Submit</button>
            </form>
        );
    }

//-- Interaction ---------------------------------
    handleInputChange = changeEvent => {
        this.setState({
            [changeEvent.target.name]: changeEvent.target.value 
        });
    }
    handleSubmit = submitEvent => {
        submitEvent.preventDefault();
        let friendData = {
            name: this.state.name,
            age: Number(this.state.age),
            email: this.state.email,
        };
        this.clearState();
        this.props.onSubmit(friendData);
    }

//-- Utility Methods -----------------------------
    clearState() {
        this.setState({
            name: '',
            age: null,
            email: '',
        });
    }
}
