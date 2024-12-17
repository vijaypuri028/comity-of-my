import { Carousel } from 'antd';
import HSRT from '../utils/HSRT';
import PMFME from '../utils/PMFME';
import FOSTAC from '../utils/FOSTAC';

const ProjectSection = ({ width, marginTop }) => {
  return (
    <Carousel
      autoplay
      adaptiveHeight={true}
      dots={true} // Enable dots for navigation
      arrows={true} // Enable arrows for navigation
      style={{
        width: width,
        marginTop: marginTop,
      }}

    >
      <HSRT />
      <PMFME />
      <FOSTAC />
    </Carousel>
  );
};

// Custom styles for the arrows (optional)


export default ProjectSection;
