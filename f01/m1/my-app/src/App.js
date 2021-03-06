import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import Friends from "./components/Navbar/Friends/Friends";
import {BrowserRouter, Route} from "react-router-dom";
import AvaInfo from "./components/Dialogs/Message/AvaInfo/AvaInfo";
import Message from "./components/Dialogs/Message/Message/Message";

const App = (props) => {
    console.log(props)
    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <NavBar/>
                {/*<Profile/>*/}
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() =>
                               <Dialogs store={props.store}
                               state={props.state.dialogsPage}
                               addMessage={props.addMessage}
                               updateNewMessageText={props.updateNewMessageText}
                           />}/>
                    <Route path='/profile'
                           render={() => <Profile
                              profilePage={props.state.profilePage}
                              dispatch={props.dispatch}

                           />}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Friends' render={() => <Friends/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                    <Route path='/dialogs/avaInfo' render={Message}/>

                </div>
            </div>
        </BrowserRouter>)
}

export default App;
