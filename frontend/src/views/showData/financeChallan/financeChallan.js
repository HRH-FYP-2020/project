import React from 'react';
import './financeChallan.css'
import axiosInstance from '../../../utils/API'
import {Button} from 'reactstrap'
// var local = JSON.parse(localStorage.getItem('user'))
// var email=''
class Table extends React.Component{
    constructor(props){
        super(props);
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
        today.setDate(today.getDate() + 2);
        var dateFormated = today.toISOString().substr(0,10);
        this.state = {
            email:this.props.email,
            issueDate:date,
            dueDate:dateFormated,
            challanAmount:'',
            status:'',
            challanType:'',
            button:false,
            appID:'',
            type:''
        }
        this.BillPayment = this.BillPayment.bind(this)
        this.callNodeJsApI = this.callNodeJsApI.bind(this)
    }   
    
    componentWillMount(){
        let Type =''
        const user={
            email:this.state.email
        }
            if(user.email[0] === "M" && user.email[1] === "C"){
                this.setState({type :'MEMBERSHIP'})
                this.callNodeJsApI('MEMBERSHIP')
                
                          
            }else{
                this.setState({type :'VISABILLS'})
                this.callNodeJsApI('VISABILLS')
                
             }         
    }
    callNodeJsApI(Type){
        axiosInstance.get(`/financeOfficer/fetch/Bill/${this.props.email}/${Type}`)
        .then(res=>{
            if(res.data.result){
                this.setState({appID: res.data.Bill[0].id})
                this.setState({status: res.data.Bill[0].status})
                this.setState({email: res.data.Bill[0].email})
                this.setState({challanAmount: res.data.Bill[0].bill})
                if(res.data.Bill[0].status === 'No'){
                    alert('asd')
                    this.setState({button:true})
                    }
                if(this.props.email[0]=== 'V'){
                    this.setState({status: res.data.Bill[0].Status})
                    if(res.data.Bill[0].Status === 'true'){
                        this.setState({button:false})
                    }else{
                        this.setState({button:true})

                    }
                    this.setState({challanType: res.data.Bill[0].App_Type})
                    this.setState({email: res.data.Bill[0].email_of_member})
                    this.setState({challanAmount: res.data.Bill[0].Amount})
                }else{
                    var user = {
                        email:this.state.email
                    }
                    axiosInstance.post('/get/data',{user})
                    .then(res=>{
                        this.setState({challanType: res.data.users[0].type_of_memberShip})
                        var type = ''
                    if( res.data.users[0].type_of_memberShip === 'MemberShip Renew'){
                        type='remembership'
                    }else if(res.data.users[0].type_of_memberShip === 'MemberShip'){
                        type=''+res.data.users[0].application_Type   
                    }
                    }) 
                }
            }else{
                alert('NO DATA FOUND')
            }

        }).catch(error=>{
            alert('Something Went Wrong')
        })
    }
        BillPayment(){
            // if(this)
            console.log(this.state.Type)            
            axiosInstance.get(`/financeOfficer/bill/payment/${this.props.email}/${this.state.type}`)
            .then(res=>{
                if(res.data.result){
                    alert('Bill Has Been Paid')
                    window.location.assign('/financeOfficer/viewApplication')
                }
            })
        }


