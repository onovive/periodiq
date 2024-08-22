import React from 'react'
import Card from './Card'
import ContentWrapper from '../Blog/ContentWrapper'

const CardSection = () => {
    return (
        <ContentWrapper>
            <div className='py-24 flex flex-col items-center justify-center'>
                <div className='py-8'>
                    <h1 className='text-6xl font-bold leading-[24px] text-[#232523]'>Heading</h1>
                </div>
                <div className='grid gap-4 py-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </ContentWrapper>
    )
}

export default CardSection
