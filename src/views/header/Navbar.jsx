
import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Navbar.less';

class Navbar extends Component {
    render() {

        return ( 
            <nav id="navbar_main" className='navbar'>
                
                <Link to="/home">Home</Link> | <Link to="/store">Store</Link>
            </nav> 
        );
    }
}
export default Navbar;