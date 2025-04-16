
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-infernal-950 to-infernal-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-gothic tracking-wider flex items-center gap-2"
          >
            <span className="text-infernal-300">DnD</span> Tiefling Name Generator
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-infernal-300 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-infernal-300 transition-colors">About</Link>
            <Link to="/blog" className="hover:text-infernal-300 transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-infernal-300 transition-colors">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-white hover:text-infernal-300 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 flex flex-col md:hidden">
            <Link 
              to="/" 
              className="py-2 hover:bg-infernal-900 px-2 rounded hover:text-infernal-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="py-2 hover:bg-infernal-900 px-2 rounded hover:text-infernal-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className="py-2 hover:bg-infernal-900 px-2 rounded hover:text-infernal-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="py-2 hover:bg-infernal-900 px-2 rounded hover:text-infernal-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
