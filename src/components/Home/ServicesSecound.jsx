import React, { useEffect, useState } from 'react'
import { BsCheck } from "react-icons/bs"

import world from "../../assets/fun-fact/world.png"
import shap2 from "../../assets/fun-fact/shape-2.png"
import shap1 from "../../assets/fun-fact/shape-1.png"
import shap3 from "../../assets/fun-fact/shape-3.png"
import shap4 from "../../assets/fun-fact/shape-4.png"

const ServicesSecound = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const updateScrollPercentage = () => {
        const percentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        setScrollPercentage(Math.min(percentage, 100));
    }

    useEffect(() => {
        window.addEventListener('scroll', updateScrollPercentage);
        return () => {
            window.removeEventListener('scroll', updateScrollPercentage);
        };
    }, []);

    return (
        <section className=' radialGradient relative overflow-hidden text-white py-16 flex items-center'>
            <div className='w-[55%] gap-4 flex items-center justify-evenly '>
                <div className='flex items-center justify-evenly gap-10 flex-col'>
                    <p className='text-center'>
                        <span className='strokeme text-4xl font-bold font-rele tracking-[2px] block'>10+</span>
                        Experience
                    </p>
                    <p className='text-center'>
                        <span className='strokeme text-4xl font-bold font-rele tracking-[3px] block'>255</span>
                        square area
                    </p>
                    <p className='text-center'>
                        <span className='strokeme text-4xl font-bold font-rele tracking-[3px] block'>310</span>
                        square area
                    </p>

                </div>
                <div
                    style={{ transform: `rotate(${scrollPercentage}deg)` }}
                >
                    <img className='w-full h-full object-contain' src={world} alt="loading.." />
                </div>
            </div>
            <div className='w-[45%] relative'>
                <p className='wavyUnderline italic'>service <span className='text-cyan'>it solutions</span></p>
                <h2 className='text-3xl font-rele font-semibold mt-7'>Tech Change The World</h2>
                <p className='mt-8 text-gray-500'>
                    Our company provides a full range of services for the construction
                    <span className='block'>of private houses and cottages since 19</span>
                </p>
                <div className=' text-gray-500 mt-4'>
                    <p><BsCheck className='text-cyan inline text-2xl mr-1' />series of manual and semi-manual activities.</p>
                    <p><BsCheck className='text-cyan inline text-2xl mr-1' />Construction is different from other industries</p>
                </div>
                <button className='mt-8 relative capitalize py-4 px-10 bg-lightBlue text-white after:absolute after:w-[1.2rem] after:h-[1.2rem] after:bg-cyan after:right-0 after:bottom-0 after:content-[""] after:rounded-tl-lg font-rele font-medium'>Tell Us How Can We Help
                </button>
                <div className='absolute -top-10 right-16'>
                    <img src={shap4} alt="loading..." />
                </div>
            </div>
            <div className='absolute -bottom-[99%] -left-[35%]'>
                <img className='rotateImage' src={shap2} alt="loading..." />
            </div>
            <div className='absolute top-[10%] left-4'>
                <img src={shap1} alt="loading..." />
            </div>
            <div className='absolute bottom-0 right-0'>
                <div className='h-[350px]'>
                    <img className='h-full object-contain w-full' src={shap3} alt="loading..." />
                </div>
            </div>
        </section>
    )
}

export default ServicesSecound