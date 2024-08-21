const Header = () => {
    return (
        <div className="game-header h-64 rounded-lg shadow-lg mb-8 flex items-end relative">
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative w-full p-6">
                <h2 className="text-4xl font-bold text-white mb-2">Company A Treasure Hunt</h2>
                <p className="text-xl text-gray-200">Rome, Italy</p>
            </div>
        </div>
    );
};

export default Header;
