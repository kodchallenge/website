import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { CookieTypes } from '../constants'
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

    return {handleLogout}
}

export default useAuth