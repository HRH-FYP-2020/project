import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faTrash } from '@fortawesome/free-solid-svg-icons'
// import axiosInstance from '../../../utils/API'
import './Table.css'
import ShowMessages from '../Show Messages/ShowMessage'
// var local = JSON.parse(localStorage.getItem('user'))
class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                        id:String,
                       table:true,
                       name:String,
                       message:String,
                       subject:String

                      }
    }
    // componentWillMount(){
    //     console.log('as')
    //     console.log(this.props.data[0])
    // }
    viewMessage(id){
            this.setState({table:false,id:id})
            for(var i=0;i< this.props.data[0].id.length;i++){
                if(this.props.data[0].id[i] === id){
                    this.setState({name:this.props.data[0].name[i],
                        subject:this.props.data[0].subject[i],
                        id:this.props.data[0].id[i],
                        message:this.props.data[0].message[i]})
                }
            }
            // this.props.data[0].id.map((index,item)=> (
            //     if(index === this.props.data[0].id[item]){

            //     }
            
            // ))

    }
    data(item,index){
 
            return(
                  <tr>
                        <td>{item+1}</td>
                        <td>{this.props.data[0].subject[item]}</td>
                        <td className="abc">{this.props.data[0].message[item]}</td>
                        {this.props.data[0].status[item] &&
                            <td>Replied</td>
                        }
                        {!this.props.data[0].status[item] &&
                            <td>Pending</td>
                        }
                        <td><a className="viewBtn" onClick={() => this.viewMessage(this.props.data[0].id[item])}><FontAwesomeIcon classname="fa-2x" icon={faEye} /></a></td>
                    </tr>
                )
           
        }
    render(){
        return (<>
                  {this.state.table && <div className="tableData" >
                    <h6><b style={{color:"green"}}>{this.props.title}</b></h6><br></br>
                    <p><b>All of Them Are Listed Below</b></p>
                    <table className="tabless" style={{overflow:'hidden'}}>
                    <tr>
                        {this.props.column.map((index,item)=> (
                          
                          <th className="tableHeader">{index}</th>                                                       
                          
                        ))}
                      </tr>
                     { this.props.searchBox &&<tr style={{backgroundColor:"white"}}>
                          <td>

                          </td>
                          <td  className="tdd">
                              <input type="text" className="app_id" onChange={this.app_IdClicked} name="appIdTextField" value={this.state.appIdTextField}></input>
                          </td>
                          <td>
                              <input type="text" className="app_id"></input>
                          </td>
                          <td>
                              <input type="text" className="app_id"></input>
                          </td>
                          <td>
                                <select className="app_id">
                                <option disabled selected> Application Type</option>
                                <option value="">Visa Arrival</option>
                                <option value="">Visa Abroad</option>
                                </select>
                          </td>
                          {/* <td>
                              <input type="text" className="app_id"></input>
                          </td>
                          <td>
                                <select className="app_id">
                                <option disabled selected>Status</option>
                                <option value="">Pending</option>
                                <option value="">Complete</option>
                                </select>
                          </td> */}
                   
                      </tr>}
                      {this.props.data[0].name.map((index,item)=> (
                       this.data(item,index)
                       
                      ))}
                    </table>
                  </div>
                  
                  }{
                      !this.state.table &&
                     <ShowMessages
                     data={this.state}
                     />
                  }
                  </>
        )
    }
}

export default Table