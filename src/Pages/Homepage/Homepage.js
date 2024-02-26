import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'

import {Helmet} from "react-helmet-async";
import logo from '../../images/logo-prima.svg'
import imgHero from '../../images/hero-home.svg'
import Img1 from '../../images/img-1.svg'
import Img2 from '../../images/img-2.png'
import Img3 from '../../images/img-3.png'
import pkg from '../../../package.json'
import Map from "../../Components/Map/Map";
import {Serviceslider} from "../../Components/Serviceslider/Serviceslider";
import {Testimonials} from "../../Components/Tesitimonials/Testimonials";


export const Homepage = () => {
    return (
        <>
            <Helmet>
                <title>Prima Skin Clinic</title>
                <meta name="description" content="Welcome to Prima Skin and Aesthetics Clinic, your partner in achieving healthy and radiant skin and hair"/>
                <meta property="og:title" content="Prima Skin Clinic" data-rh="true" />
                <meta property="og:description" content="Welcome to Prima Skin and Aesthetics Clinic, your partner in achieving healthy and radiant skin and hair" data-rh="true" />
                <meta property="og:image" content={ logo } data-rh="true" />
            </Helmet>

            <div className='content-main' id={'home'}>
            <div className='hero-home position-relative'>
                <figure><img src={imgHero} alt={pkg.name}/></figure>

                <div className="hero-text d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 pe-lg-5">
                                <h1>Unlock Your Natural Beauty</h1>
                                <p className='mb-3'>Welcome to Prima Skin and Aesthetics Clinic, your partner in achieving healthy and radiant skin and hair. Our team of experienced dermatologists provides personalized consultation and a range of services tailored to meet your unique needs. We believe that everyone deserves healthy and glowing skin and hair, and we’re here to help you achieve just that.
                                </p>
                                <a href="#book" className='btn btn-primary btn-lg'>Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id={'services'}>
                <div className="container py-80">
                    <h2 className='text-center mb-4'>Benefit Using Our Services</h2>
                    <div className="service-slider-container">
                        <Serviceslider />
                    </div>
                </div>
            </div>


            <div className="py-80 bg-grey">
                <div className="container">
                    <div className="row flex-lg-row-reverse align-items-center">
                        <div className="col-lg-6 ps-lg-5">
                            <h2>Acne-Free Skin: A Journey with Prima Skin and Aesthetics Clinic</h2>
                            <p>Discover how we helped our client achieve clear, healthy skin with our personalized consultation and effective treatment plan for acne-prone skin.</p>

                            <ul className={'check-ul-list'}>
                                <li>Personalized consultation</li>
                                <li>Customized treatment plan</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                            <figure><img src={Img2} alt={pkg.name}/></figure>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-80 bg-grey">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pe-lg-5">
                            <h2>Hair Transplant: A Life-Changing Experience with Prima Skin and Aesthetics Clinic</h2>
                            <p>Learn how we transformed our client’s life by providing a painless, effective hair transplant procedure that helped restore their confidence and self-esteem.</p>

                            <ul className={'check-ul-list'}>
                                <li>Painless procedure</li>
                                <li>Natural-looking results</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                            <figure><img src={Img3} alt={pkg.name}/></figure>
                        </div>
                    </div>
                </div>
            </div>


            <div id={'about'}>
                <div className="container py-80">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-5 pe-lg-5">
                            <h2>About Me</h2>
                            <p>Dr. Mokanalakshmi R.M, MBBS, MD (DVL), DNB (DVL), is a renowned dermatologist specializing in dermatology, aesthetic medicine, and hair transplantation. With a compassionate approach and extensive experience, she excels in providing personalized care to her patients. Dr. Mokanalakshmi was recognized as the best outgoing student in M.D Dermatology and has contributed to various research projects. Certified in aesthetic medicine and hair transplantation, she stays updated on advancements in skincare through continuous training and education. Dr. Mokanalakshmi is proficient in lasers, non-surgical cosmetic treatments, and is dedicated to delivering optimal results to her patients.</p>
                        </div>

                        <div className="col-lg-5">
                            <figure><img src={Img1} alt="Img"/></figure>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="psc-card bg-grey">
                                <div className="psc-card-body text-center p-lg-5">
                                    <svg className={'mb-3'} fill="#000000" height='3em' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<g><path d="M50.6292648,26.225668c-0.1288986-1.3934994-0.0303001-5.1816006,3.5985985-10.4492006
		c0.2745018-0.3975,0.2247009-0.9335995-0.1161957-1.2743998c-1.4795036-1.4794998-2.395504-2.4131002-3.0379982-3.0663996
		c-0.8448029-0.8614006-1.2305031-1.2539005-1.795002-1.7657003c-0.3769035-0.3388004-0.9472008-0.3446999-1.3281021-0.0125999
		c-6.3251991,5.5038996-13.3505974,16.8768997-12.3339958,30.8105011
		c0.5956955,8.1815987,6.5634956,14.1200981,14.1894951,14.1200981c7.8260994,0,14.1932983-6.3661995,14.1932983-14.1923981
		C63.9993629,32.845768,58.0736694,26.6543674,50.6292648,26.225668z M49.8060646,52.5879669
		c-6.5489006,0-11.6767998-5.1581993-12.1953011-12.2645988c0,0,0,0,0-0.0009995
		c-1.1435966-15.6709003,8.1718025-25.8496017,10.9863014-28.5449009c0.2743988,0.2705002,0.5878983,0.5887995,1.0498009,1.0594997
		c0.5565987,0.5664005,1.3183975,1.3417997,2.4706993,2.4981003c-4.4053001,6.7870998-3.5741997,11.6229992-3.2099991,12.3164005
		c0.1728973,0.3290997,0.5273972,0.5508003,0.8984985,0.5508003c6.7236023,0,12.1932983,5.469698,12.1932983,12.1933002
		C61.9993629,47.1182671,56.5296669,52.5879669,49.8060646,52.5879669z"/>
    <path d="M15.1136675,26.225668c-0.1299-1.3896008-0.0341997-5.1748009,3.5985994-10.4492006
		c0.2735004-0.3975,0.2245998-0.9335995-0.1161995-1.2743998c-1.4766006-1.4765997-2.3915997-2.4091997-3.0332003-3.0625
		c-0.8476-0.8633003-1.2343998-1.2568998-1.7987995-1.7695999c-0.3769999-0.3388004-0.9473-0.3437004-1.3281002-0.0136003
		c-6.3251996,5.5039005-13.3515997,16.875-12.3369999,30.8115005v0.0009995
		c0.5977,8.1805992,6.5664001,14.1190987,14.1924,14.1190987c7.8261995,0,14.1934004-6.3661995,14.1934004-14.1923981
		C28.4847679,32.8448677,22.5589676,26.6524677,15.1136675,26.225668z M14.2913675,52.5879669
		c-6.5478001,0-11.6786995-5.1581993-12.1982002-12.2655983v0.0009995
		c-1.1406-15.6748009,8.1747999-25.8516006,10.9892006-28.5459003c0.2754002,0.2705002,0.5899,0.5908003,1.0528002,1.0625
		c0.5555992,0.5663996,1.3163996,1.3408003,2.4667988,2.4951c-4.4052992,6.7880993-3.5741997,11.6229992-3.2099991,12.3153992
		c0.1729002,0.3291016,0.5283003,0.5518017,0.8993998,0.5518017c6.7237005,0,12.1934004,5.469698,12.1934004,12.1933002
		C26.4847679,47.1182671,21.0150681,52.5879669,14.2913675,52.5879669z"/>
</g>
</svg>
                                    <Testimonials />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id={'contact'}>
                <div className="container py-80">
                    <div className="row flex-lg-row-reverse align-items-center">
                        <div className="col-lg-5 ps-lg-5 mb-5 mb-lg-0">
                            <p className={'text-large pb-2'}><b>Address</b></p>
                            <p className={'d-flex border-bottom border-light mb-4'}><svg className={'me-3'} height='1.5em' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M200 488C200 501.3 189.3 512 176 512C162.7 512 152 501.3 152 488V286C83.9 274.6 32 215.4 32 144C32 64.47 96.47 0 176 0C255.5 0 320 64.47 320 144C320 215.4 268.1 274.6 200 286V488zM176 48C122.1 48 80 90.98 80 144C80 197 122.1 240 176 240C229 240 272 197 272 144C272 90.98 229 48 176 48z"/></svg>
                                2nd floor, Main Rd, Nanganallur, Chennai, Tamil Nadu 600061</p>

                            <p><svg className={'me-2'} height='1em' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480.3 320.3L382.1 278.2c-21.41-9.281-46.64-3.109-61.2 14.95l-27.44 33.5c-44.78-25.75-82.29-63.25-108-107.1l33.55-27.48c17.91-14.62 24.09-39.7 15.02-61.05L191.7 31.53c-10.16-23.2-35.34-35.86-59.87-30.19l-91.25 21.06C16.7 27.86 0 48.83 0 73.39c0 241.9 196.7 438.6 438.6 438.6c24.56 0 45.53-16.69 50.1-40.53l21.06-91.34C516.4 355.5 503.6 330.3 480.3 320.3zM463.9 369.3l-21.09 91.41c-.4687 1.1-2.109 3.281-4.219 3.281c-215.4 0-390.6-175.2-390.6-390.6c0-2.094 1.297-3.734 3.344-4.203l91.34-21.08c.3125-.0781 .6406-.1094 .9531-.1094c1.734 0 3.359 1.047 4.047 2.609l42.14 98.33c.75 1.766 .25 3.828-1.25 5.062L139.8 193.1c-8.625 7.062-11.25 19.14-6.344 29.14c33.01 67.23 88.26 122.5 155.5 155.5c9.1 4.906 22.09 2.281 29.16-6.344l40.01-48.87c1.109-1.406 3.187-1.938 4.922-1.125l98.26 42.09C463.2 365.2 464.3 367.3 463.9 369.3z"/></svg>
                                <a href="tel: 08015997657">08015997657</a></p>
                            <p><svg className={'me-2 mb-1'} height='1em' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M493.6 163c-24.88-19.62-45.5-35.37-164.3-121.6C312.7 29.21 279.7 0 256.4 0H255.6C232.3 0 199.3 29.21 182.6 41.38C63.88 127.6 43.25 143.4 18.38 163C6.75 172 0 186 0 200.8v247.2C0 483.3 28.65 512 64 512h384c35.35 0 64-28.67 64-64.01V200.8C512 186 505.3 172 493.6 163zM464 448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V276.7l136.1 113.4C204.3 406.8 229.8 416 256 416s51.75-9.211 71.97-26.01L464 276.7V448zM464 214.2l-166.8 138.1c-23.19 19.28-59.34 19.27-82.47 .0156L48 214.2l.1055-13.48c23.24-18.33 42.25-32.97 162.9-120.6c3.082-2.254 6.674-5.027 10.63-8.094C229.4 65.99 246.7 52.59 256 48.62c9.312 3.973 26.62 17.37 34.41 23.41c3.959 3.066 7.553 5.84 10.76 8.186C421.6 167.7 440.7 182.4 464 200.8V214.2z"/></svg>
                                <a href="mailto: hello@primaskinclinic.com">hello@primaskinclinic.com</a></p>
                            <p className={'pb-0'}><svg className={'me-2'} height='1.2em' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                <a href="https://www.instagram.com/prima_skin_and_aesthetics?igsh=MWxnY3g4a2huNnE3Mw==&utm_source=qr" rel="noreferrer" target='_blank'>Instagram</a></p>

                        </div>

                        <div className="col-lg-7">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
