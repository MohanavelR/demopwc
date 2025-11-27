import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import MadeInIndiaLogo from "../images/Make_In_India.png";
import {
  ArrowRight,
  Star,
  Play,
  Shield,
  Zap,
  Award,
  Home as HomeIcon,
  Building,
  Factory,
  Heart,
  CheckCircle,
  Eye,
  Target,
  Users,
  Check,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import product6 from "../images/product6.jpeg";
import product7 from "../images/product7.jpeg";
import product8 from "../images/product8.jpeg";
import product2 from "../images/product2.jpg";
import product4 from "../images/product4.jpg";
import product10 from "../images/product10.jpg";
import product9 from "../images/product9.jpg";
import EcoVentLogo from "../images/logo.png";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const heroImages = [
    // "https://images.unsplash.com/photo-1613324061338-19d4528a5be9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHx3aW5kb3dzfGVufDB8fHx8MTc1NzQzMDE3NHww&ixlib=rb-4.1.0&q=85",
    // "https://images.unsplash.com/photo-1559891185-8f039d5a9c6c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxjYXNlbWVudCUyMHdpbmRvd3N8ZW58MHx8fHwxNzU3NDMwMTUxfDA&ixlib=rb-4.1.0&q=85",
    // "https://images.unsplash.com/photo-1496092607007-ca127e0b6a10?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHx3aW5kb3dzfGVufDB8fHx8MTc1NzQzMDE3NHww&ixlib=rb-4.1.0&q=85",
    product10,
    // product9,
  ];

  const featuredImages = [
    "https://images.unsplash.com/photo-1636095643831-efebe5813a09?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBkb29yc3xlbnwwfHx8fDE3NTc0MzAxNTl8MA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1527352774566-e4916e36c645?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHx3aW5kb3dzfGVufDB8fHx8MTc1NzQzMDE3NHww&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1493146165056-bb822d9422dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxkb29yc3xlbnwwfHx8fDE3NTc0MzAxODB8MA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1550697318-929498858774?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxkb29yc3xlbnwwfHx8fDE3NTc0MzAxODB8MA&ixlib=rb-4.1.0&q=85",
  ];

  const services = [
    {
      icon: HomeIcon,
      title: "Casement Windows & Doors",
      description: "Customizable, durable, and energy-efficient for every home",
      image: product4,
    },
    {
      icon: Shield,
      title: "Sliding Windows & Doors",
      description: "Stylish, secure, and designed for lasting performance",
      image: product2,
    },
  ];

  const industries = [
    {
      icon: HomeIcon,
      title: "Residential",
      image:
        "https://images.unsplash.com/photo-1613324061338-19d4528a5be9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHx3aW5kb3dzfGVufDB8fHx8MTc1NzQzMDE3NHww&ixlib=rb-4.1.0&q=85",
    },
    {
      icon: Building,
      title: "Commercial",
      image:
        "https://images.unsplash.com/photo-1496092607007-ca127e0b6a10?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHx3aW5kb3dzfGVufDB8fHx8MTc1NzQzMDE3NHww&ixlib=rb-4.1.0&q=85",
    },
    {
      icon: Factory,
      title: "Industrial",
      image:
        "https://images.pexels.com/photos/4362318/pexels-photo-4362318.jpeg",
    },
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Energy-Saving",
      description:
        "Lower electricity bills with better insulation - ECOVENT profiles reduce thermal transfer significantly",
    },
    {
      icon: Shield,
      title: "Weather-Proof",
      description:
        "Monsoon-tested for heavy rain & wind - superior protection against all weather conditions",
    },
    {
      icon: Award,
      title: "Made in India",
      description:
        "Premium materials sourced from trusted suppliers with world-class manufacturing standards",
    },
    {
      icon: Heart,
      title: "Maintenance-Free",
      description:
        "Just wipe clean, no repainting needed - termite & corrosion resistant for long life",
    },
  ];

  const comparisonData = [
    {
      feature: "Weather Resistance",
      upvc: { status: true, text: "Excellent" },
      aluminium: { status: true, text: "Good" },
      wooden: { status: false, text: "Poor" },
    },
    {
      feature: "Thermal Insulation",
      upvc: { status: true, text: "Excellent" },
      aluminium: { status: false, text: "Poor" },
      wooden: { status: true, text: "Good" },
    },
    {
      feature: "Sound Insulation",
      upvc: { status: true, text: "Excellent" },
      aluminium: { status: false, text: "Poor" },
      wooden: { status: true, text: "Good" },
    },
    {
      feature: "Maintenance Required",
      upvc: { status: true, text: "Minimal" },
      aluminium: { status: true, text: "Low" },
      wooden: { status: false, text: "High" },
    },
    {
      feature: "Cost Effectiveness",
      upvc: { status: true, text: "Excellent" },
      aluminium: { status: true, text: "Good" },
      wooden: { status: false, text: "Expensive" },
    },
    {
      feature: "Longevity",
      upvc: { status: true, text: "25+ Years" },
      aluminium: { status: true, text: "20+ Years" },
      wooden: { status: false, text: "10-15 Years" },
    },
  ];

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(imageTimer);
  }, [heroImages.length]);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".parallax-element");

      parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.2;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <SEO
        title="Proflex Window Profiles - Premium UPVC Windows & Doors | Made in India"
        description="Premium UPVC window profiles and doors manufacturer in India. Energy-efficient casement & sliding windows with weather-proof design. Get free quotes for your home renovation."
        keywords="UPVC windows, UPVC doors, window profiles, casement windows, sliding windows, energy efficient windows, weather proof windows, made in India, home renovation, window installation, door installation, Kolar, Karnataka"
        url="/"
      />
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-2000 ${
                index === currentImageIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* Floating Particles with Parallax */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float parallax-element"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto text-center text-white">
              <div className="animate-fadeInUp">
                <div
                  className=" rounded-lg p-2 shadow-sm"
                  style={{ width: "fit-content", margin: "12px auto" }}
                >
                  <img
                    src={EcoVentLogo}
                    alt="EcoVent Logo"
                    style={{ width: "400px", height: "60px" }}
                    className="sm:w-[200px] sm:h-[40px] transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <h1 className="text-3xl  sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight hero-title px-2">
                  Durability that lasts
                  <span className="block text-[#7BBE4B] animate-pulse">
                    Style that inspires
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 font-semibold max-w-3xl mx-auto leading-relaxed tracking-tight text-white drop-shadow-lg px-4">
                  <span className="block text-[#7BBE4B] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">
                    Strong. Stylish. Secure.
                  </span>
                  <span className="block text-base sm:text-lg md:text-xl lg:text-2xl">
                    Premium UPVC Profiles that last a lifetime.
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                  <Button
                    size="sm"
                    className="bg-[#0A6EA1] text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg group w-full sm:w-auto"
                    asChild
                  >
                    <Link to="/products">
                      Explore Products
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border border-white text-white hover:bg-white hover:text-gray-900 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base transition-all duration-300 transform hover:scale-105 backdrop-blur-sm group w-full sm:w-auto"
                    asChild
                  >
                    <Link to="/contact">
                      <Play className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                      REQUEST QUOTES
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Enhanced */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Company Motto Section - New */}
      <section className="py-8 sm:py-14 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div
            id="motto-section"
            data-animate
            className={`text-center transform transition-all duration-1500 ${
              isVisible["motto-section"]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <Badge className="bg-[#0A6EA1]/10 text-[#0A6EA1] border-[#0A6EA1]/20 px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg mb-6 sm:mb-8">
              INSPIRING EXCELLENCE
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 px-4">
              Leading the Way in Durable,
              <span className="block py-2">
                Stylish{" "}
                <span className="text-[#7BBE4B]">
                  ECO<span className="text-[#0A6EA1]">VENT</span>
                  <sup style={{ color: "black" }}>TM</sup>
                </span>{" "}
                Solutions
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-4">
              Choose Reliability, Innovation, and Excellence with ECOVENT
              <sup>TM</sup> uPVC Solutions
            </p>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section className="py-8 sm:py-14 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div
              id="about-content"
              data-animate
              className={`transform transition-all duration-1500 ${
                isVisible["about-content"]
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                Where Strength Meets Style
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                At PROFLEX, we proudly bring you ECOVENT<sup>TM</sup> — a
                premium range of uPVC windows and doors designed to inspire
                modern living. Built for durability, energy efficiency, and
                superior protection against weather, noise, and daily wear,
                ECOVENT<sup>TM</sup> is the perfect choice for residential and
                commercial projects.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Our commitment to innovation and eco-friendly solutions means
                ECOVENT<sup>TM</sup> products don't just perform — they enhance
                the look, feel, and comfort of your spaces. Every profile
                strikes the ideal balance between form and function, ensuring
                beauty that lasts.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <img
                  src={MadeInIndiaLogo}
                  alt="Made in India"
                  className="h-12 sm:h-16 w-auto"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    Made in India, Made for You
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Proudly manufactured with world-class standards
                  </p>
                </div>
              </div>
              <Button
                size="sm"
                className="bg-[#7BBE4B] hover:bg-[#6DA63F] text-white px-4 py-2 text-sm transition-all duration-300 transform hover:scale-105 shadow-md group"
                asChild
              >
                <Link to="/about">
                  Know more about us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div
              id="about-images"
              data-animate
              className={`transform transition-all duration-1500 delay-300 ${
                isVisible["about-images"]
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="grid grid-cols-2 gap-3 sm:gap-6">
                  <div className="space-y-3 sm:space-y-6">
                    <img
                      src={product6}
                      alt="UPVC Windows"
                      className="rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                    />
                    <img
                      src={product8}
                      alt="UPVC Doors"
                      className="rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3 sm:space-y-6 pt-6 sm:pt-12">
                    <img
                      src="https://images.unsplash.com/photo-1613324061338-19d4528a5be9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHx3aW5kb3dzfGVufDB8fHx8MTc1NzQzMDE3NHww&ixlib=rb-4.1.0&q=85"
                      alt="Installation"
                      className="rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                    />
                    <img
                      src={product7}
                      alt="UPVC Windows"
                      className="rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="py-8 sm:py-14 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            id="services-header"
            data-animate
            className={`text-center mb-8 sm:mb-12 transform transition-all duration-1500 ${
              isVisible["services-header"]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <Badge className="bg-[#0A6EA1]/10 text-[#0A6EA1] border-[#0A6EA1]/20 px-4 sm:px-6 py-2 mb-4 sm:mb-6">
              Our Products
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 px-4">
              Strong. Stylish. Secure
              <span className="text-[#7BBE4B] text-2xl sm:text-3xl md:text-4xl py-2 block">
                UPVC solutions
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                id={`service-${index}`}
                data-animate
                className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 ${
                  isVisible[`service-${index}`]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    style={{ filter: "blur(2px)" }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-3 sm:mb-4">
                      {service.description}
                    </p>
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white hover:text-gray-900 backdrop-blur-sm px-3 sm:px-4 py-2 text-xs sm:text-sm transition-all duration-300 transform group-hover:scale-105"
                      asChild
                    >
                      <Link to="/products">
                        View Products <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section - uPVC vs Aluminium vs Wooden */}
      <section className="py-8 sm:py-14 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            id="comparison-header"
            data-animate
            className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1500 ${
              isVisible["comparison-header"]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <Badge className="bg-[#7BBE4B]/10 text-[#7BBE4B] border-[#7BBE4B]/20 px-4 sm:px-6 py-2 mb-4 sm:mb-6">
              Material Comparison
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              uPVC vs Aluminium vs Wooden
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 px-4">
              Strenuous Indian weather conditions demand that uPVC Windows &
              Doors installations are robust & meet the highest manufacturing
              quality standards.
            </p>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Proflex uPVC Windows & Doors are aimed to accomplish that through
              best raw material from Fortune 500 Companies across the globe and
              state of the art manufacturing processes overseen by top-tier
              talent ensuring best practices.
            </p>
          </div>

          <div
            id="comparison-table"
            data-animate
            className={`transform transition-all duration-1500 delay-300 ${
              isVisible["comparison-table"]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#0A6EA1] to-[#7BBE4B] text-white">
                        <th className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left text-sm sm:text-base lg:text-lg font-bold">
                          Features
                        </th>
                        <th className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-center text-sm sm:text-base lg:text-lg font-bold bg-[#7BBE4B]/20">
                          uPVC
                        </th>
                        <th className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-center text-sm sm:text-base lg:text-lg font-bold bg-[#0A6EA1]/20">
                          Aluminium
                        </th>
                        <th className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-center text-sm sm:text-base lg:text-lg font-bold bg-gray-600/20">
                          Wooden
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-200 hover:bg-gray-50 transition-colors duration-300 ${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                          }`}
                        >
                          <td className="px-3 sm:px-4 lg:px-6 py-3 text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                            {row.feature}
                          </td>
                          <td className="px-3 sm:px-4 lg:px-6 py-3 text-center">
                            <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                              <div
                                className={`p-1 sm:p-2 rounded-full ${
                                  row.upvc.status
                                    ? "bg-green-100 text-green-600"
                                    : "bg-red-100 text-red-600"
                                }`}
                              >
                                {row.upvc.status ? (
                                  <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                                ) : (
                                  <X className="h-3 w-3 sm:h-4 sm:w-4" />
                                )}
                              </div>
                              <span
                                className={`text-xs sm:text-sm font-medium ${
                                  row.upvc.status
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {row.upvc.text}
                              </span>
                            </div>
                          </td>
                          <td className="px-3 sm:px-4 lg:px-6 py-3 text-center">
                            <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                              <div
                                className={`p-1 sm:p-2 rounded-full ${
                                  row.aluminium.status
                                    ? "bg-green-100 text-green-600"
                                    : "bg-red-100 text-red-600"
                                }`}
                              >
                                {row.aluminium.status ? (
                                  <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                                ) : (
                                  <X className="h-3 w-3 sm:h-4 sm:w-4" />
                                )}
                              </div>
                              <span
                                className={`text-xs sm:text-sm font-medium ${
                                  row.aluminium.status
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {row.aluminium.text}
                              </span>
                            </div>
                          </td>
                          <td className="px-3 sm:px-4 lg:px-6 py-3 text-center">
                            <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                              <div
                                className={`p-1 sm:p-2 rounded-full ${
                                  row.wooden.status
                                    ? "bg-green-100 text-green-600"
                                    : "bg-red-100 text-red-600"
                                }`}
                              >
                                {row.wooden.status ? (
                                  <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                                ) : (
                                  <X className="h-3 w-3 sm:h-4 sm:w-4" />
                                )}
                              </div>
                              <span
                                className={`text-xs sm:text-sm font-medium ${
                                  row.wooden.status
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {row.wooden.text}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose ECOVENT Section - Similar to About Page */}
      <section className="py-8 sm:py-14 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            id="why-choose-header"
            data-animate
            className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${
              isVisible["why-choose-header"]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Why Choose{" "}
              <span className="text-[#7BBE4B]">
                ECO<span className="text-[#0A6EA1]">VENT</span>
                <sup style={{ color: "black" }}>TM</sup>
              </span>
            </h2>
            <div className="w-24 h-1 bg-[#7BBE4B] mx-auto rounded-full"></div>
            <div className="flex flex-col items-center gap-4 my-4 sm:my-6">
              <img
                src={MadeInIndiaLogo}
                alt="Made in India"
                className="h-12 sm:h-16 w-auto mb-2"
              />
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Made in India, Made for You
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Proudly manufactured with world-class standards
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                id={`why-${index}`}
                data-animate
                className={`group text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:rotate-1 ${
                  isVisible[`why-${index}`]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-white group-hover:shadow-lg transition-all duration-500 group-hover:scale-110">
                      <item.icon className="h-8 w-8 sm:h-10 sm:w-10 text-[#7BBE4B] transition-all duration-500" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#0A6EA1] transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
