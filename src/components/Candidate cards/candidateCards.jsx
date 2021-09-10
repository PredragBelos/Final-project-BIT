import React, { useEffect, useState } from 'react';
import { setCandidate } from '../../services/candidateCardsFunction';
import CandidateCard from '../Candidate/candidate';
import SearchBox from '../Search box/searchBox';
import './css/candidateCards.css';

const CandidateCards = () => {
    
    //STATE
    const [candidatesData, setCandidatesData] = useState([]);

    //LIFECICLE
    useEffect(() => {

        /* Set candidate data for CandidateCard*/
        setCandidate(setCandidatesData);

    }, [])

    //FUNCTIONS

    //RENDER
    return (
        <div className="container candidateCards">
            
            <SearchBox />

            <div className="row cardsRow">
                {
                    candidatesData.map(candidate => {
                        return (
                            <CandidateCard name={candidate.name} image={candidate.image} email={candidate.email} id={candidate.id} key={candidate.id} />
                        )
                    })
                }
            </div>

        </div>
    );
};

export default CandidateCards;