import React from 'react';
import webIcon from '../../images/coding.png';
const Title = () => {
    return (
        <div className='title-cntlr-desk'>
            <div className='d-flex align-items-center mb-4'>
                <img src={webIcon} alt="" /> 
                <h2 className='mt-2 ms-3 text-primary'>YOU-DON'T<br />-KNOW-PROGRAMMING</h2>
                <br />
            </div>
            <h4>Choice To learning</h4>
        </div>
    );
};

export default Title;