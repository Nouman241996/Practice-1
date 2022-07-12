import React, {Component} from 'react';
import Marks from './marksnew1';

class Studentnew extends Component{
    constructor(props){

        super(props);
        this.state={
            roll:101
        };

    }
    handleclick=()=>{
        this.setState({roll:this.state.roll+1});
        console.log("clicked");
    }
    render(){
        return(
            <React.Fragment>
                <Marks roll={this.state.roll} />
                <button onClick={this.handleclick}>Change </button>
            </React.Fragment>
        )
    }
}
export default Studentnew;