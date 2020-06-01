import React from 'react';
import './printingOfficerData.css'
import { Button} from 'reactstrap';
import axiosInstance from '../../../utils/API'
import ThirdStep from 'views/signup/steps/third/third';
// var local = JSON.parse(localStorage.getItem('user'))
var email=''
class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:this.props.email.email,
            email:'',
            business_name:'',
            cnic:'',
            ntn:'',
            billAcceptType:'',
            status:false,
            bill:'',
            printingStatus:'NOT PRINTED'

        }
        this.acceptRequest = this.acceptRequest.bind(this)
    }       
            
        recommendation(){
            const user = {
                id:this.state.id
            }
            axiosInstance.post('/printingOfficer/getuser',{ id:this.state.id})
            .then(res=>{
                if(!res.data.result){
                        alert(res.data.message)
                }else{

                    if(this.state.id[0]==='M'){
                        this.setState({bill: res.data.UserBill[0].bill})
                        this.setState({email: res.data.UserBill[0].email})
                        if(res.data.UserBill[0].status === 'true'){
                            this.setState({status: 'Paid'})
                        }
                        this.setState({applicationType:'Membership'})
                    }else if(this.state.id[0] === 'V'){
                        this.setState({bill: res.data.UserBill[0].Amount})
                        this.setState({email: res.data.UserBill[0].email_of_member})
                        if(res.data.UserBill[0].Status=== 'true'){
                            this.setState({status: 'Paid'})
                        }
                        this.setState({applicationType:res.data.UserBill[0].App_Type})
                    }
                 
                    
                    // this.setState({ntn: res.data.users[0].ntn_num})
                }      
            })
      }  
  componentWillMount(){
    this.recommendation()
  
  }
    acceptRequest=(e)=>{
        axiosInstance.post('/printingOfficer/accept',{id:this.state.id})
        .then(res =>{
          if(res.data.result){
              alert('Printed Successfully')
              window.location.assign('/printingOfficer/request')
          }
      })  
    }
    render(){

        return (
                <div id="asaaa">
                <form className="form">
                    <label id="label">CHALAN ID</label>
                    <input type="email" value={this.state.id} id="field" placeHolder="Email" disabled></input>
                    <label id="label">
                    EMAIL
                    
                    </label>
                    <input type="email" id="field" value={this.state.email} placeHolder="Email" disabled></input>
                    <label id="label">
                    BILL
                    </label>
                    <input type="email" id="field" value={this.state.bill} placeHolder="Email" disabled></input>
                    
                    <label id="label">
                    STATUS
                    </label>
                    <input type="email" id="field"  value={this.state.status} placeHolder="Email" disabled></input>
                    <label id="label">
                    APPLICATION TYPE
                    </label>     
                    <input type="email" id="field" value={this.state.applicationType} placeHolder="Email" disabled></input>
                    <label id="label">
                    PRINTING STATUS
                    </label>     
                    <input type="email" id="field" value={this.state.printingStatus} placeHolder="Email" disabled></input>
                    <Button id="printBtn" onClick={this.acceptRequest}>Print</Button>
                </form>
                <div id="secondDiv">
                        <div className="div11">
                            <p ><b className="heading">COC</b></p><br/>
                            <p><b className="heading">Acc#:</b>1542236545</p><br/>
                            <p><b className="heading">Brance Code:</b> 4568</p><br/>
                            <p><b className="heading">Member Email:</b></p><br/>
                            <p style={{color:"blue"}}>{this.state.email}</p>
                        </div>
                        <div className="div21">
                            <p style={{fontWeight:"bold"}}>CHALAN</p><br/>
                            {/* <p><b style={{color:"black"}}>Issue Date:</b></p><br/> */}
                            {/* <p>{this.state.issueDate}</p><br></br> */}
                            {/* <p><b>Due Date:</b></p><br/> */}
                            {/* <p>{this.state.dueDate}</p> */}
                        </div><br></br>
                        <div className="div31">
                          <h6 className="H6"><b>Receipt</b></h6><br></br>
                          <hr/><br/>
                          <p><b>Application Id</b></p>
                          <p className="amount">{this.state.appID}xxx </p>
                          <br/>
                          <hr/><br></br>
                          <p><b>Challan Type</b></p>
                          <p className="amount">{this.state.challanType} xxx</p>
                          <br/>
                          <hr/><br></br>
                          <p><b>Amount</b></p>
                          <p className="amount">{this.state.challanAmount}abc</p>
                          <br/>
                          <hr/><br/>
                          <p><b>Remarks</b></p>
                          <p className="amount">{this.state.status}abc</p>
                          <br/>
                          <hr/><br/>
                          <p><b>Total Amount :</b></p><p className="amount"><b className="amountTotal">{this.state.challanAmount}</b></p><br/>  
                        </div>   
                    </div>




                {/* <div className="first"> */}
                        {/* <form action=""> */}
                            {/* <div className="firstDiv">
                            <p className="firstP">EMAIL</p><br/>
                            <input type="text" value={this.state.email} className="firstField" disabled></input><br></br>
                            </div>
                            <div className="secondDiv">
                                 <p className="secondP"><b>REPRESENTATIVE NAME</b></p>
                                 <input type="text" value={this.state.rep_name} disabled className="secondField"></input>
                            </div>
                            <div className="thirdDiv">
                                 <p className="secondP"><b>BUSINESS NAME</b></p>
                                 <input type="text" value={this.state.business_name} disabled className="secondField"></input>
                            </div>
                            <div className="secondDiv">
                                 <p className="secondP"><b>CNIC</b></p>
                                 <input type="text" value={this.state.cnic} disabled className="secondField"></input>
                            </div>
                            <div className="thirdDiv">
                                 <p className="secondP"><b>NTN(BUSINESS)</b></p>
                                 <input type="text" value={this.state.ntn} disabled className="secondField"></input>
                            </div>
                            <Button className="print" onClick={this.acceptRequest}>Print</Button> */}
                        {/* </form> */}
                    </div>        
 
 
                // {/* </div> */
        )
    }
}  
export default Table