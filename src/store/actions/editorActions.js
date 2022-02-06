import types from "../storeTypes"


export const ChangeLanguage = (lang) => {
    return {
        type: types.EDITOR.CHANGE_LANGUAGE,
        payload: lang,
    }
}