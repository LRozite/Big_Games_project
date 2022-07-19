/**
 * Component author - Ivars Knets
 */

import React from 'react'
import { Row, Breadcrumb } from 'react-bootstrap';

import './StoreBreadcrumb.less';

export default function StoreBreadcrumb({ pass_prod_data }) {
    //[IK] setting a default value for a passed prop.
    pass_prod_data = pass_prod_data || {name:"NoNameProvided"};

    //[IK] getting current path and splitting it into an array
    const currentPath_toArray = window.location.pathname.split('/');

    return (
            
        <Row id="store_breadcrumb_container">                
            <Breadcrumb>
            {
                currentPath_toArray.map( (elem, index) => {   
                    //[IK] if the value is empty, then do nothing
                    if( elem === ""){ return null; }
                    
                    //[IK] if its the last element of the array, then mark item as "active"
                    if( index === currentPath_toArray.length -1 ){ 

                        if( currentPath_toArray[index-1] === "p" ){
                            
                            return(
                                <Breadcrumb.Item key={index} active>{pass_prod_data.name}</Breadcrumb.Item>
                            )
                        } else {
                            return(
                                <Breadcrumb.Item key={index} active>{elem}</Breadcrumb.Item>
                            )                                
                        }

                    } else if( elem === "p" ){
                        return null;
                    } else {
                        //[IK] generate link path 
                        let this_path = "/"
                        for( let i=1; i<currentPath_toArray.length-1; i++){
                            if(currentPath_toArray[i] === "p"){break;}
                            this_path += currentPath_toArray[i];
                        }

                        return(
                            <Breadcrumb.Item key={index} href={this_path}>{elem}</Breadcrumb.Item>
                        )
                    }
                })
            }
            </Breadcrumb>
        </Row>
    )
}
