import PropTypes from 'prop-types'
import Verification from './Verify'

export default function PrizeCard() {
    return (
        <div className="p-6 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="py-4">
                <h2 className="text-2xl text-black font-semibold text-center">Pricing</h2>
                <div className="border-t-2 border-gray-300 my-4"></div>
                <ul className="text-gray-700 space-y-2">
                    <li className='flex items-center justify-start gap-3'><Verification /> 24/7 Support</li>
                    <li className='flex items-center justify-start gap-3'><Verification /> Offer 2: Unlimited Usage</li>
                    <li className='flex items-center justify-start gap-3'><Verification /> Offer 3: Access to All Features</li>
                    <li className='flex items-center justify-start gap-3'><Verification /> Offer 2: Unlimited Usage</li>
                    <li className='flex items-center justify-start gap-3'><Verification /> Offer 3: Access to All Features</li>
                </ul>

                <div className="border-t-2 border-gray-300 my-4"></div>

                <div className="flex justify-between items-center">
                    <span className=" text-black text-3xl font-bold">$29.99</span>
                    <button className="bg-black text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition duration-300">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}