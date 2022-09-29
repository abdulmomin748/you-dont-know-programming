import React, { useEffect, useState } from 'react';
import GridItem from '../GridItem/GridItem';
import Sidebar from '../Sidebar/Sidebar';
import Title from '../Title/Title';
import Title2 from '../Title2/Title2';
import './GridsSidebarCntlr.css';


const GridsSidebarCntlr = () => {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        fetch('learn-programming.json')
        .then(res => res.json())
        .then(data => setLanguages(data))
    },[]);

    const [learningTimes, setLearningTimes] = useState(0);
    const getTime = (props) => {
        const updataTime = learningTimes + props
        setLearningTimes(updataTime);
    }
    
    

    return (
            
            <div className='cntlr'>
                <Title></Title>
                <div className='grids-sidebar-cntlr d-flex'>
                    <div className='grids-cntlr d-grid'>
                    {
                        languages.map(language => <GridItem 
                            key={language.id}
                            language ={language}
                            getTime = {getTime}
                        ></GridItem>)
                    }
                    </div>
                    
                    <Sidebar learningTimes={learningTimes}></Sidebar>
                    <Title2></Title2>
                </div>
                
            </div>
    );
};

export default GridsSidebarCntlr;