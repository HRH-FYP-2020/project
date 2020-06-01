import React from 'react'
import './main.css'
import './util.css'
import axiosInstance from '../../../utils/API'
var local = JSON.parse(localStorage.getItem('user'))
class Chalan extends React.Component{

constructor(){
super()
this.state={

	bill:'',
	disabled:true

}

this.init()
}

init = ()=>{
    
 var user={
    email:local['email']
  }
  // console.log('Herererer')
  axiosInstance.post('/notMembers/chalan',{user})
  .then(res=>{
    //   console.log(res.data.users)
   if(!res.data.users){
       alert('No Payment Is Due')
   }else{
	this.setState({bill:res.data.users[0]['bill']})
	this.setState({disabled:false})
}
    })
}
BillPaid(){

    var user={
        email:local['email']
	  }
	  alert(user.email)
    axiosInstance.post('/notMembers/paid',{user})
    .then(res=>{
		console.log(res.data.result)
        if(res.data.result){
            alert('Your Bill Has Been Successfully Paid ')
            window.location.reload()
        }
      })
}
    render(){
        return(

        	<div className="contact1">
		<div className="container-contact1">
			<div className="contact1-pic js-tilt" data-tilt>
				<img src="/img-01.png" alt="IMG"/>
			</div>

			<form className="contact1-form validate-form">
				<span className="contact1-form-title">
					Fee Chalan
				</span>

				{/* <div className="wrap-input1 validate-input" data-validate = "Name is required">
					<input className="input1" type="text" name="name" placeholder="Name"/>
					<span className="shadow-input1"></span>
				</div> */}

				<div className="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                     <p className="input2">Email:  </p>   
                	<input className="input1" type="text" name="email" value={local['email']}/>
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Subject is required">
                    <p className="input2">Bill:   </p> 
					<input className="input1" type="text" name="bill" value={this.state.bill}/>
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea className="input1" name="message" value="Please submit Your Bill As Soon As possible"></textarea>
					<span className="shadow-input1"></span>
				</div>
				<div className="container-contact1-form-btn">
					<button disabled={this.state.disabled} className="contact1-form-btn" onClick={this.BillPaid}>
						<span>
							Pay Bill
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>
            
        );

    }
}

export default Chalan