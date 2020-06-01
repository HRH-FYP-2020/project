import React from "react";
// import ReactDOM from 'react-dom';
import './login2.css'
// import './util.css'
import Particles from 'react-particles-js';
// import Admin from '../admin/admin'
// import Member from '../member/member'
// import FinanceOfficer from '../financeOfficer/financeOfficer'
// import MemberShipOfficer from '../memberShipOfficer/memberShipOfficer'
import axiosInstance from '../../utils/API'
// import { Route, Redirect } from 'react-router-dom';  
class Login extends React.Component {
constructor(props){
super();
this.state ={
	// verify:true,
	// afterVerify:false,
    email:'',
    password:'',
	par:{
		
			"particles": {
			  "number": {
				"value": 60,
				"density": {
				  "enable": true,
				  "value_area": 700
				}
			  },
			  "color": {
				"value": "#ffffff"
			  },
			  "shape": {
				"type": "circle",
				"stroke": {
				  "width": 1.5,
				  "color": "#000000"
				}
		
			  },
			  "opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
				  "enable": true,
				  "speed": 0.1,
				  "opacity_min": 0.1,
				  "sync": false
				}
			  },
			  "size": {
				"value": 3,
				"random": true,
				"anim": {
				  "enable": false,
				  "speed": 50,
				  "size_min": 0.1,
				  "sync": false
				}
			  },
			  "line_linked": {
				"enable": true,
				"distance": 300,
				"color": "#A9A9A9",
				"opacity": 0.5,
				"width": 1
			  },
			  "move": {
				"enable": true,
				"speed": 3,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": true,
				"attract": {
				  "enable": false,
				  "rotateX": 600,
				  "rotateY": 1200
				}
			  }
			},
			"interactivity": {
			  "detect_on": "canvas",
			  "events": {
				"onhover": {
				  "enable": true,
				  "mode": "repulse"
				},
				"onclick": {
				  "enable": true,
				  "mode": "push"
				},
				"resize": true
			  },
			  "modes": {
				"grab": {
				  "distance": 800,
				  "line_linked": {
					"opacity": 1
				  }
				},
				"repulse": {
				  "distance": 200,
				  "duration": 0.4
				},
				"push": {
				  "particles_nb": 10
				},
				// "remove": {
				//   "particles_nb": 2
				// }
			  }
			},
			"retina_detect": true
		  }

}
this.handleChange =this.handleChange.bind(this);
this.buttonClicked= this.buttonClicked.bind(this);
}



handleChange(event){
this.setState({[event.target.name] : event.target.value});
}
buttonClicked(event){
    event.preventDefault();
    var user ={
        email: this.state.email,
        password:this.state.password,
    }
    axiosInstance.post('/user/login',{user})
     .then(res =>{	
		const user = res.data.user;
        if(!res.data){
          alert('You Are Not A member')           
		}
		console.log(user)
		localStorage.removeItem('user');
		localStorage.setItem('user',JSON.stringify(user));
		if(user.role === 'member'){
			window.location.assign('/member')

		}else if(user.role === 'financeOfficer'){
			
			window.location.assign('/financeOfficer')
		
		                                                                         
        }else if(user.role === 'membershipOfficer'){
			
			window.location.assign('/membership')                                                                                  

		}else if(user.role === '' || user.role === 'genrateBill'){                                                                                  
			window.location.assign('/notMember')                                                                                  

		}else if(user.role === 'printingOfficer'){

			window.location.assign('/printingOfficer')                                                                                  

		}else if(user.role=='deliveryOfficer'){
			window.location.assign('/deliveryOfficer')
		}else if(user.role=='admin'){
			window.location.assign('/admin')
		}else if(user.role=='visaOfficer'){
			window.location.assign('/visaOfficer')
		}
        
    }).catch(error=>{
		alert('Please Provide the Correct Information')
		window.location.reload()
	});

}
    render(){
  return (
	<div className="body">
		<div id="particles-js">
		<Particles
    	params={this.state.par}
     	/>
	 </div>
	
		<div class="login">
			<div class="cssload-container">
				<div class="cssload-l">L</div>
				<div class="cssload-circle"></div>
				<div class="cssload-square"></div>
				<div class="cssload-triangle"></div>
				<div class="cssload-i">G</div>
				<div class="cssload-n">I</div>
				<div class="cssload-g">N</div>
			</div>
		
		
			<form>
				<br/><br/>
				<input className="input11"  onChange={this.handleChange}  value={this.state.value} type="email" name="email" placeholder="Email"/>
				<br></br>
				<input className="input11"  onChange={this.handleChange} value={this.state.value} type="password" name="password" placeholder="Password"/>
				<br/>
				<button onClick={this.buttonClicked} className="login100-form-btn" type="submit">LOGIN</button>
				<br/>

				<a className="link" href=""> Forgot Password</a>
					<a className="link" href="/signUp">Dont have an account ? Sign Up</a>
			</form>
				<br/>
		</div>
	</div>
	
	 
  );

            }
};

export default Login;