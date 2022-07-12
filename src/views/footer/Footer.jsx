
import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import './Footer.less';



class Footer extends Component {
    render() {

        return ( 
            <div id="footer_root" className='footer_container'>
                <Container id="footer_boot_cont" className='footer_container'>
                    
                    <Row>
                        <Col className='footer_col'>                            
                            <div>
                                <span>News letter sing-up.</span><br/>
                                The input goes here.
                            </div>
                            <div>
                                Check out our socials
                                <Link to="#" className='footer_link socials_link'>face</Link>
                                <Link to="#" className='footer_link socials_link'>gram</Link>
                                <Link to="#" className='footer_link socials_link'>tweet</Link>
                            </div>
                        </Col>
                        <Col className='footer_col'>
                            <h5 className='footer_colTitle'>About us</h5>
                            <ul className='footer_list'>
                                <li><Link to="#" className='footer_link'>About BigGames</Link></li>
                                <li><Link to="#" className='footer_link'>Contact Us</Link></li>
                                <li><Link to="#" className='footer_link'>Working hours</Link></li>
                            </ul>
                        </Col>
                        <Col className='footer_col'>
                            <h5 className='footer_colTitle'>Good to know</h5>
                            <ul className='footer_list'>
                                <li><Link to="#" className='footer_link'>Delivery</Link></li>
                                <li><Link to="#" className='footer_link'>Warranty</Link></li>
                                <li><Link to="#" className='footer_link'>How to order?</Link></li>
                                <li><Link to="#" className='footer_link'>Can I return?</Link></li>
                                <li><Link to="#" className='footer_link'>FAQ</Link></li>
                            </ul>
                        </Col>
                        <Col className='footer_col'>
                            <h5 className='footer_colTitle'>Props (Rekvizīti)</h5>
                            <p>our companies address, registration number and other stuff</p>
                        </Col>
                    </Row>
                    <Row id="footer_extras" className="">
                        <Col>© BigGames 2022, Fantastic4 All rights reserved.</Col>
                        <Col>List of supported payment methods</Col>
                        <Col>
                            <Link to="#" className='footer_link'>Cookie policies</Link> | <Link to="#" className='footer_link'>Privacy policies</Link> | <Link to="#" className='footer_link'>General regulations</Link>
                        </Col>
                    </Row>
                </Container> 
            </div>
        );
    }
}
export default Footer;