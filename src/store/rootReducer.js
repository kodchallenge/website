import { combineReducers } from "redux";
import editorReducer from "./reducers/editorReducer";
import trackReducer from "./reducers/trackReducer";

const rootReducer = combineReducers({
    track: trackReducer,
    editor: editorReducer,
})

export default rootReducer