import React from 'react';
import './GridItem.css'
const GridItem = (props) => {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={props.img} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a className="btn btn-primary" href="#">Add to list</a>
                </div>
            </div>
        </div>
    );
};

export default GridItem;