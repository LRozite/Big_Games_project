/**
 * Page author - Ivars Knets
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap'; 
import { Formik, Field } from 'formik';
import { Helmet } from 'react-helmet';

import '../Store.less';
import { PageError, PageLoading } from '../../Errors';
import StoreBreadcrumb from '../components/StoreBreadcrumb/StoreBreadcrumb';
import ProductLink from '../components/ProductLink/ProductLink';

// -------------------------------------------------------------------------------

class StorePage extends Component {
    render(){ 
        if ( this.props.prop_products.loading ) { return <PageLoading /> }
        else if ( this.props.prop_products.error ) { return <PageError pass_error={ this.props.prop_products.error} /> }
        else {
            const data_products = this.props.prop_products.data;


            return (
                <Container id="store_shelf" className='store_root'>
                    <Helmet><title>Store</title></Helmet>

                    <Row className='store_row'>   
                        <StoreBreadcrumb />     
                    </Row>        

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
                            {
                                data_products.map( elem => {
                                    return(                                        
                                        <ProductLink 
                                            key={elem._prod_id}
                                            pass_type="store"
                                            pass_cat={window.location.pathname.split("/")[2]}
                                            pass_prodID={elem._prod_id}
                                            pass_text={elem.name} 
                                            pass_price={elem.price} 
                                        />
                                    )
                                })
                            }                            
                        </Col>
                    </Row>

                    <Row className='store_row'></Row>

                </Container>
            )
        }
    }
}

const mapStateToProps = (state) => ({  
    prop_products: state.rootReducer_Products
})
export default connect( mapStateToProps )(StorePage);