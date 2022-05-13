import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { ErrorAlert, SuccessAlert } from '../components/utils/Alerts'
import { CookieTypes } from '../constants'
import authService from '../services/auth.service'
import CookieService from '../services/cookie.service'
import { LogoutAction } from '../store/actions/authActions'
const useAuth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = (callback=null) => {
        CookieService.delete(CookieTypes.AUTH)
        dispatch(LogoutAction())
        window.location.pathname="/"
        callback && callback()
    }

    const handleSignin = (values, callback=null) => {
        authService.signin(values).then(res => {
            CookieService.set(CookieTypes.AUTH, res.data.data)
            window.location.pathname = ""
            // SuccessAlert({text: res.data.message, callBack: () => {
            // }})
        }).catch(err => {
            ErrorAlert({text: err.response.data.message})
        }).finally(() => {
           callback && callback()
        })
    }

    return {handleLogout, handleSignin}
}

export default useAuth