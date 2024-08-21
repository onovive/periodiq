import React from 'react'
import Link from "next/link";
import Card from './Card';

const Hero = () => {
    return (
        <section className="relative bg-cover bg-center px-0 2xl:px-32" style={{ backgroundImage: "url('banner.jpg')" }}>
            <div className="relative z-10">
                {/* Header with Logo and Nav */}
                <header className="flex justify-between items-center p-5  border-b border-[#2325231a]">
                    <div className="flex items-center">
                        <img src="https://cdn.prod.website-files.com/64c27655f6c395d4c6a0ed33/64ff550a60f502cae78bc526_anemoy-logo.png" alt="Logo" className="h-10 w-auto" />
                    </div>
                    <nav className="space-x-8 hidden md:block">
                        <Link href="#" className="text-[#232523] font-bold text-lg">
                            Blog
                        </Link>
                        <Link href="#" className="text-white text-md">
                            <button className="bg-[#232523] text-white py-3 px-6 rounded-full font-bold hover:bg-[#017e48] transition duration-300 ease-in-out">Get Started -{">"} </button>
                        </Link>
                    </nav>
                </header>
                {/* Hero Content */}
                <div className="flex flex-col items-center justify-between py-32">
                    <div className='py-5 px-1'>
                        <h1 className='text-3xl md:text-5xl text-black text-center'>Glossary</h1>
                    </div>
                    <div>
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
