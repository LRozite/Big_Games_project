/**
 * Component author - Verners Grzibovskis
 * 
*/

import React, {Component} from 'react';
import { Link } from "react-router-dom";
import LOGO from '../../assets/logos/BigGames_logo_medium.png'
import './Header.less';
import { Container, Row, Col, Button } from 'react-bootstrap';
import FLAG from '../../assets/flags/flag-en.png'
import LV from '../../assets/flags/latvia.png'
import RU from '../../assets/flags/russia.png'
import FR from '../../assets/flags/france.png'
import CART from '../../assets/cart.png'



class Header extends Component {
    render() {






        return ( 
            <div id="header_root" className='header_container'>
                <Container id="header_boot_cont" className='header_container'>              
                    <Row>

                        <Col  className='header_logo'>                            
                            <img src={LOGO} alt="Logo" />
                        </Col>
                        <Col xs={9} className='header_info_navbar'>
                            <Row className='header_info'>
                                <Col>+371 29965493</Col> <Col>8-00 - 16:00</Col> <Col className='col4' xs={4}>Piekunu iela 10, Dzidrinas,Stopinu pagasts, Ropazu novads</Col> <Col>info@biggames.lv</Col>
                            </Row>
                            <Row className='header_navbar'>
                                <Col>
                                    <Link to="/home">Home</Link> <Link to="/store">Store</Link> <Link to="/rent">Rent</Link> <Link to="/news">News</Link> <Link to="/about-us">About Us</Link> <Link to="/contact-us">Contacts</Link>
                               </Col>
                            </Row>
                        </Col>
                        <Col className='header_action'
                        onMouseLeave={ (e) => {  
                            document.getElementById("lang_list").style.display = "none";}}>

                            <div className="main">
                                <div className="dropdown_list">
                                    <button className='lang_nav' id='lang-nav' onMouseEnter={ (e) => {  
                                document.getElementById("lang_list").style.display = "block";  
                            }}>
                                        
                                        <img id='lang-nav' src={FLAG} /></button> <button className='cart'><img src={CART} /></button>

                                    <div  id="lang_list" className="lang_list">
                                        <li><a className='latvia' href="/home"><img src={LV} />LV</a></li>
                                        <li><a className='russia' href="/store"><img src={RU} />RU</a></li>
                                        <li><a className='france' href="#"><img src={FR} />FR</a></li>
                                    </div>
                                </div>
                            </div>

                            
                        </Col>

                    </Row>

                    <Col>

                    </Col>
                </Container> 

            </div>
        );
    }
}
export default Header;