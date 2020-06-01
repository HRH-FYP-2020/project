import React, { Component } from 'react'
import Table from './Tables/Table'
import './Messages.css'
import axiosInstance from 'utils/API'
export default class Messages extends Component {
    constructor(props){
        super()
        this.state={        
                name:[],
                subject:[],
                message:[],
                id:[],
                status:[]
        }
        this.callApi = this.callApi.bind(this)
    }

    callApi(){
        axiosInstance.get('/message/get')
        .then(res=>{
            for(var i=0;i<res.data.data.length;i++){
                this.setState({
                    name: [...this.state.name , res.data.data[i].name],
                    id: [...this.state.id , res.data.data[i]._id],
                    message: [...this.state.message , res.data.data[i].message],
                    subject: [...this.state.subject , res.data.data[i].subject],
                    status: [...this.state.status , res.data.data[i].status],
                  
                })
            }
        })
        
        

    }
    componentWillMount(){
        this.callApi()
    }
    render() {



        return (
            <div className="message">
                <Table 
                title={"Messages"} 
                searchBox={false}
                column={['Sr NO.','Subject','Message','Replied','View']}
                data={[this.state]}
                listName={['subject','message']}
                />
            </div>
        )
    }
}
