import React, {Component} from "react"

class Students extends Component{
    render() {
        return (
        <h1>Hello class from {this.props.name}</h1>
        );
    }
}
export default Students;