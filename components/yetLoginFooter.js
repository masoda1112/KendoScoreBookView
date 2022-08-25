import { Button } from "@mui/material"
import { useRouter } from "next/router"
import { useCookies } from "react-cookie"
const YetLoginFooter =()=> {
    const router = useRouter()
    const [cookies, setCookie, removeCookie] = useCookies(["access_token"])
    const logout = () => {
        removeCookie(["access_token"])
        router.push("/")
    }
    return (
        <div className="footer">
            <div className="footer-inner">
                <p className="copy-light">Copyright © 2022 Masahiro Odakura All Rights Reserved</p>
            </div>
        </div>
    )
}

export default YetLoginFooter