import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons'
import axiosInstance from '../../../utils/API'
var local = JSON.parse(localStorage.getItem('user'))
class Table extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                        email:[],
                        app_type:[],
                        column:[],
                        id:[],
                        statusOFUser:false,
                        deliveryOfficer:false
                        }
            this.componentWillMount = this.componentWillMount.bind(this)
            this.viewUserData = this.viewUserData.bind(this);
            this.showVissaBills = this.showVissaBills.bind(this)
            this.emptyStates = this.emptyStates.bind(this)
        }
        dataRequest(){

           if (local['role'] ==='printingOfficer'){
            axiosInstance.get('/printingOfficer/print')
            .then(res=>{
              for(var i=1; i<res.data.length+1;i++){
                  this.setState({email: [...this.state.email , [[res.data[i-1].email]]]})
                  this.setState({id: [...this.state.id , [[res.data[i-1].id]]]})
                  const user ={
                      email:this.state.email[i-1]
                  }
                  axiosInstance.post('/get/data',{user})
                  .then(res=>{
                      this.setState({app_type: [...this.state.app_type , [[res.data.users[0].type_of_memberShip]]]})
                  })
              }
              this.setState({column:["Sr#","Chalan ID","Email","Application Type","View"]})
            })
          }
          else if (local['role'] ==='deliveryOfficer'){
            this.setState({deliveryOfficer:true})
            axiosInstance.get('/deliveryOfficer/print')
            .then(res=>{
              for(var i=1; i<res.data.length+1;i++){
                  this.setState({email: [...this.state.email , [[res.data[i-1].email]]]})
                  this.setState({id: [...this.state.id , [[res.data[i-1].id]]]})
                  const user ={
                      email:this.state.email[i-1]
                  }
                  axiosInstance.post('/get/data',{user})
                  .then(res=>{
                      this.setState({app_type: [...this.state.app_type , [[res.data.users[0].type_of_memberShip]]]})
                  })
              }
              this.setState({column:["Sr#","Chalan ID","Email","Application Type","View"]})
            })
          }
        }
        viewUserData(email){
            window.location.assign(`/printingOfficer/viewData/${email}`)
        }
        emptyStates(){
          this.setState({ email:[]})
          this.setState({ id:[]})
            this.setState({app_type:[]})
            this.setState({column:[]})
         
        }
        DeliverBill(id){
          axiosInstance.get(`/deliveryOfficer/deliver/${id}`)
                .then(res=>{
                    alert(res.data.message)
                  })
        }
        data(item){
            return( 
                <tr>
                    <td>{item+1}</td>
                    <td>{this.state.id[item]}</td>
                    <td>{this.state.email[item]}</td>
                    <td>{this.state.app_type[item]}</td>
                   {!this.state.deliveryOfficer && <div>{ this.state.status && <td><a className="viewBtn" onClick={() => this.viewUserData(this.state.email[item])}><FontAwesomeIcon classname="fa-2x" icon={faEye} /></a></td>}
                    { !this.state.status && <td><a className="viewBtn" onClick={() => this.viewUserData(this.state.id[item])}><FontAwesomeIcon classname="fa-2x" icon={faEye} /></a></td>}</div>}
                    { this.state.deliveryOfficer && <td><a className="viewBtn" onClick={() => this.DeliverBill(this.state.id[item])}>Deliver</a></td>}
                </tr>)
            }
            showVissaBills(){
              this.emptyStates()
              if(local['role'] ==='printingOfficer'){
                axiosInstance.get('/printingOfficer/visa')
                .then(res=>{
                  if(res.data.result){
                    for(var i=1; i<res.data.visaBills.length+1;i++){
                      this.setState({id: [...this.state.id , [[res.data.visaBills[i-1].chalan_id]]]})
                      this.setState({email: [...this.state.email , [[res.data.visaBills[i-1].email_of_member]]]})
                      this.setState({app_type: [...this.state.app_type , [[res.data.visaBills[i-1].App_Type]]]})
                  }
                }else if(!res.data.result){
                      alert(res.data.message)
                  }
              })
                  this.setState({column:["Sr#","Chalan Id","Email","App Type","View"]})

              }else if (local['role'] ==='deliveryOfficer'){
                axiosInstance.get('/deliveryOfficer/visa')
                .then(res=>{
                  if(res.data.result){
                  for(var i=1; i<res.data.user.length+1;i++){
                      this.setState({email: [...this.state.email , [[res.data.user[i-1].email_of_member]]]})
                      this.setState({id: [...this.state.id , [[res.data.user[i-1].chalan_id]]]})
                      this.setState({app_type: [...this.state.app_type , [[res.data.user[i-1].App_Type]]]})
                  
                  }
                }else if(!res.data.result){
                  alert(res.data.message)
                }
                  this.setState({column:["Sr#","Chalan ID","Email","Application Type","View"]})
                })
            }
          }
        componentWillMount(){  
       
          this.emptyStates()
          this.dataRequest()
            
            this.setState({statusOFUser:false})

        }
        render(){
                return (
                  <div className="listView" >
                    <h2>Applications</h2>

                    <div class="dropdown">
                      <button class="dropbtn"> Bill Catogory</button>
                      <div class="dropdown-content">
                        <a onClick={this.componentWillMount}>MemberShip Bill</a>
                        <a href="#" onClick={this.showVissaBills}>Visa Bill</a>
                        <a href="#">Events Bill</a>
                      </div>
                    </div>
                    <table >
                      <tr>
                        {this.state.column.map((index,item)=> (
                          <th>{index}</th>                              
                        ))}
                      </tr>
                      {this.state.email.map((index,item)=> (
                       this.data(item)
                      ))}
                    </table>
                  </div>
                )
        }
    }

export default Table