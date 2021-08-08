
import './styles.scss'



export function ProjectsCard() {
    let test = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget sapien eget urna consequat pulvinar nec vitae diam. Sed sit amet elit in neque porta dictum eget id diam. Duis tempus posuere enim sed pretium. '

    return (
        
            <article className='card-main'>
               

                <div className='card-img-area'>
                    <img src="https://picsum.photos/1280/720" alt="" />
                </div>
                <div className='text-container'>
                    <div className='card-title-area'>
                        <h1>projeto 1</h1>
                    </div>

                    <div className='card-text-area'>
                        <p>{test}</p>
                        <div className='links-area'>
                            <p>link 1</p>
                            <p>link 2</p>
                        </div>
                    </div>
                </div>

               
            </article>
        
    )
}