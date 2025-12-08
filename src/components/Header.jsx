function Header() {
    return (
        <header>
            <div className="container d-flex align-items-center py-3">
                <div className="row align-items-center">
                    <img id="dc-logo-custom" className="col" src="/dc-logo.png" alt="logoDC" />
                    <nav className="col-8 justify-content-end">
                        <ul className="d-flex list-unstyled gap-4 align-items-center ms-5 main-nav">
                            <li><a href="#">CHARACTERS</a></li>
                            <li><a href="#">COMICS</a></li>
                            <li><a href="#">MOVIES</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">GAMES</a></li>
                            <li><a href="#">COLLECTIBLES</a></li>
                            <li><a href="#">VIDEOS</a></li>
                            <li><a href="#">FANS</a></li>
                            <li><a href="#">NEWS</a></li>
                            <li><a href="#">SHOP</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;