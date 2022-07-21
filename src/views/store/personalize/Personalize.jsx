import React, {Component} from 'react'
import Reviews from '../../shared_components/reviews/Reviews';
import Form from './PersonalizeForm'



class PersonalizePage extends Component {
    render() {

        return (
            <div className="personalize">
                <div>
                    <Form />
                    <Reviews />
                </div>
            </div>
        );
    }
}
export default PersonalizePage