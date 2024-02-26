import Slider from "react-slick";

export const Serviceslider = () => {
    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        centerPadding: '25px',
        slidesToScroll: 1,
        initialSlide: 0,
    };

    return (
        <Slider {...settings}>
            <div>
                <div className="psc-card bg-grey h-100">
                    <div className='psc-card-body h-100'>
                        <h5>Micro Blading</h5>
                        <p className='pb-0'>Micro blading requires mastery and perfection skills to
                            get the right shape and filling for the brows.</p>
                    </div>
                </div>

                <div className="psc-card bg-grey h-100">
                    <div className='psc-card-body h-100'>
                        <h5>Nose/Ear Piercing</h5>
                        <p className='pb-0'>Using medical instrument to make the hole after numbing
                            the area and the studs are put in place.</p>
                    </div>
                </div>

                <div className="psc-card bg-grey h-100">
                    <div className='psc-card-body h-100'>
                        <div>
                            <h5>Ear lobe repair</h5>
                            <p className='pb-0'>The ear lobe is a delicate area and can become enlarged
                                due to heavy earrings or skin thinning due to aging.</p>
                        </div>
                    </div>
                </div>

                <div className="psc-card bg-grey h-100">
                    <div className='psc-card-body h-100'>
                        <h5>Cautery</h5>
                        <p className='pb-0'>Electrocauterization is a procedure that uses an
                            electric device to remove unwanted skin lesions.</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="psc-card bg-grey h-100">
                    <div className='psc-card-body h-100'>
                        <div>
                            <h5>Keloid treatment</h5>
                            <p className='pb-0'>Keloids are raised growth of hypertrophic scars on the
                                skin. they usually develop after trauma on the skin.</p>
                        </div>
                    </div>
                </div>

                <div className="psc-card bg-grey h-100">
                    <div className='psc-card-body h-100'>
                        <h5>Infusion therapy</h5>
                        <p className='pb-0'>Our body requires an optimum amount of vitamins and
                            minerals to keep our immune system strong.</p>
                    </div>
                </div>

                <div className="psc-card bg-grey h-100">
                    <div className='psc-card-body h-100'>
                        <h5>Tattoo removal</h5>
                        <p className='pb-0'>You may get rid of the tattoo which you had got done
                            with tremendous zest, at some point in your life.</p>
                    </div>
                </div>

                <div className="psc-card bg-grey h-100">
                    <div className='psc-card-body h-100'>
                        <h5>Hair Care</h5>
                        <p className='pb-0'>Our experienced dermatologists provide personalized consultation and a range of hair care services to help you achieve healthy and lustrous hair.</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

