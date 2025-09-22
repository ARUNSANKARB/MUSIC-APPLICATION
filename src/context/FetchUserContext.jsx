import { doc, onSnapshot } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthUserContext } from './AuthContextApi';
import { __DB } from '../backend/firebaseconfig';

//! Step 1:Create context fot the backend user
export let BackendUserContext = createContext(null);
const FetchUserContext = ({children}) => {
    let { authUser } = useContext(AuthUserContext); 
    let uid  = authUser?.uid;

    let [userData,setUserData] = useState(null || {});
    let[role,setRole] = useState("");

    useEffect(() => {
    let fetchProfile = () => {
        if(!uid){
            return;
         }
               //! onSnapShot() -> Event Listener
               let user_data_reference = doc(__DB, "users_details", uid);
               onSnapshot(user_data_reference, (UserInfo) => {
                   if(UserInfo.exists()){
                       setUserData(UserInfo.data());
                   }else{
                    console.log("Profile Data Not Found");
                   }
               })
            }
            fetchProfile();
    }, [uid])
    //! [uid] -> dependency array - whenever uid is there it will fetch the data
    return (
        <BackendUserContext.Provider value={{userData}}>
            {children}
        </BackendUserContext.Provider>
    )
}

export default FetchUserContext
