import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { Button } from '@mui/material'
import Discription from '../components/discription'
import Link from 'next/link'


const TopPage = () => {
  const discriptionArray = [
    {
      title : "平均的な手数",
      description: "1分あたりどのくらいの技を出しているのか、数値にして把握することができます。",
      image: "HomePage.png"
    },
    {
      title : "有効打となる確率",
      description: "自分が出した技の内どのくらいの技が有効打となっているのか、数値にして把握することができます。",
      image: "HomePage.png"
    },
    {
      title : "出した技の構成比",
      description: "自分がどの技をどのくらい繰り出しているのか、円グラフで視覚的に把握できます。",
      image: "HomePage.png"
    },
    {
      title : "打たれた技の構成比",
      description: "自分がどのような技を打たれやすいのか、円グラフで視覚的に把握できます。",
      image: "HomePage.png"
    }
  ]
  return (
    <>
      <div className='top-page'>
        <div className='top-section'>
          <div className='top-section-container'>
            <h1 className="top-section-title">剣道を科学しよう。</h1>
            <p className="top-section-description">スコア表に残らない、一本にはならなかった技。それらを記録することで、新たな洞察が得られるかもしれません。</p>
            <Link href="/signup"><Button variant="contained">無料会員登録</Button></Link>
          </div>
        </div>
        <div className='discriptions-section'>
          <h2 className="discriptions-section-title">KSBでわかるようになること</h2>
          <div className ='discriptions-list'>
            {
              discriptionArray.map((content,index)=>(
                <div className="discription" key={index}>
                  <Discription title={content.title} description={content.description} image={content.image}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default TopPage
