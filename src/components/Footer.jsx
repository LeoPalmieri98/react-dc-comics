import navfooter from "./data/navfooterblue";
import navfooterlinks from "./data/navfooterlinks";
function Footer() {
    return (
        <header>
            <div className="bg-primary d-flex justify-content-center align-items-center py-4 gap-5">
                {navfooter.map(item => {
                    return <>
                        <img className="icon-img" src={item.img} alt={item.description} />
                        <p className="text-white fs-5">{item.title}</p>
                    </>
                })}
            </div>
            <div className="bg-footer-dark pt-5 pb-3 bg-dc-comics">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {navfooterlinks.slice(0, 2).map((section) => (
                                <div key={section.title} className="mb-4">
                                    <h5 className="fw-bold text-white mb-2">{section.title}</h5>
                                    <ul className="list-unstyled">
                                        {section.links.map((link) => (
                                            <li key={link.id}>
                                                <a href={link.href} className="text-white text-opacity-75 text-decoration-none small">
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        {navfooterlinks.slice(2).map((section) => (
                            <div className="col" key={section.title}>
                                <h5 className="fw-bold text-white mb-2">{section.title}</h5>
                                <ul className="list-unstyled">
                                    {section.links.map((link) => (
                                        <li key={link.id}>
                                            <a href={link.href} className="text-white text-opacity-75 text-decoration-none small">
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="col-md-6">
                            <img className="img-dc-footer" src="/dc-logo-bg.png" alt="bg-dc-foot" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-dark py-3">
                <div className="container d-flex justify-content-between align-items-center py-4">
                    <button className="btn btn-outline-primary text-white fw-bold">SIGN-UP NOW!</button>
                    <div className="d-flex align-items-center gap-3">
                        <span className="text-primary fw-bold">FOLLOW US</span>
                        <img className="" src="/footer-facebook.png" alt="facebook-icon" />
                        <img className="" src="/footer-twitter.png" alt="twitter-icon" />
                        <img className="" src="/footer-youtube.png" alt="youtube-icon" />
                        <img className="" src="/footer-pinterest.png" alt="pinterest-icon" />
                        <img className="" src="/footer-periscope.png" alt="periscope-icon" />
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Footer;