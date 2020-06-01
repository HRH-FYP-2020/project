import React from 'react';
import './listView.css'
import Table from './table'
class ListView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: true,
                    };
        this.toggle = this.toggle.bind(this);
    }
      toggle(currentState){

        this.setState({
            value:15,
            show: !currentState.show
        })
      }
    
    render(){
        return (
    <div>
    {this.state.show && <Table/>}
	</div>
        )
    }
}

export default ListView