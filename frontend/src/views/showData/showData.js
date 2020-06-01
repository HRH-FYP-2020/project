import React from 'react';
import './showData.css'
import ShowMemberShipData from './showDataMemberShip.js/showDataMemberShip'
import ShowMemberData from './showMemberData/showMemberData'
import FinanceChallan from './financeChallan/financeChallan'
import PrintingOfficerData from './printingOfficerData/PrintingOfficerData'
import ViewApplicationAdmin from "./admin/viewApplication" 
var local = JSON.parse(localStorage.getItem('user'))
class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                memberShip:false,
                member:false,
                finance:false,
                email:'',
                printing:false,
                admin:false,
                delivery:false,
                id:''

        }
    }        
  componentWillMount(){
   
    if(local['role'] === 'membershipOfficer'){
        this.setState({memberShip:true})
    } else if(local['role'] === 'member'){
        this.setState({member:true})
    } else if(local['role'] === 'financeOfficer'){
        const url = ''+window.location.href
        const email = url.split('http://localhost:3006/financeOfficer/viewData/')
        this.setState({email:email[1]})
        this.setState({finance:true})
    }else if(local['role'] === 'printingOfficer'){
        const url = ''+window.location.href
        var email = ''+url.split('http://localhost:3006/printingOfficer/viewData/')
        email = email.split('/')
        const id = email[1]
        email=email[0]
        var finalEmail=''
        for( var i=1;i<email.length;i++){
            finalEmail = finalEmail+email[i]
        }
        this.setState({email:finalEmail})
        this.setState({id:id})
        this.setState({printing:true})
    }else if(local['role'] === "admin"){
        const url = ''+window.location.href
        const email = url.split('http://localhost:3006/admin/viewApplication/data/')
        this.setState({email:email[1]})
        this.setState({admin:true})
    }
  }
    render(){
        return (
                <div className="showDataTable" >
                    {this.state.memberShip && <ShowMemberShipData/>}
                    {this.state.member && <ShowMemberData/>}     
                    {this.state.finance && <FinanceChallan email={this.state.email}/>}
                    {this.state.admin && <ViewApplicationAdmin email={this.state.email}/>}                 
                    {this.state.printing && <PrintingOfficerData email={{email:this.state.email,id:this.state.id}}/>}                 
                </div>
        )
    }
}  
export default Table