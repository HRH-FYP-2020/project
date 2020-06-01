// import React from "react";
// import GridItem from "components/Grid/GridItem.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import axiosInstance from '../../utils/API'
// // import { Button } from "@material-ui/core";
// var local = JSON.parse(localStorage.getItem('user'))
// // const role=local['role']
// export default class TableList extends React.Component{
//   constructor(){
//     super()
//    this.state={
//     fname: [],
//     lname: [],
//     email: [],
//     business_address:[],
//     business_name:[],
//     representative_name:[],
//     business_date:[],
//     business_intrest:[],
//     bank_name:[],
//     fax_num:[],
//     tel_num:[],
//     CNIC:[],
//     print:[],
//     status:[],
//     Bill:[],
//     Id:[],
//     button1:[],
//     button2:[],
//     role:['admin','membershipOfficer'],
//     role2:['financeOfficer','printingOfficer','deliveryOfficer'],
//     path:['/admin/viewmembersdata','/membership/request'],
//     path2:['/financeOfficer/bill','/printingOfficer/print','/deliveryOfficer/print'],
//     accept:['/membership/request/accept'],
//     accept2:['/financeOfficer/accept','/printingOfficer/accept','/deliveryOfficer/accept'],
//     method2:['get','get','get'],
//     method:['get','get'],
//     column:[],
//     // acceptMethods:['post']


    
//     }
//     this.acceptRequest = this.acceptRequest.bind(this)
//     this.declineRequest = this.declineRequest.bind(this)
//   }

  
  
//    declineRequest=(e)=>{
//     var user={
//       email: e.target.value,
//     }
//   if(role=='member'){
//     axiosInstance.post('/members/request/decline',{user})
//     .then(res =>{
//         if(res.data.result){
//             alert('You Have Successfully Delete This Request')
//             window.location.reload()
//         }
//     })
        
//   }
// }
//   componentDidMount(){    
//     const role = local['role']
//     // alert(role)
//     const email = local['email']
//     var action = true
//     var user ={
//     email :email
//   }
//   // console.log(this.state.role.length)
//     for(var k =0;k<=this.state.role.length-1;k++){
//       // console.log(k)/
//     // console.log(this.state.role[k]+ ' roles')
//     if(this.state.role[k]==role){
//       // alert('herh')
//       action =false
//     var Methodss = this.state.method[k]
//     var url = this.state.path[k] 
//     // alert(url)
//       axiosInstance({
//         Methodss,
//         url,
//         user})
//     .then(res =>{
//       for(var i=1; i<res.data.length+1;i++){
//         this.setState({fname: [...this.state.fname , [[res.data[i-1].fname]]]})
//         this.setState({lname: [...this.state.lname , [[res.data[i-1].lname]]]})
//         this.setState({business_address: [...this.state.business_address , [[res.data[i-1].business_address]]]})
//         this.setState({email: [...this.state.email , [[res.data[i-1].email]]]})
//         this.setState({business_name: [...this.state.business_name , [[res.data[i-1].business_name]]]})
//         this.setState({representative_name: [...this.state.representative_name , [[res.data[i-1].representative_name]]]})
//         this.setState({business_date: [...this.state.business_date , [[res.data[i-1].business_date]]]})
//         this.setState({business_intrest: [...this.state.business_intrest , [[res.data[i-1].business_intrest]]]})
//         this.setState({bank_name: [...this.state.bank_name , [[res.data[i-1].bank_name]]]})
//         this.setState({fax_num: [...this.state.fax_num , [[res.data[i-1].fax_num]]]})
//         this.setState({tel_num: [...this.state.tel_num , [[res.data[i-1].tel_num]]]})
//         this.setState({CNIC: [...this.state.CNIC , [[res.data[i-1].CNIC]]]})
//         this.setState({button1: [...this.state.button1 , [<button value={[this.state.email[i-1]]} onClick={this.acceptRequest}>Accept</button>]]})
//         this.setState({button2: [...this.state.button2, [<button value={[this.state.email[i-1]]} onClick={this.declineRequest}>Decline</button>]]})
//         if(role==='admin'){
//           this.setState({column:["Name", "Last Name", "Email","business_address","business_name","representative_name","business_date","business_intrest","bank_name","fax_num","tel_num","CNIC"]})
//         }else{
//         this.setState({column:["Name", "Last Name", "Email","business_address","business_name","representative_name","business_date","business_intrest","bank_name","fax_num","tel_num","CNIC","Accept","Decline"]})
//         }
//         // this.setState({button1: [...this.state.button1 , [<button value={[this.state.email[i-1]]} onClick={()=>this.acceptRequest('row.email')}>Accept</button>]]})
//     }
//     // break

