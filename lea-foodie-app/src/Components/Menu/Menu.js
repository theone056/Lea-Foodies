import menuItem1 from '../../assets/img/menu/sisig.jpg';
import menuItem2 from '../../assets/img/menu/bistek.jpg';
import menuItem3 from '../../assets/img/menu/lecheflan.jpg';
import menuItem4 from '../../assets/img/menu/liempo.jpg';
import menuItem5 from '../../assets/img/menu/lumpia.jpg';
import menuItem6 from '../../assets/img/menu/menudo.jpg';
import menuItem7 from '../../assets/img/menu/paklay.jpg';
import menuItem8 from '../../assets/img/menu/pancit.jpg';
import menuItem9 from '../../assets/img/menu/lechonbelly.jpg';

const Menu = () => {
    return (
        <div>
            <section id="menu" className="menu section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Our Menu</h2>
                        <p>Check Our <span>Lea-mmy Menu</span></p>
                    </div>
                    <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
                        <div className="tab-pane fade active show" id="menu-starters">
                            <div className="row gy-5">

                                <div className="col-lg-4 menu-item">
                                    <a href={menuItem1} className="glightbox"><img src={menuItem1} className="menu-img img-fluid menu-img-height" alt="" /></a>
                                    <h4>Pork Sisig</h4>
                                    <p className="ingredients">
                                    Pork bits, onions, lemons, egg, and chillies
                                    </p>
                                    <p className="price">
                                    $5.95
                                    </p>
                                </div>

                                <div className="col-lg-4 menu-item">
                                    <a href={menuItem2} className="glightbox"><img src={menuItem2} className="menu-img img-fluid menu-img-height" alt="" /></a>
                                    <h4>Pinoy Beef Steak (Bistek Tagalog)</h4>
                                    <p className="ingredients">
                                    Thin slices of beef and onions
                                    </p>
                                    <p className="price">
                                    $14.95
                                    </p>
                                </div>

                                <div className="col-lg-4 menu-item">
                                    <a href={menuItem3} className="glightbox"><img src={menuItem3} className="menu-img img-fluid menu-img-height" alt="" /></a>
                                    <h4>Leche Flan</h4>
                                    <p className="ingredients">
                                    Egg yolks, milk, sugar, and vanilla extract
                                    </p>
                                    <p className="price">
                                    $8.95
                                    </p>
                                </div>

                                <div className="col-lg-4 menu-item">
                                    <a href={menuItem4} className="glightbox"><img src={menuItem4} className="menu-img img-fluid menu-img-height" alt="" /></a>
                                    <h4>Pork Belly slices</h4>
                                    <p className="ingredients">
                                    Pork
                                    </p>
                                    <p className="price">
                                    $12.95
                                    </p>
                                </div>

                                <div className="col-lg-4 menu-item">
                                    <a href={menuItem5} className="glightbox"><img src={menuItem5} className="menu-img img-fluid menu-img-height" alt=""/></a>
                                    <h4>Pork Lumpia</h4>
                                    <p className="ingredients">
                                    Ground pork, carrots, lumpia wrapper, eggs
                                    </p>
                                    <p className="price">
                                    $12.95
                                    </p>
                                </div>

                                <div className="col-lg-4 menu-item">
                                    <a href={menuItem6} className="glightbox"><img src={menuItem6} className="menu-img img-fluid menu-img-height" alt=""/></a>
                                    <h4>Pork Menudo</h4>
                                    <p className="ingredients">
                                    Pork, soy sauce, tomato sauce, green peas, potatoes, and carrots
                                    </p>
                                    <p className="price">
                                    $15.15
                                    </p>
                                </div>

                                <div className="col-lg-4 menu-item">
                                    <a href={menuItem7} className="glightbox"><img src={menuItem7} className="menu-img img-fluid menu-img-height" alt=""/></a>
                                    <h4>Paklay</h4>
                                    <p className="ingredients">
                                    Pig belly and innards, pineapples, bell peppers, bamboo shoots
                                    </p>
                                    <p className="price">
                                    $8.75
                                    </p>
                                </div>

                                <div className="col-lg-4 menu-item">
                                    <a href={menuItem8} className="glightbox"><img src={menuItem8} className="menu-img img-fluid menu-img-height" alt=""/></a>
                                    <h4>Pancit</h4>
                                    <p className="ingredients">
                                    Dried rice noodles, pork, chicken, carrots, cabbage, and lemon 
                                    </p>
                                    <p className="price">
                                    $12.65
                                    </p>
                                </div>

                                <div className="col-lg-4 menu-item">
                                    <a href={menuItem9} className="glightbox"><img src={menuItem9} className="menu-img img-fluid menu-img-height" alt=""/></a>
                                    <h4>Lechon Belly</h4>
                                    <p className="ingredients">
                                    Roasted pork belly with lemon grass
                                    </p>
                                    <p className="price">
                                    $29.45
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>                            
        </div>
    );
};

export default Menu;