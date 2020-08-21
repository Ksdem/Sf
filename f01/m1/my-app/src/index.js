import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {addMessage, Animals} from "./redux/state";
import {addPost} from "./redux/state";
import MyPosts from "./components/Profile/My Posts/MyPosts";

addPost('dem');

ReactDOM.render(
    <React.StrictMode>
        <App state={state}
             aadPost={addPost}
             addMessage={addMessage}
             Animals={Animals} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
