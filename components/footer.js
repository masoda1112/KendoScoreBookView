import { Button } from "@mui/material"
import { useRouter } from "next/router"
import { useCookies } from "react-cookie"
const Footer =()=> {
    const router = useRouter()
    const [cookies, setCookie, removeCookie] = useCookies(["access_token"])
    const logout = () => {
        removeCookie(["access_token"])
        router.push("/")
    }
    return (
        <div className="footer">
            <div className="footer-inner">
                <Button fullWidth variant="contained" color="error" onClick={() => logout()}>ログアウト</Button>
                <p className="copy-light">Copyright © 2022 Masahiro Odakura All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer