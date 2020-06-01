import React from "react"
import "./VisaArrival.css"
import axiosInstance from '../../../utils/API.js'
var local = JSON.parse(localStorage.getItem('user'))
class VisaArrival extends React.Component{
    constructor(props){
        super()
        this.state={
            visaArrival:{
                email_of_member:local['email'],
                APP_type:'Visa Arrival',
                organization_Name:'',
                person_Name:'',
                profession:'',
                Purpose_Of_Visit:'',
                Project_Name:'',
                Funding_Org:'',
                Address_stay:'',
                City_Visit:'',
                No_Of_Person:Number,
                Stay_Days:Number,
                Flight_Arrival:'',
                Flight_num:'',
                Flight_DEP:'',
                Flight_num_dep:'',
                Agenda_det:'',
                undertaking:''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    handleChange(event){
        const visaArrival = this.state.visaArrival
        visaArrival[event.target.name] = event.target.value 
        this.setState(visaArrival)
            
    }
    handleSubmit(event){
        event.preventDefault()
        const visaArrival = this.state.visaArrival
        axiosInstance.post('/visa/request/visa/arrival',{visaArrival})
        .then(res=>{
            alert(res.data.resultDetail)
            window.location.reload()
        })
    }
    render(){
        return(
            <div className="visaArrival">
                <form className="formVisa" onSubmit={this.handleSubmit}>
                    <div className="orginization">
                        <p><b>NAME OF ORGANIZATION</b></p>
                        <input type="text" name="organization_Name" className="field" onChange={this.handleChange} value={this.state.visaArrival.organization_Name} placeholder="Organization Name" required></input>
                    </div>
                    <div className="orginization_even">
                        <p><b>PERSON NAME</b></p>
                        <input type="text" name="person_Name" className="field" onChange={this.handleChange} value={this.state.visaArrival.person_Name} placeholder="Person Name" required></input>
                    </div>
                    {/* ///// */}
                    <div className="orginization">
                        <p><b>PROFESSION/DESIGNATION</b></p>
                        <input type="text" name="profession" className="field" onChange={this.handleChange} value={this.state.visaArrival.profession} placeholder="Profession" required></input>
                    </div>
                    <div className="orginization_even">
                        <p><b>PURPOSE OF VISIT</b></p>
                        <input type="text" name="Purpose_Of_Visit" className="field" onChange={this.handleChange} value={this.state.visaArrival.Purpose_Of_Visit} placeholder="PURPOSE OF VISIt" required></input>
                    </div>
                    {/* ///// */}
                    <div className="orginization">
                        <p><b>NAME OF PROJECT</b></p>
                        <input type="text" name="Project_Name" className="field" onChange={this.handleChange} value={this.state.visaArrival.Project_Name} placeholder="Project Name" required></input>
                    </div>
                    <div className="orginization_even">
                        <p><b>FUNDING ORGANIZATION</b></p>
                        <input type="text" name="Funding_Org" className="field" onChange={this.handleChange} value={this.state.visaArrival.Funding_Org} placeholder="Funding Organization" required></input>
                    </div>
                    {/* //////Address Of Stay Here */}
                    <div className="full">
                        <p><b>ADDRESS OF STAY</b></p>
                        <input type="text" name="Address_stay" className="field" onChange={this.handleChange} value={this.state.visaArrival.Address_stay} placeholder="Address Of Stay" required></input>
                    </div>
                    {/* ///// */}
                    <div className="orginization">
                        <p><b>CITY TO BE VISITED</b></p>
                        <input type="text" name="City_Visit" className="field" onChange={this.handleChange} value={this.state.visaArrival.City_Visit} placeholder="City To Be Visited" required></input>
                    </div>
                    <div className="orginization_even">
                        <p><b>NO. OF PERSON</b></p>
                        <input type="number" name="No_Of_Person" className="field" onChange={this.handleChange} value={this.state.visaArrival.No_Of_Person} placeholder="No. Of Person" required></input>
                    </div>
                    {/* ///// */}
                    <div className="orginization">
                        <p><b>STAY DURATION(DAYS)</b></p>
                        <input type="number" name="Stay_Days" className="field" onChange={this.handleChange} value={this.state.visaArrival.Stay_Days} placeholder="Stay Duration" required></input>
                    </div>
                    <div className="orginization_even">
                        <p><b>Flight Arrival Date</b></p>
                        <input type="date" name="Flight_Arrival" className="field" onChange={this.handleChange} value={this.state.visaArrival.Flight_Arrival} placeholder="Flight Arrival" required></input>
                    </div>
                    <div className="orginization">
                        <p><b>FLIGHT NO(Arrival)</b></p>
                        <input type="text" name="Flight_num" className="field" onChange={this.handleChange} value={this.state.visaArrival.Flight_num} placeholder="Flight No" required></input>
                    </div>
                    <div className="orginization_even">
                        <p><b>Flight DEPARTURE Date</b></p>
                        <input type="date" name="Flight_DEP" className="field" onChange={this.handleChange} value={this.state.visaArrival.Flight_DEP} placeholder="Flight Departure" required></input>
                    </div>
                    <div className="orginization">
                    <p><b>FLIGHT NO(DEPARTURE)</b></p>
                        <input type="text" name="Flight_num_dep" className="field" onChange={this.handleChange} value={this.state.visaArrival.Flight_num_dep} placeholder="Flight No(DEP)" required></input>
                    </div>

                    <div className="full">
                    <p><b>AGENDA DETAILS</b></p>
                        <input type="text" name="Agenda_det" className="field" onChange={this.handleChange} value={this.state.visaArrival.Agenda_det} placeholder="Agenda Details" required></input>
                    </div>
                
                    {/* ///// */}

                    <div className="full">
                        <h4 className="underTaking"><b className="bold">UNDERTAKING</b></h4>
                        <input type="checkbox" id="undertaking" name="undertaking" onChange={this.handleChange} value="undertaking" required/>
                        <label for="undertaking"> <b>I hereby undertake that our organization(XYZ) will be responsible for the boarding of the above person in Pakistan and will also
                            be responsible for any illegal activity caused by the above person during his/her stay in Pakistan.  I furthur undertake the above mentioned person will
                             leave pakistan on/before and report will be sent to COC after departure.</b></label><br></br>
                    </div><br></br>
                    <div className="btnDIv">
                        <input type="submit" className="btnSave" value="Save"></input>  
                    </div>
                        

                </form>
            </div>
        )
    }
}
export default VisaArrival