import React, { useEffect, useState } from 'react';
import { setCandidate } from '../../services/candidateCardsFunction';
import CandidateCard from '../Candidate/candidate';
import SearchBox from '../Search box/searchBox';
import './css/candidateCards.css';

const CandidateCards = () => {
    
    //STATE
    const [candidatesData, setCandidatesData] = useState([]);
    const [filteredCandidates, setFilteredCandidates] = useState([]);

    //LIFECICLE
    useEffect(() => {

        /* Set candidate data for CandidateCard*/
        setCandidate(setCandidatesData);

        /*Set first state of filteredCandidates*/
        setCandidate(setFilteredCandidates);

    }, [])


    //FUNCTIONS

    /*Function for set filteredCandidates that comback from searchBar*/
    const setFilteredCandidatesProps = filteredCandidates => setFilteredCandidates(filteredCandidates);
    
    
    //RENDER
    return (
        <div className="container candidateCards">
            
            <SearchBox 
            candidatesData = {candidatesData}
            setFilteredCandidates = {setFilteredCandidatesProps}
            />

            <div className="row cardsRow">
                {
                    (candidatesData.length === filteredCandidates.length)
                    ? candidatesData.map(candidate => {
                        return (
                            <CandidateCard name={candidate.name} email={candidate.email} id={candidate.id} key={candidate.id} />
                        )
                    })
                    : filteredCandidates.map(candidate => {
                        return (
                            <CandidateCard name={candidate.name} email={candidate.email} id={candidate.id} key={candidate.id} />
                        )
                    })
                }
            </div>

        </div>
    );
};

export default CandidateCards;