import Image from "next/image";
import img from '../images/1990f9db-9d46-4bc2-acc2-f006548f8d00.webp'
import img1 from '../images/276c2bd3-b21e-4aad-b514-cd97f0e74150.webp'
import img2 from '../images/7511ee2f-2ea9-4c37-918e-1eec5551b636.webp'
import img3 from '../images/ad68b77a-c309-4aef-87c5-d3964281cf29.webp'
import img4 from '../images/e18cbd23-79de-417c-920c-073e0eb401ed.webp'



const Header = () => {
    return (
        <div>
            <div className="game-header h-96 rounded-lg shadow-lg mb-8 flex items-end relative">
                <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="relative">
                        <Image
                            src={img4}
                            alt="Main Image"
                            layout="fill"
                            className="rounded-lg md:rounded-l-lg hover:brightness-75 transition duration-300"
                        />
                    </div>
                    <div className="hidden md:grid grid-cols-2 gap-1 relative">
                        <div className="relative">
                            <Image
                                src={img1}
                                alt="Small Image 1"
                                layout="fill"
                                className="hover:brightness-75 transition duration-300"

                            />
                        </div>
                        <div className="relative">
                            <Image
                                src={img2}
                                alt="Small Image 2"
                                layout="fill"
                                className="rounded-r-lg hover:brightness-75 transition duration-300"

                            />
                        </div>
                        <div className="relative">
                            <Image
                                src={img3}
                                alt="Small Image 3"
                                layout="fill"
                                className="hover:brightness-75 transition duration-300"

                            />
                        </div>
                        <div className="relative">
                            <Image
                                src={img4}
                                alt="Small Image 4"
                                layout="fill"
                                className="rounded-r-lg hover:brightness-75 transition duration-300"

                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-6">
                <h2 className="text-2xl md:text-4xl font-bold text-black mb-2">Company A Treasure Hunt</h2>
                <p className="text-sm md:text-xl text-gray-500">Rome, Italy</p>
            </div>
        </div>
    );
};

export default Header;
