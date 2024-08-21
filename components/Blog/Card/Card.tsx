import React from 'react'
import Image from 'next/image'
import Content from './Content'
import img1 from './image/img.jpg'


const Card = () => {
    return (
        <section className='rounded-3xl overflow-hidden shadow-lg transition-transform transform border border-[#2325231a] hover:shadow-2xl	'>
            <div className=''>
                <Image
                    src={img1}
                    alt="Picture of the author"
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='p-4'>
                <Content />
            </div>
        </section>
    )
}

export default Card
