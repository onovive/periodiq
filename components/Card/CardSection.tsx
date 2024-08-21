import React from 'react'
import Card from './Card'
import ContentWrapper from '../Blog/ContentWrapper'

const CardSection = () => {
    return (
        <ContentWrapper>
            <div className='py-24'>
                <div>
                    <h1 className='text-black text-3xl text-center'>Heading</h1>
                </div>
                <div className='grid gap-4 py-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    <Card />
                    <Card />
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
