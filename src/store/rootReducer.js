import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import editorReducer from "./reducers/editorReducer";
import problemReducer from "./reducers/problemReducer";
import trackReducer from "./reducers/trackReducer";

const rootReducer = combineReducers({
    track: trackReducer,
    editor: editorReducer,
    problem: problemReducer,
    auth: authReducer,
})

export default rootReducer