import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReceipt} from '@fortawesome/free-solid-svg-icons'
import axiosInstance from '../../utils/API'
import './adminTable.css'
// var local = JSON.parse(localStorage.getItem('user'))
class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                      first_name:[],
                      last_name:[],
                       email:[],
                       mobileNum:[],
                       role:[],
                       column:[],
                       count:0
                      }
        this.viewUserData = this.viewUserData.bind(this);
    }
      dataRequest(){
          axiosInstance.get('/get/officers')
          .then(res=>{
            for(var i=0;i<res.data.users.length;i++){
            if(
            res.data.users[i].role=== "admin" || 
            res.data.users[i].role==="financeOfficer"||
            res.data.users[i].role==="deliveryOfficer" || 
            res.data.users[i].role === "printingOfficer" || 
            res.data.users[i].role==="membershipOfficer"|| 
            res.data.users[i].role=== "eventsOfficer"
            ){
         
                    console.log(i)
                    this.setState({first_name: [...this.state.first_name , [[res.data.users[i].first_name]]]})
                    this.setState({last_name: [...this.state.last_name , [[res.data.users[i].last_name]]]})
                    this.setState({email: [...this.state.email , [[res.data.users[i].email]]]})
                    this.setState({mobileNum: [...this.state.mobileNum , [[res.data.users[i].mobileNum]]]})
                    this.setState({role: [...this.state.role , [[res.data.users[i].role]]]})
                
            this.setState({column:["Sr No.","Name", "Mobile#","Designation","Email Id","Delete"]})
          }
        }
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
    window.location.assign(`/financeOfficer/viewData/${email}`)
}
data(item){
  return( <tr>
    
    <td>{item+1}</td>
    <td>{this.state.first_name[item]+' '+this.state.last_name[item]}</td>
    <td>{this.state.mobileNum[item]}</td>
    <td>{this.state.role[item]}</td>
    <td>{this.state.email[item]}</td>
    <td><a className="viewBtn" onClick={() => this.viewUserData(this.state.email[item])}><FontAwesomeIcon classname="fa-2x" icon={faReceipt} /></a></td>
  </tr>)
}
  componentWillMount(){  
    this.dataRequest()

  }
    render(){
        return (
                  <div className="tableData" >
                    <h4>Applications</h4>
                    <table className="tables" >
                      <tr>
                        {this.state.column.map((index,item)=> (
                          <th>{index}</th>                                                       
                        ))}
                      </tr>
                      {this.state.first_name.map((index,item)=> (

                       this.data(item)
                      ))}
                    </table>
                  </div>
        )
    }
}

export default Table