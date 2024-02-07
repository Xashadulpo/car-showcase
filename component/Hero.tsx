
'use client'
import React from 'react'
import Image from 'next/image';
import CreateCustomButton from './CreateCustomButton'

const Hero = () => {
    const clickhandlLoad = () => { };
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x ">
                <h1 className="hero__title">
                    Find, book, rent a car—quick and super easy!
                </h1>

                <p className="hero__subtitle">
                    Streamline your car rental experience with our effortless booking
                    process.
                </p>
                <CreateCustomButton
                    title='car explore'
                    classStyle=' bg-blue-500 text-white font-extrabold px-8 py-3 rounded-full mt-3'
                    handleload={clickhandlLoad} />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill className="object-contain" />
                </div>

                <div className="hero__image-overlay" />
            </div>
        </div>
    );
};
export default Hero;
