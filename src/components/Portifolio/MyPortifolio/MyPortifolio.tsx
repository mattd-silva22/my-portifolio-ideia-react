import { Fragment } from "react";
import { ProjectsCard } from "../ProjectsCard/ProjectsCard";

import './styles.scss'


export function MyPortifolio() {



    let test = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget sapien eget urna consequat pulvinar nec vitae diam. Sed sit amet elit in neque porta dictum eget id diam. Duis tempus posuere enim sed pretium. '


    return (

        <Fragment>
            <div className='container-portifolio'>
                <div className='portifolio-area'>
                    <div className='top-area-portifolio'>
                        <h1>Meus Projetos</h1>
                    </div>

                    <div className='bottom-area-portifolio'>
                        <ProjectsCard cardTitle='projeto 1'  cardContent={test} projectImg={'https://picsum.photos/1280/720'} showGitLink={true} showHostLink={true} />
                        <ProjectsCard cardTitle='projeto 1'  cardContent={test} projectImg={'https://picsum.photos/1280/720'} showGitLink={true} showHostLink={true} />
                        <ProjectsCard cardTitle='projeto 1'  cardContent={test} projectImg={'https://picsum.photos/1280/720'} showGitLink={true} showHostLink={true} />

                        

                        
                    </div>
                </div>
            </div>
        </Fragment>



    )

}