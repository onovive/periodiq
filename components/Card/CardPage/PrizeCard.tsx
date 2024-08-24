import React from 'react';

interface PrizeCardProps {
    title: string;
    description: string;
    bgColor: string;
    size?: 'small' | 'medium' | 'large';
}

const PrizeCard: React.FC<PrizeCardProps> = ({ title, description, bgColor, size }) => {

    return (
        <div className={`backgroundImage relative rounded`}>
            <div className='absolute w-full h-[100%]'
                style={{
                    backgroundColor: bgColor,
                    opacity: 0.6,
                }}
            ></div>
            <div className="relative text-white px-7 py-5">
                <div className='flex justify-between py-2 pb-24'>
                    <div>
                        <p>Orgization</p>
                    </div>
                    <div className="flex justify-end">
                        <p>image</p>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <h1 className="text-2xl font-bold py-3 text-2xl">{title}</h1>
                    <p className="text-lg py-2 text-xs leading-[15px]">{description}</p>
                    <button className="mt-2 bg-white text-[#00ace6] hover:text-white py-1 px-6 md:py-2 md:px-10 rounded" style={{ color: bgColor }}>
                        View ---&gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrizeCard;
