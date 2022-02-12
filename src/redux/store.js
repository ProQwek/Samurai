import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";




let store = {

    _callSubscriber() {
        console.log("State changed")
    },
    _state: {


        profilePage: {

            posts: [{ id: 1, message: 'Hi How are you?', lcount: '10' },
            { id: 2, message: 'Its my first post', lcount: '10' },
            { id: 3, message: 'Its my life', lcount: '1000' },
            { id: 4, message: 'faggot', lcount: '0' },
            ],
            newPostText: 'new-Post',


        },

        dialogsPage: {

            messages: [{ id: 1, message: 'D12312321321h' },
            { id: 2, message: 'asdasdasdsa' },
            { id: 3, message: 'You yo' },
            { id: 4, message: 'davaiu dava' },
            { id: 5, message: 'Hi how arou' },
            ],
            newMessageText: 'Your-Message',

            dialogs: [{ id: 1, name: 'Dimych', img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fimg_avatar.png&imgrefurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_rounded_images.asp&tbnid=Jjq5a5o5G80fpM&vet=12ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ..i&docid=p12Zi4dypyQfgM&w=499&h=498&itg=1&q=img%20circle&ved=2ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ' },
            { id: 2, name: 'Sveta', img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fimg_avatar.png&imgrefurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_rounded_images.asp&tbnid=Jjq5a5o5G80fpM&vet=12ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ..i&docid=p12Zi4dypyQfgM&w=499&h=498&itg=1&q=img%20circle&ved=2ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ' },
            { id: 3, name: 'Alex', img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fimg_avatar.png&imgrefurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_rounded_images.asp&tbnid=Jjq5a5o5G80fpM&vet=12ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ..i&docid=p12Zi4dypyQfgM&w=499&h=498&itg=1&q=img%20circle&ved=2ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ' },
            { id: 4, name: 'Vadim', img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fimg_avatar.png&imgrefurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_rounded_images.asp&tbnid=Jjq5a5o5G80fpM&vet=12ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ..i&docid=p12Zi4dypyQfgM&w=499&h=498&itg=1&q=img%20circle&ved=2ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ' },
            { id: 5, name: 'Nastja', img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fimg_avatar.png&imgrefurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_rounded_images.asp&tbnid=Jjq5a5o5G80fpM&vet=12ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ..i&docid=p12Zi4dypyQfgM&w=499&h=498&itg=1&q=img%20circle&ved=2ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ' },
            ],

        },


        sideBar: {

        }
    },


    getState() {
        return this._state;
    },


    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         lcount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // addsMessage() {
    //     let newMessage = {
    //         id: 6,
    //         message: this._state.dialogsPage.newMessageText
    //     }
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessageText(newTexts) {
    //     this._state.dialogsPage.newMessageText = newTexts;
    //     this._callSubscriber(this._state);
    // },
   
   
    dispatch(action) { 
       this._state.profilePage = profileReducer(this._state.profilePage,action);
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
       this._state.sideBar = sidebarReducer(this._state.sideBar,action);
       this._callSubscriber(this._state);
       
}
}


export default store;
