import React from 'react'

import './visaDataShow.css'
import {Button} from 'reactstrap'
import axiosInstance from'../../../utils/API'


class ShowData extends React.Component{
    constructor(props){
        super()
        this.state={
                email:String,
                app_id:String,
                org_name:String,
                person_name:String
        }
        this.requestAccept = this.requestAccept.bind(this)
    }
    componentWillMount(){
        const url = ''+window.location.href
        const app_id = url.split('http://localhost:3006/visaOfficer/ViewApplications/data/')
        
        const user={
                app_id : app_id[1]
        }
        axiosInstance.post('/visa/getData/arrival',{user})
        .then( res=>{
            this.setState({app_id:res.data.users[0].id})
            this.setState({org_name:res.data.users[0].organization_Name})
            this.setState({person_name:res.data.users[0].person_Name})
            this.setState({email:res.data.users[0].email_of_member})
        })
    }

    requestAccept(){
        const user={ 
        app_id: this .state.app_id,
        email:this.state.email
        }
        axiosInstance.post('/visa/request/accept',{user})
        .then(res=>{
            if(res.data.result){
                alert('Request has been successfully accepted')
                window.location.assign('/visaOfficer/applications')
            }

        })
    }
    render(){
        return(
            <div className="mainDiv">
                <h5><b className="visa_details">Visa Details</b></h5>
                <div className="firstDiv">
                    <form>
                        <div className="textField">
                        <h6><b className="label">Email</b></h6><br></br>
                        <input type="text" className="emailField" disabled value={this.state.email}></input>
                        </div>
                        <div className="textField_even">
                        <h6><b className="label">Application ID</b></h6><br></br>
                        <input type="text" className="emailField" disabled value={this.state.app_id}></input>
                        </div>
                        <div className="textField">
                        <h6><b className="label">Name Of Organization</b></h6><br></br>
                        <input type="text" className="emailField" disabled value={this.state.org_name}></input>
                        </div>
                        <div className="textField_even">
                        <h6><b className="label">Person Name</b></h6><br></br>
                        <input type="text" className="emailField" disabled value={this.state.person_name}></input>
                        </div>
                    </form>

                </div>
                <div className="secondDiv">
                    <table className="table">
                        <col width="5%"></col>
                        <col width="60%"></col>
                        <col width="10%"></col>
                        <tr>
                            <th className="THD">Sr#</th>
                            <th  className="THD">File Name</th>
                            <th  className="THD3">Action</th>
                        </tr>
                        <tr>
                            <td>
                                1
                            </td>
                            <td>asdjgfjashgdfhagsdjgfadshghfagsdhgadshghjasd</td>
                            <td><Button className="PrimeryBtn">Action</Button></td>
                        </tr>
                    </table>

                </div>
                <br></br>
                <Button className="PrimeryBtn2" onClick={this.requestAccept}>Accept Request </Button>
            </div>
        )
    }

}

export default ShowData