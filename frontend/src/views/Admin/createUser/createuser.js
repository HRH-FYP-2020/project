import React from 'react'
import "./createuser.css"

import axiosInstance from '../../../utils/API'
class CreateUser extends React.Component{

    constructor(props){
        super()
        this.state={
            Email:'',
            Name:'',
            MobileNo:'',
            Designation:'',
            update:false
        }
        this.checkboxClicked = this.checkboxClicked.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){

        this.setState({[event.target.name] : event.target.value})
    }
    handleSubmit(e){
       
        e.preventDefault();
        var role = ''
        if(this.state.Designation === "Printing Officer"){
            role = 'printingOfficer'
        }else if(this.state.Designation === "Delivery Officer"){
            role = 'deliveryOfficer'
        }else if(this.state.Designation === "Events Officer"){
            role = 'eventsOfficer'
        }else if(this.state.Designation === "Membership Officer"){
            role = 'membershipOfficer'
        }else if(this.state.Designation === "Finance Officer"){
            role = 'financeOfficer'
        }else if(this.state.Designation === "Visa Officer"){
            role = 'visaOfficer'
        }
        
        const user={
            email:this.state.Email,
            name:this.state.Name,
            mobileNo:this.state.MobileNo,
            role:role,
            update:this.state.update
        }
        axiosInstance.post('/admin/create/user',{user})
        .then(res=>{
                if(res.data.result){
                    alert(res.data.message)
                    window.location.reload()
                }else{
                    alert(res.data.err)
                    window.location.reload()
                }
        })

    }
    checkboxClicked(){
        this.setState({update:!this.state.update})
        console.log(this.state.update)
    }
    render(){
        return(
            <div className="createUser">
               
                    <h4 className="h3Heading"><b>Enter Account Details</b>  </h4>
                    <form onSubmit={this.handleSubmit}>
                    <div className="accountDetails">
                        <div className="EmailDiv">
                        <p className="accountHading"><b>Enter Email</b></p>
                        <input type="email" name="Email" value={this.state.Email} onChange={this.handleChange} placeholder="Email" className="EmailField" required></input>
                        </div>
                        <div className="EmailDiv">
                        <p className="accountHading"><b>Name</b></p>
                        <input type="text" name="Name" value={this.state.Name} onChange={this.handleChange} placeholder="Name" className="EmailField" required></input>
                        </div>
                        <div className="EmailDiv">
                        <p className="accountHading"><b>Mobile#</b></p>
                        <input type="text" name="MobileNo" value={this.state.MobileNo} onChange={this.handleChange} placeholder="Mobile No." className="EmailField" required></input>
                        </div>
                        <div className="EmailDiv">
                        <p className="accountHading"><b>Designation</b></p>
                        <select name="Designation" value={this.state.Designation} onChange={this.handleChange} className="EmailField" required>
                            <option value="" disabled selected>Designation</option>
                            <option >Finance Officer</option>
                            <option >Printing Officer</option>
                            <option >Delivery Officer</option>
                            <option >Events Officer</option>
                            <option >Membership Officer</option>
                            <option >Visa Officer</option>
                        </select>
                        </div>
                        <label class="switch">
                            <input type="checkbox" onClick={this.checkboxClicked} />
                            <span class="slider round">Update User</span>
                            </label>
                    </div>
                        <input type="submit" className="submitBtnn"></input>
                    </form>
               
                
            </div>
        )
    }

}
export default CreateUser