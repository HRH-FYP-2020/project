import React from 'react';
import Circle from '../../../utils/cicle'
import './firstStep.css'
// import '../../signup.css'
class FirstStep extends React.Component{
    render(){
        return (
    <div className="firstStepDiv" >

		<form>
			<h3 className="h6SignUp">MemberShip Status Details</h3>
					
					
			<div className="Type_of_MemberShip">		
				<h6  className="h6signUpHeading"><b>Type of MemberShip</b></h6>
					<select  value={this.props.data.type_of_memberShip} name ="type_of_memberShip" onChange={this.props.onChange} className="Application_Type">  
						<option  disabled selected>Application Type</option>  
						<option>MemberShip</option>
						<option>MemberShip Renew</option>  
					</select>
			</div>
			<div className="Type_of_MemberShip">		
					<h6  className="h6signUpHeading">	<b>Class Of MemberShip</b></h6>
					<select className="Application_Type"  value={this.props.data.class_of_memberShip}  onChange={this.props.onChange}  name ="class_of_memberShip">  
						<option value="" disabled selected>Class Of MemberShip</option>  
						<option>Not Urgent</option>
						<option>Urgent</option>  
					</select>
			</div>
			<div className="date">
				<h6  className="h6signUpHeading">
					<b>MemberShip Starting Date</b>
				</h6>
				<input type="date" name="startDate"  value={this.props.data.startDate} onChange={this.props.onChange}  className="startDate"></input>
				{this.props.alert.startDate &&<i className="fa fa-warning" style={{color:"red"}}><p className="warningP">Please Enter Correct Date</p></i>}
			</div>
			<div className="date">
				<h6  className="h6signUpHeading">
					<b>MemberShip Expiry Date</b>
				</h6>
				<input type="date" name="endDate" value={this.props.data.endDate} onChange={this.props.onChange}  className="startDate" ></input>
			</div>
		</form>
	</div>
        )
    }
}

export default FirstStep