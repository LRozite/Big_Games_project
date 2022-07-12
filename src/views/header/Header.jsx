
import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Header.less';

class Header extends Component {
    render() {

        return ( 
            <div id="header_root" className='header_container'>

                <nav id="navbar_main" className='navbar'>                    
                    <Link to="/home">Home</Link> | <Link to="/store">Store</Link>
                </nav> 

            </div>
        );
    }
}
export default Header;