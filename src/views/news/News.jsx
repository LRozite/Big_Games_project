/**
 * Page author - 
 */

 import React, {Component} from 'react'
 import { Container, Row } from 'react-bootstrap'; 
 import { Helmet } from 'react-helmet';
 
 import './News.less';
 
// -------------------------------------------------------------------------------
 
 class ContactUsPage extends Component {
     render(){ 

         return (
             <Container>
                <Helmet><title>News</title></Helmet>

                <Row>News</Row>
 
             </Container>
         )
     }
 }
 
 export default ContactUsPage;