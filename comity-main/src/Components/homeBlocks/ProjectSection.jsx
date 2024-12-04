import { Carousel } from 'antd'
import Project from '../utils/Project'
import { projects } from '../../Common/projectData'

const ProjectSection = () => {
  return (
    <Carousel autoplay adaptiveHeight={true} style={{
        width: '100%',
    }} >
        {
            projects?.map(project => 
                <Project key={project.id} project={project} />
            )
        }
    </Carousel>
  )
}

export default ProjectSection