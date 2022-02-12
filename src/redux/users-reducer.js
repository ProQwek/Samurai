import { followAPI, userAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE= 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';



let initialState = {


    users: [],
    pageSize: 10,
    totalUsersCount:0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [2,3],

}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: 

            return{
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed:true})
                
                // state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: true }
                //     }
                //     return u;
                // }),
            }
        case UNFOLLOW: 
           return{
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed:false})
                // state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: false }
                //     }
                //     return u;
                // }),
            }
        
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count}
        }
        case TOOGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case TOOGLE_IS_FOLLOWING_PROGRESS:{
            return {
                ...state, 
                followingInProgress: action.progress 
                ? [...state.followingInProgress, action.userId]
                :state.followingInProgress.filter(id=> id !== action.userId)
            }
        }
        default: 
            return state;
        
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage=(currentPage)=>({type:SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount=(totalUsersCount)=>({type:SET_TOTAL_USERS_COUNT, count:totalUsersCount});
export const toogleIsFetching=(isFetching)=>({type: TOOGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress=(progress,userId)=>({type:TOOGLE_IS_FOLLOWING_PROGRESS,progress,userId});

const followUnfollowFlow =async (dispatch,userId,apiMethod,actionCreator)=> {
    dispatch(toggleFollowingInProgress(true,userId));
    let data = await apiMethod(userId)
        
         if(data.resultCode===0){
             dispatch(actionCreator(userId));
         }
         dispatch(toggleFollowingInProgress(false,userId));

}
export const requestUsers=(currentPage,pageSize)=>{
    return async (dispatch)=>{
    dispatch(toogleIsFetching(true));
    dispatch(setCurrentPage(currentPage))
    let data = await userAPI.getUsers(currentPage,pageSize)
        dispatch(toogleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
}};

export const follow=(userId)=>{
    return async (dispatch)=>{
        let apiMethod = followAPI.follow.bind(followAPI)
        followUnfollowFlow(dispatch,userId,apiMethod,followSuccess); 
}};
export const unfollow=(userId)=>{
    return async (dispatch)=>{
        let apiMethod = followAPI.unfollow.bind(followAPI)
        followUnfollowFlow(dispatch,userId,apiMethod,unfollowSuccess);
}};
export default usersReducer; 