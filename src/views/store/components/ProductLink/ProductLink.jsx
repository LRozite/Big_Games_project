/**
 * Component author - Ivars Knets
 */

 import React from 'react';
 import { Link } from "react-router-dom";
 
 import './ProductLink.less';
 
 export default function ProductLink({ pass_type, pass_prodID, pass_text, pass_price }) {
    const linkPath = pass_type === 'store' ? "/store/big-games/" : ""; 
    return (    
        <div className='store_prod_container'>            
            <Link to={ linkPath + pass_prodID } className="store_prod_item"> 
                <div className="store_prod_image">No image for product.</div>
                <div className='store_prod_label'>{pass_text}, <span className='store_prod_label_price'>{pass_price}</span></div>
            </Link>
        </div>
    )
 }
 