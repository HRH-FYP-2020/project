import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Button} from 'reactstrap';
import axiosInstance from '../../utils/API'
import './modifyPayment.css'
class ModifyPayment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[
                'memberShip_urgent',
                'memberShip_normal',
                'visa_abroad',
                'visa_arrival',
                'visa_multinational',
                'remembership'
            ],
           amount:[
           ],
           dropdown:'',
           amountChange:Number    
        }
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    onChange(event){
        this.setState({[event.target.name] : event.target.value});
    }
    submit(){

        const amount={
            value:this.state.amountChange,
            name:''
        }
        if(this.state.dropdown ==='Membership (Normal)'){
                amount.name='memberShip_normal'
        }
        else if(this.state.dropdown ==='Membership (Urgent)'){
            amount.name='memberShip_urgent'
        }
        else if(this.state.dropdown ==='Visa Abroad'){
            amount.name='visa_abroad'
        }
        else if(this.state.dropdown ==='Visa Arival'){
            amount.name='visa_arrival'

        }
        else if(this.state.dropdown ==='Visa MultiNational'){
            amount.name='visa_multinational'

        }
        else if(this.state.dropdown ==='Membership Renewal'){
            amount.name='remembership'

        }
        axiosInstance.put('/financeOfficer/amount',{amount})
        .then(res=>{
            if(res.data.result){
                alert('Data Saved Successfully') //TODO: show popup message
                this.getAllPayments();
            }else{    
                alert('Data Not Saved')   
            }
        }).catch(error=>{
            console.log(error)
        })
    }
    componentWillMount(){
       this.getAllPayments();
    }
    getAllPayments(){

        axiosInstance.get('/financeOfficer/amount/get')
        .then(res=>{
            this.setState({amount:[]})
           for(var i =0;i<6;i++){
              
            this.setState({amount: [...this.state.amount , [[res.data[0][''+this.state.list[i]]]]]})
           }
        }).catch(error=>{
            console.log(error)
        })

    }
    render(){
        // const form = this.state.form
        return (
                            
            <div className="listView">

                <h3>Modify Payment</h3>
                <div className="">
                    <table >
                        <tr>
                            <th>Sr #</th>
                            <th>Name Of Payment</th>
                            <th>Amount</th>
                                    
                        </tr>
                      
                        {this.state.list.map((index,item)=> (
                          <tr> <td>{item+1}</td>
                               <td key={item}>{index}</td>
                               <td>{this.state.amount[item]}</td>
                               </tr>
                        ))}
                      
                        </table>

                </div>
                <div className="formH">
    
                <div className="firstdrop">
                    <form>
                        <h6><b>Payment Type</b></h6>
                        <h6 className="Amoount"><b>Amount</b></h6><br></br>
                        <select  name='dropdown' value={this.state.dropdown} onChange={this.onChange}className="dropDown">
                            <option value="" disabled selected>Class Of MemberShip</option>
                            <option>Membership (Normal)</option>
                            <option>Membership (Urgent)</option>
                            <option>Visa Abroad</option>
                            <option>Visa Arival</option>
                            <option>Visa MultiNational</option>
                            <option>Membership Renewal</option>
                        </select>
                        <input className="Number" value={this.state.amountChange} type="number" name="amountChange" onChange={this.onChange} placeholder="Amount" min="1" max="5"/>
                        <Button className="primery" onClick={this.submit}>Submit</Button>
                    </form>

                </div>
            
                </div>
             </div>
        )
    }
}

export default ModifyPayment