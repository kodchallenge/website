import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
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
            Swal.fire({
                title: "Başarılı",
                text: res.data.message,
                icon: "success",
            })
        }).catch(err => {
            Swal.fire({
                title: "Hata",
                text: err.response.data.message,
                icon: "error",
            })
        }).finally(() => {
            callback && callback()
        })
    }

    return {handleLogout, handleSignin}
}

export default useAuth