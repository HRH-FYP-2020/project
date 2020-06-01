import React from 'react';
import './MemberShipRecords.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from "components/CustomButtons/Button.js";
import axiosInstance from '../../../utils/API'
var local = JSON.parse(localStorage.getItem('user'))
class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                      first_name:[],
                      last_name:[],
                       email:[],
                       rep_name:[],
                       CNIC:[],
                       mobileNum:[],
                       app_type:[],
                       country:[],
                       column:[],
                       representative_name:[],
                       business_name:[],
                       telNum:[]
                      }
        this.viewUserData = this.viewUserData.bind(this);
    }
      dataRequest(){
          axiosInstance.get('/membership/request/records')
          .then(res=>{
            if(res.data.users.length){
            for(var i=1; i<res.data.users.length+1;i++){
            this.setState({first_name: [...this.state.first_name , [[res.data.users[i-1].first_name]]]})
            this.setState({last_name: [...this.state.last_name , [[res.data.users[i-1].last_name]]]})
            this.setState({representative_name: [...this.state.representative_name , [[res.data.users[i-1].representative_name]]]})
            this.setState({email: [...this.state.email , [[res.data.users[i-1].email]]]})
            this.setState({business_name: [...this.state.business_name , [[res.data.users[i-1].business_name]]]})
            this.setState({telNum: [...this.state.telNum , [[res.data.users[i-1].telNum]]]})
            this.setState({mobileNum: [...this.state.mobileNum , [[res.data.users[i-1].mobileNum]]]})
            this.setState({CNIC: [...this.state.CNIC , [[res.data.users[i-1].CNIC]]]})
            this.setState({column:["Name","Email", "Mobile#","Tel#","Business Name","Rep Name","CNIC","Accept","Decline"]})
            }
            }else{
              alert('No to Data TO Show')  
            }
          
          })
        
      
      }
      declineRequest(email){
        ////if any thing happen then try using email[1]
            axiosInstance.post('/membership/request/decline',{email})
            .then(res =>{
                if(res.data.result){
                    alert('You Have Successfully Delete This Request')
                    window.location.reload()
                }
            })            
        }
viewUserData(email){
    window.location.assign(`/memberShip/data/${email}`)
}
// data(item){
//   return(>)
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
                      {this.state.first_name.map((index,item)=> (
                        <tr>
                            <td>{this.state.first_name[item]+' '+this.state.last_name[item]}</td>
                            <td>{this.state.email[item]}</td>
                            <td>{this.state.mobileNum[item]}</td>
                            <td>{this.state.telNum[item]}</td>
                            <td>{this.state.business_name[item]}</td>
                            <td>{this.state.representative_name[item]}</td>
                            <td>{this.state.CNIC[item]}</td>
                            <td><a className="viewBtn" onClick={() => this.viewUserData(this.state.email[item])}><FontAwesomeIcon classname="fontAwesome" icon={faEye} /></a></td>
                            <td><a className="deleteBtn" onClick={() => this.declineRequest(this.state.email[item])}><FontAwesomeIcon  classname="fontAwesome" icon={faTrash} /></a></td>
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