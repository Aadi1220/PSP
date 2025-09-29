import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowRightCircle,
  Link as LinkIcon,
  MessageCircle
} from "lucide-react";

export default function Footer() {
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

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white mt-20">
      {/* Buckets Wrapper for responsiveness */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:px-8 lg:absolute lg:-top-20 w-full lg:w-[calc(100%-4rem)] mx-auto gap-6 z-20">
        {/* Left bucket - Get in Touch (Extended Height) */}
        <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl px-6 py-10 w-full lg:w-80 min-h-[320px] border border-gray-600/40 hover:shadow-gray-600/20 transition">
          <h3 className="text-xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Get in Touch
          </h3>
          <ul className="space-y-6 text-base">
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-blue-300" />
              <a
                href="mailto:Support@perfectserviceprovider.com"
                className="hover:text-blue-200 transition break-all text-gray-200"
              >
                Support@perfectserviceprovider.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-green-300" />
              <a
                href="tel:+918920267022"
                className="hover:text-green-200 transition text-gray-200"
              >
                +91-89202 67022
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={20} className="text-orange-300" /> 
              <span className="text-gray-200">New Delhi, India</span>
            </li>
          </ul>
          
          {/* Additional content to fill the extended space */}
          <div className="mt-8 pt-6 border-t border-gray-700/50">
            <p className="text-sm text-gray-300 leading-relaxed">
              We're here to help you 24/7. Reach out anytime for support, 
              consultations, or any questions about our services.
            </p>
          </div>
        </div>

        {/* Right bucket - Follow Us (Extended Height) */}
        <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl px-6 py-10 w-full lg:w-80 min-h-[320px] border border-gray-600/40 hover:shadow-gray-600/20 transition">
          <h3 className="text-xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Follow Us
          </h3>
          
          {/* Updated Social Links using navbar style */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/60 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group border border-gray-700/50 hover:border-gray-600"
                title={social.label}
              >
                <social.icon className={`h-6 w-6 ${social.color.replace('text-', 'text-').replace('hover:text-', 'group-hover:text-')} transition-colors duration-300`} />
              </a>
            ))}
          </div>
          
          <div className="text-center mb-6">
            <p className="text-sm text-gray-200">
              Stay connected with us on social media for updates and news!
            </p>
          </div>

          {/* Contact Us Button instead of Business Hours */}
          <div className="mt-6 pt-6 border-t border-gray-700/50">
            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Mail className="h-5 w-5 relative z-10" />
                <span className="relative z-10">Contact Us</span>
              </a>
              <p className="text-xs text-gray-400 mt-3">
                Ready to start your project? Get in touch!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Footer Content with Logo - Enhanced Colors */}
      <div className="container mx-auto px-6 pt-36 lg:pt-28 pb-6 relative z-10">
        <div className="text-center">
          {/* Company Logo with curved edges only */}
          <div className="mb-6">
            <img
              src="/logo.png"
              alt="Perfect Service Provider Logo"
              className="h-14 w-auto mx-auto drop-shadow-lg filter hover:brightness-110 transition-all duration-300 rounded-2xl"
            />
          </div>

          {/* Company Name */}
          <h2 className="text-xl font-bold mb-3 tracking-wide bg-gradient-to-r from-slate-200 via-white to-slate-200 bg-clip-text text-transparent">
            Perfect Service Provider
          </h2>
          
          {/* Enhanced description with better readability */}
          <p className="text-slate-200 text-base max-w-2xl mx-auto mb-8 leading-relaxed font-light">
            We deliver the best services and solutions tailored for your
            business success. <span className="text-blue-200">Join thousands of satisfied customers</span> who trust our expertise.
          </p>

          {/* Service Navigation Links with About instead of Contact */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm mb-6">
            {[
              { name: "Digital Marketing", path: "/services/digital-marketing", color: "text-blue-200 hover:text-blue-100" },
              { name: "Web Development", path: "/services/web-development", color: "text-emerald-200 hover:text-emerald-100" },
              { name: "Graphics Design", path: "/services/graphics-design", color: "text-purple-200 hover:text-purple-100" },
              { name: "About", path: "/about", color: "text-pink-200 hover:text-pink-100" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.path}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full border border-slate-600 hover:border-slate-400 bg-slate-800/40 hover:bg-slate-700/60 transition-all duration-300 ${item.color}`}
              >
                <ArrowRightCircle
                  size={16}
                  className="text-slate-400 group-hover:text-slate-200 transition-colors"
                />
                <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-current after:to-current after:transition-all group-hover:after:w-full">
                  {item.name}
                </span>
              </a>
            ))}
          </div>

          {/* Legal Links Section with enhanced styling */}
          <div className="relative">
            <div className="bg-gradient-to-r from-slate-800/40 via-gray-800/40 to-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-600/30 p-6 hover:border-slate-500/40 transition-all duration-300">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {[
                  { name: "Privacy Policy", href: "/privacy-policy", color: "text-slate-300 hover:text-white" },
                  { name: "Terms & Conditions", href: "/terms-conditions", color: "text-slate-300 hover:text-white" },
                  { name: "Return Policy", href: "/refund-policy", color: "text-slate-300 hover:text-white" },
                ].map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className={`flex items-center gap-2 ${link.color} transition-colors duration-200 relative group`}
                  >
                    <LinkIcon size={14} className="text-slate-400 group-hover:text-slate-200 transition-colors" />
                    <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-to-r after:from-slate-300 after:to-white after:transition-all group-hover:after:w-full">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-800/90 backdrop-blur-md py-4 border-t border-gray-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-3">
            <div className="text-center md:text-left">
              <div className="mb-1">
                © {new Date().getFullYear()} Perfect Service Provider. All rights reserved.
              </div>
              <div className="text-xs text-gray-500">
                Created by <span className="text-blue-400 hover:text-blue-300 transition-colors">Perfect Service Provider</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
              {[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms & Conditions", path: "/terms-conditions" },
                { name: "Return Policy", path: "/refund-policy" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.path}
                  className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
