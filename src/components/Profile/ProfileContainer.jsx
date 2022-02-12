import React from "react";
import { connect } from "react-redux";
import {getProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { useMatch } from "react-router-dom";
import { compose } from "redux";




class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId :this.props.loggeduserId;
        if(!userId){
            userId= this.props.loggeduserId; 
            console.log(userId);
            if(!userId){
                //this.props.history.push("/login")
            }
        }
        this.props.getProfile(userId);
        
        this.props.getStatus(userId);
        
        
        // ProfileAPI.getProfile(userId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data);
            // });
    }
    
    render() {
        return (
              <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
   }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
let mapStateToPropsForRedirect=(state)=>({
    isAuth: state.auth.isAuth
});
AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);

// let AuthRedirectComponent = (props) =>{
//     if(!props.isAuth) return <Navigate replace to ="/login"/>
//     return <ProfileContainer {...props}/>
// }
let mapStateToProps=(state)=>{
    
   // console.log('map staste to props')
    return({
    
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loggeduserId: state.auth.userId,
    isAuth: state.auth.isAuth

});
}
// Поменял на 80 уроке с APP компонентой
const ProfileURLMatch = (props) => {
 const match = useMatch('/profile/:userId/');
 return <ProfileContainer {...props} match={match} />;
}

export default
compose(withAuthRedirect,
connect(mapStateToProps,{getProfile,getStatus,updateStatus}))(ProfileURLMatch);

