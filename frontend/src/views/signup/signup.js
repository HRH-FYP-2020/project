import React from 'react';
import FirstPage from './Pages/firstPage';
import FirstStep from './steps/first/firstStep';
import SecondStep from './steps/second/secondStep';
import ThirdStep from './steps/third/third';
import FourthStep from './steps/fourth/fourth';
import FifthStep from './steps/fifth/fifth';
import SixthStep from './steps/sixth/sixth';
import axiosInstance from '../../utils/API'

import './signup.css'
var local = JSON.parse(localStorage.getItem('user'))
// import { number } from 'prop-types';
class Singup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            form:{
                application_Type:'',
                business_name:"",
                representative_name:"",
                business_address:"",
                designation:"",
                business_intrest:"",
                bank_name:"",
                name_of_partners:"",
                business_start_date:"",
                ntn_num:"",
                main_line_of_business:"",
                tel_1_business:"",
                tel_2_business:"",
                sale_tex_reg:"",
                endDate:"",
                startDate:"",
                class_of_memberShip:'',
                type_of_memberShip:'',
                url:'',
                uan:'',
                password:'asdf',
                fax:'',
                telNum:'',
                email:'',
                email2:'',
                mobileNum:'',
                mobileNum2:'',
                birthDate:'',
                passport:'',
                CNIC:'',
                last_name:'',
                first_name:'',
                itemsOfExport:'',
                countriesOfExport:'',
                itemsOfImport:'',
                countriesOfImport:'',
                email1V:'',
                email2V:'',
                role:'',
                checkedB:false
                },
                alert:{
                    startDate:false
                },
                new:false
            };
        this.onChange = this.onChange.bind(this);
        this.onFinalSubmit = this.onFinalSubmit.bind(this);
   } 
    onChange(event){
        const form = this.state.form;
        form[event.target.name] = event.target.value;
        this.setState(form);
    }
    onFinalSubmit(){

        // const currentDate = this.getDate()
        //  if(currentDate  !== this.state.form.startDate){
        //     this.setState({
        //         alert:{
        //            startDate: true
        //         }
        //     });
        //  }else{
        //     if(this.state.form.endDate < this.state.form.startDate){
        //         alert('Please Enter The Date Correctly')

        //     }else{
                const form= this.state.form;
                axiosInstance.post('/user/signUp',{form})
                .then(res=>{
                    if(!res.data.result){
                          
                        alert('Email Already exists')
                        if(local['role'] === 'membershipOfficer'){
                            window.location.assign('/memberShip')    
                        }
                      
                    }else if(res.data.result){    
                        alert('The registration requesst have been recieved.')
                        if(local['role'] === 'membershipOfficer'){
                            window.location.assign('/memberShip')    
                        }else{
                        window.location.assign('/home') 
                    }
                       
                        }
                }).catch(error=>{
                alert('Your Email Or Password Is Incorrect')
                    })
            }     
        // }
    // }

    getDate(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return today
    }
    render(){
        
        return (
           <div>
           <div className="mainDiv">
 <h1>Registration Form</h1>
    <div className="secondryDiv">
           <FirstPage form={this.state.form} />
           </div>
           </div>
{this.state.new && <div className="mainDiv">
 <h1>Registration Form</h1>
    <div className="secondryDiv">
            <div className="MemberShip_Aplication_Details">
                <h3 className="h6SignUp">MemberShip Application Details</h3>
                <div className="Type_of_MemberShip2">		
					<h6 className="h6signUpHeading"><b>TYPE OF APPLICATION</b></h6>
					<select onChange={this.onChange} name="application_Type" className="Application_Type2">  
						<option value="" disabled selected>Type Of Application</option>  
						<option>Not Urgent</option>
						<option>Urgent</option>  
					</select>
			</div>
            </div>
            <FirstStep onChange={this.onChange} data={this.state.form} alert={this.state.alert} />
            <SecondStep onChange={this.onChange} data={this.state.form}/>
            <ThirdStep onChange={this.onChange} data={this.state.form}/>
            <FourthStep onChange={this.onChange} data={this.state.form}/>
            <FifthStep onChange={this.onChange} data={this.state.form}/>
            <br/>
            <input type="checkbox" className="checkBox" name="memberShipCard" value="Bike"/>WANT  MEMBERSHIP CARD<br></br>
            <button type="button" onClick={this.onFinalSubmit} className="btn">Save All Given Details</button>
            <SixthStep/>
</div>


    </div>
   }  
   </div>
      )
    }
}

export default Singup