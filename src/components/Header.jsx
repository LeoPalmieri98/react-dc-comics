import comics from "./data/navbar";
function Header() {
    return (
        <header>
            <div className="container py-3">
                <div className="row align-items-center ">
                    <img id="dc-logo-custom" className="col-4" src="/dc-logo.png" alt="logoDC" />
                    <nav className="col-8 space-nav">
                        <ul className="d-flex list-unstyled gap-5 ms-5">
                            {comics.map((navbar) => (
                                <li key={navbar.id}><a href="#">{navbar.title}</a></li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;