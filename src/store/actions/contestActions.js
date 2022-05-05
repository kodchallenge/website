import types from "../storeTypes"

export const setContests = data => {
    return {
        type: types.CONTEST.SET_CONTESTS,
        payload: data
    }
}

export const setContestTimer = timer => {
    return {
        type: types.CONTEST.SET_TIMER,
        payload: timer
    }
}

export const setContestant = contestant => {
    return {
        type: types.CONTEST.SET_CONTESTANT,
        payload: contestant
    }
}