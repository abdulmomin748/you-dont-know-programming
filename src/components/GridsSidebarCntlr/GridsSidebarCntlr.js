import React, { useEffect, useState } from 'react';
import Grids from '../Grids/Grids';

const GridsSidebarCntlr = () => {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        fetch('learn-programming.json')
        .then(res => res.json())
        .then(data => setLanguages(data))
    },[]);

    return (
        <div className='grids-sidebar-cntlr'>
            <div>
            {
                languages.map(language => <Grids
                key={language.id}
                language ={language}
                ></Grids>)
            }
            </div>
            
        </div>
    );
};

export default GridsSidebarCntlr;