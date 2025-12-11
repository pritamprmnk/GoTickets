import { Mail, Phone, Facebook, X, Instagram, Linkedin, Globe } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 mt-10 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <img 
              src="/assets/ticketicon.png" 
              alt="GoTickets Logo" 
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-2xl font-bold"><span className="text-blue-600">Go</span>Tickets</h2>

          </div>

          <p className="mt-3 text-gray-600">
            Book bus, train, launch & flight tickets easily.  
            Your journey starts with a simple click.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/alltickets" className="hover:text-blue-600">All Tickets</a></li>
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>

          <p className="flex items-center gap-2">
            <Mail size={18} className="text-blue-600" />
            support@gotickets.com
          </p>

          <p className="flex items-center gap-2 mt-2">
            <Phone size={18} className="text-blue-600" />
            +9644 4444444
          </p>

          <p className="flex items-center gap-2 mt-2">
            <Facebook size={18} className="text-blue-600" />
            < X size={18} className="text-blue-600" />
            <Instagram size={18} className="text-blue-600" />
            <Linkedin size={18} className="text-blue-600" />
            < Globe size={18} className="text-blue-600" />
        
          </p>
        </div>

        {/* Payment Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">We Accept</h3>

          <p className="text-gray-600 mb-2">Secure payment with:</p>

          <div className="flex gap-2 mb-4">
            <div className="w-10 h-6 bg-gray-300 rounded"></div>
            <div className="w-10 h-6 bg-gray-300 rounded"></div>
            <div className="w-10 h-6 bg-gray-300 rounded"></div>
            <div className="w-10 h-6 bg-gray-300 rounded"></div>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
            <span>🔒</span>
            SSL Secure Payment
          </button>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t pt-5 text-center md:flex md:justify-between md:text-left max-w-7xl mx-auto px-6 text-gray-600">
        <p>© 2025 GoTickets. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
