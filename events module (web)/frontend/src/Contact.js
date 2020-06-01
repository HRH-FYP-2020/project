import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import ent from './ent.png'
//import pi from './pi.png'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { Link } from 'react-router-dom'
import './pic.css'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { MdLocationOn } from 'react-icons/md'
import {MdCall} from 'react-icons/md'
import {MdMail} from 'react-icons/md'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'

class Contact extends Component {
    super(){

    }
    render(){
        return(
            <div>
            <img src={ent}   alt="ayyy haannn" className="pic" />  
                
               
                        
             
                                                                        
                                        <Card>
                                            {/* <Card.Header>Contact Information </Card.Header> */}
                                            <Card.Body className="lp">
                                                <Card.Title>Contact Information</Card.Title>

                                                <Card.Text >
                                                    <Row>
                                                        <Col>
                                                                Address: 198 West 21th Street,
                                                               
                                                        </Col>
                                                       
                                                        <Col>
                                                        Phone: + 1235 2355 98
                                                        </Col>

                                                        <Col>
                                                        Email:COC123@gmail.com
                                                       
                                                        </Col>
                                                    </Row>
                                                <Row>
                                                    <Col>
                                                    Suite 721 New York NY 10016  
                                                    </Col>
                                                <Col md={4}>
                                                    Website: COC.com.pk
                                                </Col>
                                                </Row>
                                             
                                                </Card.Text>
                                                
                                            </Card.Body>
                                         
                                            </Card>

                                            <Container className="qq" >
              
              <Form>
                <header className="hp" >
       
                            Your Queries
                           
                     </header>
                     <br/>
                     
                 <Form.Control
                           
                           type="text"
                           name="name"
                           placeholder="Your-Name"
                           
                           
                           
                           />
                       
                         <Form.Control 
                           
                           type="text"
                           name="name"
                           placeholder="Your-Email"
                           
                           
                           
                           />
                       
                         <Form.Control
                           
                           as="textarea" 
                           rows="5"
                           name="name"
                           placeholder="Your Message"
                           
                           
                           
                           />
                           <br/>
                           <br/>
                       <Button variant="primary" size="md" block>
               Send Message
             </Button>
                 </Form>
              

</Container>

                               <Card >   
                                    <Card.Body  className="cds">
                                        <Row>
                                            <Col>
                                               <h3> Platforma</h3>
                                               <p >
                                               Far far away, behind the word mountains, <br/>
                                               far from the countries Vokalia and Consonantia,<br/>
                                               there live the blind texts.
                                               </p>
                                               <AiFillTwitterCircle size="4rem" className="ic"/>
                                                <FaFacebook size="4rem"className="ic"/>
                                                <GrInstagram size="4rem" className="ic"/>
                                            </Col>
                                           
                                             <Col>
                                                <h3>Useful Links</h3>
                                                <p className="pm">
                                                Speakers<br/>
                                                Shcedule<br/>
                                                Events<br/>
                                                Blog
                                                </p>
                                             </Col>
                                             <Col>
                                                <h3>Privacy</h3>
                                                <p className="pm">
                                                Career<br/>
                                                About Us<br/>
                                                Contact Us<br/>
                                                Services
                                                </p>
                                             </Col>
                                             <Col>
                                             <h3>
                                                 Have a Questions ?
                                             </h3>
                                             <p className="tex">
                                            <MdLocationOn size="2rem"/> 203 Fake St. Mountain View,<br/>
                                                                        San Francisco, California, USA<br/>
                                            <MdCall size="2rem"/> +2 392 3929 210<br/>
                                            <MdMail size="2rem"/> info@yourdomain.com
                                             </p>
                                             </Col>
                                        </Row>
                                        <Row>
                                            <Col >
                                                <Link to ="/Home" eventKey="1" >
                                        <Button variant="outline-info" >Home</Button>
                                        </Link>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                               </Card>
                           
               
           
            </div>
        )
    }
}
export default Contact