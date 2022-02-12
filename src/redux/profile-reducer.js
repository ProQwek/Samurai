import { ProfileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS ='SET_STATUS';
const DELETE_POST='DELETE_POST'



let initialState = {
        posts: [{ id: 1, message: 'Hi How are you?', lcount: '10' },
        { id: 2, message: 'Its my first post', lcount: '10' },
        { id: 3, message: 'Its my life', lcount: '1000' },
        { id: 4, message: 'faggot', lcount: '0' },
        ],
        profile: null,
        status:'', 
}

const profileReducer = (state= initialState, action) => {
    
    switch (action.type) {
        case ADD_POST:{
            let post= action.newPost
            return {    ...state,      
                        posts: [...state.posts, {id:5, message:post,lcount:Math.floor(Math.random()*10)}],                  
            }
        }
        // case UPDATE_NEW_POST_TEXT:{
        //    return{...state,
        //     newPostText: action.newText};
           
        // }
        case SET_USER_PROFILE:{
            return{...state, profile: action.profile}
        }
        case SET_STATUS:{
            return{...state, status: action.status}
        }
        case DELETE_POST:{
            return{...state, posts: state.posts.filter(p=>p.id !=action.id)}
        }
        default:
            return state;      
    }
}
export const addPostActionCreator = (newPost)=>({type: ADD_POST ,newPost});
export const deletePost = (id)=>({type: DELETE_POST ,id});
// export const updateNewPostTextActionCreator = (text)=>
// ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile)=>({type: SET_USER_PROFILE,profile});
export const setStatus = (status)=>({type:SET_STATUS, status})

export const getProfile=(userId)=>{
    return async (dispatch)=>{
       let response = await ProfileAPI.getProfile(userId)
                dispatch(setUserProfile(response.data));
}};
export const getStatus=(userId)=>{
    return async (dispatch)=>{
       let response = await ProfileAPI.getStatus(userId)
                dispatch(setStatus(response.data));
}};
export const updateStatus=(status)=>{
    return async (dispatch)=>{
       let response= await ProfileAPI.updateStatus(status)
                if(response.data.resultCode===0){
                dispatch(setStatus(status));
                }
            
}};
export default profileReducer;


