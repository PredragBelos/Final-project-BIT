import React from 'react';
import './css/searchBox.css';

const SearchBox = () => {
    //STATE

    //LIFECICLE

    //FUNCTIONS

    //RENDER
    return (
        <div className="searchBox">

            <div className="searchBoxPar">
                <p className="searchHeading">Candidates</p>
            </div>

            <div className="searchBoxInput">
                <input className="srcInput" type="text" name="candidate" placeholder="Search"/>
            </div>

        </div>
    );
};

export default SearchBox;