import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import api from '../api';
import { Access_Token, REFRESH_TOKEN} from '../constants';
import { useState, useEffect } from 'react';

function ProtectedRoutes({ children }) {
    const [ isAuthorized, setIsAuthorized ] = useState(null);
    
    useEffect(
        () => {
            auth().catch(err => console.error(err))
        }, []
    )

    const refreshToken = async() => {
        const token = localStorage.getItem(REFRESH_TOKEN)
        if(!token){
            setIsAuthorized(false)
            return
        }

        try {
            const response = await api.post('/auth/refresh', { refresh: token })
            if (response.status === 200) {
                localStorage.setItem(Access_Token, response.data.access)
                setIsAuthorized(true)
            } else {
                setIsAuthorized(false)
            }
        } catch (error) {
            console.log(error)
            setIsAuthorized(false)
            
        }
    }
    
    const auth = async() => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if(!token){
            setIsAuthorized(false)
            return
        }

        const decoded = jwtDecode(token)
        const tokenExpiry = decoded.exp
        const currentTime = Date.now() / 1000

        if (tokenExpiry < currentTime) {
            Refresh_Token()
        } else {
            setIsAuthorized(true)
        }
    }
}

export default ProtectedRoutes