import karekare from '../../assets/img/karekare.png';

const Home = () => {
    return (
        <div>
            <section id="hero" className="hero d-flex align-items-center section-bg">
                <div className="container">
                <div className="row justify-content-between gy-5">
                    <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                    <h2 data-aos="fade-up">Savor the flavors<br/>of Filipino cuisine</h2>
                    <p data-aos="fade-up" data-aos-delay="100">Experience the vibrant and colorful culture of the Philippines through our cuisine</p>
                    </div>
                    <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
                    <img src={karekare} className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300"/>
                    </div>
                </div>
                </div>
            </section>
       </div>
    );
}

export default Home;