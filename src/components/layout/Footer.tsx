
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-infernal-950 to-infernal-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-gothic mb-4 text-infernal-300">DnD Tiefling Name Generator</h3>
            <p className="text-sm text-gray-300">
              The ultimate resource for creating authentic and unique Tiefling names for your 
              Dungeons & Dragons characters. Inspired by D&D lore and infernal heritage.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-gothic mb-4 text-infernal-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-infernal-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-infernal-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-infernal-300 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-infernal-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-gothic mb-4 text-infernal-300">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-infernal-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-infernal-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} DnD Tiefling Name Generator. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Dungeons & Dragons is a trademark of Wizards of the Coast. This site is not affiliated with Wizards of the Coast.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
