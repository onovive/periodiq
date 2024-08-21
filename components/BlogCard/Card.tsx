import React from 'react'
import Image from 'next/image'
import img1 from './image/img.jpg'

const Card = () => {
    return (
        <section className="text-[#232523] rounded-3xl overflow-hidden shadow-lg transition-transform transform border border-[#2325231a] hover:shadow-2xl p-5">
            <div className="flex items-center">
                <div className="flex-grow px-1">
                    <p className="text-xs text-gray-500">Aug 16, 2024</p>
                    <h1 className="text-sm font-bold text-black">Leveraging Crypto ECNs for Optimized Treasury Operations....</h1>
                </div>
                <div className="border-8">
                    <Image
                        src={img1}
                        alt="Crypto ECNs"
                        className="w-[160px]"
                    />
                </div>
            </div>
            <div className="mt-3">
                <p className="text-xs text-gray-700">
                    This article explores how leveraging crypto Electronic Communication Networks (ECNs) can optimize treasury operations by...
                </p>
            </div>
        </section>
    )
}

export default Card
