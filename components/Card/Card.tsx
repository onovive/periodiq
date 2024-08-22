import React from 'react';
import Image from 'next/image'
import img1 from '@/components/BlogCard/image/img.webp'
import Link from "next/link";

const Card = () => {
    return (
        <Link href={'/CardDetail'}>
            <div className="game-card bg-white rounded-lg overflow-hidden shadow-md border border-transparent hover:border-amber-300">
                <div className="image-container">
                    <Image
                        src={img1}
                        alt="Crypto ECNs"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-4">
                    <div className="flex justify-between items-start mb-1">
                        <h2 className="text-lg font-semibold text-black">Anomey</h2>
                        <span className="date text-black">8/21/2024</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Lahore Pakistan</p>
                    <div className="prizes text-gray-800">
                        <p>
                            Stay with Elisbeth
                        </p>
                        <p>
                            Oct 1-6
                        </p>
                        <p>
                            35$ night
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card