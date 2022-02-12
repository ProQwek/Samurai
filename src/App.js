
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { withAuthRedirect } from './hoc/withAuthRedirect';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import React from 'react';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(()=>import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(()=>import('./components/Profile/ProfileContainer'));

class App extends Component {
componentDidMount(){
 
    this.props.initializeApp(); 
}

render() {
  if (!this.props.initialized){
  return <Preloader/>
  }
  return (
    
      <div className='app-wrapper'>
      
        <HeaderContainer />
        <Navbar />

        <div class='app-wrapper-content'>
        
        <Routes>
          
            <Route path="/dialogs/*" element={<React.Suspense fallback ={<div>{<Preloader/>}</div>}><DialogsContainer/> </React.Suspense>}/>
            <Route path="/profile/*" element={<React.Suspense fallback ={<div>{<Preloader/>}</div>}><ProfileContainer /> </React.Suspense>}/>
            <Route path="/profile/:userId" element={<ProfileContainer />}/>   
            <Route path="/users/*" element={<UsersContainer/>}/>
            <Route path="/settings/*" element={<Settings />}/>
            <Route path="/music/*" element={<Music />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/friends/" element={<Friends />} />
            <Route path="/login" element={<Login />} />
        </Routes>

        </div>
        
      </div>

  );
}

}
const mapStateToProps = (state)=>({
initialized: state.app.initialized
})
let AppContainer = compose( 
connect (mapStateToProps,{initializeApp}))(App);


const SamuraiJSApp=(props)=>{
  return <BrowserRouter>
  <Provider store={store}>
    <AppContainer  />
  </Provider>
  </BrowserRouter>
}
export default SamuraiJSApp;

