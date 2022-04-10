
const baseTypes = {
    API_START: "API_START",
    API_ERROR: "API_ERROR",
}

const types = {
    TRACKS: {
        API_START: "API_START_TRACK",
        API_ERROR: "API_ERROR_TRACK",
        GETALL_TRACK: "TRACK",
        ADD_TRACK: "ADD_TRACK"
        //CURRENT_TRACK: "CURRENT_TRACK"
    },

    PROBLEMS: {
        API_START: "API_START_PROBLEM",
        API_ERROR: "API_ERROR_PROBLEM",
        GETALL_PROBLEMS: "GETALL_PROBLEMS",
        SET_PROBLEM: "SET_PROBLEM",
        GET_DIFFICULTIES: "GET_DIFFICULTIES"
    },

    EDITOR: {
        CHANGE_LANGUAGE: "CHANGE_EDITOR_LANGUAGE",
    },

    AUTH: {
        SET_AUTH: "SET_AUTH",
        LOGOUT: "LOGOUT_AUTH",
    }
}

export default types