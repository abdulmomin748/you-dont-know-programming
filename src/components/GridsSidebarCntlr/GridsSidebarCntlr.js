import React, { useEffect, useState } from 'react';
import GridItem from '../GridItem/GridItem';
import Sidebar from '../Sidebar/Sidebar';
import Title from '../Title/Title';
import './GridsSidebarCntlr.css';

const GridsSidebarCntlr = () => {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        fetch('learn-programming.json')
        .then(res => res.json())
        .then(data => setLanguages(data))
    },[]);

    return (
            
            <div className='cntlr'>
                <Title></Title>
                <div className='grids-sidebar-cntlr d-flex'>
                    <div className='grids-cntlr d-grid'>
                    {
                        languages.map(language => <GridItem key={language.id} language ={language}
                        ></GridItem>)
                    }
                    </div>
                    <Sidebar></Sidebar>
                </div>

            </div>
    );
};

export default GridsSidebarCntlr;