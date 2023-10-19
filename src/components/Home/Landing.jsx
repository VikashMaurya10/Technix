import React from 'react'
import { BsArrowRight, BsFillCaretRightFill } from 'react-icons/bs'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

import img1 from "../../assets/hero/hero-1.jpg"
import img2 from "../../assets/hero/hero-2.jpg"
import img3 from "../../assets/hero/hero-3.jpg"
import shape5 from "../../assets/hero/shape-5.png"
import shape4 from "../../assets/hero/shape-4.png"
import shape3 from "../../assets/hero/shape-3.png"
import shape2 from "../../assets/hero/shape-2.png"
import shape1 from "../../assets/hero/shape-1.png"
import shape7 from "../../assets/hero/shape-7.png"
import quot from "../../assets/hero/quot.png"


const images = [img1, img2, img3]
const Card = ({ _this }) => {
    return (
        <div className='relative h-[calc(100vh-88px)]'>
            <img className='h-full w-full object-cover' src={_this} alt="loading.." />
        </div>
    )
}

const Landing = () => {
    return (
        <section className='relative w-[98%] mr-0 ml-auto font-robo'>
            <Swiper navigation={{
                nextEl: ".nextBtn",
                prevEl: ".preBtn"
            }}
                loop={true}
                autoplay={{
                    delay: 4000,
                }}
                modules={[Navigation, Autoplay]}
                id="homeCaousel"
            >
                {
                    images.map((value,
                        i) => {
                        return (
                            <SwiperSlide key={i}><Card _this={value} /></SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className='flex gap-4 absolute bottom-7 left-1/2 -translate-x-1/2 z-30'>
                <button className=' preBtn swiperbtn'><BsArrowRight className='rotate-[180deg]' /></button>
                <button className=' nextBtn swiperbtn'><BsArrowRight /></button>
            </div>
            <div className='absolute left-0 bottom-0 z-20 bg-cyan h-[8rem] w-[10rem] text-white flex items-center justify-center'>
                <p className='text-sm'><span className='block text-center text-5xl font-bold tracking-[-3px]'>13</span>Year of Experince</p>
            </div>
            <div className='absolute left-0 bottom-0 z-10'>
                <img className='object-contain w-full h-full' src={shape4} alt="loading.." />
            </div>
            <div className='absolute right-0 bottom-0 z-10 bg-darkblue h-[8rem] w-[30rem] text-white '>
                <div className='relative flex items-center justify-center w-full h-full bg-[url(/src/assets/hero/shape-6.png)] bg-cover bg-no-repeat'>
                    <div className={"w-[80%]"}>
                        <p className='text-[14px] font-normal whitespace-normal border-l-2 border-cyan pl-2'>
                            Our company provide full <span className='text-yellow text-[14px]'>services</span> for the cons
                            <span className='block'>private houses and cottagaes since 19</span>
                        </p>
                    </div>
                    <div className='absolute right-0 bottom-0'>
                        <img className='w-full h-full object-contain' src={shape5} alt="loading..." />
                    </div>
                    <div className='absolute -left-5 bg-white p-3 rounded-lg -top-5'>
                        <img src={quot} alt="quot" />
                    </div>
                </div>
            </div>
            <div className='absolute right-0 bottom-0 z-10 h-full'>
                <img src={shape2} alt="loading.." />
            </div>
            <div className='linearGradiant absolute left-0 bottom-0 z-10 h-full w-1/2'>
                <img src={shape1} alt="loading.." />
            </div>
            <div className='absolute z-10 top-1/2 -translate-y-1/2 w-full'>
                <div className='w-[80%] flex justify-between mx-auto z-10'>
                    <div>
                        <h2 className="wavyUnderline italic">best <span className='text-cyan'>it solutions</span></h2>
                        <h1 className='text_animation relative text-white capitalize text-6xl font-rele font-bold mt-8'>
                            <span className='text-black'>Trusted It &</span>
                            <span className='text-cyan'>Tech</span>
                            <span className='strokeme block '> Solution</span>
                        </h1>
                        <button className='relative capitalize py-4 px-10 bg-darkblue text-white after:absolute after:w-[1.2rem] after:h-[1.2rem] after:bg-cyan after:right-0 after:bottom-0 after:content-[""] after:rounded-tl-lg flex gap-4 items-center mt-5'>
                            Learn more <BsArrowRight className='text-xl' />
                        </button>
                        <div className='w-full'>
                            <img className='ml-auto mr-4' src={shape7} alt="loading.." />
                        </div>
                    </div>
                    <div className='w-[30%] flex items-center justify-center'>
                        <button className='ripple border-2 border-white rounded-full w-[5rem] h-[5rem] flex items-center justify-center'><BsFillCaretRightFill className='text-white text-3xl' /></button>
                    </div>
                </div>
            </div>
            <div className='z-10 absolute top-24 right-5'>
                <img className='bollBounce' src={shape3} alt="loading.." />
            </div>
        </section>
    );
}

export default Landing