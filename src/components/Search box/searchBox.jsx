import React, { useEffect, useState } from 'react';
import './css/searchBox.css';

const SearchBox = ({candidatesData, setFilteredCandidates}) => {
    //STATE
    const[searchInput, setSearchInput] = useState("");


    //LIFECICLE
    useEffect(()=> {
        setSearchInput(document.querySelector(".srcInput"));
    },[])


    //FUNCTIONS

    /*Function for filter candidate by name*/
    const filterCandidate = () => {
        let result = candidatesData.filter(item => {
            return item.name.toUpperCase().includes(searchInput.value.toUpperCase());
        })
        setFilteredCandidates(result);
    }

    
    //RENDER
    return (
        <div className="searchBox">

            <div className="searchBoxPar">
                <p className="searchHeading">Candidates</p>
            </div>

            <div className="searchBoxInput">
                <input className="srcInput" type="text" name="candidate" placeholder="Search" onChange={filterCandidate}/>
            </div>

        </div>
    );
};

export default SearchBox;