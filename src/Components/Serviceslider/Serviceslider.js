import Slider from "react-slick";

export const Serviceslider = () => {
    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        centerPadding: '25px',
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            <div className="psc-card bg-grey h-100">
                <div className='psc-card-body text-center h-100'>
                    <div className="icon-rounded mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512">
                            <path
                                d="M232 192C232 174.3 246.3 160 264 160H312C329.7 160 344 174.3 344 192V232H384C401.7 232 416 246.3 416 264V312C416 329.7 401.7 344 384 344H344V384C344 401.7 329.7 416 312 416H264C246.3 416 232 401.7 232 384V344H192C174.3 344 160 329.7 160 312V264C160 246.3 174.3 232 192 232H232V192zM264 192V264H192V312H264V384H312V312H384V264H312V192H264zM277.4 4.002C283.5-1.334 292.5-1.334 298.6 4.002L384 79.37V56C384 42.75 394.7 31.1 408 31.1H488C501.3 31.1 512 42.75 512 56V192.3L570.6 244C577.2 249.8 577.8 259.1 571.1 266.6C566.2 273.2 556 273.8 549.4 267.1L512 234.1V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V234.1L26.59 267.1C19.96 273.8 9.849 273.2 4.003 266.6C-1.844 259.1-1.212 249.8 5.414 244L277.4 4.002zM480 164.1V64H416V107.6L480 164.1zM96 206.7V432C96 458.5 117.5 480 144 480H432C458.5 480 480 458.5 480 432V206.7L288 37.34L96 206.7z"/>
                        </svg>
                    </div>
                    <div>
                        <h5>Micro Blading</h5>
                        <p className='pb-0'>Micro blading requires mastery and perfection skills to
                            get the right shape and filling for the brows.</p>
                    </div>
                </div>
            </div>

            <div className="psc-card bg-grey h-100">
                <div className='psc-card-body text-center h-100'>
                    <div className="icon-rounded mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512">
                            <path
                                d="M232 192C232 174.3 246.3 160 264 160H312C329.7 160 344 174.3 344 192V232H384C401.7 232 416 246.3 416 264V312C416 329.7 401.7 344 384 344H344V384C344 401.7 329.7 416 312 416H264C246.3 416 232 401.7 232 384V344H192C174.3 344 160 329.7 160 312V264C160 246.3 174.3 232 192 232H232V192zM264 192V264H192V312H264V384H312V312H384V264H312V192H264zM277.4 4.002C283.5-1.334 292.5-1.334 298.6 4.002L384 79.37V56C384 42.75 394.7 31.1 408 31.1H488C501.3 31.1 512 42.75 512 56V192.3L570.6 244C577.2 249.8 577.8 259.1 571.1 266.6C566.2 273.2 556 273.8 549.4 267.1L512 234.1V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V234.1L26.59 267.1C19.96 273.8 9.849 273.2 4.003 266.6C-1.844 259.1-1.212 249.8 5.414 244L277.4 4.002zM480 164.1V64H416V107.6L480 164.1zM96 206.7V432C96 458.5 117.5 480 144 480H432C458.5 480 480 458.5 480 432V206.7L288 37.34L96 206.7z"/>
                        </svg>
                    </div>
                    <div>
                        <h5>Nose/Ear Piercing</h5>
                        <p className='pb-0'>Using medical instrument to make the hole after numbing
                            the area and the studs are put in place.</p>
                    </div>
                </div>
            </div>

            <div className="psc-card bg-grey h-100">
                <div className='psc-card-body text-center h-100'>
                    <div className="icon-rounded mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512">
                            <path
                                d="M232 192C232 174.3 246.3 160 264 160H312C329.7 160 344 174.3 344 192V232H384C401.7 232 416 246.3 416 264V312C416 329.7 401.7 344 384 344H344V384C344 401.7 329.7 416 312 416H264C246.3 416 232 401.7 232 384V344H192C174.3 344 160 329.7 160 312V264C160 246.3 174.3 232 192 232H232V192zM264 192V264H192V312H264V384H312V312H384V264H312V192H264zM277.4 4.002C283.5-1.334 292.5-1.334 298.6 4.002L384 79.37V56C384 42.75 394.7 31.1 408 31.1H488C501.3 31.1 512 42.75 512 56V192.3L570.6 244C577.2 249.8 577.8 259.1 571.1 266.6C566.2 273.2 556 273.8 549.4 267.1L512 234.1V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V234.1L26.59 267.1C19.96 273.8 9.849 273.2 4.003 266.6C-1.844 259.1-1.212 249.8 5.414 244L277.4 4.002zM480 164.1V64H416V107.6L480 164.1zM96 206.7V432C96 458.5 117.5 480 144 480H432C458.5 480 480 458.5 480 432V206.7L288 37.34L96 206.7z"/>
                        </svg>
                    </div>
                    <div>
                        <h5>Ear lobe repair</h5>
                        <p className='pb-0'>The ear lobe is a delicate area and can become enlarged
                            due to heavy earrings or skin thinning due to aging.</p>
                    </div>
                </div>
            </div>

            <div className="psc-card bg-grey h-100">
                <div className='psc-card-body text-center h-100'>
                    <div className="icon-rounded mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512">
                            <path
                                d="M232 192C232 174.3 246.3 160 264 160H312C329.7 160 344 174.3 344 192V232H384C401.7 232 416 246.3 416 264V312C416 329.7 401.7 344 384 344H344V384C344 401.7 329.7 416 312 416H264C246.3 416 232 401.7 232 384V344H192C174.3 344 160 329.7 160 312V264C160 246.3 174.3 232 192 232H232V192zM264 192V264H192V312H264V384H312V312H384V264H312V192H264zM277.4 4.002C283.5-1.334 292.5-1.334 298.6 4.002L384 79.37V56C384 42.75 394.7 31.1 408 31.1H488C501.3 31.1 512 42.75 512 56V192.3L570.6 244C577.2 249.8 577.8 259.1 571.1 266.6C566.2 273.2 556 273.8 549.4 267.1L512 234.1V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V234.1L26.59 267.1C19.96 273.8 9.849 273.2 4.003 266.6C-1.844 259.1-1.212 249.8 5.414 244L277.4 4.002zM480 164.1V64H416V107.6L480 164.1zM96 206.7V432C96 458.5 117.5 480 144 480H432C458.5 480 480 458.5 480 432V206.7L288 37.34L96 206.7z"/>
                        </svg>
                    </div>
                    <div>
                        <h5>Cautery</h5>
                        <p className='pb-0'>Electrocauterization is a procedure that uses an
                            electric device to remove unwanted skin lesions.</p>
                    </div>
                </div>
            </div>

            <div className="psc-card bg-grey h-100">
                <div className='psc-card-body text-center h-100'>
                    <div className="icon-rounded mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512">
                            <path
                                d="M232 192C232 174.3 246.3 160 264 160H312C329.7 160 344 174.3 344 192V232H384C401.7 232 416 246.3 416 264V312C416 329.7 401.7 344 384 344H344V384C344 401.7 329.7 416 312 416H264C246.3 416 232 401.7 232 384V344H192C174.3 344 160 329.7 160 312V264C160 246.3 174.3 232 192 232H232V192zM264 192V264H192V312H264V384H312V312H384V264H312V192H264zM277.4 4.002C283.5-1.334 292.5-1.334 298.6 4.002L384 79.37V56C384 42.75 394.7 31.1 408 31.1H488C501.3 31.1 512 42.75 512 56V192.3L570.6 244C577.2 249.8 577.8 259.1 571.1 266.6C566.2 273.2 556 273.8 549.4 267.1L512 234.1V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V234.1L26.59 267.1C19.96 273.8 9.849 273.2 4.003 266.6C-1.844 259.1-1.212 249.8 5.414 244L277.4 4.002zM480 164.1V64H416V107.6L480 164.1zM96 206.7V432C96 458.5 117.5 480 144 480H432C458.5 480 480 458.5 480 432V206.7L288 37.34L96 206.7z"/>
                        </svg>
                    </div>
                    <div>
                        <h5>Keloid treatment</h5>
                        <p className='pb-0'>Keloids are raised growth of hypertrophic scars on the
                            skin. they usually develop after trauma on the skin.</p>
                    </div>
                </div>
            </div>

            <div className="psc-card bg-grey h-100">
                <div className='psc-card-body text-center h-100'>
                    <div className="icon-rounded mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512">
                            <path
                                d="M232 192C232 174.3 246.3 160 264 160H312C329.7 160 344 174.3 344 192V232H384C401.7 232 416 246.3 416 264V312C416 329.7 401.7 344 384 344H344V384C344 401.7 329.7 416 312 416H264C246.3 416 232 401.7 232 384V344H192C174.3 344 160 329.7 160 312V264C160 246.3 174.3 232 192 232H232V192zM264 192V264H192V312H264V384H312V312H384V264H312V192H264zM277.4 4.002C283.5-1.334 292.5-1.334 298.6 4.002L384 79.37V56C384 42.75 394.7 31.1 408 31.1H488C501.3 31.1 512 42.75 512 56V192.3L570.6 244C577.2 249.8 577.8 259.1 571.1 266.6C566.2 273.2 556 273.8 549.4 267.1L512 234.1V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V234.1L26.59 267.1C19.96 273.8 9.849 273.2 4.003 266.6C-1.844 259.1-1.212 249.8 5.414 244L277.4 4.002zM480 164.1V64H416V107.6L480 164.1zM96 206.7V432C96 458.5 117.5 480 144 480H432C458.5 480 480 458.5 480 432V206.7L288 37.34L96 206.7z"/>
                        </svg>
                    </div>
                    <div>
                        <h5>Infusion therapy</h5>
                        <p className='pb-0'>Our body requires an optimum amount of vitamins and
                            minerals to keep our immune system strong.</p>
                    </div>
                </div>
            </div>

            <div className="psc-card bg-grey h-100">
                <div className='psc-card-body text-center h-100'>
                    <div className="icon-rounded mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512">
                            <path
                                d="M232 192C232 174.3 246.3 160 264 160H312C329.7 160 344 174.3 344 192V232H384C401.7 232 416 246.3 416 264V312C416 329.7 401.7 344 384 344H344V384C344 401.7 329.7 416 312 416H264C246.3 416 232 401.7 232 384V344H192C174.3 344 160 329.7 160 312V264C160 246.3 174.3 232 192 232H232V192zM264 192V264H192V312H264V384H312V312H384V264H312V192H264zM277.4 4.002C283.5-1.334 292.5-1.334 298.6 4.002L384 79.37V56C384 42.75 394.7 31.1 408 31.1H488C501.3 31.1 512 42.75 512 56V192.3L570.6 244C577.2 249.8 577.8 259.1 571.1 266.6C566.2 273.2 556 273.8 549.4 267.1L512 234.1V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V234.1L26.59 267.1C19.96 273.8 9.849 273.2 4.003 266.6C-1.844 259.1-1.212 249.8 5.414 244L277.4 4.002zM480 164.1V64H416V107.6L480 164.1zM96 206.7V432C96 458.5 117.5 480 144 480H432C458.5 480 480 458.5 480 432V206.7L288 37.34L96 206.7z"/>
                        </svg>
                    </div>
                    <div>
                        <h5>Tattoo removal</h5>
                        <p className='pb-0'>You may get rid of the tattoo which you had got done
                            with tremendous zest, at some point in your life.</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

