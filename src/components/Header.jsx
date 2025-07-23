import { useState } from 'react';
import { Menu, X, Home, Plus, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-lg relative">
            <div className="container mx-auto px-4">
                {/* Desktop Header */}
                <div className="flex justify-between items-center py-4">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-3">
                        <div className="bg-white text-blue-600 rounded-xl w-12 h-12 flex items-center justify-center shadow-md transform hover:scale-105 transition-transform duration-200">
                            <span className="text-xl font-bold">RE</span>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                                Radheshyam Electronics
                            </h1>
                            <p className="text-blue-100 text-sm">Bringing Your TV Back to Life</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-2">
                        <Link to={"/"} className="flex items-center space-x-2 px-4 py-2 bg-white/10 cursor-pointer rounded-lg transition-all backdrop-blur-sm">
                            <Home size={18} />
                            <span>Dashboard</span>
                        </Link>
                        <Link to={"/addTv"} className="flex items-center space-x-2 px-4 py-2 bg-white/10 cursor-pointer rounded-lg transition-all backdrop-blur-sm">
                            <Plus size={18} />
                            <span>Add New TV</span>
                        </Link>
                        <Link to={"/services"} className="flex items-center space-x-2 px-4 py-2 bg-white/10 cursor-pointer rounded-lg transition-all backdrop-blur-sm">
                            <Settings size={18} />
                            <span>Our Services</span>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                    <nav className="py-4 border-t border-white/20">
                        <div className="flex flex-col space-y-2">
                            <Link to={"/"} className="flex items-center space-x-3 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 text-left">
                                <Home size={20} />
                                <span>Dashboard</span>
                            </Link>
                            <Link to={"/addTv"} className="flex items-center space-x-3 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 text-left">
                                <Plus size={20} />
                                <span>Add New TV</span>
                            </Link>
                            <Link to={"/services"} className="flex items-center space-x-3 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 text-left">
                                <Settings size={20} />
                                <span>Our Services</span>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;