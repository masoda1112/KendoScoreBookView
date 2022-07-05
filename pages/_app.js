import '../styles/globals.css'
import '../styles/Search.css'
import '../styles/index.css'
import '../styles/userIndex.css'
import '../styles/games.css'
import '../styles/game.css'
import '../styles/add.css'

import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
