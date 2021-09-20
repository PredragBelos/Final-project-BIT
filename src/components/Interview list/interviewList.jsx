import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { getInterview } from '../../services/apiServices';
import InterviewCard from '../Interview card/interviewCard';
import ReportPageSearch from '../Report page searchbox/reportPageSearch';
import './css/interviewList.css';

const InterviewList = () => {

    //STATE
    const [interviews, setInterviews] = useState([]);


    //LIFECICLE
    useEffect(() => {

        /* Set interview list*/
        getInterview().then(items => {
            setInterviews(items);
        })

    },[])


    //FUNCTIONS

    
    //RENDER
    return (
        <div className="container interviewList">
            <ReportPageSearch/>
            {
               interviews.map(result => {
                   return <InterviewCard interview={result} key={result.interviewID}/>
               }) 
            }
        </div>
    );
}

export default InterviewList;