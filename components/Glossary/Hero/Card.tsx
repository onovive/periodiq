import React from 'react'
import ContentWrapper from '@/components/Blog/ContentWrapper'

const Card = () => {
    return (
        <ContentWrapper>
            <div className="lg:px-24">
                <div className='border rounded-xl px-5 py-4 '>
                    <ul className="flex flex-wrap gap-4">
                        <li className="text-base leading-5 text-[#232523]  px-3 py-2  border rounded-md hover:bg-gray-200 cursor-pointer">All</li>
                        <li className="text-base leading-5 text-[#232523]  px-3 py-2  border rounded-md hover:bg-gray-200 cursor-pointer">#</li>
                        {Array.from({ length: 26 }, (_, i) => (
                            <li key={i} className="text-base leading-5 text-[#232523]  border rounded-md px-3 py-2 hover:bg-gray-200 cursor-pointer">
                                {String.fromCharCode(65 + i)}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </ContentWrapper>
    )
}

export default Card
