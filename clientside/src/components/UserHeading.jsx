import React , {useState , useContext} from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import {Menu , MenuItem} from '@mui/material';
import { GoogleLogout } from 'react-google-login';

import UserProfileDrawer from './UserProfileDrawer.jsx';

import {clientId} from '../consonants/data.js';

// Getting Context
import {AccountContext} from  '../context/AccountProvider.jsx'

const UserHeading = () => {
    

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
 
    // Side Drawer
    const [drawerState, setDrawerState] = useState(null)

    const openDrawer = ()=>{
        setDrawerState(true)
    }

    // Logout Profile

    const {  account , setAccount } = useContext(AccountContext);

    const onLogoutSuccess  = () =>{
        alert('You Have Benn Logout')
        setAccount('')
    }

    const onLogoutFailure  = () =>{
        console.log("Something Went Wrong")
    }


    return (
        <div className="userHeadingContainer" >
            
            <div className="userHeadingLeft">
                <img src={account.imageUrl} alt="" onClick={openDrawer} />
            </div>

            <div className="userHeadingRight">
                <BsThreeDotsVertical  onClick={handleClick}/>


            <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                >
                <MenuItem onClick={openDrawer}>Profile</MenuItem>
                <MenuItem>

                            <GoogleLogout
                                            className="googleIcon-2"
                                            clientId={clientId}
                                            buttonText=""
                                            onSuccess={onLogoutSuccess}
                                            onFailure={onLogoutFailure}
                                            cookiePolicy={'single_host_origin'}
                                        >
                                        Logout
                            </GoogleLogout>

                </MenuItem>
            </Menu>
               
            <UserProfileDrawer drawerState={drawerState} setDrawerState={setDrawerState} />
            

            </div>

            

        </div>


    )
}

export default UserHeading;