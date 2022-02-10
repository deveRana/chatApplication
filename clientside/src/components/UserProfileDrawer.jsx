import React,{useContext} from 'react'
import Drawer from '@mui/material/Drawer';
import { BsArrowLeft } from 'react-icons/bs';

// Getting Context
import {AccountContext} from  '../context/AccountProvider.jsx'


const UserProfileDrawer = ({drawerState , setDrawerState}) => {

  
    const closeDrawer = ()=>{
        setDrawerState(false)
    }
     
    const {  account } = useContext(AccountContext);
    

    return (
          <Drawer
            anchor='left'
            open={drawerState}
            onClose={ closeDrawer }
          >
              <div className="drawerDiv">

                    <div className="userDrawerUpperSection">
                            <span>  <BsArrowLeft onClick={closeDrawer} />  </span>
                            <p>Profile</p>
                    </div>

                    <div className="userDrawerImg">
                    <img src={account.imageUrl} alt="" />
                    </div>

                    <div className="userDrawerLowerSection">
                           
                           <div className="userDrawerNameHeading">
                            <span>
                                Your Name
                            </span>
                           </div>

                            
                            <div className="userDrawerNameSection">
                                <p>
                                    {account.name}
                                </p>
                            </div>

                    </div>

              </div>
          </Drawer>
    )
}

export default UserProfileDrawer;
