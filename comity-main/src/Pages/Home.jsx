import React from 'react'
import ImgCarousel from '../Components/utils/ImgCarousel'
import FirstBlock from '../Components/homeBlocks/FirstBlock'
import SecondBlock from '../Components/homeBlocks/SecondBlock'
import ThirdBlock from '../Components/homeBlocks/ThirdBlock'
import FourthBlock from '../Components/homeBlocks/FourthBlock'
import Footer from '../Components/utils/Footer'
import ProjectSection from '../Components/homeBlocks/ProjectSection'
import { useNavigate } from 'react-router-dom'
import { contactRoute } from '../Common/routes'
import {items} from '../Common/imgCarouse'
import { lightNavyBg } from '../Common/constants'

function Home() {

  const navigate = useNavigate()

  const goToContact = () => {
    navigate(contactRoute.path);
    window.scrollTo(0, 0);
  }

  return (
  <>
    <FirstBlock goToContact={goToContact} />
    <ImgCarousel items={items} bgColor={lightNavyBg} />
    <SecondBlock />
    <ThirdBlock />
    <ProjectSection />
    <FourthBlock goToContact={goToContact} />
    <Footer />
  </>
  )
}

export default Home