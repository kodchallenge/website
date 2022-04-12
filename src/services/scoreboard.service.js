import api from "./api"

const api_url = "/score/"
export default class ScoreBoardService {
    getHighScoreByTrack(track) {
        return api().get(api_url+`highscorebytrack?track=${track}`)
    }
}