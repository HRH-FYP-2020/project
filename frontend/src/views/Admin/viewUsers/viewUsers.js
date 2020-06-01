import React, { Component } from 'react'
import axiosInstance from  'utils/API'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
export default class viewUsers extends Component {

  constructor(){
    super()
    this.state={
      column:['Sr NO.','Name','Email','MobileNo','Designation','Delete'],
      designation:[],
      name:[],
       email:[],
       mobileNum:[],
      
    }
  }
  dataRequest(){
    axiosInstance.get('/get/officers')
    .then(res=>{
      console.log(res.data.users)
      for(var i=0;i<res.data.users.length;i++){
              this.setState({name: [...this.state.name , [[res.data.users[i].name]]]})
              this.setState({designation: [...this.state.designation , [[res.data.users[i].role]]]})
              this.setState({email: [...this.state.email , [[res.data.users[i].email]]]})
              this.setState({mobileNum: [...this.state.mobileNum , [[res.data.users[i].mobileNo]]]})
      }
    })
}

declineRequest(email){
  axiosInstance.get(`/admin/delete/officer/${email}`)
  .then(res=>{
    alert(res.data.message)
    window.location.reload()
  })
}
  data(item){
    return( <tr>
    
      <td>{item+1}</td>
      <td >{this.state.name[item]}</td>
      <td>{this.state.email[item]}</td>
      <td>{this.state.mobileNum[item]}</td>
      <td>{this.state.designation[item]}</td>
      <td><a className="deleteBtn" onClick={() => this.declineRequest(this.state.email[item])}><FontAwesomeIcon  classname="fontAwesome" icon={faTrash} /></a></td>
    </tr>
    )
  }
  componentWillMount(){
    this.dataRequest()
  }
    render() {
      
        return (
           <div className="tableData" >
                    <h6><b style={{color:"green"}}>Account Details</b></h6><br></br>
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
                          <td></td>
                        
                      </tr>
                      {this.state.designation.map((index,item)=> (

                       this.data(item)
                      ))}
                    </table>
                  </div>
        )
    }
}
