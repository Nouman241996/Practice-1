import React, {Component} from 'react';

class Satprac extends Component{

   constructor(props){
       super(props);

       this.state={
           name:this.props.kuchbhi

       }
   }
   handlefunc= (id,e) =>{
        console.log(id,e);
   }
   
   
    render() {
        return (
             <React.Fragment>
                 <h1>Practice {this.state.name}</h1>
                 <button onClick={e=>{this.handlefunc(this.state.name,e)}}>Press here</button>
                 <button onClick={this.handlefunc.bind(this,this.state.name)}>Press me too</button>

             </React.Fragment>
        );
    }
}
export default Satprac;