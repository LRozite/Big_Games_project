/**
 * Page author - Ivars Knets
 */

import React, {Component} from 'react'
import { Link } from "react-router-dom";
import { Container, Row } from 'react-bootstrap'; 
import { Helmet } from 'react-helmet';

import '../Store.less';
import StoreBreadcrumb from '../components/StoreBreadcrumb/StoreBreadcrumb';

// -------------------------------------------------------------------------------

class RentPage extends Component {
    render(){ 
        
        const ProductLink = () => {
            return(                
                <Link to={window.location.pathname} className="store_prod_item"> 
                    <div className="store_prod_image">No image for product.</div>
                    <div className='store_prod_label'>NameGame, <span className='store_prod_label_price'>$420.69</span></div>
                </Link>
            )
        } 

        console.log(window.location);

        return (
            <Container id="rent_shelf" className='store_root'>
                <Helmet><title>Store</title></Helmet>

                <StoreBreadcrumb pass_pathname={window.location.pathname} />

                <Row id="products_container" className='store_row'>

                        <ProductLink />
                        <ProductLink />
                        <ProductLink />
                        <ProductLink />
                        <ProductLink />
                        <ProductLink />
                        <ProductLink />
                        <ProductLink />
                        <ProductLink />
                        
                </Row>

                <Row className='store_row'></Row>

            </Container>
        )
    }
}

export default RentPage;