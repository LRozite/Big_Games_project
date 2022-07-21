/**
 * Component author - Ivars Knets
 */

import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Row } from 'react-bootstrap';

import './StoreBreadcrumb.less';

export default function StoreBreadcrumb({pass_prod_data}) {

    //[IK] getting current path and splitting it into an array
    const currentPath_toArray = window.location.pathname.split('/');

    return (
            
        <Row id="store_breadcrumb_container">                
            <div>
            {
                currentPath_toArray.map( (elem, index) => {   
                    //[IK] if the value is empty, then do nothing
                    if( elem === ""){ return null; }
                    
                    //[IK] if its the last element of the array, then mark item as "active"
                    if( index === currentPath_toArray.length -1 ){ return(
                        <Fragment key={index}>
                            <i className="bi bi-chevron-right breadcrumb_spacer"></i>
                            <span className="breadcrumb_current">{ pass_prod_data && elem === pass_prod_data._prod_id ? pass_prod_data.name : elem}</span>
                        </Fragment>
                    )} else {
                        //[IK] generate link path 
                        let make_path = "";
                        for( let i=1; i <= index; i++){
                            make_path += "/"+currentPath_toArray[i];
                        }

                        return(
                            <Fragment key={index}>
                                <i className="bi bi-chevron-right breadcrumb_spacer" ></i>
                                <Link to={make_path} className="breadcrumb_link" >{elem}</Link>
                            </Fragment>
                        )
                    }
                })
            }
            </div>
        </Row>
    )
}
