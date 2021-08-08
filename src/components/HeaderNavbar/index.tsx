



import './styles.scss';


type HeaderNavbarProps = {
    titleText: string;
    showNavBar?: boolean;

}
export function HeaderNavbar(props:HeaderNavbarProps) {


    return (
        
            <header className={'header-navbar'}>
                <div className="container">
                    <div>
                        <h1>{props.titleText}</h1>
                    </div>
                    {props.showNavBar ? (
                      <nav className={'nav-top'}>
                      <ul>
                        <li><a href="#">Portifolio</a></li>
                        <li><a href="#">Contato</a></li>
                      </ul>
                    </nav>
                    ) : ('')}
                    

                
                </div>
            </header>
        
        



    )
}



