import React from 'react'
import './Settings.css'
class Settings extends React.Component{
    constructor(props){
        super(props);
    this.state={
        currentPassword:'',
        newPassword:'',
        confirmPassword:'',
        newEmail:''

    }

    this.handleChannge = this.handleChange.bind(this)
    }

    handleChange(event){
    
        this.setState({[event.target.name] : event.target.value});
        // this.setState(form);
        console.log(this.state.newEmail)

    }
render(){
    return(

        <div className="MainDiv">


            <div className="PasswordDiv">
                <h4 className="ChangePassword"><b>Change Password</b></h4>
                <form>
                    <p className="h5Heading"><b>Enter Current Password</b></p>
                    <input type="password"  name="currentPassword" onChange={this.handleChange} value={this.state.currentPassword}  className="CurrentPassword" placeholder="Current Password"/><br/>
                    <p className="h5Heading"><b>Enter New Password</b></p>
                    <input type="password"  name="newPassword" onChange={this.handleChange} value={this.state.newPassword}  className="NewPassword" placeholder="New Password"/><br/>
                    <p className="h5Heading"><b>Confirm Password</b></p>
                    <input type="password"  name="confirmPassword" onChange={this.handleChange} value={this.state.confirmPassword} className="ConfirmPassword" placeholder="Confirm Password"/><br/>

                    <input type="submit" className="SubmitBtn"/>

                </form>
            </div>
            <div className="PasswordDiv">
                <h4 className="ChangePassword"><b>Change Email</b></h4>
                <form >
                    <p className="h5Heading"><b>Enter New Email</b></p>
                    <input type="email" name="newEmail" onChange={this.handleChange} value={this.state.newEmail} className="newEmail" placeholder="Current Password"/><br/>
                  

                    <input type="submit" className="SubmitBtn"/>

                </form>
            </div>


        </div>

    )
}
}
export default Settings