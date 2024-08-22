import React from 'react'

const CardContent = () => {
    return (
        <div className="lg:px-24">
            <div className="flex flex-col items-start text-black border rounded-xl px-6 py-5 hover:hover:border-amber-300 transition-shadow duration-300 ease-in-out">
                <div className="mb-2">
                    <h1 className="text-2xl font-semibold text-[#232523] leading-6">7d</h1>
                </div>
                <div>
                    <p className="text-base leading-5 text-[#232523]">
                        In the context of cryptocurrency, "7D" refers to the performance or change in a cryptocurrency's price, market cap, or other relevant metrics over the past seven days. This timeframe is commonly used by traders and analysts to assess short-term trends in the market.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardContent
