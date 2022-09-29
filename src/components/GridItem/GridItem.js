import React from 'react';
import './GridItem.css'
const GridItem = (props) => {
    const {img,name,timeRequired} = props.language;
    return (
        
        <div className="card">
            <img src={img} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>Time required: {timeRequired}</p>
                <a className="btn btn-primary w-100" href="#">Add to list</a>
            </div>
        </div>
    );
};

export default GridItem;