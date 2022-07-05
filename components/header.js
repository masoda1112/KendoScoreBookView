import Link from 'next/link'
import { useRouter } from "next/router"

const Header =()=> {
    const router = useRouter()
    const path = router.asPath
    const slicePosition = path.indexOf('/', path.indexOf('/') + 1)
    var userName = ""
    if(slicePosition != -1){ userName = path.substring( 1,  slicePosition)} else {userName = path.substring(1)}
    return (
        <div className="header">
            <div className="header-inner">
                <div className="header-left">
                    <Link href={'/' + userName}>KSB</Link>
                </div>
                <div className="header-right">
                    <Link href={'/' + userName + '/games'}><a className="header-right-first">一覧</a></Link>
                    <Link href={'/' + userName + '/add'}><a className="header-btn">記録する</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Header