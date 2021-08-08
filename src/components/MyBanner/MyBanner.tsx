import { Fragment } from "react";

import './style.scss'


export function MyBanner() {
    let test = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget sapien eget urna consequat pulvinar nec vitae diam. Sed sit amet elit in neque porta dictum eget id diam. Duis tempus posuere enim sed pretium. Mauris pharetra imperdiet enim at cursus. Nulla facilisi. Mauris porta viverra quam sit amet dignissim. Integer lacinia sit amet erat quis consequat. Nam laoreet ornare augue, maximus imperdiet enim. '

    return (
        
        <Fragment>
            <div className={'container-main'}>
                <main>
                    <div className='top-area-photo-bio'>
                        <img src="https://picsum.photos/200/300" alt="foto aqui" />
                        <p>Matheus Barretto - desenvolvedor WEB</p>
                    </div>

                    <div className='bottom-area-bio-text'>
                        <h1>Quem sou</h1>
                        <p>{test}</p>
                    </div>
                </main>
            </div>
        </Fragment>
    )





}