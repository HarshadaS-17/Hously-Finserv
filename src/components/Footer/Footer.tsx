
import React from 'react';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 mb-6">
              Providing innovative financial solutions that empower individuals and businesses to achieve their dreams with ease.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Loan Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/home-loan" className="text-gray-400 hover:text-teal-400 transition-colors">Home Loan</Link>
              </li>
              <li>
                <Link to="/services/property-loan" className="text-gray-400 hover:text-teal-400 transition-colors">Property Loan</Link>
              </li>
              <li>
                <Link to="/services/balance-transfer" className="text-gray-400 hover:text-teal-400 transition-colors">Balance Transfer</Link>
              </li>
              <li>
                <Link to="/services/business-loan" className="text-gray-400 hover:text-teal-400 transition-colors">Business Loan</Link>
              </li>
              <li>
                <Link to="/offers" className="text-gray-400 hover:text-teal-400 transition-colors">Special Offers</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Calculators</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/calculators/emi" className="text-gray-400 hover:text-teal-400 transition-colors">EMI Calculator</Link>
              </li>
              <li>
                <Link to="/calculators/eligibility" className="text-gray-400 hover:text-teal-400 transition-colors">Eligibility Calculator</Link>
              </li>
              <li>
                <Link to="/calculators/foreclose" className="text-gray-400 hover:text-teal-400 transition-colors">Foreclosure Calculator</Link>
              </li>
              <li>
                <Link to="/calculators/balance-transfer" className="text-gray-400 hover:text-teal-400 transition-colors">Balance Transfer Calculator</Link>
              </li>
              <li>
                <Link to="/calculators/pre-payment" className="text-gray-400 hover:text-teal-400 transition-colors">Pre-payment Calculator</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123, Hously Finserv Tower, MG Road, Pune, Maharashtra - 411001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-teal-400 transition-colors">
                  +91 9876 543 210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@houslyfinserv.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                  info@houslyfinserv.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Hously Finserv. All rights reserved.
            </div>
            <div className="flex space-x-4 md:justify-end text-sm">
              <Link to="/terms" className="text-gray-400 hover:text-teal-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-teal-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
