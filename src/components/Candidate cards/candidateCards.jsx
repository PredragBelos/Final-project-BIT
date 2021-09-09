import React from 'react';
import { candidates } from '../../shared/publicData';
import CandidateCard from '../Candidate/candidate';
import SearchBox from '../Search box/searchBox';
import './css/candidateCards.css';

const CandidateCards = () => {
    //STATE

    //LIFECICLE

    //FUNCTIONS

    //RENDER
    return (
        <div className="container candidateCards">
            <SearchBox/>
            <div className="row cardsRow">
                {
                    candidates.map((candidate, index) => {
                        return (
                            <CandidateCard name={candidate.name} image={candidate.image} email={candidate.email}key={index}/>
                        )
                    })
                }
        
            </div>
            
        </div>
    );
};

export default CandidateCards;