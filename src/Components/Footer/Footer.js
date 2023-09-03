const Footer = () => {
    return (
        <div>
            <footer id="footer" className="footer">

            <div className="container">
            <div className="row gy-3">
                <div className="col-lg-3 col-md-6 d-flex">
                <i className="bi bi-geo-alt icon"></i>
                <div>
                    <h4>Address</h4>
                    <p>
                    A108 Adam Street <br/>
                    New York, NY 535022 - US<br/>
                    </p>
                </div>

                </div>

                <div className="col-lg-3 col-md-6 footer-links d-flex">
                <i className="bi bi-telephone icon"></i>
                <div>
                    <h4>Reservations</h4>
                    <p>
                    <strong>Phone:</strong> +1 5589 55488 55<br/>
                    <strong>Email:</strong> info@example.com<br/>
                    </p>
                </div>
                </div>

                <div className="col-lg-3 col-md-6 footer-links d-flex">
                <i className="bi bi-clock icon"></i>
                <div>
                    <h4>Opening Hours</h4>
                    <p>
                    <strong>Mon-Sat: 11AM</strong> - 23PM<br/>
                    Sunday: Closed
                    </p>
                </div>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                <h4>Follow Us</h4>
                <div className="social-links d-flex">
                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
                </div>

            </div>
            </div>

            <div className="container">
            <div className="copyright">
                &copy; Copyright <strong><span>Lea's Foodies</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
            </div>

            </footer>            
        </div>
    );
};

export default Footer;