/**
 * Page author - Ivars Knets
 */

import React, {Component} from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap'; 
import { Formik, Field } from 'formik';

import './Store.less';
import StoreBreadcrumb from './storeBreadcrumb'
import ReviewsComponent from '../shared_components/reviews/Reviews';



class StorePage extends Component {
    render(){ 
        //const url_prod_id = this.props.match.params.cat_name;  

        const ProductLink = () => {
            /*
            const SVGlogo = '../../assets/logo.svg'            
            <img src={SVGlogo} alt="None found for product" className="store_prod_image" />
            */
            return(                
                <Link to="/store/big-games" className="store_prod_item"> 
                    <div className="store_prod_image">No image for product.</div>
                    <div className='store_prod_label'>NameGame, <span className='store_prod_label_price'>$420.69</span></div>
                </Link>
            )
        } 

        console.log(window.location);

        return (
            <Container id="products" className='store_root'>

                <StoreBreadcrumb pass_pathname={window.location.pathname} />

                <Row id="products_container" className='store_row'>
                    <Col lg={3} id="filter_container">

                        <Formik
                            initialValues={{ suitable_for: [], player_count: [] }}

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

                            <form onSubmit={handleSubmit}>
                                
                                <Accordion 
                                    defaultActiveKey={['0','1']} 
                                    alwaysOpen
                                    className='storeProd_filter_accordion'
                                >

                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Suitable For :</Accordion.Header>
                                        <Accordion.Body>
                                            <label className='storeFilter_checkboxLabel'>
                                                <Field type="checkbox" name="suitable_for" value="everything"/>
                                                <span>Everything</span>
                                            </label>  <br/>
                                            <label className='storeFilter_checkboxLabel'>
                                                <Field type="checkbox" name="suitable_for" value="new" /> 
                                                <span>New</span>
                                            </label>  <br/>
                                            <label className='storeFilter_checkboxLabel'>
                                                <Field type="checkbox" name="suitable_for" value="kids" /> 
                                                <span>For Kids</span> 
                                            </label>  <br/>
                                            <label className='storeFilter_checkboxLabel'>
                                                <Field type="checkbox" name="suitable_for" value="weddings" /> 
                                                <span>For Weddings</span>
                                            </label>  <br/>
                                            <label className='storeFilter_checkboxLabel'>
                                                <Field type="checkbox" name="suitable_for" value="all-ages" /> 
                                                <span>For All Ages</span>
                                            </label>  <br/>
                                            <label className='storeFilter_checkboxLabel'>
                                                <Field type="checkbox" name="suitable_for" value="adults" /> 
                                                <span>For Adults</span>
                                            </label>
                                            {errors.suitable_for && touched.suitable_for && errors.suitable_for}
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Amount Of Players :</Accordion.Header>
                                        <Accordion.Body>
                                            <label className='storeFilter_checkboxLabel'>
                                                <Field type="checkbox" name="player_count" value="2+" /> 
                                                <span>From 2</span>
                                            </label>  <br/>
                                            <label className='storeFilter_checkboxLabel'>
                                                <Field type="checkbox" name="player_count" value="3+" /> 
                                                <span>From 3</span> 
                                            </label>  <br/>
                                            <label className='storeFilter_checkboxLabel'> 
                                                <Field type="checkbox" name="player_count" value="4+" /> 
                                                <span>From 4</span>
                                            </label>  <br/>
                                            <label className='storeFilter_checkboxLabel'>
                                                <Field type="checkbox" name="player_count" value="5+" /> 
                                                <span>From 5</span>
                                            </label>
                                            {errors.player_count && touched.player_count && errors.player_count}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Button 
                                    variant="secondary" 
                                    className='storeProd_filter_btn'
                                    type="submit"
                                    disabled={isSubmitting} 
                                >{isSubmitting ? 'Loading…' : 'Refresh'}</Button>

                            </form>

                        )}
                        </Formik>

                    </Col>
                    <Col lg={9}>

                        <ProductLink />
                        <ProductLink />
                        <ProductLink />
                        <ProductLink />
                        <ProductLink />
                        <ProductLink />
                        <ProductLink />
                        <ProductLink />
                        <ProductLink />
                        
                    </Col>
                </Row>

                
                <Row id="store_reviews_container" className='store_row'>
                    <ReviewsComponent />
                </Row>
            </Container>
        )
    }
}

export default StorePage;