import Link from 'next/link'
import { useRouter } from "next/router"
import React, { useState, useContext } from 'react'
import { getUserName } from '../public/constants'

const Header =()=> {
    const userName = getUserName()
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