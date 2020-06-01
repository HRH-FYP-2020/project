import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/web.jpg";
import axiosInstance from '../../utils/API'
 class UserProfile extends React.Component {
  constructor(){
    super()
   this.state={    
      name: '',
      lname: '',
      email: '',
      business_address:'',
      business_name:'',
      representative_name:'',
      business_date:'',
      business_intrest:'',
      bank_name:'',
      fax_num:'',
      tel_num:'',
      CNIC:'',
      role:'',

      isDisabled:true,
      member:false
     
    }
    this.clicked =this.clicked.bind(this)
    
  }
  componentDidMount(){
    const local=JSON.parse(localStorage.getItem('user'))
    var user={
      id:local['_id'],
      role:local['role']
    }
    
    // console.log(' asdfasd'+ local['email'])
    axiosInstance.post('/get/profile',{user})
    .then(res =>{
      console.log(res.data.users)
      if(local['role']==='member'){
        this.setState({member:true})
      this.setState( {name: res.data.users[0].first_name+' '+res.data.users[0].last_name})
      
        this.setState( {lname: res.data.users[0].last_name})
        this.setState( {business_address:res.data.users[0].business_address})
        this.setState( {business_name:res.data.users[0].business_name})
        this.setState( {representative_name:res.data.users[0].representative_name})
        this.setState( {business_date:res.data.users[0].business_date})
        this.setState( {business_intrest:res.data.users[0].business_intrest})
        this.setState( {bank_name:res.data.users[0].bank_name})
        this.setState( {fax_num:res.data.users[0].fax})
        this.setState( {tel_num:res.data.users[0].mobileNum})
        this.setState( {CNIC:res.data.users[0].CNIC})
      }else{
      this.setState({name:res.data.users[0].name})
        this.setState( {tel_num:res.data.users[0].mobileNo})
        
      }
      this.setState( {email: res.data.users[0].email})
      this.setState({role:res.data.users[0].role})
   });
  }
  clicked(){
      this.setState({isDisabled:false})
  }
 render(){
 return (
    <div>
    {this.state.member && <Card profile>
            <CardAvatar  profile>
                <img src={avatar} alt="..." />
            </CardAvatar>
            <CustomInput
                    labelText="Role"
                    id="role"
                    formControlProps={{
                      fullWidth: false
                    }}
                    inputProps={{
                      disabled:true,
                      value:this.state.role
                    }}
                    success={false}
                  />
            
          </Card>}
      <GridContainer>
        <GridItem xs={12} sm={12} md={18}>
          <Card>
            <CardBody>
              <GridContainer>
             
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput 
                  labelText='Name'
                    id="username"
                    value=""
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled:true,
                      value:this.state.name
                    }}
                    success={true}
                    
                  />
                </GridItem>
                
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText='Email'
                    id="email-address"
                    value = "tanolihamzaali"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled:true,
                      value:this.state.email
                    }}
                    success={true}
                  />
                </GridItem>
                </GridContainer>
                <GridContainer>
               
                <GridItem xs={18} sm={18} md={6}>
                {/* <InputLabel style={{ color: "#6a0dad" }}>Telephone Number</InputLabel> */}
                  <CustomInput
                    labelText='Contact Num'
                    id="Telephone Num"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: this.state.isDisabled,
                      value : this.state.tel_num
                    }}
                    success={true}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                 
                    labelText='Role'
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: this.state.isDisabled,
                      value:this.state.role
                    }}
                    success={true}
                  />
                </GridItem>
              </GridContainer>
            { this.state.member && <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                {/* <InputLabel style={{ color: "#6a0dad" }}>Business Intrest</InputLabel> */}
                  <CustomInput
                    labelText='Business Intrest'
                    id="business_intrest"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: this.state.isDisabled,
                      value:this.state.business_address

                    }}
                    success={true}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                {/* <InputLabel style={{ color: "#6a0dad" }}>Representative Name</InputLabel> */}
                  <CustomInput
                    labelText='Representative Name'
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: this.state.isDisabled,
                      value:this.state.representative_name
                    }}
                    success={true}
                  />
                </GridItem>
              </GridContainer>}
              <GridContainer>
               {this.state.member && <GridItem xs={12} sm={12} md={6}>
                {/* <InputLabel style={{ color: "#6a0dad" }}>Fax Num</InputLabel> */}
                  <CustomInput
                    labelText='Fax Num'
                    id="fax_num"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: this.state.isDisabled,
                      value:this.state.fax_num
                    }}
                    success={true}
                  />
                </GridItem>}
             
                {this.state.member && <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Business Name"
                    id="business_name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled:true,
                      value:this.state.business_name
                    }}
                    success={true}
                  />
                </GridItem>}
                {this.state.member && <GridItem xs={12} sm={12} md={6}>
                {/* <InputLabel style={{ color: "#6a0dad" }}>Postal Code</InputLabel> */}
                  <CustomInput
                 
                    labelText='Representative name'
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: this.state.isDisabled,
                      value:this.state.representative_name
                    }}
                    success={true}
                  />
                </GridItem>}
               
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#6a0dad" }}>About me</InputLabel>
                  <CustomInput
                    labelText="I am Working At COC."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 2,
                      disabled:true
                    }}
                    success={true}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={this.clicked}>Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
    
      </GridContainer>
      
      
    </div>
  );
}
 }
export default UserProfile
