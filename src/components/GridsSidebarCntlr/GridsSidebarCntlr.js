import React, { useEffect, useState } from 'react';
import Grids from '../Grids/Grids';
import Sidebar from '../Sidebar/Sidebar';
import './GridsSidebarCntlr.css'
const GridsSidebarCntlr = () => {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        fetch('learn-programming.json')
        .then(res => res.json())
        .then(data => setLanguages(data))
    },[]);

    return (
        <div className='grids-sidebar-cntlr d-flex'>
           
            <div className='grids-cntlr'>
            {
                languages.map(language => <Grids
                key={language.id}
                language ={language}
                ></Grids>)
            }
            </div>
            
                <Sidebar></Sidebar>

        </div>
    );
};

export default GridsSidebarCntlr;