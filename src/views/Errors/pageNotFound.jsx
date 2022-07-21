
/** 
 * Component author - Ivars Knets
*/ 

import React from 'react'

import './error_styles.less'

// -------------------------------------------------------------------------------

function PageNotFound() {
    return (
        <div id="notFound" className="pageErrorComponent">
            <p className="innerText">
                404 [page not found] : <code>{window.location.pathname}</code>
            </p>
        </div>
    );
}

export default PageNotFound