import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import SEO from "../components/SEO";
import {
  Building2,
  Target,
  Eye,
  Heart,
  Award,
  Shield,
  Zap,
  CheckCircle,
  Factory,
  Settings,
  Leaf,
  Star,
  Thermometer,
  Wind,
  Bug,
  Droplets,
  Wrench,
  Globe,
} from "lucide-react";
import Footer from "../components/Footer";
import MadeInIndiaLogo from "../images/Make_In_India.png";

const About = () => {
  const [isVisible, setIsVisible] = useState({});

  // Animation intersection observer
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

  const qualityPromises = [
    {
      icon: Award,
      title: "Premium Materials",
      description:
        "Sourced from trusted suppliers for unmatched durability and strength",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Settings,
      title: "Precision Manufacturing",
      description:
        "State-of-the-art processes ensure perfect dimensions, flawless finish, and reliable performance",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: Target,
      title: "Tailor-Made Solutions",
      description:
        "Our customer-first approach means every system is designed to meet your exact needs",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: Zap,
      title: "Continuous Innovation",
      description:
        "We constantly refine our products to deliver better design, efficiency, and comfort",
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Approach",
      description:
        "Our processes reduce waste and save energy, helping you build a greener future",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  const manufacturingFeatures = [
    {
      icon: Factory,
      title: "State-of-the-Art Technology",
      description:
        "Advanced machinery ensures every profile meets international benchmarks",
    },
    {
      icon: Settings,
      title: "Automation & Precision",
      description:
        "Minimizes error, guarantees perfect dimensions, and delivers a flawless finish",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description:
        "Designed for minimal waste and reduced environmental impact",
    },
    {
      icon: Globe,
      title: "Capacity & Reliability",
      description:
        "Ready to meet the demands of large-scale residential, commercial, and infrastructure projects",
    },
  ];

  const ecoventBenefits = [
    {
      icon: Droplets,
      title: "Weather-Proof",
      description: "Monsoon-tested for heavy rain & wind",
      color: "text-blue-500",
    },
    {
      icon: Shield,
      title: "Dust & Noise Reduction",
      description: "Keep the chaos of the city outside",
      color: "text-gray-500",
    },
    {
      icon: Zap,
      title: "Energy-Saving",
      description: "Lower electricity bills with better insulation",
      color: "text-yellow-500",
    },
    {
      icon: Bug,
      title: "Termite & Corrosion Resistant",
      description: "Long life, zero worries",
      color: "text-red-500",
    },
    {
      icon: Wrench,
      title: "Maintenance-Free",
      description: "Just wipe clean, no repainting needed",
      color: "text-green-500",
    },
    {
      icon: Heart,
      title: "Eco-Friendly",
      description: "Safe for your family and the planet",
      color: "text-emerald-500",
    },
  ];

  const testingParameters = [
    "Dimensional Accuracy (Flatness, squareness, angles, radius)",
    "Surface Colour Stability (Visual uniformity and fade resistance)",
    "Surface Finish & Appearance (Gloss levels, texture, and visual defects)",
    "Profile Mass Verification (Compliance with specified material weight and density)",
    "Straightness & Form Tolerance (Critical for structural integrity)",
    "Heat Reversion Test (EN 479) - Evaluating deformation under heat",
    "Heat Ageing Test (EN 478) - Simulates long-term exposure to heat",
    "Impact Resistance (EN 477) - Assesses toughness and shock absorption",
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="About Proflex Window Profiles - Premium UPVC Windows & Doors Manufacturer"
        description="Learn about Proflex Window Profiles, a leading UPVC windows and doors manufacturer in India. Discover our commitment to quality, innovation, and customer satisfaction in Kolar, Karnataka."
        keywords="about proflex window profiles, UPVC windows manufacturer, window profiles company, made in India, Kolar Karnataka, window company history, quality commitment, customer satisfaction"
        url="/about"
      />
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0A6EA1] via-[#7BBE4B] to-[#0A6EA1] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHx1UFZDJTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NTgxNzc2MDd8MA&ixlib=rb-4.1.0&q=85"
            alt="Modern Manufacturing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-5xl mx-auto animate-fadeInUp">
            <Badge className="bg-white/20 text-white border-white/30 px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg mb-6 sm:mb-8">
              Where Strength Meets Style
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-4">
              Welcome to{" "}
              <span>
                ECOVENT<sup>TM</sup>
              </span>
            </h1>
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-4xl mx-auto px-4">
              At PROFLEX, we proudly bring you ECOVENT<sup>TM</sup> — a premium
              range of uPVC windows and doors designed to inspire modern living.
              Where your vision takes shape.
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-float hidden sm:block"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-[#7BBE4B]/20 rounded-full animate-float-delayed hidden sm:block"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-pulse hidden sm:block"></div>
      </section>

      {/* About Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            id="about-main"
            data-animate
            className={`grid lg:grid-cols-1 gap-8 sm:gap-12 lg:gap-16 items-center transform transition-all duration-1000 ${
              isVisible["about-main"]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                Built for durability,
                <span className=" block">energy efficiency, and style</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Built for durability, energy efficiency, and superior protection
                against weather, noise, and daily wear, ECOVENT<sup>TM</sup> is
                the perfect choice for residential and commercial projects.
                Every profile strikes the ideal balance between form and
                function, ensuring beauty that lasts.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Our commitment to innovation and eco-friendly solutions means
                ECOVENT<sup>TM</sup> products don't just perform — they enhance
                the look, feel, and comfort of your spaces. Whether you need
                modern windows, secure doors, or fully customized systems, our
                expert team ensures perfection in every detail.
              </p>

              {/* Made in India Logo */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
            </div>

            {/* IMAGES HAS TO BE REPLACED */}
            {/* <div className="relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                <div className="space-y-3 sm:space-y-6">
                  <img
                    src="https://images.unsplash.com/photo-1730705788367-dbd288c40ee7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHx1UFZDJTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NTgxNzc2MDd8MA&ixlib=rb-4.1.0&q=85"
                    alt="Manufacturing Process"
                    className="rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1585366958113-e28e8e580d3a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBlbmdpbmVlcmluZ3xlbnwwfHx8fDE3NTgxNzc2MTd8MA&ixlib=rb-4.1.0&q=85"
                    alt="Precision Testing"
                    className="rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                  />
                </div>
                <div className="space-y-3 sm:space-y-6">
                  <img
                    src="https://images.unsplash.com/photo-1627704671340-0969d7dbac25?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwdGVzdGluZyUyMGVxdWlwbWVudHxlbnwwfHx8fDE3NTgxNzc2MTJ8MA&ixlib=rb-4.1.0&q=85"
                    alt="Quality Testing"
                    className="rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1730705788367-dbd288c40ee7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHx1UFZDJTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NTgxNzc2MDd8MA&ixlib=rb-4.1.0&q=85"
                    alt="Manufacturing Process"
                    className="rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Quality Promise Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            id="quality-header"
            data-animate
            className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${
              isVisible["quality-header"]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Our Quality Promise
            </h2>
            <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto px-4">
              At PROFLEX, every ECOVENT<sup>TM</sup> product is built to last —
              engineered with premium raw materials and tested to withstand
              time, weather, and daily use.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {qualityPromises.map((promise, index) => (
              <Card
                key={index}
                id={`quality-${index}`}
                data-animate
                className={`group border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-rotate-1 ${
                  isVisible[`quality-${index}`]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="mb-4 sm:mb-6">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 ${promise.bg} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:rotate-6`}
                    >
                      <promise.icon
                        className={`h-6 w-6 sm:h-8 sm:w-8 ${promise.color}`}
                      />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#0A6EA1] transition-colors duration-500">
                    {promise.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {promise.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            id="manufacturing-header"
            data-animate
            className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${
              isVisible["manufacturing-header"]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <Badge className="bg-[#7BBE4B]/10 text-[#7BBE4B] border-[#7BBE4B]/20 px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg mb-6 sm:mb-8">
              Future-Ready Manufacturing for Tomorrow's Projects
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              World-Class Manufacturing Facility
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              We have built a world-class facility to deliver ECOVENT
              <sup>TM</sup> profiles with precision, consistency, and unmatched
              quality.
            </p>
          </div>
          {/* IMAGES HAS TO BE REPLACED - grid-cols-2 */}

          <div className="grid lg:grid-cols-1 gap-8 sm:gap-12 lg:gap-16 items-center mb-8 sm:mb-12 lg:mb-16">
            <div
              id="manufacturing-image"
              data-animate
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible["manufacturing-image"]
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              {/* IMAGES HAS TO BE REPLACED */}
              {/* <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1585366958403-bacb4c36a1a9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxwcmVjaXNpb24lMjBlbmdpbmVlcmluZ3xlbnwwfHx8fDE3NTgxNzc2MTd8MA&ixlib=rb-4.1.0&q=85"
                  alt="Advanced Manufacturing"
                  className="rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                />
                <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 bg-[#7BBE4B] rounded-xl sm:rounded-2xl flex items-center justify-center animate-pulse">
                  <Factory className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
              </div> */}
            </div>
            <div>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {manufacturingFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    id={`manufacturing-${index}`}
                    data-animate
                    className={`group border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                      isVisible[`manufacturing-${index}`]
                        ? "translate-y-0 opacity-100"
                        : "translate-y-20 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0A6EA1]/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-[#0A6EA1] transition-colors duration-300">
                          <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#0A6EA1] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#0A6EA1] transition-colors duration-300 text-sm sm:text-base">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            id="about-features-header"
            data-animate
            className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${
              isVisible["about-features-header"]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              <span className="text-[#7BBE4B]">
                ECO<span className="text-[#0A6EA1]">VENT</span>
                <sup style={{ color: "black" }}>TM</sup>
              </span>{" "}
              <span>Features</span>
            </h2>
            <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto px-4">
              Every PROFLEX ECOVENT<sup>TM</sup> window and door is engineered
              with advanced features for superior performance
            </p>
          </div>

          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: "https://prominance.com/wp-content/uploads/2017/12/upvcfeature16.png",
                  title: "Sound Insulation",
                  description:
                    "Not only do they provide thermal insulation but also special sound insulation. Double glass units can help in sound reduction upto 30 Db.",
                },
                {
                  icon: "https://prominance.com/wp-content/uploads/2017/12/upvcfeature13.png",
                  title: "Maintenance Free",
                  description:
                    "Proflex windows are virtually dirt resistant and easy to maintain with normal soap water.",
                },
                {
                  icon: "https://prominance.com/wp-content/uploads/2017/12/upvcfeature6.png",
                  title: "Excellent Cost Benefit Ratio",
                  description:
                    "uPVC profiles save a lot of costs in terms of maintenance & saving energy when compared to Timber frames which are approximately 40% - 50% more expensive.",
                },
                {
                  icon: "https://prominance.com/wp-content/uploads/2017/12/upvcfeature7.png",
                  title: "UV Resistance",
                  description:
                    "Proflex windows offer 100% UV resistance with right amount of TiO2, which helps in retaining whiteness against exposure to sun.",
                },
                {
                  icon: "https://prominance.com/wp-content/uploads/2017/12/upvcfeature8.png",
                  title: "Bug Mesh Options",
                  description:
                    "Mosquitoes and other bugs are a big menace. To Protect against Insects, We have bug mesh option available for our sliding systems.",
                },
                {
                  icon: "https://prominance.com/wp-content/uploads/2017/12/upvcfeature9.png",
                  title: "Durability",
                  description:
                    "Proflex windows do not warp, twist or split. Impact modifiers in our profiles are treated with special additives, thereby making the material extremely long lasting.",
                },
                {
                  icon: "https://prominance.com/wp-content/uploads/2017/12/upvcfeature10.png",
                  title: "High Weather Resistance",
                  description:
                    "Proflex windows are specially developed keeping in mind the tropical humidity prevalent in India. Long exposures to sun, rain, wind & moisture cannot affect the window quality or durability.",
                },
                {
                  icon: "https://prominance.com/wp-content/uploads/2017/12/upvcfeature11.png",
                  title: "100% Recyclable",
                  description:
                    "Proflex avoids contributing to deforestation by using wood alternatives. Proflex windows and doors are 100% lead free & recyclable",
                },
                {
                  icon: "https://prominance.com/wp-content/uploads/2017/12/upvcfeature12.png",
                  title: "Impact Resistance",
                  description:
                    "Proflex windows are uniquely designed and specially formulated to withstand high impacts during handling and installation.",
                },

                {
                  icon: "https://prominance.com/wp-content/uploads/2017/12/upvcfeature14.png",
                  title: "Termite & Corrosion Resistance",
                  description:
                    "Proflex windows are termite and corrosion resistant. Salts, acids, alkali and waste gases cannot corrode the window systems.",
                },
                {
                  icon: "https://prominance.com/wp-content/uploads/2017/12/upvcfeature15.png",
                  title: "Fire Retardant",
                  description:
                    "Proflex windows are fire retardant. During fire, once source of fire is removed, a carbonaceous layer is formed preventing supplying of oxygen and stops the spread.",
                },
                {
                  icon: "https://prominance.com/wp-content/uploads/2017/12/upvcfeature4.png",
                  title: "Stronger Couplers",
                  description:
                    "Our unique coupler designs for large windows offer stronger resistance to wind loads.",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  id={`feature-${index}`}
                  data-animate
                  className={`group border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-rotate-1 ${
                    isVisible[`feature-${index}`]
                      ? "translate-y-0 opacity-100"
                      : "translate-y-20 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                    <div className="mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0A6EA1]/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#0A6EA1] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <img
                          src={feature.icon}
                          alt={feature.title}
                          className="w-10 h-10 sm:w-14 sm:h-14 object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#0A6EA1] transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Testing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div
            id="testing-header"
            data-animate
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible["testing-header"]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Performance Testing & Quality Assurance
            </h2>
            <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-4xl mx-auto">
              <strong>Ensuring Premium Quality with Proven Standards</strong>
              <br />
              Rigorous Testing. Reliable Performance.
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto">
              At Proflex, quality is not just a benchmark — it's a commitment.
              Our products undergo comprehensive testing protocols aligned with
              global standards to guarantee durability, strength, and long-term
              performance across all applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Key Parameters We Test:
              </h3>
              <div className="space-y-4">
                {testingParameters.map((parameter, index) => (
                  <div
                    key={index}
                    id={`parameter-${index}`}
                    data-animate
                    className={`flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 transform ${
                      isVisible[`parameter-${index}`]
                        ? "translate-x-0 opacity-100"
                        : "translate-x-20 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-6 h-6 bg-[#0A6EA1] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{parameter}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="testing-benefits"
              data-animate
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible["testing-benefits"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Why It Matters:
                  </h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Our commitment to rigorous testing ensures our products
                    consistently deliver:
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Shield,
                        title: "Long-lasting structural performance",
                      },
                      {
                        icon: Star,
                        title: "Superior resistance to environmental stress",
                      },
                      {
                        icon: Award,
                        title: "Guaranteed compliance with industry standards",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#7BBE4B]/10 rounded-xl flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-[#7BBE4B]" />
                        </div>
                        <p className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 p-6 bg-gradient-to-r from-[#0A6EA1] to-[#7BBE4B] rounded-2xl text-white text-center">
                    <h4 className="text-2xl font-bold mb-2">
                      ECOVENT<sup>TM</sup>
                    </h4>
                    <p className="text-lg opacity-90">
                      Tested. Trusted. Time-Proven.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
