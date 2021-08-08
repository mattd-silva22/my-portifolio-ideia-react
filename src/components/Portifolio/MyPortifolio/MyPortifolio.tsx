import { Fragment } from "react";
import { ProjectsCard } from "../ProjectsCard/ProjectsCard";

import './styles.scss'


export function MyPortifolio() {






    return (

        <Fragment>
            <div className='container-portifolio'>
                <div className='portifolio-area'>
                    <div className='top-area-portifolio'>
                        <h1>Meus Projetos</h1>
                    </div>

                    <div className='bottom-area-portifolio'>
                        <ProjectsCard></ProjectsCard>

                        <ProjectsCard></ProjectsCard>

                        <ProjectsCard></ProjectsCard>

                    </div>
                </div>
            </div>
        </Fragment>



    )

}