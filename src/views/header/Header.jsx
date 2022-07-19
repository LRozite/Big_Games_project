
import React, {Component} from 'react';
import { Link } from "react-router-dom";
import LOGO from '../../assets/logos/BigGames_logo_medium.png'
import './Header.less';
import { Container, Row, Col } from 'react-bootstrap'; //, Button
import FLAG from '../../assets/flag-en.png'
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
                        <Col className='header_action'>

                            <button className='lang_nav' ><img src={FLAG} alt="usa" /></button> <button className='cart'><img src={CART} alt="cart" /></button>
                            
                        </Col>

                    </Row>
                </Container> 

            </div>
        );
    }
}
export default Header;