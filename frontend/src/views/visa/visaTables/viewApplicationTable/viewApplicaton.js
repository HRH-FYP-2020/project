import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faTrash } from '@fortawesome/free-solid-svg-icons'
import axiosInstance from '../../../../utils/API'
import './viewApplications.css'
// var local = JSON.parse(localStorage.getItem('user'))
class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                      app_ID:[],
                      name_of_org:[],
                       email:[],
                       App_type:[],
                       submission_date:[],
                       column:[],
                       status:[],
                       notification:'',
                       data:null,
                       appIdTextField:''
                      }
        this.viewUserData = this.viewUserData.bind(this);
        this.data = this.data.bind(this);
        // this.App_IdClicked = this.App_IdClicked.bind(this)
        this.app_IdClicked = this.app_IdClicked.bind(this)
    }
      dataRequest(){
          axiosInstance.get('/visa/request/visa/data')
          .then(res=>{
            
            if(res.data.users.length){
              this.setState({data: res.data.users.length})
                for(var i=0;i<res.data.users.length;i++){
                    this.setState({app_ID: [...this.state.app_ID , [[res.data.users[i].id]]]})
                    this.setState({name_of_org: [...this.state.name_of_org , [[res.data.users[i].organization_Name]]]})
                    this.setState({App_type: [...this.state.App_type , [[res.data.users[i].APP_type]]]})
                    this.setState({submission_date: [...this.state.submission_date , [[res.data.users[i].submissionDate]]]})
                    this.setState({email: [...this.state.email , [[res.data.users[i].email_of_member]]]})
                    this.setState({status: [...this.state.status , [[res.data.users[i].status]]]})
      
                }
                this.setState({column:["Sr No.","App ID","Mem Email","Name Of Org", "Application Type","Submission Date","Status","View","Delete"]})   
            }else{
                alert('No Data To Show ')
                this.setState({column:["Notification"]})   
                this.setState({notification: 'No data to Show'})
            }
       
          })
        
      
      }
      declineRequest(id,email){
          const user ={
              id:id,
              email:email
          }
            axiosInstance.post('/visa/request/decline',{user})
            .then(res =>{
                if(res.data.result){
                    alert('You Have Successfully Delete This Request')
                    window.location.reload()
                }
            })            
        }
viewUserData(appIdTextField){
    //calling the page to show data of selected application
    window.location.assign(`/visaOfficer/ViewApplications/data/${appIdTextField}`)
}
data(item){
    if(this.state.data === null){
        return(
            <tr>
                <td>{this.state.notification}</td>
            </tr>
        )
    }else{
        if(item >= this.state.email.length){
           
        }else{
             return( 
                <tr>
                    <td>{item+1}</td>
                    <td>{this.state.app_ID[item]}</td>
                    <td>{this.state.email[item]}</td>
                    <td>{this.state.name_of_org[item]}</td>
                    <td>{this.state.App_type[item]}</td>
                    <td>{this.state.submission_date[item]}</td>
                    <td>{this.state.status[item]}</td>
                    <td><a className="viewBtn" onClick={() => this.viewUserData(this.state.app_ID[item])}><FontAwesomeIcon classname="fa-2x" icon={faEye} /></a></td>
                    <td><a className="deleteBtn" onClick={() => this.declineRequest(this.state.app_ID[item],this.state.email[item])}><FontAwesomeIcon  classname="fontAwesome" icon={faTrash} /></a></td>
                </tr>
            )
        }
        }
    }
  componentWillMount(){  
    this.dataRequest()

  }

  app_IdClicked(event){
    // console.log(this.state.app_ID[0][0])
    
    this.setState({appIdTextField: [event.target.value]})
    alert(this.state.appIdTextField)
    console.log(this.state.appIdTextField)
    console.log(this.state.appIdTextField.length)
    for(var i =0 ;i<this.state.app_ID.length;i++){

        if(this.state.appIdTextField+'' === ''+this.state.app_ID[i][0]){
            // console.log('here')
            alert(this.state.app_ID[i]) 
        }
    }
    
  }
    render(){
        return (
                  <div className="tableData" >
                    <h6><b style={{color:"green"}}>Applications Of Visa</b></h6><br></br>
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
                                <option value="">Visa Arrival</option>
                                <option value="">Visa Abroad</option>
                                </select>
                          </td>
                          <td>
                              <input type="text" className="app_id"></input>
                          </td>
                          <td>
                                <select className="app_id">
                                <option disabled selected>Status</option>
                                <option value="">Pending</option>
                                <option value="">Complete</option>
                                </select>
                          </td>
                          <td>
                          </td>
                          <td>

                          </td>
                      </tr>
                      {this.state.column.map((index,item)=> (

                       this.data(item)
                      ))}
                    </table>
                  </div>
        )
    }
}

export default Table