import React from 'react';
import './Button.css';

import NumberButton from './NumberButton'
function ActionButton() {
    return (
        <div>
            <div className="action-main">
                <div className="action-zero">
                    <p>0</p>
                </div>
            </div> 
            <div className="final">
                <NumberButton textProp="clear" buttonStyle="btnBig"/>
                <NumberButton textProp="÷" buttonStyle="btnR"/>
            </div>
        </div>
    )
}

export default ActionButton;
