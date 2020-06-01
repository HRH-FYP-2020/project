import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button} from 'reactstrap';
import axiosInstance from '../../../utils/API'
var local = JSON.parse(localStorage.getItem('user'))
var email=''
class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
                ,
            form:[
                'application_Type',
                'business_name',
                'representative_name',
                'business_address',
                'designation',
                'business_intrest',
                'bank_name',
                'name_of_partners',
                'business_start_date',
                'ntn_num',
                'main_line_of_business',
                'tel_1_business',
                'tel_2_business',
                'sale_tex_reg',
                'endDate',
                'startDate',
                'class_of_memberShip',
                'type_of_memberShip',
                'url',
                'uan',
                'password',
                'fax',
                'telNum',
                'email',
                'email2',
                'mobileNum',
                'mobileNum2',
                'birthDate',
                'passport',
                'CNIC',
                'last_name',
                'first_name',
                'itemsOfExport',
                'countriesOfExport',
                'itemsOfImport',
                'countriesOfImport',
                'email1V',
                'email2V',
                'role'
                ],
                

        }
        this.recommendation=this.recommendation.bind(this)
    }       
        recommendation(){
            const url = ''+window.location.href
             email = url.split('http://localhost:3006/member/userData/')
            const user ={
              email:email[1]
            }
          axiosInstance.post('/get/data',{user})
          .then(res=>{         
            var json = res.data.users[0]
            var values = Object.keys(json).map(function (key) { return json[key]; }); 
            for(var i =1;i<values.length;i++){
                this.setState({data: [...this.state.data , [[values[i]]]]})
            }
          
          })
      }  
  componentWillMount(){
     
    this.recommendation()
  }
  Back(){
      window.location.assign('/member/requests')
  }


    acceptRequest=(e)=>{

        const url = ''+window.location.href
            const email = url.split('http://localhost:3006/member/userData/')
        var user={
          email: email,
          myEmail:local['email'],
        status:"accepted",    
        }
        axiosInstance.post('/members/request/accept',{user})
        .then(res =>{
          if(res.data.result){
              alert('accepted Successfully')
              window.location.assign('/member/requests')
          }
      })  
    }
    render(){

        return (
                <div className="showDataTable" >
                    <h2>Applications</h2>
                    <table className="tableData">
                        {this.state.form.map((index,item)=> (
                          <tr>
                            <td className="tableData"><b>{index}</b></td>   
                            <td className="tableData">{this.state.data[item]}</td>
                            </tr>
                        ))}
                    </table> 
                    <i class="fas fa-2x" onClick={this.Back}><FontAwesomeIcon  classname="bcak" icon={faArrowLeft} /></i>
                    <Button className="Primary" onClick={this.acceptRequest}>Accept</Button>
                </div>
        )
    }
}  
export default Table
