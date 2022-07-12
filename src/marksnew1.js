import React, {Component} from 'react';

class Marks extends Component{

    constructor(props){

        super(props);
        this.state={
            c_roll:this.props.roll
        };
    }
    static getDerivedStateFromProps(props,state){
        console.log("get derived state from props");
        if(props.roll !=state.c_roll)
        {
            return{c_roll:props.roll};
        }
        return null;
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.c_roll<110){
            console.log("Marks - should component");
            console.log(nextProps,nextState);
            return true;
        }
        console.log(nextProps,nextState);
        return false;
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("Get snapshot runs before update");
        console.log(prevProps,prevState);
        return 24;
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("marks- component did update");
        console.log(prevProps,prevState,snapshot);
        
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.state.c_roll}</h1>

            </React.Fragment>
        )
    }
}
export default Marks;