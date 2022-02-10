import React , {useContext} from 'react'
import { GoogleLogin} from 'react-google-login'
import {clientId} from '../consonants/data.js';

import { AccountContext } from '../context/AccountProvider.jsx';

import { addUser } from '../services/api.js';

const LoginPage = () => {

    const {setAccount}  = useContext(AccountContext)

    const onLoginSuccess  = async (res) =>{
        setAccount(res.profileObj);
        await addUser(res.profileObj);
    }

    const onLoginFailure  = () =>{
        console.log("Something Went Wrong")
    }


    return (
        <div className="loginContainer" >
            
                <div className="innerLoginContainer">

                       <div className="headingDiv">
                                <span className="chatName" >Chat</span>
                                <span className="appName" >App</span>
                       </div>


                        <div className="googleLoginDiv">
                            <div className="leftGoggleloginDiv">
                            <GoogleLogin
                                className="googleIcon"
                                clientId={clientId}
                                buttonText=" "
                                onSuccess={onLoginSuccess}
                                onFailure={onLoginFailure}
                                cookiePolicy={'single_host_origin'}
                            />
                                
                                
                            </div>

                            <div className="rightGoggleloginDiv">
                                    <div className="howtoLoginDiv">
                                        <p>
                                         To Use Chat App 
                                        </p>
                                    </div>

                                    <div className="loginStepsDiv">
                                       <ul>
                                           <li>Click on Google Icon</li>
                                           <li>Sign In Using Google</li>
                                       </ul>
                                    </div>
                            </div>
                        </div>

                </div>

        </div>
    )
}

export default LoginPage
