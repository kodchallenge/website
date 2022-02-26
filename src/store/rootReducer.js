import { combineReducers } from "redux";
import editorReducer from "./reducers/editorReducer";
import problemReducer from "./reducers/problemReducer";
import trackReducer from "./reducers/trackReducer";

const rootReducer = combineReducers({
    track: trackReducer,
    editor: editorReducer,
    problem: problemReducer,
})

export default rootReducer