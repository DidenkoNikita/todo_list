import { useEffect, useState } from "react";
import { LoginHeader } from "../LoginHeader/LoginHeader";
import { Profile } from "../Profile/Profile";

export const ProtectedRoutes = (): JSX.Element => {
  const [accessToken, setAccessToken] = useState<string>('')

  useEffect(() => {
    const token = localStorage.getItem('access_token') 
    if(typeof token !== undefined){
      setAccessToken(JSON.parse(token || ''))
    }
  }, [])

  return (
    accessToken !== '' ? <Profile/> : <LoginHeader/>
  )
}