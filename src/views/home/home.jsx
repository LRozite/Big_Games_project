
import React, {Component} from 'react';
import './home.less';

class HomePage extends Component {
    render() {
        
        const randomNum = Math.random();

        return (
            <div className="homeDiv">
                Home.js offers this random number is {randomNum}
            </div>
        );
    }
}
export default HomePage;