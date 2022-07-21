/**
 * Component author - Līga Rozīte 
 * 
 * */
import React, {Component} from 'react';
import './home.less';
import Herocarousel from './Herocarousel'
import Sectioncards from './Sectioncards'
import Aboutowner from './Aboutowner'
import Topproducts from './Topproducts';
import Reviews from '../shared_components/reviews/Reviews';

class HomePage extends Component {
    render() {

        return (
            <div className="home">
                <div>
                    <Herocarousel />
                    <Sectioncards />
                    <Aboutowner />
                    <Topproducts />
                    <Reviews />
                </div>
            </div>
        );
    }
}
export default HomePage;