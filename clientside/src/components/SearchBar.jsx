import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({setSearchText}) => {

    const [searchValue, setSearchValue] = useState();

    const callSearch = (e)=>{
        setSearchValue(e.target.value)
        setSearchText(e.target.value)
    }

    return (
        <div className="searchBarContainer" >

            <div className="searchDiv">

                <BsSearch/>
                <input type="text" placeholder="Search" value={searchValue} onChange={callSearch}  />

            </div>

        </div>
    )
}

export default SearchBar;