import React from 'react'
import { Row, Breadcrumb } from 'react-bootstrap';

export default function StoreBreadcrumb({pass_pathname}) {
    const currentPath_toArray = pass_pathname.split('/');
    return (
            
        <Row id="store_breadcrumb_container" className='store_row'>                
            <Breadcrumb>
            {
                currentPath_toArray.map( (elem, index) => {   
                    if( elem === ""){ return null; }
                    if( index === currentPath_toArray.length -1 ){ return(
                        <Breadcrumb.Item key={index} active>{elem}</Breadcrumb.Item>
                    )} else {
                        let this_path = "/"
                        for( let i=1; i<currentPath_toArray.length-1; i++){
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
