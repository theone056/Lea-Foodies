import BackGroundImage from '../../assets/img/AboutUs.jpg';

const About = () => {
    return (
        <div>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                    <h2>About Us</h2>
                    <p>Learn More <span>About Us</span></p>
                    </div>

                    <div className="row gy-4">
                    <div className="col-lg-7 position-relative about-img" style={{backgroundImage: "url(" + BackGroundImage + ")", backgroundSize: 'cover'}} data-aos="fade-up" data-aos-delay="150">
                        <div className="call-us position-absolute">
                            <h4>Order Now</h4>
                            <p>+1 5589 55488 55</p>
                        </div>
                    </div>
                    <div className="col-lg-5 d-flex align-items-start" data-aos="fade-up" data-aos-delay="300">
                        <div className="content ps-0 ps-lg-5">
                            <p>
                                Welcome to Lea's Fodies, your online gateway to the vibrant and delectable world of Filipino cuisine. 
                                Our mission is to share the rich tapestry of flavors, traditions, and stories that make Filipino food a true culinary treasure.
                                <br/>
                                <br/>
                                At Lea's Fodies, we're passionate about preserving and promoting the diverse range of Filipino dishes that have been lovingly passed down through generations. 
                                Our curated collection of recipes, cooking tips, and cultural insights allows you to explore the heart and soul of Filipino cooking from the comfort of your own kitchen. 
                                Whether you're a seasoned chef or a beginner in the world of Filipino cuisine, we're here to inspire, educate, and celebrate the flavors of the Philippines with you. 
                                Join us on this flavorful journey, and let's savor the essence of the Philippines together.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;