import React,{Component} from 'react'
import './ab.css'

import { Link } from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class Anout extends Component{
    render(){
        return(
            <div className="anout">
                                       
                                       
                               
                    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                                <Tab >
                                
                                <Nav variant="pills" >
        <Nav.Item>
        <Link to ="/Home" eventKey="1" >
                                       Home
                                        </Link>
         
           <Link to ="/Contact" eventKey="1" >
                                        <h5 className="su"> Contact</h5>
                                        </Link>
                                        <Link to ="/Reg" eventKey="1">  
                                        <h5 className="su"> Create-event</h5>
                                        </Link>
                                        <Link to ="/Anout" eventKey="1">  
                                        <h5 className="su"> About</h5>
                                        </Link>
        </Nav.Item>
        
      </Nav>
   
  </Tab>
</Tabs>
                                     <Tab.Container  defaultActiveKey="first">
  <Row>
    
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
        <Link to ="/Home" eventKey="1" >
                                       Home
                                        </Link>
         
           <Link to ="/Contact" eventKey="1" >
                                        <h5 className="su"> Contact</h5>
                                        </Link>
                                        <Link to ="/Reg" eventKey="1">  
                                        <h5 className="su"> Create-event</h5>
                                        </Link>
                                        <Link to ="/Anout" eventKey="1">  
                                        <h5 className="su"> About</h5>
                                        </Link>
        </Nav.Item>
        
      </Nav>
   
   
  </Row>
</Tab.Container>
                                        
                   
            </div>
        )
    }
}
export default Anout