import React, { Component } from 'react'
import './ShowMessages.css'
import axiosInstance from 'utils/API'

export default class ShowMessage extends Component {

    constructor(props){
        super()
        this.state={
            reply:false,
            replyText:String
        }
        this.onChange = this.onChange.bind(this)
        this.buttonClicked = this.buttonClicked.bind(this)
        this.replyButtonClicked = this.replyButtonClicked.bind(this)
    }
    onChange(event){
        this.setState({replyText:event.target.value})
    }
    buttonClicked(){
        this.setState({reply:!this.state.reply})
    }
    replyButtonClicked(){
        console.log(this.props)
        axiosInstance.post('/message/reply',{reply:this.state.replyText,id:this.props.data.id})
        .then(res=>{
                alert(res.data.message)
        })
        this.setState({reply:!this.state.reply})
        window.location.assign('http://localhost:3006/admin/messages')
    }
    render() {
        return (
            <div className="showMessage">
               {!this.state.reply &&<div>
                   <p>Name :  <span >{this.props.data.name}</span></p><br/><br/>
                   <p>Subject: <span>{this.props.data.subject}</span></p><br/><br/>
                   <p >Message:<div id="message"> <span>{this.props.data.message}</span></div></p><br/><br/>    
                   <button id="button" onClick={this.buttonClicked}>Reply</button>              
               </div>}
               {this.state.reply && <div >
               <p>Name :  <span >{this.props.data.name}</span></p><br/><br/>
                   <p>Subject: <span>{this.props.data.subject}</span></p><br/><br/>
                   <label for="comment" className="label">Reply:</label>
                    <textarea className="form-control" rows="8" id="comment" name="replyText" value={this.state.replyText} onChange={this.onChange} placeholder="Write Your Reply Here....."></textarea>
                    <button id="button2" onClick={this.replyButtonClicked}>Reply</button> 
               </div>}
            </div>
        )
    }
}
