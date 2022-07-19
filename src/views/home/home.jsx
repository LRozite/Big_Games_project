
import React, {Component} from 'react';
import './home.less';
import Herocarousel from './Herocarousel'
import Sectioncards from './Sectioncards'
import Aboutowner from './Aboutowner'
import Topproducts from './Topproducts';

class HomePage extends Component {
    render() {

        return (
            <div className="home">
                <div>
                    <Herocarousel />
                    <Sectioncards />
                    <Aboutowner />
                    <Topproducts />
                </div>
            </div>
        );
    }
}
export default HomePage;