import React , {useState} from 'react'
import UserHeading from './UserHeading';
import SearchBar from './SearchBar';
import UserChats from './UserChats';


const UserScreen = () => {


    const [searchText, setSearchText] = useState('');


    return (
        <div className="userScreenContainer" > 

                    <UserHeading/>            
                    
                    <SearchBar setSearchText={setSearchText} />
                    
                    <UserChats searchText={searchText} />
        </div>
    )
}

export default UserScreen;
