import React from 'react';
import './Display.css';

import NumberButton from '../ButtonComponents/NumberButton'
import ActionButton from '../ButtonComponents/ActionButton'

function CalculatorDisplay() {
    return (
        <div className="calc-main">
            <ActionButton />
            <div className="first">
                <NumberButton textProp="7" buttonStyle="btnW"/>
                <NumberButton textProp="8" buttonStyle="btnW"/>
                <NumberButton textProp="9" buttonStyle="btnW"/>
                <NumberButton textProp="x" buttonStyle="btnR"/>
            </div>
            <div className="second">
                <NumberButton textProp="4" buttonStyle="btnW"/>
                <NumberButton textProp="5" buttonStyle="btnW"/>
                <NumberButton textProp="6" buttonStyle="btnW"/>
                <NumberButton textProp="-" buttonStyle="btnR"/>
            </div>
            <div className="third">
                <NumberButton textProp="1" buttonStyle="btnW"/>
                <NumberButton textProp="2" buttonStyle="btnW"/>
                <NumberButton textProp="3" buttonStyle="btnW"/>
                <NumberButton textProp="+" buttonStyle="btnR"/>
            </div>
            <div className="final">
                <NumberButton textProp="0" buttonStyle="btnBig"/>
                <NumberButton textProp="=" buttonStyle="btnR"/>
            </div>
        </div>
    );
};

export default CalculatorDisplay;