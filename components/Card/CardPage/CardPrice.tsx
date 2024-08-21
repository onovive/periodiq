import { FC } from 'react';

interface PrizeCardProps {
    title: string;
    amount: string;
    bgColor: string;
    textColor: string;
}

const PrizeCard: FC<PrizeCardProps> = ({ title, amount, bgColor, textColor }) => {
    return (
        <div className={`prize-card ${bgColor} p-4 rounded-lg`}>
            <h4 className="font-bold text-lg">{title}</h4>
            <p className={`text-2xl font-bold ${textColor}`}>{amount}</p>
        </div>
    );
};

export default PrizeCard;