//      });
//     }}
    
//     // else{
//       if(action){
//       for(var j =0;j<this.state.role2.length;j++){
//         if(this.state.role2[j]===role){
//           var Methodss = this.state.method2[j]
//           var url = this.state.path2[j] 
//             axiosInstance({
//               Methodss,
//               url,
//               user})
//           .then(res =>{
//             // alert('Here 1')
//             for(var l=1; l<res.data.length+1;l++){
//               this.setState({print: [...this.state.print , [[res.data[l-1].print]]]})
//               this.setState({email: [...this.state.email , [[res.data[l-1].email]]]})
//               this.setState({status: [...this.state.status , [[res.data[l-1].status]]]})
//               this.setState({Bill: [...this.state.Bill , [[res.data[l-1].bill]]]})
//               this.setState({Id: [...this.state.Id , [[res.data[l-1]._id]]]})
//               this.setState({button1: [...this.state.button1 , [<button value={[this.state.Id[l-1]]} onClick={this.acceptRequest}>Accept</button>]]})

//           }
//           this.setState({column:["No","ID", "Email","Bill","Status","Print","Accept"]})
      
//            });
//       }
//     }
//   }
//   // } 
//       if(role=='member'){
//         // console.log('here')
//       var user={
//         email:local['email']
//       }
//       console.log(user.email)
//       axiosInstance.post('/members/recommendation',{user})
//       .then(res=>{
//         // console.log(res.data[0])
//         for(var i=1; i<res.data.length+1;i++){
//           this.setState({fname: [...this.state.fname , [[res.data[i-1].fname]]]})
//           this.setState({lname: [...this.state.lname , [[res.data[i-1].lname]]]})
//           this.setState({business_address: [...this.state.business_address , [[res.data[i-1].business_address]]]})
//           this.setState({email: [...this.state.email , [[res.data[i-1].email]]]})
//           this.setState({business_name: [...this.state.business_name , [[res.data[i-1].business_name]]]})
//           this.setState({representative_name: [...this.state.representative_name , [[res.data[i-1].representative_name]]]})
//           this.setState({business_date: [...this.state.business_date , [[res.data[i-1].business_date]]]})
//           this.setState({business_intrest: [...this.state.business_intrest , [[res.data[i-1].business_intrest]]]})
//           this.setState({bank_name: [...this.state.bank_name , [[res.data[i-1].bank_name]]]})
//           this.setState({fax_num: [...this.state.fax_num , [[res.data[i-1].fax_num]]]})
//           this.setState({tel_num: [...this.state.tel_num , [[res.data[i-1].tel_num]]]})
//           this.setState({CNIC: [...this.state.CNIC , [[res.data[i-1].CNIC]]]})
//           this.setState({button1: [...this.state.button1 , [<button value={[this.state.email[i-1]]} onClick={this.acceptRequest}>Accept</button>]]})
//           this.setState({button2: [...this.state.button2, [<button value={[this.state.email[i-1]]} onClick={this.declineRequest}>Decline</button>]]})
//           this.setState({column:["Name", "Last Name", "Email", "business_address","business_name","representative_name","business_date","business_intrest","bank_name","fax_num","tel_num","CNIC","Accept","Decline"]})
//         }
        
