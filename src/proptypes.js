import React,{Component} from "react";
import PropTypes from "prop-types";

class Typespromp extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Nouman",
            roll:this.props.rollno
        }
    }
    render() {
        return (
             <React.Fragment>
                 <h1>My name is {this.state.name}</h1>
                   <h2>My roll no is {this.state.roll}</h2>
             </React.Fragment>
        );
    }
}
class Buttonprac extends Component{
constructor(props){
    super(props);
    this.state={
        name1:"hum ne kiya, hum ne kiya"
    }
}

    clickfunc=()=>
    {
        this.setState({name1:"o bhai maro mjhy"});
        console.log("Thora zor se push krna tha na bhai",this);
    }
    render() {
        return (
             <React.Fragment>
                 <h1>Practicing event handling</h1>
                 <button onClick={this.clickfunc}>Push me !</button>
                 <p>{this.state.name1}</p>
             </React.Fragment>
        );
    }
}
//Typespromp.propTypes={
//    name: PropTypes.string.isRequired
//}
//Typespromp.defaultProps={
  //  name:"Achoo janab"
//}
export { Typespromp, Buttonprac};