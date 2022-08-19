import React, { useState } from "react";
import axios from "axios"
import { CookiesProvider } from 'react-cookie'

import Layout from '../components/layout'
import '../styles/globals.css'
import '../styles/Search.css'
import '../styles/index.css'
import '../styles/userIndex.css'
import '../styles/games.css'
import '../styles/game.css'
import '../styles/add.css'
import '../styles/validator.css'

export const ModalContext = React.createContext()


function MyApp({ Component, pageProps }) {
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [registerModalOpen, setRegisterModalOpen] = useState(false)


  // axios
  // .get('http://127.0.0.1:8000/') //リクエストを飛ばすpath
  // .then(response => {
  //     setPosts(response.data);
  // })  //成功した場合、postsを更新する（then）
  // .catch(() => {
  //     console.log('通信に失敗しました');
  // });

  return (
    <ModalContext.Provider value={{loginModalOpen, setLoginModalOpen, registerModalOpen, setRegisterModalOpen}}>
      <CookiesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CookiesProvider>
    </ModalContext.Provider>
  )
}

export default MyApp
