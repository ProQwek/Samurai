
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
   

        messages: [
        { id: 1, message: 'D12312321321h' },
        { id: 2, message: 'asdasdasdsa' },
        { id: 3, message: 'You yo' },
        { id: 4, message: 'davaiu dava' },
        { id: 5, message: 'Hi how arou' },
        ],
        

        dialogs: [
        { id: 1, name: 'Dimych', img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fimg_avatar.png&imgrefurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_rounded_images.asp&tbnid=Jjq5a5o5G80fpM&vet=12ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ..i&docid=p12Zi4dypyQfgM&w=499&h=498&itg=1&q=img%20circle&ved=2ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ' },
        { id: 2, name: 'Sveta', img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fimg_avatar.png&imgrefurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_rounded_images.asp&tbnid=Jjq5a5o5G80fpM&vet=12ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ..i&docid=p12Zi4dypyQfgM&w=499&h=498&itg=1&q=img%20circle&ved=2ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ' },
        { id: 3, name: 'Alex', img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fimg_avatar.png&imgrefurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_rounded_images.asp&tbnid=Jjq5a5o5G80fpM&vet=12ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ..i&docid=p12Zi4dypyQfgM&w=499&h=498&itg=1&q=img%20circle&ved=2ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ' },
        { id: 4, name: 'Vadim', img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fimg_avatar.png&imgrefurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_rounded_images.asp&tbnid=Jjq5a5o5G80fpM&vet=12ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ..i&docid=p12Zi4dypyQfgM&w=499&h=498&itg=1&q=img%20circle&ved=2ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ' },
        { id: 5, name: 'Nastja', img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fimg_avatar.png&imgrefurl=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_rounded_images.asp&tbnid=Jjq5a5o5G80fpM&vet=12ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ..i&docid=p12Zi4dypyQfgM&w=499&h=498&itg=1&q=img%20circle&ved=2ahUKEwj64pOy5qv0AhXZQxUIHTP1CAgQMygCegUIARCwAQ' },
        ],

    

};


const dialogsReducer = (state= initialState, action) => {


    switch (action.type) {

        case ADD_MESSAGE:{

            let newMessage=action.newMessageBody;
            return{
                ...state,
                messages:[...state.messages,{id: 6,message: newMessage}],
                
                    }
        }

      
        default:
            return state;
        
    }

}
export const addMessageActionCreator=(newMessageBody)=>({type:ADD_MESSAGE, newMessageBody});


export default dialogsReducer;