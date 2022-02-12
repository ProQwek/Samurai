import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/images.png"

const ProfileInfo = ({profile,status,updateStatus}) => {
    if(!profile){
        return <Preloader/>

        }
    return (
        
        <div>
            <div className={s.description}>
               <img src={profile.photos.large != null ? profile.photos.large : userPhoto}></img><br></br>
               {profile.aboutMe}
               
               {profile.lookingForAJob ?
                        <div>{profile.lookingForAJobDescription}</div>
                        : <div>asdasdsadsadsa</div>}
               <br></br>
               
                {profile.fullName}
               <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
  
        </div>
        

    )
};
export default ProfileInfo;