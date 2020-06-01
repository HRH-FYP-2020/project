import React from 'react';
import './listView.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEye,faTrash } from '@fortawesome/free-solid-svg-icons'
import MemberShipTable from '../MemberShip/memberShipTable'
// import MemberTable from './memberTable/memberTable'
// import FinanceTable fro../Delivery/financeTable/finacneTableble'
import PrintingTable from'./printingOfficer/printingOfficerTable'
// import AdminTable from '../adminTable/adminTable'
var local = JSON.parse(localStorage.getItem('user'))

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                       memberShip:false,
                       member:false,
                       finance:false,
                       printing:false,
                      //  admin:false
                      }
    }   
  componentWillMount(){
    if(local['role'] === 'member'){
      this.setState({member:true})
  }
  else if(local['role'] === 'membershipOfficer'){
    this.setState({memberShip:true})
  }else if (local['role'] ==='financeOfficer'){
    this.setState({finance:true})
  }else if (local['role'] ==='printingOfficer'){
    this.setState({printing:true})
  }else if (local['role'] ==='deliveryOfficer'){
    this.setState({printing:true})
  }

  // else if (local['role'] ==='admin'){
  //   this.setState({admin:true})
  // }
  }
    render(){
        return (
                  <div className="listView" >
                    {this.state.memberShip && <MemberShipTable/>}
                    {/* {this.state.member && <MemberTable/>} */}
                    {/* {this.state.finance && <FinanceTable/>} */}
                    {this.state.printing && <PrintingTable/>}
                    {/* {this.state.admin && <AdminTable/>} */}
                  </div>
        )
    }
}

export default Table