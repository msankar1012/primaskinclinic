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
                    <p className='pb-0 text-large'><em>"Doctor listens to my skin problems patiently and given the best solution for my issues. Received faster results through her medication.. Thanks a lot Dr. Mohanalakshmi for given hope and made me confident.. Ambience is also too good"</em></p>
                </div>
                <div>
                    <p className='pb-0 text-large'><em>"Doctor is very caring and listening to the problem very well. She understand my issue and gave medicines which got cured completely.. the best skin doctor, I would say."</em></p>
                </div>
                <div>
                    <p className='pb-0 text-large'><em>"I would recommed to visit Dr. Mokanalakshmi for good treatment , explanation of my condition in simple words and well maintained clinic. Got cured completely."</em></p>
                </div>
            </Slider>
        </div>
    );
}
