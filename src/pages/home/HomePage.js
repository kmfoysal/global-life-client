import React from 'react'
import bannerImg from '../../assets/images/banner.png'
import Banner from '../../components/Banner/Banner'
const HomePage = () => {
  return (
    <div>
          <Banner bannerBg={bannerImg} bannerTitle={'Shared local knowledge for relocated families in Portugal.'} bannerIntro={"Global Life is the one stop shop for expats to find all the information they need to make their new move more enjoyable, easier and less hassle free."} inputText={'Find what’s happening, recomendation and more... '} />
    </div>
  )
}

export default HomePage