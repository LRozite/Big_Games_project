
/**
 * Page author - Ivars Knets
 */

 import React, {Component} from 'react'
 import { Link } from "react-router-dom";
 import { Container, Row, Col } from 'react-bootstrap';
 
 import './Store.less';
 import StoreBreadcrumb from './storeBreadcrumb'
 import ReviewsComponent from '../shared_components/reviews/Reviews';
 
 
 
 class StoreCategoryPage extends Component {
     render(){
 
         return (
             <Container id="categories" className='store_root'>
 
                <StoreBreadcrumb pass_pathname={window.location.pathname} />
                
 
                 <Row id="store_categories_container" className='store_row'>
                     <Col className='store_cat_col'>
                         <Link to="/store/big-games">
                             <div className='store_cat_image'></div>
                             <span className='store_cat_title'>Big Games</span>
                         </Link>
                     </Col>
                     <Col className='store_cat_col'>
                         <Link to="/store/stickers">
                             <div className='store_cat_image'></div>
                             <span className='store_cat_title'>Stickers</span>
                         </Link>
                     </Col>
                     <Col className='store_cat_col'>
                         <Link to="/store/personalized-games">
                             <div className='store_cat_image'></div>
                             <span className='store_cat_title'>Personalized Games</span>
                         </Link>
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