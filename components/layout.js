import Header from "./header"
import YetLoginHeader from "./yetLoginHeader";
import Footer from "./footer"
import { useRouter } from 'next/router';

const Layout =({children})=> {
    const router = useRouter();
    const path = router.pathname
    return (
        <>
            {(path == "/" || path == "/login") ? <YetLoginHeader /> : <Header /> }
                <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout