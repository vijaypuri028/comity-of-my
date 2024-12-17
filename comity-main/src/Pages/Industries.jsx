import React from 'react'
import TopTemplete from '../Components/utils/TopTemplete'
import FirstBlock from '../Components/industriesBlocks/FirstBlock'
// import SecondBlock from '../Components/industriesBlocks/SecondBlock'
import Footer from '../Components/utils/Footer'
import { useContext } from 'react'
import industryContext from '../context/admin/industryContext'
import ProjectSection from '../Components/homeBlocks/ProjectSection'

const Industries = () => {

  const { allShowIndustries, getAllShowIndustries } = useContext(industryContext);

  React.useEffect(() => {
    getAllShowIndustries();
  }, [])

  return (
    <>
    <TopTemplete
    background={"https://cdn.pixabay.com/photo/2016/11/29/06/22/buildings-1867772_1280.jpg"}
    
    title={"Comity Edutech and you"}
    tagLine={"Working together to deliver value to your business."} 
    />
    <ProjectSection marginTop={"80px"} width={"100%"} />


    <FirstBlock allShowIndustries={allShowIndustries} />
    {/* <SecondBlock allShowIndustries={allShowIndustries} /> */}

    <Footer />
    </>
  )
}

export default Industries