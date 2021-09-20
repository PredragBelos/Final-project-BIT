import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { getInterview } from '../../services/apiServices';
import InterviewCard from '../Interview card/interviewCard';
import Modal from '../Modal/modal';
import ReportPageSearch from '../Report page searchbox/reportPageSearch';
import './css/interviewList.css';

const InterviewList = () => {

    //STATE
    const [interviews, setInterviews] = useState([]);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [interviewId, setInterviewID] = useState(0);
    const [interview, setInterview] = useState([]);
    const [filteredInterviews, setFilteredInterviews] = useState([]);


    //LIFECICLE
    useEffect(() => {

        /* Set interview list*/
        getInterview().then(items => {
            setInterviews(items);
            setFilteredInterviews(items);
        })

        /*Set interview*/
        getInterview().then(result => {
            setInterview(result.filter(item => { return parseInt(item.interviewID) === parseInt(interviewId) }));
        })

    }, [interviewId, interviews])


    //FUNCTIONS
    const setModalVisibilityProps = modalVisibility => setModalVisibility(modalVisibility);
    const setInterviewIDProps = interviewId => setInterviewID(interviewId);
    const setFilteredInterviewsProps = filteredInterviews => setFilteredInterviews(filteredInterviews);
    const refreshInterviews = interviews => setInterviews(interviews);

  
    //RENDER
    return (
        <div className="container interviewList">
            <ReportPageSearch interviews={interviews} setFilteredInterviews={setFilteredInterviewsProps} />
            {
                (interviews.length === filteredInterviews.length)
                ? interviews.map(result => {
                    return <InterviewCard interview={result} setInterviewID={setInterviewIDProps} setModalVisibility={setModalVisibilityProps} refreshInterviews={refreshInterviews} key={result.interviewID} />
                })
                : filteredInterviews.map(result => {
                    return <InterviewCard interview={result} setInterviewID={setInterviewIDProps} setModalVisibility={setModalVisibilityProps} refreshInterviews={refreshInterviews} key={result.interviewID} />
                })
            }
            <Modal modalVisibility={modalVisibility} setModalVisibility={setModalVisibilityProps} interview={interview} />
        </div>
    );
}

export default InterviewList;