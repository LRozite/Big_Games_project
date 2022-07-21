/**
 * Component author - Ivars Knets
 * 
 * Considered things that aren't there :
 ****** there is no "hold scroll_btn to continually scroll" function, because JS doesn't have a click-and-hold method by default ; here is a how to - https://www.youtube.com/watch?v=A95mIE2HdcY
*/

import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Card  } from 'react-bootstrap';

import './Reviews.less';
import { PageError, PageLoading } from '../../Errors';



export default function ReviewsComponent({pass_reviews}) {
    
    const all_reviews = useSelector((state) => state.rootReducer_Reviews);  

    if ( all_reviews.loading ) { return <PageLoading /> }
    else if ( all_reviews.error ) { return <PageError pass_error={ all_reviews.error} /> }
    else {
        const review_data = pass_reviews ? pass_reviews : all_reviews.data;
        
        return (
            <Row id="reviews_root">
                <div id="review_scroller" className='reviews_inner_container'>
                    
                    <Card 
                        id="scroll_left" 
                        className='reviews_card_scroll_btn '
                        onClick={ (e) => {  
                            document.getElementById("review_scroller").scrollBy(-320, 0);
                        }}
                    >
                        <i className="bi bi-chevron-compact-left"></i>
                    </Card>

                    <Card 
                        id="scroll_right" 
                        className='reviews_card_scroll_btn'
                        onMouseDown={ (e) => {  
                            document.getElementById("review_scroller").scrollBy(320, 0);  
                        }}
                    >
                        <i className="bi bi-chevron-compact-right"></i>
                    </Card>

                    {
                        review_data.map( elem => { 
                            
                            //[IK] converting a [1-10] int into a 5 star rating display 
                            let starRating = [];
                            for (let i = 0; i < Math.floor(elem.score / 2); i++) {
                                starRating.push( <i key={elem._id+"_star_"+i} className="bi bi-star-fill review_star"></i> );                                        
                            }
                            if( elem.score % 2 === 1 ) starRating.push( <i key={elem._id+"_halfstar"} className="bi bi-star-half review_star" /> );
                            if( starRating.length !== 5) {
                                for (let i = starRating.length; i < 5; i++) {
                                    starRating.push( <i key={elem._id+"_nostar_"+i} className="bi bi-star review_star" /> );                                        
                                }
                            }


                            
                            return(       
                                <Card key={elem._id} className='reviews_card'>
                                    <Card.Body>
                                        <Card.Title className='review_scores' title={elem.score}>{starRating}</Card.Title>
                                        <Card.Text>"{elem.description}"</Card.Text>
                                        <Card.Subtitle className="mb-2 text-muted">By: {elem.username}</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </div>
            </Row>
        )
    }
};
