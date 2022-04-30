import types from "../storeTypes"

export const setContests = data => {
    return {
        type: types.CONTEST.SET_CONTESTS,
        payload: data
    }
}