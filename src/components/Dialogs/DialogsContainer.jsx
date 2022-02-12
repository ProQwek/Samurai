
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



// const DialogsContainer = () => {



//     return <StoreContext.Consumer> 
//         {

//             (store) => {

//                 let state = store.getState();

//                 let addMessage = () => {
//                     store.dispatch(addMessageActionCreator());

//                 }
//                 let onMessageChange = (text) => {

//                     store.dispatch(updateNewMessageTextActionCreator(text));

//                 }



//                 return <Dialogs addMessage={addMessage} updateNewMessageText={onMessageChange} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} newMessageText={state.dialogsPage.newMessageText} />
//             }
//         }
//         </StoreContext.Consumer>

// }

// let mapStateToPropsForRedirect = (state) =>{
//     return{
//         isAuth:state.auth.isAuth
//     }
// }
// AuthRedirectComponent= connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

// let AuthRedirectComponent = (props) =>{
//     if(!props.isAuth) return <Navigate replace to ="/login"/>
//     return <Dialogs {...props}/>
// }
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
       
        
    }
}

let mapDistpatchtoProps = (dispatch) => {
    return {
        
        addMessage: (newMessageBody) => { dispatch(addMessageActionCreator(newMessageBody)); },
    }

}


export default compose(
    connect(mapStateToProps, mapDistpatchtoProps),
    withAuthRedirect
    )(Dialogs)