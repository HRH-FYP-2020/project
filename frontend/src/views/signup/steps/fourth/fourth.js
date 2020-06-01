import React from 'react';
import Circle from '../../../utils/cicle'
import './fourth.css'
class ThirdStep extends React.Component{
    constructor(props){
        super(props);
        this.state = {form:{
            itemsOfImport:'',
            countriesOfImport:'',
            countriesOfExport:'',
            itemsOfExport:''

                        }             
                    };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){

        const form = this.state.form;
        form[event.target.name] = event.target.value;
        this.setState(form);
        }
    render(){
        return (
            <div className="fourthStep" >
            
            <form>
            <h3 className="h6SignUp">Import/Export Details</h3>
            <div className="MainLine">		
					<h6 className="h6signUpHeading">	<b>ITEMS OF EXPORT</b></h6>
					<select name="itemsOfExport" onChange={this.props.onChange} value={this.props.data.itemsOfExport} className="Application_Type">  
						<option value="" disabled selected>MAIN LINE OF BUSINESS</option>  
						<option>Not Urgent</option>
						<option>Urgent</option>  
					</select>
			</div>
            <div className="MainLine">		
					<h6 className="h6signUpHeading">	<b>COUNTRIES OF EXPORT</b></h6>
					<select name="countriesOfExport" onChange={this.props.onChange} value={this.props.data.countriesOfExport} className="Application_Type">  
						<option disabled selected>MAIN LINE OF BUSINESS</option>  
						<option>Not Urgent</option>
						<option>Urgent</option>  
					</select>
			</div>
            <div className="MainLine">		
					<h6 className="h6signUpHeading">	<b>ITEMS OF IMPORT</b></h6>
					<select name= "itemsOfImport" onChange={this.props.onChange} value={this.props.data.itemsOfImport} className="Application_Type">  
						<option disabled selected>MAIN LINE OF BUSINESS</option>  
						<option>Not Urgent</option>
						<option>Urgent</option>  
					</select>
			</div>
            <div className="MainLine">		
					<h6 className="h6signUpHeading">	<b>COUNTRIES OF IMPORT</b></h6>
					<select name= "countriesOfImport" onChange={this.props.onChange} value={this.props.data.countriesOfImport} className="Application_Type">  
						<option disabled selected>MAIN LINE OF BUSINESS</option>  
						<option>Not Urgent</option>
						<option>Urgent</option>  
					</select>
			</div>
            </form>
        </div>
        )
    }
}

export default ThirdStep