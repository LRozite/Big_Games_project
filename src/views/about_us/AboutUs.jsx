/**
 * Page author - 
 */

 import React, {Component} from 'react'
 import { Container, Row } from 'react-bootstrap'; 
 import { Helmet } from 'react-helmet';
 
 import './AboutUs.less';
 
// -------------------------------------------------------------------------------
 
 class AboutUsPage extends Component {
     render(){ 

         return (
             <Container>
                <Helmet><title>About Us</title></Helmet>

                <Row>About Us</Row>
 
             </Container>
         )
     }
 }
 
 export default AboutUsPage;