import React, { Component } from 'react'

export class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {Age: this.props.age};
    }
    const 
    
    
    render() {
        return (
            <div>
                <h1>{this.props.lastname} , {this.props.firstname}</h1>
                <p>Age : {this.state.Age}</p>
                <p>Hair Color : {this.props.haircolor}</p>
                { <button  onClick={ () => { this.setState ({ Age: this.state.Age +1 })  }}  >Add </button> }
            </div>
        )
    }
}

export default Example