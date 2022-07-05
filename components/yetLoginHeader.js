import Link from 'next/link'
import { useRouter } from "next/router"

const YetLoginHeader =()=> {
    return (
        <div className="header">
            <div className="header-inner">
                <div className="header-left">
                <Link href="/">KSB</Link>
                </div>
                <div className="header-right">
                    <Link href="/"><a className="header-btn">無料会員登録</a></Link>
                </div>
            </div>
        </div>
    )
}

export default YetLoginHeader