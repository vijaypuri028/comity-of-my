// import { Carousel } from 'antd';
import HSRT from '../utils/HSRT';
import PMFME from '../utils/PMFME';
import FOSTAC from '../utils/FOSTAC';
import Garments from '../utils/Garments';

const ProjectSection = ({ width, marginTop }) => {
  return (
    // <Carousel
    //   autoplay
    //   adaptiveHeight={true}
    //   dots={true} // Enable dots for navigation
    //   arrows={true} // Enable arrows for navigation
    //   autoplaySpeed={1500} // Set sliding time to 5000ms (5 seconds)
    //   style={{
    //     width: width,
    //     marginTop: marginTop,
    //   }}
    // >
    //   <HSRT />
    //   <PMFME />
    //   <FOSTAC />
    //   <Garments />
    // </Carousel>
   <>
      <HSRT />
      <PMFME />
      <FOSTAC />
      <Garments />
   </>
  );
};

export default ProjectSection;
