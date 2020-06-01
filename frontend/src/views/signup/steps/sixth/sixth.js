import React from 'react';
import Circle from '../../../utils/cicle'
import './sixth.css'
import Files from '../files/files'
class FifthStep extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
            value:5
                    };

        this.toggle = this.toggle.bind(this);
    }
    
      
      toggle(currentState){

        this.setState({
            value:15,
            show: !currentState.show
        })
      }
    //   toggle = () => this.setState((currentState) => ({show: !currentState.show}));
    render(){
        return (
            <div className="sixthStep" style={{height: this.state.value + "%"}}>
                <form>        
                    <h6 className="h6heading">Upload Required Documents</h6><br></br><br></br><br></br>
                    <p>Documents Required Are Listed Below</p>  <br></br><br></br>
                    <input type="button" className="btnn" value="Click me" onClick={this.toggle}></input>
                    <div>
                        {this.state.show && <Files/>}
                    </div>


                </form>
        </div>
        )
    }
}

export default FifthStep