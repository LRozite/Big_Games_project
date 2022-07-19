
/** 
 * Component author - Ivars Knets
*/ 

import React from 'react'
import PropTypes from 'prop-types'

import './error_styles.less'

// -------------------------------------------------------------------------------

function PageError({ pass_error }) {
    return (
        <div id="error" className="pageErrorComponent">
            <p className="innerText">
                ERROR : <br/>
                <code>{pass_error}</code>
            </p>
        </div>
    );
}

PageError.propTypes = {
    pass_error: PropTypes.any
};
export default PageError