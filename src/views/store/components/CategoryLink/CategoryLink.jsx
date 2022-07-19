/**
 * Component author - Ivars Knets
 */

 import React from 'react';
 import { Link } from "react-router-dom";
 
 import './CategoryLink.less';
 
 export default function CategoryLink({ pass_path, pass_text }) {
     return (    
        <div className='store_cat_container'>
            <Link to={pass_path} >
                <div className='store_cat_image'></div>
                <span className='store_cat_title'>{pass_text}</span>
            </Link>
        </div>
     )
 }
 