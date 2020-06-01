import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons'
import axiosInstance from '../../../utils/API'
import './ViewMemberShips.css'
import Button from "components/CustomButtons/Button.js";
// var local = JSON.parse(localStorage.getItem('user'))
class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                      rep_name:[],
                      last_name:[],
                       email:[],
                       mobileNum:[],
                       status:[],
                       column:[],
                       CNIC:[],
                       status:[],
                      }
        this.viewUserData = this.viewUserData.bind(this);
    }
      dataRequest(){
          axiosInstance.get('/get/members')
          .then(res=>{
            for(var i=0;i<res.data.users.length;i++){
            if(
            res.data.users[i].role=== "member"){
                    this.setState({rep_name: [...this.state.rep_name , [[res.data.users[i].representative_name]]]})
                    this.setState({CNIC: [...this.state.CNIC , [[res.data.users[i].CNIC]]]})
                    // this.setState({status: [...this.state.status , [[res.data.users[i].statusberShip]]]})
                    this.setState({last_name: [...this.state.last_name , [[res.data.users[i].last_name]]]})
                    this.setState({email: [...this.state.email , [[res.data.users[i].email]]]})
                    this.setState({mobileNum: [...this.state.mobileNum , [[res.data.users[i].mobileNum]]]})
                    if(res.data.users[i].role === "member"){
                      this.setState({status: [...this.state.status , [["Completed"]]]})
                      }else{
                          this.setState({status: [...this.state.status , [["Pending"]]]})
                      }
          }
        }
        this.setState({column:["Sr No."," RepName","CNIC","Email Id", "Mobile#","Status","view"]})
          })
        
      
      }
      declineRequest(email){
            axiosInstance.post('/membership/request/decline',{email})
            .then(res =>{
                if(res.data.result){
                    alert('You Have Successfully Delete This Request')
                    window.location.reload()
                }
            })            
        }
viewUserData(email){
    window.location.assign(`/admin/viewApplication/data/${email}`)
}
// data(item){
//   return( <tr>
    
//     <td>{item+1}</td>
//     <td>{this.state.rep_name[item]}</td>
//     <td>{this.state.CNIC[item]}</td>
//     <td>{this.state.email[item]}</td>
//     <td>{this.state.status[item]}</td>
//     <td>{this.state.mobileNum[item]}</td>
//     <td>{this.state.status[item]}</td>
//     <td><a className="viewBtn" onClick={() => this.viewUserData(this.state.email[item])}><FontAwesomeIcon classname="fa-2x" icon={faEye} /></a></td>
//   </tr>)
// }
  componentWillMount(){  
    this.dataRequest()

  }
    render(){
        return (
                  <div className="tableData" >
                    <h6><b style={{color:"green"}}>Member's Data</b></h6><br></br>
                    <p><b>All of Them Are Listed Below</b></p>
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
                              <input type="text" className="app_id"></input>
                          </td>
                          <td>
                                <select className="app_id">
                                <option disabled selected> Application Type</option>
                                <option value="">financeOfficer</option>
                                <option value="">admin</option>
                                <option value="">printingOfficer</option>
                                <option value="">deliveryOfficer</option>
                                <option value="">visaOfficer</option>
                                <option value="">membershipOfficer</option>
                                </select>
                          </td>
                          
                          
                          <td> <select className="app_id">
                                <option disabled selected> status Type</option>
                                <option value="">Completed</option>
                                <option value="">Pending</option>
                                
                                </select></td>
                          <td>
                         
                          </td>
                          <td></td>


                        
                      </tr>
                      {this.state.rep_name.map((index,item)=> (
                        <tr>
                          
                          <td>{item+1}</td>
                          <td>{this.state.rep_name[item]}</td>
                          <td>{this.state.CNIC[item]}</td>
                          <td>{this.state.email[item]}</td>
                          <td>{this.state.mobileNum[item]}</td>
                          <td>{this.state.status[item]}</td>
                          <td><a className="viewBtn" onClick={() => this.viewUserData(this.state.email[item])}><FontAwesomeIcon classname="fa-2x" icon={faEye} /></a></td>
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