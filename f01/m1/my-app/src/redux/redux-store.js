import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialods-reducer";


let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
    }

);






let store= createStore(reducers);
export default store;