import { combineReducers } from "redux";
import trackReducer from "./reducers/trackReducer";

const rootReducer = combineReducers({
    track: trackReducer,
})

export default rootReducer