import React from 'react';
import './secondStep.css'
class SecondStep extends React.Component{
    render(){
        return (
    <div className="secondStep">
        
        <form>
            <h3 className="h6SignUp">Business Details</h3>
            <div className="Business_Name">
                <h6  className="h6signUpHeading">
                    <b>BUSINESS NAME</b>
                </h6>
                <input type="text" name="business_name" onChange={this.props.onChange} value={this.props.data.business_name}  className="textType" placeholder="Business Name">
                </input>
            </div>
            <div className="Business_Name">
                <h6  className="h6signUpHeading">
                    <b>BUSINESS ADDRESS</b>
                </h6>
                <input type="text" name="business_address" className="textType" onChange={this.props.onChange} value={this.props.data.business_address} placeholder="Business Name">
                </input>
            </div>
            <div className="Representative_Name">
                <h6  className="h6signUpHeading">
                    <b>Representative Name</b>
                </h6>
                <input type="text" name="representative_name" className="textType" onChange={this.props.onChange} value={this.props.data.representative_name} placeholder="Business Name">
                </input>
            </div>
            <div className="Representative_Name">
                <h6  className="h6signUpHeading">
                    <b>DESIGNATION</b>
                </h6>
                <input type="text" name="designation" onChange={this.props.onChange} value={this.props.data.designation} className="textType" placeholder="Business Name">
                </input>
            </div>
            <div className="Business_Name">
                <h6  className="h6signUpHeading">
                    <b>NAME OF PARTNERS/DIRECTOR(USE ',' TO SEPRATE NAME)</b>
                </h6>
                <input type="text" name="name_of_partners" onChange={this.props.onChange} value={this.props.data.name_of_partners} className="textType" placeholder="Business Name">
                </input>
            </div>
            <div className="Type_of_MemberShip">		
					<h6  className="h6signUpHeading">	<b>NAME OF BANK</b></h6>
					<select className="Application_Type" name="bank_name" onChange={this.props.onChange} value={this.props.data.bank_name}>  
						<option value="" disabled selected>NAME OF BANK</option>  
						<option>UBL</option>
						<option>MCB</option>  
					</select>
			</div>
            <div className="date">
				<h6  className="h6signUpHeading">
					<b>BUSSINESS ESTABLISGMENT DATE</b>
				</h6>
				<input type="date" name="business_start_date" onChange={this.props.onChange} value={this.props.data.business_start_date} className="startDate"  ></input>
			</div>
            <div className="NTN_Num">
                <h6  className="h6signUpHeading">
                    <b>NTN (BUSINESS)</b>
                </h6>
                <input type="text" name="ntn_num" onChange={this.props.onChange} value={this.props.data.ntn_num} className="textType" placeholder="NTN (business)">
                </input>
            </div>
            <div className="MainLine">		
					<h6  className="h6signUpHeading">	<b>MAIN LINE OF BUSINESS</b></h6>
					<select className="Application_Type" onChange={this.props.onChange} name="main_line_of_business" value={this.props.data.main_line_of_business}>  
						<option value="" disabled selected>MAIN LINE OF BUSINESS</option>  
						<option>Not Urgent</option>
						<option>Urgent</option>  
					</select>
			</div>
            <div className="Representative_Name">
                <h6  className="h6signUpHeading">
                    <b>TEL 1 (BUSINESS)</b>
                </h6>
                <input type="text" name="tel_1_business" onChange={this.props.onChange} value={this.props.data.tel_1_business} className="textType" placeholder="Business Name">
                </input>
            </div>
            <div className="Representative_Name">
                <h6  className="h6signUpHeading">
                    <b>TEL 2 (BUSINESS)</b>
                </h6>
                <input type="text" className="textType" name="tel_2_business" onChange={this.props.onChange} value={this.props.data.tel_2_business} placeholder="Business Name">
                </input>
            </div>
             <div className="Representative_Name">
                <h6  className="h6signUpHeading">
                    <b>SALES TAX REGISTRATION. IF APPLICABLE GST NO</b>
                </h6>
                <input type="text" name="sale_tex_reg" onChange={this.props.onChange} value={this.props.data.sale_tex_reg} className="textType" placeholder="Business Name">
                </input>
            </div>
            <div className="Representative_Name">		
					<h6  className="h6signUpHeading">	<b>BUSINESS INTREST</b></h6>
					<select name="business_intrest" onChange={this.props.onChange} value={this.props.data.business_intrest} className="Application_Type">  
						<option value="" disabled selected>NAME OF BANK</option>  
						<option>Not Urgent</option>
						<option>Urgent</option>  
					</select>
			</div>
           
        </form>
           

    </div>
        )
    }
}

export default SecondStep