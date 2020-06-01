import React, { Component } from 'react'
import InputLabel from "@material-ui/core/InputLabel";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField'
import DropDown from './assests/components/dropDown'
import Inputs from './assests/components/input'
import CustomeDate from './assests/components/Date'
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import moment from 'moment'
import ErrorClass from './assests/formValidation/formValidation'
import './assests/firstPage.css'
export default class firstPage extends Component {
constructor(props) {
    super(props)

    this.state = {
        form:props.form,
        errors:{
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
            endDate:'',
            startDate:'',
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
        h3Style:{
            marginLeft:'-41%',
            color:'black' 
        },
        Date : new Date(),
        checkedB:false
    }
    this.onChange = this.onChange.bind(this)
    this.onFinalSubmit = this.onFinalSubmit.bind(this)
    this.ValidateForm = this.ValidateForm.bind(this)
    this.textFieldValidation = this.textFieldValidation.bind(this)
    this.dropDownValidation = this.dropDownValidation.bind(this)
    this.compareDate = this.compareDate.bind(this)
}
        onChange(event){
            const form = this.state.form;
            const errors = this.state.errors;
            if(event.target.id ==="checkedB"){
                form[event.target.id] = !this.state.form.checkedB;
                
            }else{
            form[event.target.id] = event.target.value;
            
            }
            // errors[event.target.id] = '';
            this.setState(form);
           
            // this.setState(errors);
        }
        onFinalSubmit(){
            console.log(this.state.form)
            this.ValidateForm()
        }
        getDate(){
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
    
            today =  yyyy+ '-' + mm + '-' + dd;
            return today
        }
         formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
        
            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;
        
            return [year, month, day].join('-');
        }
// ************************************VAlidation*******************************


ValidateForm(){

    const form = this.state.errors;
    console.log(this.state.form.application_Type)
                // if(this.state.form.application_Type=== ''){
                //         form["application_Type"] = "Please Select Some Value";
                // }
                // if(this.state.form.type_of_memberShip=== ''){
                //     form["type_of_memberShip"] = "Please Select Some Value";
                //  }
                // if(this.state.form.class_of_memberShip=== ''){
                //    form["class_of_memberShip"] = "Please Select Some Value";
                // }
                // console.log(typeof this.state.form.startDate)
                // console.log(typeof this.formatDate(this.getDate()))
                // if(this.state.form.startDate < this.getDate()){
                //     form["startDate"] = "Please Enter Valid Date";              
                // }else if(this.state.form.endDate < this.getDate()){
                //     form["startDate"] = "Please Enter Valid Date";
                // }else{
                //     if(this.state.form.startDate <= this.state.form.endDate){
                //         form["startDate","endDate"] = "Please Enter Valid End Date(End Date Should Be Greater Then Start Date)";
                //     }
                // }
                this.compareDate("startDate")
                this.compareDate("endDate")
                this.compareDate("birthDate")
                this.compareDate("business_start_date")
                this.numValidation("mobileNum")
                this.numValidation("mobileNum2")

                // *****************************Validating all dropDown Menues********************************
                        this.dropDownValidation("application_Type")
                        this.dropDownValidation("type_of_memberShip")
                        this.dropDownValidation("class_of_memberShip")
                        this.dropDownValidation("countriesOfExport")
                        this.dropDownValidation("itemsOfImport")
                        this.dropDownValidation("countriesOfImport")
                        this.dropDownValidation("itemsOfExport")
                        this.dropDownValidation("business_intrest")
                        this.dropDownValidation("main_line_of_business")
                        this.dropDownValidation("bank_name")
                // *************************************end ***************************************************
                        this.textFieldValidation("business_name")
                        this.textFieldValidation("business_address")
                        this.textFieldValidation("representative_name")
                        this.textFieldValidation("designation")
                        this.textFieldValidation("name_of_partners")
                        this.textFieldValidation("first_name")
                        this.textFieldValidation("last_name")

                this.setState(form);
}


// ***********************************End***********************************
numValidation(inputNum){
    const form = this.state.errors;
    const number = this.state.form[inputNum]
    const phoneNumber =  RegExp(/^((\+){1}92){1}[1-9]{1}[0-9]{9}$/i);
    form[inputNum] = 
            phoneNumber.test(number)
            ? ''
                : 'phone number is not valid!';
}
textFieldValidation(textField){
    var length = 5
    if(textField === 'first_name' || textField === 'last_name'){
        length = 3
    }
    const form = this.state.errors;
    if(this.state.form[textField].length < length){
        form[textField] = "Please Select Some Value";
    }else{
        form[textField] = "";
    }
    this.setState(form);
}
dropDownValidation(dropDownName){
    const form = this.state.errors;
    if(this.state.form[dropDownName] === ''){
        form[dropDownName] = "Please Select Some Value";
    }else{
        form[dropDownName] = "";
    }
    this.setState(form);
}
compareDate (dateInput){
                    const form = this.state.errors;
                    var date = moment(this.state.form[dateInput])
                    if(date.isValid()){
                        if( dateInput === 'startDate' || dateInput === 'endDate' ){
                            var releaseDate = moment(this.state.form[dateInput]).format('YYYY-MM-DD')
                            const date =moment().format('YYYY-MM-DD ');
                                if(releaseDate < date){
                                form[dateInput] = "Date Should be less then current Date";
                            }else{
                                form[dateInput] = "";
                            }
                        }else{
                            form[dateInput] = "";
                        }
                    }else{
                        form[dateInput] = "Please Enter Vaid Date";
                    }
  }
    render() {
        return (
<div>
      {/*<GridContainer>
       <GridItem xs={12} sm={12} md={18}>*/}

       <Card style={{width:'90%',marginLeft:"5%",border:'2px solid gray'}}>
       <h3 style={this.state.h3Style}>MemberShip Application Details</h3>
            <CardBody>
              <GridContainer  > 
                  <div style={{marginLeft:'20%',width:'100%'}}>
                    <GridItem xs={12} sm={12} md={8} onChange={this.onChange}>
                        <DropDown label={"Type Of Application"} value={this.state.form.application_Type} hyperText={this.state.errors.application_Type} id={"application_Type"}/>
                    </GridItem>
                    </div>  
                </GridContainer>
            </CardBody>
        </Card>
        {/* *******************************************************************Second Card****************************************** */}
        <Card  style={{width:'90%',marginLeft:"5%",border:'2px solid gray'}}>
            <h3 style={this.state.h3Style}>MemberShip Status Details</h3>
            <CardBody>
                 <GridContainer>  
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                        <DropDown label={"Type Of Membership"} value={this.state.form.type_of_memberShip} hyperText={this.state.errors.type_of_memberShip}  id={"type_of_memberShip"}/>
                    </GridItem> 
                    <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                        <DropDown label={"Class Of Membership"} value={this.state.form.class_of_memberShip} hyperText={this.state.errors.class_of_memberShip}  id={"class_of_memberShip"} />
                    </GridItem> 
                    <GridItem xs={16} sm={12} md={6} onChange={this.onChange}>
                         <CustomeDate value={this.state.form.startDate} hyperText={this.state.errors.startDate}  id={"startDate"} label={"Membership Starting Date"}/>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                         <CustomeDate  value={this.state.form.endDate} hyperText={this.state.errors.endDate}  id={"endDate"} label={"Membership Ending Date"}/>
                     </GridItem>
                 </GridContainer>
            </CardBody>
        </Card>
        {/* ********************************************************Third Card********************************************** */}

        <Card  style={{width:'90%',marginLeft:"5%",border:'2px solid gray'}}>
            <h3 style={this.state.h3Style}>Business Details</h3>
            <CardBody>
                 <GridContainer> 
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.business_name}  hyperText={this.state.errors.business_name} type={"email"} id={"business_name"} label={"Business Name"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.business_address} hyperText={this.state.errors.business_address} type={"email"} id={"business_address"} label={"Business Address"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.representative_name} hyperText={this.state.errors.representative_name} type={"email"} id={"representative_name"} label={"Representative Name"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.designation}  hyperText={this.state.errors.designation} type={"email"} id={"designation"} label={"Designation"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.name_of_partners} hyperText={this.state.errors.name_of_partners} type={"email"} id={"name_of_partners"} label={"Name Of Partners/Director(Use ',' To Seprate Name)"}/>
                 </GridItem>                                
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                        <DropDown label={"Name Of Bank"} id={"bank_name"} hyperText={this.state.errors.bank_name} value={this.state.form.bank_name}/>
                    </GridItem> 
                    <GridItem xs={16} sm={12} md={6} onChange={this.onChange}>
                         <CustomeDate value={this.state.form.business_start_date} hyperText={this.state.errors.business_start_date} id={"business_start_date"} label={"Business Establishment Date"}/>
                     </GridItem>
                    <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                        <DropDown label={"Main Line Of Business"} value={this.state.form.main_line_of_business} hyperText={this.state.errors.main_line_of_business}  id={"main_line_of_business"}  />
                    </GridItem> 
                    <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.ntn_num} hyperText={this.state.errors.ntn_num} type={"number"} id={"ntn_num"} label={"NTN Number"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.tel_1_business} hyperText={this.state.errors.tel_1_business} type={"number"} id={"tel_1_business"} label={"Tel 1(Business)"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.tel_2_business} hyperText={this.state.errors.tel_2_business} type={"number"} id={"tel_2_business" }label={"Tel 2(Business)"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.sale_tex_reg} hyperText={this.state.errors.sale_tex_reg} type={"number"} id={"sale_tex_reg"} label={"Sales Tax Registration, If Applicable GST No"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={12} onChange={this.onChange}>
                        <DropDown label={"Business Intrest"} value={this.state.form.business_intrest} hyperText={this.state.errors.business_intrest} id={"business_intrest"}/>
                    </GridItem> 
                 </GridContainer>
            </CardBody>
        </Card>

        {/* ********************************************************Fourth Card*********************************************** */}

        <Card  style={{width:'90%',marginLeft:"5%",border:'2px solid gray'}}>
            <h3 style={this.state.h3Style}>Personal Details</h3>
            <CardBody>
                 <GridContainer> 
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.first_name} hyperText={this.state.errors.first_name} type={"text"} id={"first_name"} label={"First Name"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.last_name} hyperText={this.state.errors.last_name} type={"text"} id={"last_name"} label={"Last Name"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.CNIC} hyperText={this.state.errors.CNIC} type={"text"} id={"CNIC" }label={"CNIC(00000-0000000-0)"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.passport} hyperText={this.state.errors.passport} type={"text"} id={"passport"} label={"Passport"}/>
                 </GridItem>
                 <GridItem xs={16} sm={12} md={6} onChange={this.onChange}>
                         <CustomeDate value={this.state.form.birthDate} hyperText={this.state.errors.birthDate}  id={"birthDate"} label={"Date Of Birth"}/>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.mobileNum} hyperText={this.state.errors.mobileNum} type={"text"} id={"mobileNum"} label={"Mobile Number 1(+921111111111)"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.mobileNum2} hyperText={this.state.errors.mobileNum2} type={"text"}id={"mobileNum2"} label={"Mobile Number 2 (+921111111111)"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.email} hyperText={this.state.errors.email} type={"email"} id={"email"} label={"Email 1"}/>
                 </GridItem>                 
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.email2} hyperText={this.state.errors.email2} type={"email"}id={"email2"} label={"Email 2"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.telNum} hyperText={this.state.errors.telNum} type={"number"} id={"telNum"} label={"Telephone Number"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.fax} hyperText={this.state.errors.fax} type={"number"} id={"fax"} label={"FAX"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.uan} hyperText={this.state.errors.uan} type={"number"} id={"uan"} label={"UAN"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.url} hyperText={this.state.errors.url} type={"text"} id={"url"} label={"URL"}/>
                 </GridItem>
               
                 </GridContainer>
            </CardBody>
        </Card>
                {/* *********************************************Fourth Page ********************************* */}
                <Card  style={{width:'90%',marginLeft:"5%",border:'2px solid gray'}}>
            <h3 style={this.state.h3Style}>Import/Export Details</h3>
            <CardBody>
                 <GridContainer>  
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                        <DropDown label={"Countries Of Export"} id={"countriesOfExport"} value={this.state.form.countriesOfExport} hyperText={this.state.errors.countriesOfExport}/>
                    </GridItem> 
                    <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                        <DropDown label={"Items Of Export"} id={"itemsOfExport"} value={this.state.form.itemsOfExport} hyperText={this.state.errors.itemsOfExport}/>
                    </GridItem> 
                    <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                        <DropDown label={"Countries Of Import"} id={"countriesOfImport"} value={this.state.form.countriesOfImport} hyperText={this.state.errors.countriesOfImport}/>
                    </GridItem> 
                    <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                        <DropDown label={"Items Of Import"} id={"itemsOfImport"} value={this.state.form.itemsOfImport} hyperText={this.state.errors.itemsOfImport}/>
                    </GridItem> 
                 </GridContainer>
            </CardBody>
        </Card>

        {/* **************************************Fifth Page ********************************** */}
            
        <Card  style={{width:'90%',marginLeft:"5%",border:'2px solid gray'}}>
            <h3 style={this.state.h3Style}>Verification Details</h3>
            <CardBody>
                 <GridContainer>  
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.email1V} hyperText={this.state.errors.email1V} type={"email"} id={"email1V"} label={"Email 1"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.form.email2V} hyperText={this.state.errors.email2V} type={"email"} id={"email2V"} label={"Email 2"}/>
                 </GridItem>
               
                 </GridContainer>
            </CardBody>
        </Card>
        {/* ****************************************Check Box and Button ************************************** */}


        <FormControlLabel
        control={
          <Checkbox
          
            checked={this.state.checkedB}
            onChange={this.onChange}
            id="checkedB"
            color="primary"
          />
        }
        label="Want a Member Ship Card"
      />
      <GridItem xs={12} sm={12} md={12}>
      <Button style={{width:'50%',backgroundColor:'green',marginTop:'3%',color:'white'}} variant="contained"  onClick={this.onFinalSubmit} >
      Save All Changes
    </Button>
    </GridItem>
    {/* *************************************************Files************************************* */}

    <Card  style={{width:'90%',marginLeft:"5%",border:'2px solid gray'}}>
            <h3 style={this.state.h3Style}>Verification Details</h3>
            <CardBody>
                 <GridContainer>  
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.username} type={"file"} hyperText={"CNIC/Passport"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.username} type={"file"} hyperText={"National Tax Num(NTN)"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.username} type={"file"} hyperText={"Latest Income Tax Return"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.username} type={"file"} hyperText={"Sales Tax Registration if Applicable"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.username} type={"file"} hyperText={"Copy Of Latest Sales Tax Return"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.username} type={"file"} hyperText={"PhotoGraph"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.username} type={"file"} hyperText={"Lease Deed/Buliding Allotment Letter/Office"}/>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6} onChange={this.onChange}>
                     <Inputs value={this.state.username} type={"file"} hyperText={"Orignal Bank Certificate"}/>
                 </GridItem>
                 </GridContainer>
            </CardBody>
        </Card>
       </div>
        )
    }
}