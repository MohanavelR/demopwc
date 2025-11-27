import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import {
  Download,
  Ruler,
  Shield,
  Thermometer,
  Wind,
  Droplets,
  Zap,
  Award,
  Eye,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

// Import Casement Series Images
import casementOuterFrame from "../images/TECHNICALS/CASEMENT SERIES/60 SERIES/01 - CASMENT OUTER FRAME_page-0001.jpg";
import casementTMullion from "../images/TECHNICALS/CASEMENT SERIES/60 SERIES/02 - T-MULLION_page-0001.jpg";
import casementWindowSashOutside from "../images/TECHNICALS/CASEMENT SERIES/60 SERIES/03 - CASEMENT WINDOW SASH OUTSIDE OPENING_page-0001.jpg";
import casementDoorSash from "../images/TECHNICALS/CASEMENT SERIES/60 SERIES/04 - CASEMENT DOOR SASH_page-0001.jpg";
import casementDoorSashInside from "../images/TECHNICALS/CASEMENT SERIES/60 SERIES/05 - CASEMENT DOOR SASH INSIDE OPENING_page-0001.jpg";
import casementZMullion from "../images/TECHNICALS/CASEMENT SERIES/60 SERIES/06 - Z-MULLION_page-0001.jpg";
import casementGlazingBead from "../images/TECHNICALS/CASEMENT SERIES/60 SERIES/07 - GLAZING BEAD_page-0001.jpg";
import casementDoubleGlazingBead from "../images/TECHNICALS/CASEMENT SERIES/60 SERIES/08 - CASEMENT DOUBLE GLAZING BEAD_page-0001.jpg";
import casementFalseMullion from "../images/TECHNICALS/CASEMENT SERIES/60 SERIES/10 - FALSE MULLION_page-0001.jpg";

// Import Sliding Series Images
import sliding2TrackFrame from "../images/TECHNICALS/SLIDING SERIES/88 SERIES/01 - SLIDING 2 TRACK OUTER FRAME_page-0001.jpg";
import sliding25TrackFrame from "../images/TECHNICALS/SLIDING SERIES/88 SERIES/02 - SLIDING 2.5 TRACK OUTER FRAME_page-0001.jpg";
import sliding3TrackFrame from "../images/TECHNICALS/SLIDING SERIES/88 SERIES/03 - SLIDING 3 TRACK OUTER FRAME_page-0001.jpg";
import slidingWindowSash from "../images/TECHNICALS/SLIDING SERIES/88 SERIES/04 - SLIDING WINDOW SASH_page-0001.jpg";
import slidingDoorSash from "../images/TECHNICALS/SLIDING SERIES/88 SERIES/05 - SLIDING DOOR SASH_page-0001.jpg";
import slidingMeshSash from "../images/TECHNICALS/SLIDING SERIES/88 SERIES/06 - SLIDING MESH SASH_page-0001.jpg";
import slidingWindowInterlock from "../images/TECHNICALS/SLIDING SERIES/88 SERIES/07 - SLIDING WINDOW INTERLOCK_page-0001.jpg";
import slidingDoorInterlock from "../images/TECHNICALS/SLIDING SERIES/88 SERIES/08 - SLIDING DOOR INTERLOCK_page-0001.jpg";
import slidingGlazingBead from "../images/TECHNICALS/SLIDING SERIES/88 SERIES/09 - SLIDING GLAZING BEAD_page-0001.jpg";
import slidingBigMeshMullion from "../images/TECHNICALS/SLIDING SERIES/88 SERIES/10 - BIG MESH MULLION_page-0001.jpg";
import slidingSashMullion from "../images/TECHNICALS/SLIDING SERIES/88 SERIES/11 - SASH MULLION_page-0001.jpg";
import slidingDoubleGlazingBead from "../images/TECHNICALS/SLIDING SERIES/88 SERIES/12 - DOUBLE GLAZING BEAD_page-0001.jpg";
import slidingSashJoint from "../images/TECHNICALS/SLIDING SERIES/88 SERIES/13 - SASH JOINT_page-0001.jpg";

// Import Auxiliary Profiles Images
import auxiliary90Corner from "../images/TECHNICALS/AUXILIARY PROFILES/01- 90 CORNER_page-0001.jpg";
import auxiliaryDoorPanel from "../images/TECHNICALS/AUXILIARY PROFILES/02- DOOR PANEL_page-0001.jpg";
import auxiliarySashJoint from "../images/TECHNICALS/AUXILIARY PROFILES/03 - SASH JOINT_page-0001.jpg";
import auxiliaryConnector from "../images/TECHNICALS/AUXILIARY PROFILES/04 - CONNECTOR 2.5 TRACK_page-0001.jpg";

// Import Cross Sectional Designs Images - Casement
import casementDWBlackWhite from "../images/TECHNICALS/CROSS SECTIONAL DESIGNS/CASEMENT/CASEMENT D&W BLACK & WHITE_page-0001.jpg";

import casementDoorBlackWhite from "../images/TECHNICALS/CROSS SECTIONAL DESIGNS/CASEMENT/CASEMENT DOOR BLACK & WHITE_page-0001.jpg";

// Import Cross Sectional Designs Images - Sliding
import sliding3TrackBlackWhite from "../images/TECHNICALS/CROSS SECTIONAL DESIGNS/SLIDING/3 TRACK SLIDING DOOR BLACK & WHITE_page-0001.jpg";

import slidingDoorBlackWhiteMesh from "../images/TECHNICALS/CROSS SECTIONAL DESIGNS/SLIDING/SLIDING DOOR BLACK & WHITE WITH MESH_page-0001.jpg";
import slidingDoorBlackWhite from "../images/TECHNICALS/CROSS SECTIONAL DESIGNS/SLIDING/SLIDING DOOR BLACK & WHITE_page-0001.jpg";

const Technical = () => {
  const [selectedSeries, setSelectedSeries] = useState("i-60-casement");
  const [isVisible, setIsVisible] = useState({});
  const [currentType, setCurrentType] = useState("casement"); // Track current type from URL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);
  const location = useLocation();

  // Extract series from URL path
  useEffect(() => {
    const pathParts = location.pathname.split("/");

    // If path is exactly /technical, show all series
    if (pathParts.length === 2 && pathParts[1] === "technical") {
      setCurrentType("all");
      setSelectedSeries("i-60-casement"); // Default selection
      return;
    }

    if (pathParts.length >= 3) {
      const type = pathParts[2]; // casement, sliding, auxiliary-profiles, or cross-sectional-designs
      setCurrentType(type);

      if (pathParts.length >= 4) {
        const series = pathParts[3]; // i-60, etc.
        if (type === "auxiliary-profiles") {
          setSelectedSeries("auxiliary-profiles");
        } else if (type === "cross-sectional-designs") {
          if (pathParts.length >= 5) {
            const subType = pathParts[4]; // casement or sliding
            setSelectedSeries(`cross-sectional-${subType}`);
          } else {
            setSelectedSeries("cross-sectional-casement"); // Default to casement
          }
        } else {
          setSelectedSeries(`${series}-${type}`);
        }
      } else {
        // Default to first available series of the type
        if (type === "casement") {
          setSelectedSeries("i-60-casement");
        } else if (type === "sliding") {
          setSelectedSeries("i-60-sliding");
        } else if (type === "auxiliary-profiles") {
          setSelectedSeries("auxiliary-profiles");
        } else if (type === "cross-sectional-designs") {
          setSelectedSeries("cross-sectional-casement");
        }
      }
    }
  }, [location.pathname]);

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

  // Modal functions
  const openModal = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
    setCurrentImages(currentSeries.profileImages);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset"; // Restore scrolling
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isModalOpen) return;

      switch (event.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, currentImages.length]);

  const technicalSeries = {
    "i-60-casement": {
      title: "60 Series - Casement",
      description:
        "Premium casement window system with 60mm frame depth for superior thermal performance",
      features: [
        {
          icon: Ruler,
          title: "Frame Depth",
          value: "60mm",
          description: "Optimal depth for insulation",
        },
        {
          icon: Thermometer,
          title: "U-Value",
          value: "1.2 W/m²K",
          description: "Excellent thermal efficiency",
        },
        {
          icon: Wind,
          title: "Air Tightness",
          value: "Class 4",
          description: "Superior wind resistance",
        },
        {
          icon: Droplets,
          title: "Water Tightness",
          value: "Class 9A",
          description: "Maximum weather sealing",
        },
        {
          icon: Shield,
          title: "Security",
          value: "RC2",
          description: "Enhanced security rating",
        },
        {
          icon: Zap,
          title: "Energy Rating",
          value: "A++",
          description: "Top energy performance",
        },
      ],
      profileImages: [
        {
          src: casementOuterFrame,
          filename: "01 - CASMENT OUTER FRAME_page-0001.jpg",
        },
        {
          src: casementTMullion,
          filename: "02 - T-MULLION_page-0001.jpg",
        },
        {
          src: casementWindowSashOutside,
          filename: "03 - CASEMENT WINDOW SASH OUTSIDE OPENING_page-0001.jpg",
        },
        {
          src: casementDoorSash,
          filename: "04 - CASEMENT DOOR SASH_page-0001.jpg",
        },
        {
          src: casementDoorSashInside,
          filename: "05 - CASEMENT DOOR SASH INSIDE OPENING_page-0001.jpg",
        },
        {
          src: casementZMullion,
          filename: "06 - Z-MULLION_page-0001.jpg",
        },
        {
          src: casementGlazingBead,
          filename: "07 - GLAZING BEAD_page-0001.jpg",
        },
        {
          src: casementDoubleGlazingBead,
          filename: "08 - CASEMENT DOUBLE GLAZING BEAD_page-0001.jpg",
        },
        {
          src: casementFalseMullion,
          filename: "10 - FALSE MULLION_page-0001.jpg",
        },
      ],
      applications: [
        "Residential Windows",
        "Commercial Buildings",
        "Energy Efficient Homes",
        "Renovation Projects",
      ],
    },
    "i-60-sliding": {
      title: "60 Series - Sliding",
      description:
        "Premium sliding window and door system with 60mm frame for smooth operation",
      features: [
        {
          icon: Ruler,
          title: "Frame Depth",
          value: "60mm",
          description: "Robust sliding mechanism",
        },
        {
          icon: Thermometer,
          title: "U-Value",
          value: "1.4 W/m²K",
          description: "Excellent insulation",
        },
        {
          icon: Wind,
          title: "Air Tightness",
          value: "Class 4",
          description: "Superior sealing",
        },
        {
          icon: Droplets,
          title: "Water Tightness",
          value: "Class 8A",
          description: "Weather resistant",
        },
        {
          icon: Shield,
          title: "Load Capacity",
          value: "200kg",
          description: "Heavy-duty operation",
        },
        {
          icon: Award,
          title: "Hardware",
          value: "Premium",
          description: "Smooth gliding system",
        },
      ],
      profileImages: [
        {
          src: sliding2TrackFrame,
          filename: "01 - SLIDING 2 TRACK OUTER FRAME_page-0001.jpg",
        },
        {
          src: sliding25TrackFrame,
          filename: "02 - SLIDING 2.5 TRACK OUTER FRAME_page-0001.jpg",
        },
        {
          src: sliding3TrackFrame,
          filename: "03 - SLIDING 3 TRACK OUTER FRAME_page-0001.jpg",
        },
        {
          src: slidingWindowSash,
          filename: "04 - SLIDING WINDOW SASH_page-0001.jpg",
        },
        {
          src: slidingDoorSash,
          filename: "05 - SLIDING DOOR SASH_page-0001.jpg",
        },
        {
          src: slidingMeshSash,
          filename: "06 - SLIDING MESH SASH_page-0001.jpg",
        },
        {
          src: slidingWindowInterlock,
          filename: "07 - SLIDING WINDOW INTERLOCK_page-0001.jpg",
        },
        {
          src: slidingDoorInterlock,
          filename: "08 - SLIDING DOOR INTERLOCK_page-0001.jpg",
        },
        {
          src: slidingGlazingBead,
          filename: "09 - SLIDING GLAZING BEAD_page-0001.jpg",
        },
        {
          src: slidingBigMeshMullion,
          filename: "10 - BIG MESH MULLION_page-0001.jpg",
        },
        {
          src: slidingSashMullion,
          filename: "11 - SASH MULLION_page-0001.jpg",
        },
        {
          src: slidingDoubleGlazingBead,
          filename: "12 - DOUBLE GLAZING BEAD_page-0001.jpg",
        },
        {
          src: slidingSashJoint,
          filename: "13 - SASH JOINT_page-0001.jpg",
        },
      ],
      applications: [
        "Patio Doors",
        "Large Openings",
        "Balcony Access",
        "Commercial Entrances",
      ],
    },
    "auxiliary-profiles": {
      title: "Auxiliary Profiles",
      description:
        "Essential auxiliary components and profiles for complete window and door systems",
      features: [
        {
          icon: Ruler,
          title: "Corner Joints",
          value: "90°",
          description: "Precise corner connections",
        },
        {
          icon: Shield,
          title: "Door Panels",
          value: "Reinforced",
          description: "Enhanced structural support",
        },
        {
          icon: Zap,
          title: "Sash Joints",
          value: "Multi-point",
          description: "Secure sash connections",
        },
        {
          icon: Award,
          title: "Track Connectors",
          value: "2.5 Track",
          description: "Advanced track systems",
        },
      ],
      profileImages: [
        {
          src: auxiliary90Corner,
          filename: "01- 90 CORNER_page-0001.jpg",
        },
        {
          src: auxiliaryDoorPanel,
          filename: "02- DOOR PANEL_page-0001.jpg",
        },
        {
          src: auxiliarySashJoint,
          filename: "03 - SASH JOINT_page-0001.jpg",
        },
        {
          src: auxiliaryConnector,
          filename: "04 - CONNECTOR 2.5 TRACK_page-0001.jpg",
        },
      ],
      applications: [
        "System Integration",
        "Structural Support",
        "Connection Systems",
        "Accessory Components",
      ],
    },
    "cross-sectional-casement": {
      title: "Cross Sectional Designs - Casement",
      description:
        "Detailed cross-sectional views of casement window and door systems",
      features: [
        {
          icon: Eye,
          title: "Design Views",
          value: "Complete",
          description: "Full casement system visualization",
        },
        {
          icon: Thermometer,
          title: "Color Options",
          value: "Multiple",
          description: "Black & White & Coloured variants",
        },
        {
          icon: Shield,
          title: "System Type",
          value: "Casement",
          description: "Outward opening systems",
        },
        {
          icon: Award,
          title: "Applications",
          value: "D&W",
          description: "Doors & Windows designs",
        },
      ],
      profileImages: [
        {
          src: casementDWBlackWhite,
          filename: "CASEMENT Door & Window _page-0001.jpg",
        },

        {
          src: casementDoorBlackWhite,
          filename: "CASEMENT DOOR _page-0001.jpg",
        },
      ],
      applications: [
        "Casement System Visualization",
        "Design Reference",
        "Installation Guide",
        "Technical Documentation",
      ],
    },
    "cross-sectional-sliding": {
      title: "Cross Sectional Designs - Sliding",
      description:
        "Detailed cross-sectional views of sliding window and door systems",
      features: [
        {
          icon: Eye,
          title: "Design Views",
          value: "Complete",
          description: "Full sliding system visualization",
        },
        {
          icon: Thermometer,
          title: "Color Options",
          value: "Multiple",
          description: "Black & White & Coloured variants",
        },
        {
          icon: Shield,
          title: "System Type",
          value: "Sliding",
          description: "Horizontal sliding systems",
        },
        {
          icon: Award,
          title: "Track Systems",
          value: "3-Track",
          description: "Advanced sliding configurations",
        },
      ],
      profileImages: [
        {
          src: sliding3TrackBlackWhite,
          filename: "3 TRACK SLIDING Window_page-0001.jpg",
        },

        {
          src: slidingDoorBlackWhiteMesh,
          filename: "SLIDING Window WITH MESH_page-0001.jpg",
        },

        {
          src: slidingDoorBlackWhite,
          filename: "SLIDING Window_page-0001.jpg",
        },
      ],
      applications: [
        "Sliding System Visualization",
        "Design Reference",
        "Installation Guide",
        "Technical Documentation",
      ],
    },
  };

  // Filter series based on current type
  const filteredSeries = Object.entries(technicalSeries).filter(
    ([key, series]) => {
      if (currentType === "all") {
        return true; // Show all series when on /technical
      } else if (currentType === "auxiliary-profiles") {
        return key === currentType;
      } else if (currentType === "cross-sectional-designs") {
        return key.startsWith("cross-sectional-");
      }
      return key.includes(currentType);
    }
  );

  const currentSeries =
    technicalSeries[selectedSeries] || technicalSeries["i-60-casement"];

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Technical Specifications - Proflex Window Profiles UPVC Windows & Doors"
        description="Download technical specifications, cross-sectional designs, and detailed drawings for Proflex Window Profiles UPVC windows and doors. 60 Series casement and sliding systems with complete technical documentation."
        keywords="proflex window profiles technical specifications, UPVC windows technical drawings, window profiles cross sectional designs, casement windows technical specs, sliding doors technical data, window installation guides"
        url="/technical"
      />
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0A6EA1] to-[#7BBE4B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1618832515490-e181c4794a45?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbnxlbnwwfHx8fDE3NTc0MzAxNjZ8MA&ixlib=rb-4.1.0&q=85"
            alt="Technical Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto animate-fadeInUp">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
              Technical Specifications
            </h1>
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-3xl mx-auto px-4">
              {currentType === "all"
                ? "Explore all our technical series and specifications for premium UPVC window and door systems"
                : "Detailed technical data and specifications for our premium UPVC window and door systems"}
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-float hidden sm:block"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-[#7BBE4B]/20 rounded-full animate-float-delayed hidden sm:block"></div>
      </section>

      {/* Series Navigation */}
      <section className="py-3 sm:py-4 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-center">
            <div className="flex gap-1 sm:gap-2 p-1 bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto max-w-full">
              {filteredSeries.map(([key, series]) => (
                <button
                  key={key}
                  onClick={() => setSelectedSeries(key)}
                  className={`px-2 sm:px-3 lg:px-4 py-2 rounded-md font-medium transition-all duration-300 whitespace-nowrap text-xs sm:text-sm flex-shrink-0 ${
                    selectedSeries === key
                      ? "bg-[#0A6EA1] text-white shadow-md"
                      : "text-gray-600 hover:text-[#0A6EA1] hover:bg-gray-50"
                  }`}
                >
                  {series.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Series Details */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Series Header */}
          <div
            id="series-header"
            data-animate
            className={`text-center mb-4 sm:mb-6 transform transition-all duration-1000 ${
              isVisible["series-header"]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <Badge className="bg-[#0A6EA1]/10 text-[#0A6EA1] border-[#0A6EA1]/20 px-4 sm:px-6 py-2 mb-4 sm:mb-6 text-sm sm:text-lg">
              {currentSeries.title}
            </Badge>
          </div>

          {/* Technical Features Grid */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {currentSeries.features.map((feature, index) => (
              <Card
                key={index}
                id={`feature-${index}`}
                data-animate
                className={`group border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-rotate-1 ${
                  isVisible[`feature-${index}`]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-[#0A6EA1]/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#0A6EA1] transition-all duration-500 group-hover:scale-110">
                      <feature.icon className="h-10 w-10 text-[#0A6EA1] group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0A6EA1] transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <div className="text-3xl font-bold text-[#7BBE4B] mb-2">
                    {feature.value}
                  </div>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div> */}

          {/* Profile Images Grid */}
          <div
            id="profile-images"
            data-animate
            className={`mb-10 transform transition-all duration-1000 ${
              isVisible["profile-images"]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-4">
              Technical Drawings & Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {currentSeries.profileImages.map((image, index) => {
                // Handle both old string format and new object format
                const imageSrc = typeof image === "string" ? image : image.src;
                const imageName =
                  typeof image === "string"
                    ? image
                        .split("/")
                        .pop()
                        ?.replace("_page-0001.jpg", "")
                        .replace(/^\d+\s*-\s*/, "") || `Component ${index + 1}`
                    : image.filename.replace("_page-0001.jpg", "");

                return (
                  <Card
                    key={index}
                    className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    onClick={() => openModal(index)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={imageSrc}
                        alt={`${currentSeries.title} - ${imageName}`}
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className="w-full h-48 sm:h-56 lg:h-64 bg-gray-200 flex items-center justify-center text-gray-500 hidden"
                        style={{ display: "none" }}
                      >
                        <div className="text-center">
                          <p className="text-sm">Image not found</p>
                          <p className="text-xs mt-1">{imageName}</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A6EA1]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                          <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-1">
                            {imageName}
                          </h4>
                          <p className="text-xs opacity-90">
                            Technical specification
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Filename display below image */}
                    <div className="p-2 sm:p-3 bg-white border-t">
                      <p className="text-xs text-gray-600 text-center font-mono break-all">
                        {imageName}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-300"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous Button */}
            {currentImages.length > 1 && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
            )}

            {/* Next Button */}
            {currentImages.length > 1 && (
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            )}

            {/* Image Container */}
            <div className="relative max-w-7xl max-h-full flex flex-col items-center">
              <img
                src={currentImages[currentImageIndex]?.src}
                alt={
                  currentImages[currentImageIndex]?.filename ||
                  "Technical drawing"
                }
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500 hidden"
                style={{ display: "none" }}
              >
                <div className="text-center">
                  <p className="text-lg">Image not found</p>
                  <p className="text-sm mt-2">
                    {currentImages[currentImageIndex]?.filename}
                  </p>
                </div>
              </div>

              {/* Image Info */}
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-bold mb-2">
                  {currentImages[currentImageIndex]?.filename?.replace(
                    "_page-0001.jpg",
                    ""
                  ) || "Technical Drawing"}
                </h3>
                {currentImages.length > 1 && (
                  <p className="text-sm opacity-80">
                    {currentImageIndex + 1} of {currentImages.length}
                  </p>
                )}
              </div>
            </div>

            {/* Click outside to close */}
            <div className="absolute inset-0 -z-10" onClick={closeModal}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Technical;
