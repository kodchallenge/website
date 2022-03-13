import ProblemService from "../../services/problem.service"
import types from "../storeTypes"

export const SetProblem = problemId => async dispatch =>  {
    dispatch({type: types.PROBLEMS.API_START})
    try {
        const res = await new ProblemService().getById(problemId)
        if(res.data.success) {
            dispatch({type: types.PROBLEMS.SET_PROBLEM, payload: res.data.data})
        }
        else {
            throw res.data.message || "Hata Oluştu"
        }
    } catch(e) {
        dispatch({type: types.PROBLEMS.API_ERROR, payload: e})
    }
}