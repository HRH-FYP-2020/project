import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import './css/bootstrap.min.css'
import './assets/img/favicon.png'
import './assets/img/apple-touch-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Login from '../Login/login'
import Signup from '../signup/verification/verification'
import axios from 'axios'
class LandingPage extends React.Component{
  constructor(props){
    super()
    this.state={
      isLogin:false,
      isNotLogin:true,
      isLogup:false,
      form:{
        personName:'',
        personEmail:'',
        personSubject:'',
        personMessage:''
      }
    }


    this.Login = this.Login.bind(this)
    this.LogUp = this.LogUp.bind(this)
    this.handleChange= this.handleChange.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  Login(){
    this.setState({isLogin:true})
    this.setState({isNotLogin:false})
    // window.location.assign('/login')
  }
  LogUp(){
    this.setState({isLogin:false})
    this.setState({isLogup:true})
    this.setState({isNotLogin:false})
  }

  handleChange(event){
    const form = this.state.form;
    form[event.target.name] = event.target.value;
    this.setState(form);
}

sendMessage(event){
  event.preventDefault()
  const user = this.state.form 
  axios.post('/message/send',{user})
  .then(res=>{
    if(res.data.result){
      alert(res.data.resultDetail)
      window.location.reload()
    }
  })
}

  render(){
    var style={
      width:'200%',
      marginLeft:'60%'
    }
    var style2={
      width:'200%',
      marginLeft:'-140%'
    }
    var style3={
      width:'3%',
      height:'5%',
      backgroundColor:"#fb8c00",
      padding:'0px 0px 0px 0px',
      boxShadow:'none'
    }
    var style4={
      marginRight:"20px",
      marginLeft:'10px',
      height:'100%',
      width:'50%'

    }
  return (
    <div >
    <header id="header">
    <div id="home" className="container-fluid">
      <i  className="nav-toggle" style={style3}><FontAwesomeIcon style={style4} className="bx bx-menu" icon={faBars} /></i>
      <nav className="nav-menu">
        <ul>
        <li className="active"><a href="#home">Home</a></li>
          <li ><a onClick={this.Login}>Login</a></li>
          
          <li><a onClick={this.LogUp}>LogUp</a></li>
          <li><a href="#contact">Events</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#why-us">About Us</a></li>
        </ul>
      </nav>
    </div>
  </header>
 {this.state.isNotLogin && <section id="hero">
    <div className="hero-container">
      <h1 id="welcomeTOCOC" style={{color:"#b0bec5"}}>Welcome to COC</h1>
      <h2 id="welcomeTOCOC" style={{color:"#b0bec5"}}>This is our Final year Project!</h2>

      <form action="forms/notify.php" method="post" role="form" className="php-email-form">
        <div className="row no-gutters">
            <div  className=" col-md-6 text-center  form-group pr-md-5" ><button type="submit"  className="landingpagebutton" style={style2} onClick={this.Login}>Login</button></div>
            <div className="col-md-6  text-center  form-group pr-md-5"><button type="submit" style={style} onClick={this.LogUp}>SignUp</button></div>
        </div>

      </form>
     
    </div>
  </section>
}
  {this.state.isLogin && <section id="hero" style={{height:"100vh"}}>
  <Login />
  </section>
}
{this.state.isLogup && <section id="hero" style={{height:"100vh"}}>
  <Signup />
  </section>
}
  <main id="main">
  <section id="why-us" className="why-us section-bg">
      <div className="container">
      <div className="row">
      <div className="col-sm-10 col-md-6 d-flex w-100 align-items-stretch">
            <div className="card">
              <img src={require("./comsats.jpg")} className="card-img-top" alt="..."/>
              <div className="card-icon">
                <i className="bx bx-book-reader">C</i>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">Comsats Islamabad Abbottabad Campus</a></h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 d-flex w-100 align-items-stretch">
            <div className="card">
              <img src={require("./comsats.jpg")} className="card-img-top" alt="..."/>
              <div className="card-icon">
                <i className="bx bx-book-reader"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">Our SUpervisor</a></h5>
                <p className="card-text">Sir Kashif Bilal<br/>Abbottabad<br/>0310-1887191<br/></p>
              </div>
            </div>
          </div>
          </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="card">
              <img src={require("./hamzaEjaz.JPG")} className="card-img-top" alt="..."/>
              <div className="card-icon">
                <i className="bx bx-book-reader">H</i>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">Hamza Ejaz</a></h5>
                <p className="card-text">FA16-Bcs-059<br/>Lahore<br/>0310-1887191<br/>BCS-8B</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="card" >
              <img src={require("./AB.JPG")}className="card-img-top" alt="..."/>
              <div className="card-icon">
                <i className="bx bx-calendar-edit">AB</i>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">Abdur Rahim Khan</a></h5>
                <p className="card-text">FA16-Bcs-073<br/>Mardan<br/>0310-1887191<br/>BCS-8B</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="card">
              <img src={require("./Me.JPG")} className="card-img-top" alt="..."/>
              <div className="card-icon">
                <i className="bx bx-landscape">HA</i>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">Hamza Ali</a></h5>
                <p className="card-text">FA16-Bcs-069<br/>Haripur<br/>0310-1887191<br/>BCS-8B</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section id="contact" className="contact section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Contact Us</h2>
        </div>

        <div className="row justify-content-center">

          <div className="col-lg-3 col-md-5 mb-5 mb-md-0">
            <div className="info">
              <div className="address">
                {/* <i className="bx bx-map"></i> */}
                <a icon={faBars}></a>
                <p>Comsats University <br/>Abbottabad</p>
              </div>

              <div className="email">
                {/* <i className="bx bx-envelope"></i> */}
                <p>cocfyp2020@gmail.com</p>
              </div>

              <div className="phone">
                {/* <i className="bx bx-phone-call"></i> */}
                <p>+92 1234567890</p>
              </div>
            </div>

          </div>

          <div className="col-lg-5 col-md-7">
            <form  role="form" onSubmit={this.sendMessage} className="php-email-form">
              <div className="form-group">
                <input type="text" name="name" className="form-control" id="name" name="personName" onChange={this.handleChange} value={this.state.personName} placeholder="Your Name" required/>
                <div className="validate"></div>
              </div>
              
              <div className="form-group">
                <input type="email" className="form-control" name="email" id="email"  name="personEmail" onChange={this.handleChange} value={this.state.personEmail} placeholder="Your Email" required/>
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject"  name="personSubject" onChange={this.handleChange} value={this.state.personSubject} placeholder="Subject" required  />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" required name="personMessage" onChange={this.handleChange} value={this.state.personMessage} data-msg="Please write something for us" placeholder="Message"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit" >Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

  </main>
  <footer id="footer">
    <div className="container">
      <div className="copyright"> 
        <strong><span>Created By </span></strong>Hamza Ali , Abdur Rahim, Hamzah Ejaz
      </div>
    
    </div>
  </footer>
    </div>
  );
}
}
export default LandingPage;
