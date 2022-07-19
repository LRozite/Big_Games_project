
/**
 * Page author - Ivars Knets
 */

 import React, {Component} from 'react';
 import { Container, Row, Col } from 'react-bootstrap';
 import { Helmet } from 'react-helmet';
 
 import '../Store.less';
 import StoreBreadcrumb from '../components/StoreBreadcrumb/StoreBreadcrumb';
 import CategoryLink from '../components/CategoryLink/CategoryLink';
 import ReviewsComponent from '../../shared_components/reviews/Reviews';
 
// ------------------------------------------------------------------------------- 
 
 class StoreCategoryPage extends Component {
     render(){
 
         return (
             <Container id="categories" className='store_root'>
                <Helmet><title>Store</title></Helmet>

                <Row className='store_row'>   
                    <StoreBreadcrumb />     
                </Row>           
 
                 <Row id="store_categories_container" className='store_row'>
                     <Col sm={12} lg={4} className='store_cat_col'>
                        <CategoryLink pass_path="/store/big-games" pass_text="Big Games" />
                     </Col>
                     <Col sm={12} lg={4}  className='store_cat_col'>
                        <CategoryLink pass_path="/store/stickers" pass_text="Stickers" />
                     </Col>
                     <Col sm={12} lg={4}  className='store_cat_col'>
                        <CategoryLink pass_path="/store/personalized-games" pass_text="Personalized Games" />
                     </Col>
                 </Row>

                 <Row id="store_reviews_container" className='store_row'>
                     <ReviewsComponent />
                 </Row>
             </Container>
         )
     }
 }
 
 export default StoreCategoryPage;