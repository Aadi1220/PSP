import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronDown, 
  Globe, 
  Palette, 
  Zap, 
  Sparkles, 
  Menu, 
  X,
  CreditCard,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  ArrowRight,
  Layers,
  Star,
  MessageCircle
} from "lucide-react";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const serviceItems = [
    {
      title: "Website Development",
      description: "Custom web solutions",
      icon: Globe,
      link: "/services/web-development",
      color: "blue",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      title: "Graphics & Media",
      description: "Creative design services",
      icon: Palette,
      link: "/services/graphics-media",
      color: "orange",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      title: "Digital Marketing",
      description: "Grow your online presence",
      icon: Zap,
      link: "/services/digital-marketing",
      color: "green",
      bgGradient: "from-green-50 to-emerald-50"
    }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/Perfectserviceprovider", 
      label: "Facebook", 
      color: "text-blue-600 hover:text-blue-800" 
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/perfect.service.provider/", 
      label: "Instagram", 
      color: "text-pink-600 hover:text-pink-800" 
    },
    { 
      icon: Youtube, 
      href: "https://www.youtube.com/@PerfectServiceProvider", 
      label: "YouTube", 
      color: "text-red-600 hover:text-red-800" 
    },
    { 
      icon: MessageCircle, 
      href: "https://whatsapp.com/channel/0029VapDtFyFXUuemB4bz31u", 
      label: "WhatsApp", 
      color: "text-green-600 hover:text-green-800" 
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
            
            {/* Logo Section - Responsive sizing */}
            <Link 
              to="/" 
              className="flex items-center gap-2 sm:gap-3 md:gap-4 group flex-shrink-0" 
              onClick={closeMobileMenu}
            >
              <div className="relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden p-1 sm:p-2 border border-gray-200">
                  <img 
                    src="/logo.png" 
                    alt="PSP Logo" 
                    className="w-full h-full object-contain rounded-md sm:rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm sm:text-base md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  Perfect Service Provider
                </h1>
              </div>
            </Link>

            {/* Center Navigation - Hidden on tablet and mobile */}
            <nav className="hidden xl:flex items-center">
              <div className="flex items-center bg-gray-50 rounded-full px-2 py-2 shadow-inner">
                
                <Link 
                  to="/" 
                  className="px-4 lg:px-6 py-2 text-gray-700 hover:text-white hover:bg-blue-600 rounded-full font-semibold transition-all duration-300 relative group text-sm lg:text-base"
                >
                  Home
                </Link>

                {/* Services Mega Menu */}
                <div 
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link 
                    to="/services" 
                    className="flex items-center gap-2 px-4 lg:px-6 py-2 text-gray-700 hover:text-white hover:bg-blue-600 rounded-full font-semibold transition-all duration-300 text-sm lg:text-base"
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 lg:w-96 transition-all duration-300 ${
                    isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                  }`}>
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                      
                      {/* Header */}
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 lg:p-6 text-white">
                        <div className="flex items-center gap-3 mb-2">
                          <Layers className="h-5 w-5 lg:h-6 lg:w-6" />
                          <h3 className="text-base lg:text-lg font-bold">Our Services</h3>
                        </div>
                        <p className="text-blue-100 text-xs lg:text-sm">Comprehensive digital solutions for your business</p>
                      </div>

                      {/* Service Items */}
                      <div className="p-3 lg:p-4">
                        {serviceItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.link}
                            className={`flex items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-xl hover:shadow-md transition-all duration-300 group bg-gradient-to-r ${item.bgGradient} hover:scale-[1.02] mb-2 last:mb-0`}
                          >
                            <div className={`p-2 lg:p-3 rounded-xl bg-white shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                              <item.icon className={`h-5 w-5 lg:h-6 lg:w-6 text-${item.color}-600`} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-sm lg:text-base">
                                {item.title}
                              </h4>
                              <p className="text-xs lg:text-sm text-gray-600 mt-1">{item.description}</p>
                            </div>
                            <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                          </Link>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="px-4 lg:px-6 py-3 lg:py-4 bg-gray-50 border-t border-gray-100">
                        <Link
                          to="/services"
                          className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-xs lg:text-sm group"
                        >
                          <Sparkles className="h-3 w-3 lg:h-4 lg:w-4" />
                          Explore All Services
                          <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/about" 
                  className="px-4 lg:px-6 py-2 text-gray-700 hover:text-white hover:bg-blue-600 rounded-full font-semibold transition-all duration-300 text-sm lg:text-base"
                >
                  About
                </Link>
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              
              {/* Social Media Links - Desktop Only */}
              <div className="hidden xl:flex items-center gap-1 lg:gap-2 px-3 lg:px-4 py-2 bg-gray-50 rounded-full">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-1.5 lg:p-2 rounded-lg ${social.color} hover:bg-white hover:shadow-md transition-all duration-300 transform hover:scale-110 group`}
                    title={social.label}
                  >
                    <social.icon className="h-3 w-3 lg:h-4 lg:w-4 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>

              {/* Contact Button - Large screens only */}
              <Link 
                to="/contact" 
                className="hidden xl:flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group text-sm lg:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Mail className="h-3 w-3 lg:h-4 lg:w-4 relative z-10" />
                <span className="relative z-10">Contact</span>
              </Link>

              {/* Payment Button - Medium screens and up */}
              <Link
                to="/payment"
                className="hidden lg:flex items-center gap-1.5 lg:gap-2 px-3 lg:px-5 py-2 lg:py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
              >
                <CreditCard className="h-3 w-3 lg:h-4 lg:w-4" />
                <span className="hidden lg:inline">Pay Now</span>
                <span className="lg:hidden">Pay</span>
              </Link>

              {/* Compact Payment Button - Small screens */}
              <Link
                to="/payment"
                className="flex lg:hidden items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-sm"
              >
                <CreditCard className="h-4 w-4" />
                <span className="hidden sm:inline">Pay</span>
              </Link>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMobileMenu}
                className="xl:hidden relative p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                  <span className={`absolute top-1 left-0 w-5 sm:w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-2.5 sm:top-3' : ''}`}></span>
                  <span className={`absolute top-2.5 sm:top-3 left-0 w-5 sm:w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`absolute top-4 sm:top-5 left-0 w-5 sm:w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-2.5 sm:top-3' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`xl:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 sm:px-6 py-6 sm:py-8 bg-gradient-to-br from-gray-50 to-blue-50 border-t border-gray-200">
            <div className="space-y-4 sm:space-y-6">
              
              {/* Mobile Navigation Links */}
              <div className="space-y-2 sm:space-y-3">
                <Link 
                  to="/" 
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">H</span>
                  </div>
                  Home
                </Link>
                
                <div className="space-y-2">
                  <Link 
                    to="/services" 
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                    onClick={closeMobileMenu}
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Layers className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-purple-600" />
                    </div>
                    Services
                  </Link>
                  
                  {/* Mobile Service Items */}
                  <div className="pl-3 sm:pl-4 ml-3 sm:ml-4 border-l-2 border-blue-200 space-y-2">
                    {serviceItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.link}
                        className={`flex items-center gap-3 text-gray-600 hover:text-blue-600 py-2 px-3 sm:px-4 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-300 bg-gradient-to-r ${item.bgGradient}`}
                        onClick={closeMobileMenu}
                      >
                        <div className={`p-1.5 sm:p-2 rounded-lg bg-white shadow-sm`}>
                          <item.icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 text-${item.color}-600`} />
                        </div>
                        <div>
                          <div className="font-medium text-sm sm:text-base">{item.title}</div>
                          <div className="text-xs text-gray-500">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to="/about" 
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-600" />
                  </div>
                  About
                </Link>
              </div>

              {/* Mobile Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <Link 
                  to="/contact" 
                  className="flex items-center justify-center gap-3 w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group"
                  onClick={closeMobileMenu}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
                  <span className="relative z-10">Get In Touch</span>
                </Link>
                
                <Link
                  to="/payment"
                  className="flex items-center justify-center gap-3 w-full py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] lg:hidden"
                  onClick={closeMobileMenu}
                >
                  <CreditCard className="h-4 w-4 sm:h-5 sm:w-5" />
                  Make Payment
                </Link>
              </div>

              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-600 mb-3 text-center">Follow Us</p>
                <div className="flex justify-center gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 sm:p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 ${social.color.replace('hover:', 'hover:bg-')}`}
                      title={social.label}
                    >
                      <social.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${social.color.split(' ')[0]}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
