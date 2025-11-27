import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Award,
  Shield,
  Heart,
  Zap,
} from "lucide-react";
import EcoVentLogo from "../images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Casement Windows",
    "Casement Doors",
    "Sliding Windows",
    "Sliding Doors",
  ];

  const technicalItems = [
    {
      category: "Technical Specifications",
      items: [
        {
          name: "Casement Series - 60 Series",
          path: "/technical/casement/i-60",
        },
        {
          name: "Sliding Series - 60 Series",
          path: "/technical/sliding/i-60",
        },
        {
          name: "Auxiliary Profiles",
          path: "/technical/auxiliary-profiles",
        },
        {
          name: "Cross Sectional Designs - Casement & Sliding",
          path: "/technical/cross-sectional-designs/casement",
        },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1PYkr9mNAF/",
      label: "Facebook",
    },

    {
      icon: Instagram,
      href: "https://www.instagram.com/ecovent_upvc?igsh=NDlqZXoyb3JrNmp6",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1618832515490-e181c4794a45?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbnxlbnwwfHx8fDE3NTc0MzAxNjZ8MA&ixlib=rb-4.1.0&q=85"
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
      </div>


      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-4 sm:mb-6">
                <div
                  className="rounded-lg shadow-sm mb-3"
                  style={{ width: "fit-content" }}
                >
                  <img
                    src={EcoVentLogo}
                    alt="EcoVent Logo"
                    width={240}
                    className="h-6 sm:h-8"
                  />
                </div>
                <h3 className="text-gray-300 leading-relaxed mb-1 text-sm sm:text-base">
                  Powered by
                </h3>
                <h3
                  style={{ fontSize: "17px", fontWeight: "800" }}
                  className="sm:text-xl font-bold mb-3 sm:mb-4 text-[#7BBE4B]"
                >
                  Proflex Window Profiles
                </h3>
              </div>

              {/* Social Links */}
              <div>
                <h6 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  Follow Us
                </h6>
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#7BBE4B] transition-all duration-300 transform hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[#7BBE4B]">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-[#7BBE4B] transition-colors duration-300 flex items-center group text-sm sm:text-base"
                    >
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[#7BBE4B]">
                Our Products
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to="/products"
                      className="text-gray-300 hover:text-[#7BBE4B] transition-colors duration-300 flex items-center group text-sm sm:text-base"
                    >
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[#7BBE4B]">
                Technical
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {technicalItems[0].items.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-[#7BBE4B] transition-colors duration-300 flex items-center group text-sm sm:text-base"
                    >
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[#7BBE4B]">
                Contact Info
              </h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-[#7BBE4B] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm sm:text-base">
                      +91-7760012233
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Mon-Sat: 8AM-6PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#7BBE4B] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm sm:text-base">
                      proflexwindowprofiles@gmail.com
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      24hr response time
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#7BBE4B] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Plot no 107/P2i, Harjenahalli main road
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      KIADB industrial area, Vemgal, Kolar (TK), Kolar (DT)
                      -563102
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                © {currentYear} Proflex Window Profiles. All rights reserved |
                <span className="ml-2">
                  Developed and Managed by Webnique Digital Solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