//         })
  
//         axiosInstance.post('/members/recommendation2',{user})
//         .then(res=>{
//         //  var j = this.state.email.length
//         console.log(res.data.length)  
//         for(var i=1; i<res.data.length+1;i++){
//             // console.log(i)
//             this.setState({fname: [...this.state.fname , [[res.data[i-1].fname]]]})
//             this.setState({lname: [...this.state.lname , [[res.data[i-1].lname]]]})
//             this.setState({business_address: [...this.state.business_address , [[res.data[i-1].business_address]]]})
//             this.setState({email: [...this.state.email , [[res.data[i-1].email]]]})
//             this.setState({business_name: [...this.state.business_name , [[res.data[i-1].business_name]]]})
//             this.setState({representative_name: [...this.state.representative_name , [[res.data[i-1].representative_name]]]})
//             this.setState({business_date: [...this.state.business_date , [[res.data[i-1].business_date]]]})
//             this.setState({business_intrest: [...this.state.business_intrest , [[res.data[i-1].business_intrest]]]})
//             this.setState({bank_name: [...this.state.bank_name , [[res.data[i-1].bank_name]]]})
//             this.setState({fax_num: [...this.state.fax_num , [[res.data[i-1].fax_num]]]})
//             this.setState({tel_num: [...this.state.tel_num , [[res.data[i-1].tel_num]]]})
//             this.setState({CNIC: [...this.state.CNIC , [[res.data[i-1].CNIC]]]})
//             this.setState({button1: [...this.state.button1 ,[ <button value={[this.state.email[i-i]]} onClick={this.acceptRequest}>Accept</button>]]})
//             this.setState({button2: [...this.state.button2, [<button value={[this.state.email[i-1]]} onClick={this.declineRequest}>Decline</button>]]})
//             this.setState({column:["Name", "Last Name", "Email","business_address","business_name","business_date","business_intrest","bank_name","fax_num","tel_num","CNIC","Accept","Decline"]})
//           }
//         })
//       // console.log(this.state.email+'asdasd')

//     }
//   // }
// }
//   setValuesInRows(role){
//     var rows=[]
// for(var i=0;i<this.state.email.length;i++){
//   if( role==='membershipOfficer' || role==='member'){
//     // console.log('here')
//   rows.push([this.state.fname[i],this.state.lname[i],this.state.email[i],this.state.business_address[i],this.state.business_address[i],this.state.business_name[i],this.state.representative_name[i],
//   this.state.business_date[i],this.state.business_intrest[i],this.state.bank_name[i],this.state.fax_num[i],this.state.tel_num[i],this.state.CNIC[i],this.state.button1[i],this.state.button2[i]])
//   }else if(role ==='financeOfficer'||role==='printingOfficer'||role==='deliveryOfficer'){
//     // alert("here")
//     rows.push([i+1,this.state.Id[i],this.state.email[i],this.state.Bill[i],this.state.status[i],this.state.print[i],this.state.button1[i]])
//   }else if(role==='admin'){
//     rows.push([this.state.fname[i],this.state.lname[i],this.state.email[i],this.state.business_address[i],this.state.business_address[i],this.state.business_name[i],this.state.representative_name[i],
//       this.state.business_date[i],this.state.business_intrest[i],this.state.bank_name[i],this.state.fax_num[i],this.state.tel_num[i],this.state.CNIC[i]])
//   }
// }



//   return rows
//   }
//   render() {
//   return (
//      <GridContainer>
//       <GridItem xs={'auto'} sm={'auto'} md={'auto'}>
//             <Table
//               tableHeaderColor="primary"
//               tableHead={this.state.column}
//               tableData={
//                 this.setValuesInRows(local['role'])
//                              }
//             />
     
     
//       </GridItem>
//     </GridContainer>
//   );
// }
// }