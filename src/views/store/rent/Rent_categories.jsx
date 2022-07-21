
/**
 * Page author - Ivars Knets
 */

 import React, {Component} from 'react'
 import { Container, Row, Col } from 'react-bootstrap';
 import { Helmet } from 'react-helmet';
 
 import '../Store.less';
 import StoreBreadcrumb from '../components/StoreBreadcrumb/StoreBreadcrumb';
 import CategoryLink from '../components/CategoryLink/CategoryLink';
 import ReviewsComponent from '../../shared_components/reviews/Reviews';
 
// ------------------------------------------------------------------------------- 
 
 class RentCategoryPage extends Component {
     render(){
 
         return (
             <Container id="categories" className='store_root'>
                <Helmet><title>Store</title></Helmet>
                <StoreBreadcrumb />
                
 
                 <Row id="store_categories_container" className='store_row'>
                    
                    <Col sm={12} lg={6} className='store_cat_col'>
                        <CategoryLink pass_path="/rent/games" pass_text="Rent Games" />
                    </Col>
                    <Col sm={12} lg={6} className='store_cat_col'>
                        <CategoryLink pass_path="/rent/party-supplies" pass_text="Party Supplies" />
                    </Col>
                    
                 </Row>
                 <Row id="store_reviews_container" className='store_row'>
                     <ReviewsComponent />
                 </Row>
             </Container>
         )
     }
 }
 
 export default RentCategoryPage;