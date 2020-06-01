import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReceipt} from '@fortawesome/free-solid-svg-icons'
import axiosInstance from '../../../utils/API'
// import './financeTable.css'
import Button from "components/CustomButtons/Button.js";
var local = JSON.parse(localStorage.getItem('user'))
class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                    
                       email:[],
                       member_Id:[],
                      
                       CNIC:[],
                       mobileNum:[],
                       app_type:[],
                       column:[],
                       App_name:[],
                       status:[],
                     
                      }
        // this.onChange = this.onChange.bind(this)
        this.emptyStates = this.emptyStates.bind(this)
        this.showVissaBills = this.showVissaBills.bind(this)
        this.viewUserData = this.viewUserData.bind(this);
        this.MemberShipClicked = this.MemberShipClicked.bind(this)
        this.data = this.data.bind(this)
    }
      memberShipBillsData(){
          axiosInstance.get('/financeOfficer/bill')
          .then(res=>{
            for(var i=1; i<res.data.length+1;i++){
            this.setState({App_name: [...this.state.App_name , [[res.data[i-1].type_of_memberShip]]]})
            this.setState({email: [...this.state.email , [[res.data[i-1].email]]]})
            this.setState({mobileNum: [...this.state.mobileNum , [[res.data[i-1].mobileNum]]]})
            this.setState({CNIC: [...this.state.CNIC , [[res.data[i-1].CNIC]]]})
            var email = this.state.email[i-1]
            axiosInstance.post('/financeOfficer/bill/status',{email})
          .then(res=>{
            for(var i=1; i<res.data.user.length+1;i++){
            this.setState({status: [...this.state.status , [[res.data.user[i-1].status]]]})
            this.setState({member_Id: [...this.state.member_Id , [[res.data.user[i-1].id]]]})
            }
          })

            }
            this.setState({column:["Sr#","Email/App Id", "Mobile#","App Name","CNIC","Status","View"]})
          }) 
      }
      viewUserData(ID){
        if(local['role']==="financeOfficer"){
    window.location.assign(`/financeOfficer/viewData/${ID}`)    
  }else if(local['role']==="printingOfficer"){
    window.location.assign(`/printingOfficer/viewData/${ID}`)
  }
      }
      data(item){
        // alert(this.state.member_Id[item])
        return( <tr>
          <td>{item+1}</td>
          <td>{this.state.email[item]}</td>
          <td>{this.state.mobileNum[item]}</td>
          <td>{this.state.App_name[item]}</td>
          <td>{this.state.CNIC[item]}</td>
          <td>{this.state.status[item]}</td>
          <td><a className="viewBtn" onClick={() => this.viewUserData(this.state.member_Id[item])}><FontAwesomeIcon classname="fa-2x" icon={faReceipt} /></a></td>
        </tr>)
      }
      MemberShipClicked(){
        this.emptyStates()
        this.memberShipBillsData()
      }
    componentWillMount(){  
      this.memberShipBillsData()

    }
    showVissaBills(){
      this.emptyStates()
      axiosInstance.get('/financeOfficer/bill/visa')
      .then(res=>{
        for(var i=1; i<res.data.Bill.length+1;i++){
        this.setState({App_name: [...this.state.App_name , [[res.data.Bill[i-1].chalan_id]]]})
        this.setState({email: [...this.state.email , [[res.data.Bill[i-1].email_of_member]]]})
        this.setState({mobileNum: [...this.state.mobileNum , [[res.data.Bill[i-1].App_Type]]]})
        this.setState({CNIC: [...this.state.CNIC , [[res.data.Bill[i-1].Amount]]]})
        this.setState({status: [...this.state.status , [[res.data.Bill[i-1].Status]]]})
        this.setState({member_Id: [...this.state.member_Id , [[res.data.Bill[i-1].id]]]})
      
      }
    })
        this.setState({column:["Sr#","Email/App Id","App Name","Chalan Id","Amount","Status","View"]})
    }
    emptyStates(){
      this.setState({ email:[]})
        this.setState({CNIC:[]})
        this.setState({mobileNum:[]})
        this.setState({app_type:[]})
        this.setState({column:[]})
        this.setState({App_name:[]})
        this.setState({status:[]})
        this.setState({member_Id:[]})
    }
    render(){
        return (
                  <div className="tableData" >
                   
                  <h6><b style={{color:"green"}}>Member's Data</b></h6><br></br>
                    <p><b>All of Them Are Listed Below</b></p>
                    <div class="dropdown">
                      <button class="dropbtn"> Bill Catogory</button>
                      <div class="dropdown-content">
                        <a onClick={this.MemberShipClicked}>MemberShip Bill</a>
                        <a href="#" onClick={this.showVissaBills}>Visa Bill</a>
                        <a href="#">Events Bill</a>
                      </div>
                    </div>
                    
                    
                    <table className="tabless" >
                      <tr>
                        {this.state.column.map((index,item)=> (
                          <th className="tableHeader">{index}</th>                                                       
                        ))}
                      </tr>
                      <tr style={{backgroundColor:"white"}}>
                          <td>

                          </td>
                          <td  className="tdd">
                              <input type="text" className="app_id" onChange={this.app_IdClicked} name="appIdTextField" value={this.state.appIdTextField}></input>
                          </td>
                          <td>
                              <input type="text" className="app_id"></input>
                          </td>
                          <td>
                                {/* <select className="app_id">
                                <option disabled selected> Application Type</option>
                                <option value="">financeOfficer</option>
                                <option value="">admin</option>
                                <option value="">printingOfficer</option>
                                <option value="">deliveryOfficer</option>
                                <option value="">visaOfficer</option>
                                <option value="">membershipOfficer</option>
                                </select> */}
                                <input type="text" className="app_id"></input>
                          </td>
                          <td>
                              <input type="text" className="app_id"></input>
                          </td>
                          
                          <td>
                            <input type="email" className="app_id"></input>
                          </td>
                          <td>
                            <input type="email" className="app_id"></input>
                          </td>
                          <td></td>   
                      </tr>
                      {this.state.email.map((index,item)=> (
                        <tr>
                          <td>{item+1}</td>
                          <td>{this.state.email[item]}</td>
                          <td>{this.state.mobileNum[item]}</td>
                          <td>{this.state.App_name[item]}</td>
                          <td>{this.state.CNIC[item]}</td>
                          <td>{this.state.status[item]}</td>
                          <td><a className="viewBtn" onClick={() => this.viewUserData(this.state.member_Id[item])}><FontAwesomeIcon classname="fa-2x" icon={faReceipt} /></a></td>
                        </tr>
                      ))}

                      <tr>
                      
                       <td colspan="3">
                       
                       <Button style={{width:'100%',backgroundColor:"white",color:'black',boxShadow:'none' ,border:'0.5px solid silver'}}>Previous</Button>
                     
                       </td>
                       <td colspan="2">
                       
                       <input type="text" style={{width:'100%',backgroundColor:"white",color:'black',boxShadow:'none',height:'80%',border:'0.5px solid silver'}}/>
                       </td>
                        <td colspan="3">
                       
                       <Button style={{width:'100%',backgroundColor:"white",color:'black',boxShadow:'none',border:'0.5px solid silver'}}>Next</Button>
                     
                       </td>
                      </tr>

                    </table>
                  </div>
        )
    }
}

export default Table