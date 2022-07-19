/**
 * Page author - 
 */

 import React, {Component} from 'react'
 import { Container, Row } from 'react-bootstrap'; 
 import { Helmet } from 'react-helmet';
 
 import './ContactUs.less';
 
// -------------------------------------------------------------------------------
 
 class ContactUsPage extends Component {
     render(){ 

         return (
             <Container>
                <Helmet><title>Contact Us</title></Helmet>

                <Row>Contact Us</Row>
 
             </Container>
         )
     }
 }
 
 export default ContactUsPage;