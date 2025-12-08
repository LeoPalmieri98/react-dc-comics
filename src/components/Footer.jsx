function Footer() {
    return (
        <header>
            <div className="bg-primary d-flex justify-content-center align-items-center  py-4 gap-5">
                <img className="icon-img" src="/buy-comics-digital-comics.png" alt="DC-phone" /><p className="text-white ">DIGITAL COMICS</p>
                <img className="icon-img" src="/buy-comics-merchandise.png" alt="DC-phone" /><p className="text-white ">DC MERCHANDISE</p>
                <img className="img-position" src="/buy-comics-shop-locator.png" alt="DC-phone" /><p className="text-white ">SUBSCRIPTION</p>
                <img className="icon-img" src="/buy-comics-subscriptions.png" alt="DC-phone" /><p className="text-white ">COMIC SHOP LOCATOR</p>
                <img className="icon-img" src="/buy-dc-power-visa.svg" alt="DC-phone" /><p className="text-white">DC POWER VISA</p>
            </div>
            <div className="bg-footer-dark pt-5 pb-3 bg-dc-comics">
                <div className="container">
                    <div className="row">

                        <div className="col-md-2">
                            <h5 className="fw-bold text-white mb-2">DC COMICS</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">Characters</a></li>
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">Comics</a></li>
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">Movies</a></li>
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">TV</a></li>
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">Games</a></li>
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">Videos</a></li>
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">News</a></li>
                            </ul>
                            <h5 class="fw-bold text-white mt-3 mb-2">SHOP</h5>
                            <ul class="list-unstyled">
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">Shop DC</a></li>
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">Shop DC Collectibles</a></li>
                            </ul>
                        </div>

                        <div class="col-md-2">
                            <h5 class="fw-bold text-white mb-2">DC</h5>
                            <ul class="list-unstyled">
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">Terms Of Use</a></li>
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">Privacy Policy (New)</a></li>
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">Ad Choices</a></li>
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">Advertising</a></li>
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">Jobs</a></li>
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">Subscriptions</a></li>
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">Contact Us</a></li>
                            </ul>
                        </div>

                        <div class="col-md-2">
                            <h5 className="fw-bold text-white mb-2">SITES</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">DC</a></li>
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">MAD Magazine</a></li>
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">DC Kids</a></li>
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">DC Universe</a></li>
                                <li><a href="#" className="text-white text-opacity-75 text-decoration-none small">DC Power Visa</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <img className="img-dc-footer" src="/dc-logo-bg.png" alt="bg-dc-foot" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark py-3">
                <div className="container d-flex justify-content-between align-items-center py-4">
                    <button className="btn btn-outline-primary text-white fw-bold">SIGN-UP NOW!</button>
                    <div className="d-flex align-items-center gap-3">
                        <span class="text-primary fw-bold">FOLLOW US</span>
                        <img className="icon-img-footer" src="/footer-facebook.png" alt="facebook-icon" />
                        <img className="icon-img-footer" src="/footer-twitter.png" alt="twitter-icon" />
                        <img className="icon-img-footer" src="/footer-youtube.png" alt="youtube-icon" />
                        <img className="icon-img-footer" src="/footer-pinterest.png" alt="pinterest-icon" />
                        <img className="icon-img-footer" src="/footer-periscope.png" alt="periscope-icon" />
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Footer;