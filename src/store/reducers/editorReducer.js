import types from '../storeTypes'

const initialEditorState = {
    language: "javascript",
}

export default function (state = initialEditorState, {type, payload}) {
    switch (type) {
        case types.EDITOR.CHANGE_LANGUAGE:
            console.log("asdasdsad")
            return {...state, language: payload}
        default:
            return {...state}
    }
}