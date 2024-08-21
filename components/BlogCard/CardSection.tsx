import React from 'react'
import Card from './Card'
import ContentWrapper from '../Blog/ContentWrapper'

const CardSection = () => {
    return (
        <ContentWrapper>
            <div className='py-14'>
                <div className='py-5 px-1 text-center'>
                    <h1 className='text-4xl text-black'>BLOGS</h1>
                </div>
                <div className='grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-4 gap-7'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </ContentWrapper>
    )
}

export default CardSection
