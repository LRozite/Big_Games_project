/**
 * Page author - Ivars Knets
 */

 import React from 'react';
 import { useSelector } from 'react-redux';
 import { Link, useParams } from "react-router-dom";
 import { Container, Row, Col, Tabs, Tab, Button } from 'react-bootstrap'; 
 import { Formik, Field } from 'formik';
 import { Helmet } from 'react-helmet';
 
 import '../Store.less';
 import './Product.less';
 import { PageError, PageLoading } from '../../Errors';
 import StoreBreadcrumb from '../components/StoreBreadcrumb/StoreBreadcrumb';
 import ReviewsComponent from '../../shared_components/reviews/Reviews';
 import {NumberInput} from './FormInputs'

 
 // ------------------------------------------------------------------------------- 
 
export default function ProductPage() { 
    //[IK] use HOOKS to get data
    const all_products = useSelector((state) => state.rootReducer_Products);  
    const all_reviews = useSelector((state) => state.rootReducer_Reviews);  
    const { prod_num } = useParams();

    if ( all_products.loading || all_reviews.loading ) { return <PageLoading /> }
    else if ( all_products.error || all_reviews.error ) { return <PageError pass_error={ all_products.error} /> }
    else {
        //[IK] get the product for the provided "prod_num"
            const current_product = all_products.data.find((elem) => elem._prod_id === prod_num);
        //[IK] get the reviews for current product
            let product_reviews = [];  
            let product_scores = [];
            let product_scoreTotal = 0;
            all_reviews.data.forEach(elem => {
                if( elem._prod_id === current_product._prod_id ){
                    product_reviews.push(elem);
                    product_scores.push(elem.score);
                    product_scoreTotal += elem.score;
                } 
            });
        //[!]end of "get reviews"

        //[IK] converting review scores into a average score and making a star display for it
            const product_averageScore = Math.round(product_scoreTotal / product_scores.length);  
            let starRating = [];
            for (let i = 0; i < Math.floor(product_averageScore / 2); i++) {
                starRating.push( <i key={"star_"+i} className="bi bi-star-fill review_star"></i> );                                        
            }
            if( product_averageScore % 2 === 1 ) starRating.push( <i key={"halfstar"} className="bi bi-star-half review_star" /> );
            if( starRating.length !== 5) {
                for (let i = starRating.length; i < 5; i++) {
                    starRating.push( <i key={"nostar_"+i} className="bi bi-star review_star" /> );                                        
                }
            }
        //[!]end of "star display"

        return (
            <Container id="product" className='store_root'>
                <Helmet><title>Product</title></Helmet>

                <Row className='store_row'>   
                    <StoreBreadcrumb pass_prod_data={current_product} />     
                </Row> 
                
                <Row id="product_container" className='store_row'> 
                    <Col lg={5}>
                        <div className='product_image_container'>
                            <Row>
                                <div className='img_main_container'>
                                    <div className='product_image img_main'>Main Image</div>
                                </div>
                            </Row>
                            <Row className='img_preview_container_container'>
                                <Col className='img_preview_container'>
                                    <div className='product_image img_preview'>Preview</div>
                                </Col>
                                <Col className='img_preview_container'>
                                    <div className='product_image img_preview'>Preview</div>
                                </Col>
                                <Col className='img_preview_container'>
                                    <div className='product_image img_preview'>Preview</div>
                                </Col>
                            </Row>
                        </div>                        
                    </Col>


                    <Col lg={7}>  
                        <div className='product_info_container'>                      
                        <Formik
                                initialValues={{ quantity: 1, size: "2x2" }}

                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (

                                <form 
                                    className='prodInfo_form'
                                    onSubmit={handleSubmit}
                                >
                                    <Row className='prodInfo_row'>
                                        <Col className='prodInfo_main'>
                                            <h2 className='prodInfo_title'>{current_product.name}</h2>
                                            <h5 className='prodInfo_startingPrice'>starting from ${current_product.price}</h5>
                                            <br/>
                                            <div className='prodInfo_rating'>
                                                <span title={product_averageScore}>{starRating}</span>
                                                <span className='prodInfo_ratingCount'>({product_reviews.length})</span>
                                                <Link to="#" className='prodInfo_ratingLink'> Reviews &gt; </Link>
                                            </div>
                                        </Col>
                                        <Col className='prodInfo_status'>
                                            <span className='prodStat_container'>
                                                <i className="bi bi-check prodStat_icon" />
                                                <span className='prodStat_text'>In stock</span>
                                            </span>
                                            <span className='prodStat_container'>
                                                <i className="bi bi-x prodStat_icon" />
                                                <span className='prodStat_text'>Can Personalize</span>
                                            </span>
                                            <span className='prodStat_container'>
                                                <i className="bi bi-check prodStat_icon" />
                                                <span className='prodStat_text'>Can Rent</span>
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row className='prodInfo_row spacer'></Row>
                                    <Row className='prodInfo_row'>
                                        <Row className='prodForm_container'>
                                            <Col>
                                                <Field 
                                                    name="quantity" 
                                                    component={NumberInput} 
                                                />
                                            </Col>
                                            <Col>
                                                <Field as="select" name="size" className='prodForm_input dropdown'>
                                                    <option value="2x2">2m x 2m</option>
                                                    <option value="3x3">3m x 3m</option>
                                                    <option value="4x4">4m x 4m</option>
                                                </Field>
                                            </Col>
                                            <Col><div className='prodForm_startingPrice'>${(current_product.price * values.quantity).toFixed(2)}</div></Col>
                                            
                                        </Row>
                                    </Row>
                                    <Row className='prodInfo_row spacer'></Row>
                                    <Row className='prodInfo_row'>
                                        <div className='prodInfo_CartContent'>
                                            <Button
                                                className='prodCart_Btn'
                                                variant="secondary"
                                                type="submit"
                                                disabled={isSubmitting} 
                                            >{isSubmitting ? 'Loading…' : 'Add to cart'}</Button>
                                            <span className='prodCart_SubText'>* Price already includes VAT</span>
                                        </div>
                                    </Row>
                            
                                </form>                    
                            )}
                            </Formik>
                        </div>
                    </Col>
                    
                </Row>
                <Row id="prodRow_tabs" className='store_row'>
                    <div>
                        <Tabs
                            defaultActiveKey="about"
                            id="uncontrolled-tab-example"
                            className="mb-3 prodTabs_main"
                            justify fill
                        >
                            <Tab eventKey="about" title="About" tabClassName="prodTab_link">
                                <div className='prodTab_content'>A brief description of the product in question.</div>
                            </Tab>
                            <Tab eventKey="contents" title="Contents" tabClassName="prodTab_link">
                                <div className='prodTab_content'>What will be inside the box, I guess.</div>
                            </Tab>
                            <Tab eventKey="technical" title="Technical Info" tabClassName="prodTab_link">
                                <div className='prodTab_content'>Not really sure.</div>
                            </Tab>
                            <Tab eventKey="delivery" title="Delivery Info" tabClassName="prodTab_link">
                                <div className='prodTab_content'>How the product will be delivered.</div>
                            </Tab>
                            <Tab eventKey="rules" title="Rules" tabClassName="prodTab_link">
                                <div className='prodTab_content'>Rules of the game.</div>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className='prod_tags'>
                        #this #is #a #hidden #message #dash #SprannAgainstTheWorld
                    </div>

                </Row>

                <Row id="prodRow_reviews" className='store_row'>
                    <ReviewsComponent pass_reviews={ product_reviews } />
                </Row>

            </Container>
        )
    }
};