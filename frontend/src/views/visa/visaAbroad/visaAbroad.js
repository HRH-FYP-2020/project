import React from 'react'
import './visaAbroad.css'
import axiosInstance from '../../../utils/API.js'
class VisaAbroad extends React.Component{
    constructor(props){
        super()
        this.state={                
                visaAbroad:{
                    visa_request_letterhead_PIC:'',
                    passport_PIC:'',
                    CNIC_front_PIC:'',
                    CNIC_back_PIC:'',
                    invitation_letter:'',
                    list_of_employees:'',
                    employee_request:'',
                    appointment_letter:'',
                }
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
            const visaAbroad = this.state.visaAbroad
            visaAbroad[event.target.name]= event.target.value
            this.setState(visaAbroad)
    }

    handleSubmit(event){
        event.preventDefault()
        const visaAbroad = this.state.visa_request_letterhead_PIC
        axiosInstance.post('/visa/abroad/data',{visaAbroad})
        .then(res=>{
            alert(res.data.resultDetail)
            window.location.reload()
        })
    }
    render() {
        return (
            <div className="visaAbroad">

                <form className="visaAbroadForm" onSubmit={this.handleSubmit}>
                    <div className="headingDiv">
                        <h4 className="h4headingDiv">Upload Required Documents</h4>
                        <p className="pheadingDiv">Documents Required Are Listed Below</p>
                    </div>
                    <div className="filesDiv"> 
                        <div className="firstFile">   
                            <p className="fileHeading">VISA REQUEST ON LETTERHEAD</p><br></br>                
                            <input className="" name='visa_request_letterhead_PIC' value={this.state.visaAbroad.visa_request_letterhead_PIC} onChange={this.handleChange}  type="file"   /><br></br>
                            <p><small>Only Pdf</small></p>
                        </div>
                        <div className="filesEven">
                            <p className="fileHeading">PASSPORT</p><br></br>                   
                            <input className="" type="file" name='passport_PIC'  value={this.state.visaAbroad.passport_PIC} onChange={this.handleChange}  accept="application/pdf"   /><br></br>
                            <p><small>Only Pdf</small></p>
                        </div>
                        <div className="firstFile">   
                            <p className="fileHeading">CNIC FRONT</p><br></br>                
                            <input className="" name='CNIC_front_PIC' value={this.state.visaAbroad.CNIC_front_PIC} onChange={this.handleChange}  type="file" accept="application/pdf"   /><br></br>
                            <p><small>Only Pdf</small></p>
                        </div>
                        <div className="filesEven">
                            <p className="fileHeading">CNIC BACK</p><br></br>                   
                            <input className="" type="file" name='CNIC_back_PIC' value={this.state.visaAbroad.CNIC_back_PIC} onChange={this.handleChange}  accept="application/pdf"   /><br></br>
                            <p><small>Only Pdf</small></p>
                        </div>
                        <div className="firstFile">   
                            <p className="fileHeading">COPY OF INVITATION LETTER</p><br></br>                
                            <input className="" name='invitation_letter' onChange={this.handleChange}  value={this.state.visaAbroad.invitation_letter}  type="file" accept="application/pdf"   /><br></br>
                            <p><small>Only Pdf</small></p>
                        </div>
                        <div className="filesEven">
                            <p className="fileHeading">LIST OF EMPLOYEES </p><br></br>                   
                            <input className="" type="file" name='list_of_employees' value={this.state.visaAbroad.list_of_employees} onChange={this.handleChange}  accept="application/pdf"   /><br></br>
                            <p><small>Only Pdf</small></p>
                        </div>
                        <div className="firstFile">   
                            <p className="fileHeading">EMPLOYEES REQUEST/APPLICATION</p><br></br>                
                            <input className="" name='employee_request' value={this.state.visaAbroad.employee_request} onChange={this.handleChange}  type="file" accept="application/pdf"   /><br></br>
                            <p><small>Only Pdf</small></p>
                        </div>
                        <div className="filesEven">
                            <p className="fileHeading">APPOINTMENT LETTER OF EMPLOYEE</p><br></br>                   
                            <input className="" type="file" name='appointment_letter' value={this.state.visaAbroad.appointment_letter} onChange={this.handleChange}  accept="application/pdf"   /><br></br>
                            <p><small>Only Pdf</small></p>
                        </div>
                        <div className="btnDIv">
                        <input type="submit" className="btnSave" value="Save"></input>  
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default VisaAbroad