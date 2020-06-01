import React from 'react';
import Circle from '../../../utils/cicle'
import './third.css'
class ThirdStep extends React.Component{
    render(){
        return (
            <div className="thirdStep" >
            
            <form>
            <h3 className="h6SignUp">Personal Details</h3>
            <div className="personal_Details">
                <h6 className="h6signUpHeading">
                    <b>First Name</b>
                </h6>
                <input type="text" name="first_name" onChange={this.props.onChange} value={this.props.data.first_name}  className="textType" placeholder="First Name">
                </input>
            </div>
            <div className="personal_Details">
                <h6 className="h6signUpHeading">
                    <b>LAST NAME</b>
                </h6>
                <input type="text" name="last_name" onChange={this.props.onChange} value={this.props.data.last_name} className="textType" placeholder="Last Name">
                </input>
            </div>
            <div className="personal_Details">
                <h6 className="h6signUpHeading">
                    <b>CNIC</b>
                </h6>
                <input type="text" name="CNIC" className="textType" onChange={this.props.onChange} value={this.props.data.CNIC} placeholder="CNIC(00000-0000000-0)">
                </input>
            </div>
            <div className="personal_Details">
                <h6 className="h6signUpHeading">
                    <b>PASSPORT</b>
                </h6>
                <input type="text" name="passport" className="textType" onChange={this.props.onChange} value={this.props.data.passport} placeholder="Passport">
                </input>
            </div>
            <div className="personal_Details">
				<h6 className="h6signUpHeading">
					<b>DATE OF BIRTH</b>
				</h6>
				<input type="date" name="birthDate" onChange={this.props.onChange} value={this.props.data.birthDate} className="textType" placeholder="Date Of Birth" ></input>
			</div>
            <div className="personal_Details">
				<h6 className="h6signUpHeading">
					<b>Mobile Number 1</b>
				</h6>
				<input type="tel" name="mobileNum"  onChange={this.props.onChange} value={this.props.data.mobileNum} className="textType" pattern="[0-9]{4}-[0-9]{7}" placeholder="Mobile Num (0000-0000000)" required/>
			</div>
            <div className="personal_Details">
				<h6 className="h6signUpHeading">
					<b>Mobile Number 2</b>
				</h6>
				<input type="tel" name="mobileNum2" onChange={this.props.onChange} value={this.props.data.mobileNum2}  className="textType" pattern="[0-9]{4}-[0-9]{7}" placeholder="Mobile Num (0000-0000000)" required/>
			</div>
            <div className="personal_Details">
                <h6 className="h6signUpHeading">
                    <b>Email 1</b>
                </h6>
                <input type="email" name="email" onChange={this.props.onChange} value={this.props.data.email} className="textType" placeholder="aaa@aaa.com">
                </input>
            </div>
            <div className="personal_Details">
                <h6 className="h6signUpHeading">
                    <b>Email 2</b>
                </h6>
                <input type="email" name="email2" onChange={this.props.onChange} value={this.props.data.email2} className="textType" placeholder="aaa@aaa.com">
                </input>
            </div>     
            <div className="personal_Details">
				<h6 className="h6signUpHeading">
					<b>Telephone Number</b>
				</h6>
				<input type="tel" name="telNum" onChange={this.props.onChange} value={this.props.data.telNum} className="textType" placeholder="Telephone Number" required/>
			</div>

            <div className="personal_Details">
                <h6 className="h6signUpHeading">
                    <b>FAX</b>
                </h6>
                <input type="text" name="fax" onChange={this.props.onChange} value={this.props.data.fax} className="textType" placeholder="FAX">
                </input>
            </div>
            <div className="personal_Details">
                <h6 className="h6signUpHeading">
                    <b>UAN</b>
                </h6>
                <input type="text" name="uan" onChange={this.props.onChange} value={this.props.data.uan} className="textType" placeholder="Enter UAN No.">
                </input>
            </div>
            <div className="personal_Details">
                <h6 className="h6signUpHeading">
                    <b>URL</b>
                </h6>
                <input type="text" name="url" onChange={this.props.onChange} value={this.props.data.url} className="textType" placeholder="Enter URL">
                </input>
            </div>

            </form>
        </div>
        )
    }
}

export default ThirdStep