       render(){

        return (
                <div className="challan" >
                    <div className="mainDiv1">
                        <div className="div1">
                            <p ><b className="heading">COC</b></p><br/>
                            <p><b className="heading">Acc#:</b>1542236545</p><br/>
                            <p><b className="heading">Brance Code:</b> 4568</p><br/>
                            <p><b className="heading">Member Email:</b></p><br/>
                            <p style={{color:"blue"}}>{this.state.email}</p>
                        </div>
                        <div className="div2">
                            <p style={{fontWeight:"bold"}}>Account Copy</p><br/>
                            <p><b style={{color:"black"}}>Issue Date:</b></p><br/>
                            <p>{this.state.issueDate}</p><br></br>
                            <p><b>Due Date:</b></p><br/>
                            <p>{this.state.dueDate}</p>
                        </div><br></br>
                        <div className="div3">
                          <h6 className="H6"><b>Receipt</b></h6><br></br>
                          <hr/><br/>
                          <p><b>Application Id</b></p>
                          <p className="amount">{this.state.appID}</p>
                          <br/>
                          <hr/><br></br>
                          <p><b>Challan Type</b></p>
                          <p className="amount">{this.state.challanType}</p>
                          <br/>
                          <hr/><br></br>
                          <p><b>Amount</b></p>
                          <p className="amount">{this.state.challanAmount}</p>
                          <br/>
                          <hr/><br/>
                          <p><b>Remarks</b></p>
                          <p className="amount">{this.state.status}</p>
                          <br/>
                          <hr/><br/>
                          <p><b>Total Amount :</b></p><p className="amount"><b className="amountTotal">{this.state.challanAmount}</b></p><br/>  
                        </div>   
                    </div>
                    <div className="mainDiv2">
                    <div className="div1">
                            <p ><b className="heading">COC</b></p><br/>
                            <p><b>Acc#:</b>1542236545</p><br/>
                            <p><b>Brance Code:</b> 4568</p><br/>
                            <p><b>Member Email:</b></p><br/>
                            <p>{this.state.email}</p>
                        </div>
                        <div className="div2">
                            <p>Account Copy</p><br/>
                            <p><b>Issue Date:</b></p><br/>
                            <p>{this.state.issueDate}</p><br></br>
                            <p><b>Due Date:</b></p><br/>
                            <p>{this.state.dueDate}</p>
                        </div><br></br>
                        <div className="div3">
                          <h6 className="H6"><b>Receipt</b></h6><br></br>
                          <hr/><br/>
                          <p><b>Application Id</b></p>
                          <p className="amount">{this.state.appID}</p>
                          <br/>
                          <hr/><br></br>
                          <p><b>Challan Type</b></p>
                          <p className="amount">{this.state.challanType}</p>
                          <br/>
                          <hr/><br></br>
                          <p><b>Amount</b></p>
                          <p className="amount">{this.state.challanAmount}</p>
                          <br/>
                          <hr/><br></br>
                          <p><b>Remarks</b></p>
                          <p className="amount">{this.state.status}</p>
                          <br/>
                          <hr/><br></br>
                          <p><b>Total Amount :</b></p><p className="amount"><b className="amountTotal">{this.state.challanAmount}</b></p><br/>  
                        </div>    
                    </div>
                    <div className="mainDiv3">
                    <div className="div1">
                            <p ><b className="heading">COC</b></p><br/>
                            <p><b>Acc#:</b>1542236545</p><br/>
                            <p><b>Brance Code:</b> 4568</p><br/>
                            <p><b>Member Email:</b></p><br/>
                            <p>{this.state.email}</p>
                        </div>
                        <div className="div2">
                            <p>Account Copy</p><br/>
                            <p><b>Issue Date:</b></p><br/>
                            <p>{this.state.issueDate}</p><br></br>
                            <p><b>Due Date:</b></p><br/>
                            <p>{this.state.dueDate}</p>
                        </div><br></br>
                        <div className="div3">
                          <h6 className="H6"><b>Receipt</b></h6><br></br>
                          <hr/><br/>
                          <p><b>Application Id</b></p>
                          <p className="amount">{this.state.appID}</p>
                          <br/>
                          <hr/><br></br>
                          <p><b>Challan Type</b></p>
                          <p className="amount">{this.state.challanType}</p>
                          <br/>
                          <hr/><br></br>
                          <p><b>Amount</b></p>
                          <p className="amount">{this.state.challanAmount}</p>
                          <br/>
                          <hr/><br></br>
                          <p><b>Remarks</b></p>
                          <p className="amount">{this.state.status}</p>
                          <br/>
                          <hr/><br></br>
                          <p><b>Total Amount :</b></p><p className="amount"><b className="amountTotal">{this.state.challanAmount}</b></p><br/>  
                        </div>   
                    </div>
                    {this.state.button && <div>
                        <Button className="Primery" onClick={this.BillPayment}>Pay Bill</Button></div>}

                </div>
        )
    }
}  
export default Table