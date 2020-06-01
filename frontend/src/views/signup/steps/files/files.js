import React from 'react';
import Circle from '../../../utils/cicle'
import './files.css'
class FifthStep extends React.Component{
    constructor(props){
        super(props);
        this.state = {form:{
            BANK_CERTIFICATE_PIC:null,
            LEASE_PIC:null,
            self_PIC:null,
            SALES_TAX_REG_COPY_PIC:null,
            SALES_TAX_REG_PIC:null,
            LNTR_PIC:null,
            NTN_PIC:null,
            CNIC_PIC:null
            
                        }             
                    };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){

        const form = this.state.form;
        form[event.target.name] = event.target.value;
        this.setState(form);

        console.log(form)
        }
    state = {
        show: true,
      }
    
      toggle = () => this.setState((currentState) => ({show: !currentState.show}));
    render(){
        return (
            <div className="FirstFile" >
                <form>      

                    <div className="files">   
                        <h6 className="h6class">CNIC/Passport</h6>                
                    <input className="filess" name='CNIC_PIC' value={this.state.CNIC_PIC} onChange={this.handleChange}  type="file" accept="application/pdf" />
                    {/* <p>Only Pdf Files Allowed</p> */}
                    </div>
                    <div className="files">
                    <h6 className="h6class">National Tax Num(NTN)</h6>                   
                    <input className="filess" type="file" name='NTN_PIC' value={this.state.NTN_PIC} onChange={this.handleChange}  accept="application/pdf" />
                    </div>
                    <div className="files">
                    <h6 className="h6class">LATEST INCOME TAX RETURN</h6>                   
                    <input className="filess" type="file" name='LNTR_PIC' value={this.state.LNTR_PIC} onChange={this.handleChange}  accept="application/pdf" />
                    </div>
                    <div className="files">
                    <h6 className="h6class">SALES TAX REGISTRATION IF APPLICABLE</h6>                   
                    <input className="filess" type="file" name='SALES_TAX_REG_PIC' value={this.state.SALES_TAX_REG_PIC} onChange={this.handleChange}  accept="application/pdf" />
                    </div>
                    <div className="files">
                    <h6 className="h6class">A COPY OF LATEST SALES TAX RETURN</h6>                   
                    <input type="file"className="filess" name='SALES_TAX_REG_COPY_PIC' value={this.state.SALES_TAX_REG_COPY_PIC} onChange={this.handleChange} accept="application/pdf" />
                    </div>
                    <div className="files">
                    <h6 className="h6class">PHOTOGRAPHS</h6>                   
                    <input type="file" name='self_PIC' value={this.state.self_PIC} onChange={this.handleChange} className="filess" accept="application/pdf" />
                    </div>
                    <div className="files">
                    <h6 className="h6class">LEASE DEED/BUILDING ALLOTMENT LETTER/OFFICE</h6>                   
                    <input type="file" name='LEASE_PIC' value={this.state.LEASE_PIC} onChange={this.handleChange} className="filess" accept="application/pdf" />
                    </div>
                    <div className="files">
                    <h6 className="h6class">ORIGNAL BANK CERTIFICATE</h6>                   
                    <input type="file" name='BANK_CERTIFICATE_PIC' value={this.state.BANK_CERTIFICATE_PIC} onChange={this.handleChange} className="filess" accept="application/pdf" />
                    </div>
                    {/* <div className="files">
                    <h6 className="h6class">SIGNATURE</h6>                   
                    <input type="file" name='SIG_PIC' value={this.state.SIG_PIC} onChange={this.handleChange} className="filess" accept="application/pdf" />
                    </div> */}
                </form>
        </div>
        )
    }
}

export default FifthStep