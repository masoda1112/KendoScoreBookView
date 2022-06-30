import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@mui/material'
import Discription from '../components/description'


const TopPage = () => {
  const discriptionArray = [
    {
      title : "平均的な手数",
      description: "1分あたりどのくらいの技を出しているのか、数値にして把握することができ、他の剣道家の平均値と比較することができます。",
      image: "HomePage.png"
    },
    {
      title : "有効打となる確率",
      description: "自分が出した技の内どのくらいの技が有効打となっているのか、数値にして把握することができ、他の剣道家の平均値と比較することができます。",
      image: "HomePage.png"
    },
    {
      title : "出した技の構成比",
      description: "自分が出した技はどのような構成比になっているのか、円グラフで直感的に把握できます。",
      image: "HomePage.png"
    },
    {
      title : "打たれた技の構成比",
      description: "自分が一本を取られた技はどのような構成比になっているのか、円グラフで直感的に把握できます。",
      image: "HomePage.png"
    }
  ]
  return (
    <>
      <div className='top-page'>
        <div className='top-section'>
          <h1 className="top-section-title">剣道を科学しよう。</h1>
          <p className="top-section-description">スコア表に残らない、一本にはならなかった技。それらを記録することで、新たな洞察が得られるかもしれません。</p>
          <Button variant="contained">無料会員登録</Button>
        </div>
        <div className='discriptions-section'>
          <div className ='discriptions-list'>
            {
              discriptionArray.map((content,index)=>(
                <div className="description" key={index}>
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
