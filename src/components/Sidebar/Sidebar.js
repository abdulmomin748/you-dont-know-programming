import React, { useEffect, useState } from 'react';
import { faArrowRight, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';
import profileImg from '../../images/profile.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { addToDb } from '../../utilities/fakedb';


const Sidebar = ({learningTimes}) => {
    // console.log(props.getSomething);
   const [breakTimes, setBreakTimes] = useState(0);
   
   const notify = () => {
        toast.success('😃 You are done!',{
            position: 'top-center'
        })
    }

    const getTime = time => {
        localStorage.setItem('time', time);
        setBreakTimes(time);
    }
    useEffect(() => {
        const storedTime = localStorage.getItem('time');
        setBreakTimes(storedTime);
    },[])



    return (
        <div className='sidebar-cntlr'>
            <div className='sidebar-innr'>
                <div className='profile-cntlr'>
                    <div className='profile-img'>
                        <img className='' src={profileImg} alt="" />
                    </div>
                    <div className='p-rgt'>
                        <h5 className='n-title'>Md Abdul Momin</h5>
                        <p>
                            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                            Thakurgaon, Rangpur
                        </p>
                    </div>
                </div>
                <div className='learning-secret'>
                    <h4 className='lprogress'>Learning Progress</h4>
                    <div className='persentage'>
                        <div>
                            <h6>First Week</h6>
                            <p>75%</p>
                        </div>
                        <div>
                            <h6>Second Week</h6>
                            <p>95%</p>
                        </div>
                        <div>
                            <h6>third Week</h6>
                            <p>100%</p>
                        </div>
                    </div>
                </div>
                <div className='break-cntlr'>
                    <h4>Add A Break</h4>
                    <div className='add-break'>
                        <button onClick={() => getTime(10)}> 10m</button>
                        <button onClick={() => getTime(20)}> 20m</button>
                        <button onClick={() => getTime(30)}> 30m</button>
                        <button onClick={() => getTime(40)}> 40m</button>
                    </div>
                </div>
                <div className='exercise-details'>
                    <h4>Learning Details</h4>
                    <div className='exercise-inr'>
                        <div className='ex-row'>
                            <p>Learning time: <span>{learningTimes} miniutes</span></p>
                        </div>
                        <div className='ex-row'>
                            <p>Break time: <span><span id='learning-time'> {breakTimes} </span>miniutes</span></p>
                        </div>
                    </div>
                </div>
                <button className='complete-btn btn btn-primary w-100 mt-5' onClick={notify}>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Sidebar;