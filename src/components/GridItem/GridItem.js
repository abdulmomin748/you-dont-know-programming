import React from 'react';
import './GridItem.css';

const GridItem = ({language,getTime}) => {
    const {img,name,desc,timeRequired} = language;
    return (
        
        <div className="card">
            <img src={img} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{desc < 20 ? desc +' ': desc.slice(0, 70)}</p>
                <p>Time required: {timeRequired}m</p>
                <button onClick={() => getTime(timeRequired)} className="btn btn-primary w-100 add-btn">Add to list</button>
            </div>
        </div>
    );
};

export default GridItem;