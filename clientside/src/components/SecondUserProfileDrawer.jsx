import React,{useContext} from 'react'
import Drawer from '@mui/material/Drawer';
import { ImCross } from 'react-icons/im';

import { SecondUser } from '../context/SecondUserContext';

const SecondUserProfileDrawer = ({drawerState , setDrawerState}) => {

    // Getting Second User
    const {secondUser} = useContext(SecondUser);
  
    const closeDrawer = ()=>{
        setDrawerState(false)
    }
     
    

    return (
          <Drawer
            anchor='left'
            open={drawerState}
            onClose={ closeDrawer }
          >
              <div className="drawerDiv">

                    <div className="userDrawerUpperSection">
                            <span className="crossIcon" >  <ImCross onClick={closeDrawer} />  </span>
                            <p>Contact Info</p>
                    </div>

                    <div className="userDrawerImg">
                    <img src={secondUser.imageUrl} alt="" />
                    </div>

                    <div className="userDrawerLowerSection">
                           
                           <div className="userDrawerNameHeading">
                            <span>
                                Contact Name
                            </span>
                           </div>

                            
                            <div className="userDrawerNameSection">
                                <p>
                                    {secondUser.name} 
                                </p>
                            </div>

                    </div>

              </div>
          </Drawer>
    )
}

export default SecondUserProfileDrawer;
