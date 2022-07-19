/**
 * Page author - Ivars Knets
 */

 import React, {Component} from 'react';
 import { connect } from 'react-redux';
 import { Container, Row } from 'react-bootstrap'; 
 import { Helmet } from 'react-helmet';
 
 import '../Store.less';
 import { PageError, PageLoading } from '../../Errors';
 import StoreBreadcrumb from '../components/StoreBreadcrumb/StoreBreadcrumb';
 import ReviewsComponent from '../../shared_components/reviews/Reviews';
 
 // -------------------------------------------------------------------------------
 
 class ProductPage extends Component {
     render(){ 
        if ( this.props.prop_products.loading ) { return <PageLoading /> }
        else if ( this.props.prop_products.error ) { return <PageError pass_error={ this.props.prop_products.error} /> }
        else {
            //[IK] get the product ID from URL
            const url_prodID = window.location.pathname.split("/")[window.location.pathname.split("/").length -1];

            //[IK] get the product for the provided "url_prodID"
            const current_product = this.props.prop_products.data.find((elem) => elem._prod_id === url_prodID);
    
            return (
                <Container id="products" className='store_root'>
                    <Helmet><title>Product</title></Helmet>
    
                    <Row className='store_row'>   
                        <StoreBreadcrumb pass_prod_data={current_product} />     
                    </Row> 
                    
                    <Row id="product" className='store_row'> 
                        Product Name - "{current_product.name}", and it costs ${current_product.price} .
                    </Row>
    
                    <Row className='store_row'>
                        <ReviewsComponent />
                    </Row>
    
                </Container>
            )
        }
     }
 }
 
const mapStateToProps = (state) => ({  
    prop_products: state.rootReducer_Products
});
export default connect( mapStateToProps )(ProductPage);