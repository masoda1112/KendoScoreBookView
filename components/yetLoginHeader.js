import Link from 'next/link'
import { useRouter } from "next/router"
import React, { useState, useContext } from 'react'
import { ModalContext } from '../pages/_app'

const YetLoginHeader =()=> {
    const value = useContext(ModalContext)
    const onClickRegister =()=> {
        value.setRegisterModalOpen(true)
    }

    const onClickLogin =()=> {
        value.setLoginModalOpen(true)
    }

    return (
        <div className="header">
            <div className="header-inner">
                <div className="header-left">
                <p onClick={() => onClickLogin()}>ログイン</p>
                </div>
                <div className="header-right">
                    <Link href="/"><a className="header-btn" onClick={() => onClickRegister()}>無料登録</a></Link>
                </div>
            </div>
        </div>
    )
}

export default YetLoginHeader