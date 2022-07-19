
/** 
 * Component author - Ivars Knets
*/ 

import React from 'react'

import './error_styles.less'

// -------------------------------------------------------------------------------

function PageLoading() {
    return (
        <div id="loading" className="pageErrorComponent">
            <p className="innerText">
                They see me LOADING. 
                They waiting.
            </p>
        </div>
    );
}

export default PageLoading