import React from 'react';
import './GridItem.css'
const GridItem = (props) => {
    const {img,name,desc,timeRequired} = props.language;
    return (
        
        <div className="card">
            <img src={img} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{desc}</p>
                <p>Time required: {timeRequired}</p>
                <a className="btn btn-primary w-100" href="#">Add to list</a>
            </div>
        </div>
    );
};

export default GridItem;