import Slider from "react-slick";
export const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container pb-4">
            <Slider {...settings}>
                <div>
                    <p className='pb-0 text-large'><em>"We pride ourselves on providing individualized, superior
                        cosmetic services using only state-of-the-art technologies. However, what truly
                        distinguishes PRIMA Skin Clinic as a leader in the beauty treatment industry, is
                        our passion for helping people and an unwavering commitment to our clients
                        throughout the entire treatment process."</em></p>
                </div>
                <div>
                    <p className='pb-0 text-large'><em>"We pride ourselves on providing individualized, superior
                        cosmetic services using only state-of-the-art technologies. However, what truly
                        distinguishes PRIMA Skin Clinic as a leader in the beauty treatment industry, is
                        our passion for helping people and an unwavering commitment to our clients
                        throughout the entire treatment process."</em></p>
                </div>
                <div>
                    <p className='pb-0 text-large'><em>"We pride ourselves on providing individualized, superior
                        cosmetic services using only state-of-the-art technologies. However, what truly
                        distinguishes PRIMA Skin Clinic as a leader in the beauty treatment industry, is
                        our passion for helping people and an unwavering commitment to our clients
                        throughout the entire treatment process."</em></p>
                </div>
            </Slider>
        </div>
    );
}
