import React,{useState , useContext} from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import SecondUserProfileDrawer from './SecondUserProfileDrawer';
import {Menu , MenuItem} from '@mui/material';

import { SecondUser } from '../context/SecondUserContext';


const SecondUserProfile = () => {

    // Getting Second User
    const {secondUser} = useContext(SecondUser);
    
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

    return (
        <div className="secondUserHeadingDiv" >
        
            <div className="secondUserImgDiv">
            <img src={secondUser.imageUrl}  onClick={openDrawer} alt="" />
            </div>

            <div className="secondUserNameDiv">
                {secondUser.name}
            </div>

            <div className="secondUserDotsDiv">
                <BsThreeDotsVertical onClick={handleClick} />

                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'bottom',
                    }}
                >
                <MenuItem onClick={openDrawer}>Contact Info</MenuItem>
            </Menu>

            </div>

            <SecondUserProfileDrawer drawerState={drawerState} setDrawerState={setDrawerState}/>

        </div>
    )
}

export default SecondUserProfile;
