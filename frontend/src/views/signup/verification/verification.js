import React from 'react'
import './verification.css'
import axiosInstance from '../../../utils/API'
class Verification extends React.Component{
    constructor(){
        super()
        this.state={
            email:String
        }
        this.handleChange = this.handleChange.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name] :[event.target.value] })
    }

    formSubmit(event){
        // alert('akd')
        // event.preventDefault()
        const user = this.state.email
        alert(user)
        axiosInstance.post('/signUp/auth',{user})
        .then(res =>{
            // console.log(res.data.user)
            
        })
    }
    render() {
        var style={
            marginLeft:"38%",
            marginTop:"10%",
            color:"#b0bec5"
        }
        var style2={
            marginLeft:"28%",
            // marginTop:"10%",
            color:"#b0bec5"
        }
        return (
            <div>
                <h1  style={style}>Welcome to COC</h1>
                <h2   style={style2}>Please Enter Your Email And You Will Recieve An Email From <b id="bold">COC</b></h2>
                <p ></p><br/><br/>
                <div className="Verification">
                    <form>
                    
                        <div className="divSecond">
                            
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="emailV" placeholder="Email"></input>
                            <button type="submit" className="verifyBtn"  onClick={this.formSubmit}>SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
            
        )
    }
}

export default Verification