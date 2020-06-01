import React from 'react';
import Circle from '../../../utils/cicle'
import './fifth.css'
class FifthStep extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {form:{
    //         itemsOfImport:'',
    //         countriesOfImport:'',
    //         countriesOfExport:'',
    //         itemsOfExport:''

    //                     }             
    //                 };

    //     this.handleChange = this.handleChange.bind(this);
    // }

    // handleChange(event){

    //     const form = this.state.form;
    //     form[event.target.name] = event.target.value;
    //     this.setState(form);
    //     }
    render(){
        return (
            <div className="fifthStep" >
            
            <form>
            <h3 className="h6SignUp">Verification Details</h3>
            <div className="personal_Details">
                <h6  className="h6signUpHeading">
                    <b>EMAIL 1</b>
                </h6>
                <input type="email" name="email1V" onChange={this.props.onChange} value={this.props.data.email1V} className="textType" placeholder="Email 1">
                </input>
            </div>
            <div className="personal_Details">
                <h6  className="h6signUpHeading">
                    <b>Email 2</b>
                </h6>
                <input type="email" name="email2V" onChange={this.props.onChange} value={this.props.data.email2V} className="textType" placeholder="Email 2">
                </input>
            </div>
            </form>
        </div>
        )
    }
}

export default FifthStep