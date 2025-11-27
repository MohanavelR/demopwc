import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import {
  Star,
  ArrowRight,
  Zap,
  Shield,
  Award,
  Heart,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import product4 from "../images/product4.jpg";
import product6 from "../images/product6.jpeg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState({});
  const [currentType, setCurrentType] = useState(null);
  const [currentSubType, setCurrentSubType] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle category navigation
  const handleCategoryNavigation = (categoryId) => {
    setSelectedCategory(categoryId);

    if (categoryId === "all") {
      navigate("/products");
    } else {
      navigate(`/products/${categoryId}`);
    }
  };

  // Extract product type from URL path
  useEffect(() => {
    const pathParts = location.pathname.split("/");
    if (pathParts.length >= 3) {
      const type = pathParts[2]; // casement or sliding
      const subType = pathParts[3]; // windows or doors

      setCurrentType(type);
      setCurrentSubType(subType);

      if (type === "casement" || type === "sliding") {
        setSelectedCategory(type);
      }
    } else {
      setCurrentType(null);
      setCurrentSubType(null);
      setSelectedCategory("all");
    }
  }, [location.pathname]);

  const products = [
    {
      id: 1,
      title: "Casement Windows",
      category: "casement-windows",
      type: "Casement",
      subType: "Windows",
      image: product4,
      features: [
        "Weather-Proof Design",
        "Energy-Saving Technology",
        "Made in India Quality",
      ],
      badge: "Sleek",
    },
    {
      id: 2,
      title: "Casement Doors",
      category: "casement-doors",
      type: "Casement",
      subType: "Doors",
      image: product6,
      features: [
        "Superior Security",
        "Dust & Noise Reduction",
        "Maintenance-Free",
      ],
      badge: "Secure",
    },
    {
      id: 3,
      title: "Sliding Windows",
      category: "sliding-windows",
      type: "Sliding",
      subType: "Windows",
      image: product2,
      features: ["Smooth Operation", "Maximum Light", "Space-Saving Design"],
      badge: "Modern",
    },
    {
      id: 4,
      title: "Sliding Doors",
      category: "sliding-doors",
      type: "Sliding",
      subType: "Doors",
      image: product3,
      features: ["Large Openings", "Elegant Design", "Termite Resistant"],
      badge: "Popular",
    },
  ];

  const categories = [
    { id: "all", name: "All Products", count: products.length },
    {
      id: "casement",
      name: "Casement",
      count: products.filter((p) => p.type === "Casement").length,
    },
    {
      id: "sliding",
      name: "Sliding",
      count: products.filter((p) => p.type === "Sliding").length,
    },
  ];

  const filteredProducts = () => {
    if (currentType && currentSubType) {
      // Filter by both type and subType when URL has both
      return products.filter(
        (product) =>
          product.type.toLowerCase() === currentType &&
          product.subType.toLowerCase() === currentSubType
      );
    } else if (currentType) {
      // Filter by type only when URL has type
      return products.filter(
        (product) => product.type.toLowerCase() === currentType
      );
    } else if (selectedCategory === "all") {
      // Show all products
      return products;
    } else {
      // Filter by selected category
      return products.filter(
        (product) => product.type.toLowerCase() === selectedCategory
      );
    }
  };

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
  }, [filteredProducts]);

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title={
          currentType && currentSubType
            ? `Proflex ${
                currentType.charAt(0).toUpperCase() + currentType.slice(1)
              } ${
                currentSubType.charAt(0).toUpperCase() + currentSubType.slice(1)
              } - Premium UPVC Windows & Doors`
            : currentType
            ? `Proflex ${
                currentType.charAt(0).toUpperCase() + currentType.slice(1)
              } - Premium UPVC Windows & Doors`
            : "Proflex Window Profiles - Premium UPVC Windows & Doors"
        }
        description={
          currentType && currentSubType
            ? `Premium ${currentType} ${currentSubType.toLowerCase()} by Proflex Window Profiles. Energy-efficient, weather-proof design with superior security. Made in India. Get free quotes.`
            : currentType
            ? `Premium ${currentType} windows and doors by Proflex Window Profiles. Energy-efficient, weather-proof design with superior security. Made in India. Get free quotes.`
            : "Premium UPVC window profiles and doors manufacturer in India. Energy-efficient casement & sliding windows with weather-proof design. Get free quotes for your home renovation."
        }
        keywords={`${currentType || "UPVC"} windows, ${
          currentType || "UPVC"
        } doors, window profiles, casement windows, sliding windows, energy efficient windows, weather proof windows, made in India, home renovation, window installation, door installation, Kolar, Karnataka`}
        url={`/products${currentType ? `/${currentType}` : ""}${
          currentSubType ? `/${currentSubType}` : ""
        }`}
      />
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0A6EA1] to-[#7BBE4B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1527352774566-e4916e36c645?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHx3aW5kb3dzfGVufDB8fHx8MTc1NzQzMDE3NHww&ixlib=rb-4.1.0&q=85"
            alt="Products Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <div className="animate-fadeInUp">
            {/* Breadcrumb */}
            {(currentType || currentSubType) && (
              <div className="mb-4 sm:mb-6">
                <nav className="flex justify-center items-center space-x-2 text-sm sm:text-base lg:text-lg flex-wrap">
                  <Link
                    to="/products"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Products
                  </Link>
                  {currentType && (
                    <>
                      <span className="text-white/60">/</span>
                      <Link
                        to={`/products/${currentType}`}
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        {currentType.charAt(0).toUpperCase() +
                          currentType.slice(1)}
                      </Link>
                    </>
                  )}
                  {currentSubType && (
                    <>
                      <span className="text-white/60">/</span>
                      <span className="text-[#7BBE4B] font-semibold">
                        {currentSubType.charAt(0).toUpperCase() +
                          currentSubType.slice(1)}
                      </span>
                    </>
                  )}
                </nav>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
              {currentType && currentSubType
                ? `Proflex ${
                    currentType.charAt(0).toUpperCase() + currentType.slice(1)
                  } ${
                    currentSubType.charAt(0).toUpperCase() +
                    currentSubType.slice(1)
                  }`
                : currentType
                ? `Proflex ${
                    currentType.charAt(0).toUpperCase() + currentType.slice(1)
                  }`
                : "Proflex Window Profiles"}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto px-4">
              {currentType && currentSubType
                ? `Premium ${currentType} ${currentSubType} designed for durability, style, and performance`
                : currentType
                ? `Discover our ${currentType} collection - engineered for excellence`
                : "Discover Proflex's premium window profiles - where strength meets style for modern living"}
            </p>
          </div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float hidden sm:block"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#7BBE4B]/20 rounded-full animate-float-delayed hidden sm:block"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/5 rounded-full animate-pulse hidden sm:block"></div>
      </section>

      {/* Category Filter */}
      <section className="py-3 sm:py-4 bg-white sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 sm:gap-4 p-1 bg-gray-100 rounded-xl sm:rounded-2xl">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryNavigation(category.id)}
                  className={`px-3 sm:px-4 py-1 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                    selectedCategory === category.id
                      ? "bg-[#0A6EA1] text-white shadow-lg transform scale-105"
                      : "text-gray-600 hover:text-[#0A6EA1] hover:bg-white"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredProducts().length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts().map((product, index) => (
                <Card
                  key={product.id}
                  id={`product-${product.id}`}
                  data-animate
                  className={`group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-rotate-1 ${
                    isVisible[`product-${product.id}`]
                      ? "translate-y-0 opacity-100"
                      : "translate-y-20 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-4 left-4 right-4 space-y-2">
                        <Button
                          size="sm"
                          className="w-full bg-white/90 text-gray-900 hover:bg-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                          asChild
                        >
                          <Link
                            to={`/products/${product.type.toLowerCase()}/${product.subType.toLowerCase()}`}
                          >
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full bg-transparent border-white/50 text-white hover:bg-white/10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100"
                          asChild
                        >
                          <Link to="/contact">Get Quote</Link>
                        </Button>
                      </div>
                    </div>
                    <Badge className="absolute top-4 right-4 bg-[#7BBE4B] text-white border-0 transform translate-x-20 group-hover:translate-x-0 transition-transform duration-500">
                      {product.badge}
                    </Badge>
                  </div>

                  <CardContent className="p-3 py-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0A6EA1] transition-colors duration-300">
                      {product.title}
                    </h3>
                    <div className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-gray-600 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500"
                          style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                          <div className="p-1 bg-[#7BBE4B]/10 rounded-full mr-3">
                            {idx === 0 && (
                              <Zap className="h-4 w-4 text-[#7BBE4B]" />
                            )}
                            {idx === 1 && (
                              <Shield className="h-4 w-4 text-[#7BBE4B]" />
                            )}
                            {idx === 2 && (
                              <Award className="h-4 w-4 text-[#7BBE4B]" />
                            )}
                          </div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        Premium Quality
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No Products Found
                </h3>
                <p className="text-gray-600 mb-8">
                  We're working on adding more products to this category. Check
                  back soon or browse our other collections.
                </p>
                <Button
                  size="lg"
                  className="bg-[#0A6EA1] hover:bg-[#0A5A8A] text-white px-8 py-3"
                  onClick={() => handleCategoryNavigation("all")}
                >
                  View All Products
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* View All Products Section */}
      {filteredProducts().length > 0 &&
        (currentType || selectedCategory !== "all") && (
          <section className="py-8 bg-white">
            <div className="container mx-auto px-6 text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#0A6EA1] text-[#0A6EA1] hover:bg-[#0A6EA1] hover:text-white px-8 py-3"
                onClick={() => handleCategoryNavigation("all")}
              >
                View All Products
              </Button>
            </div>
          </section>
        )}

      {/* Product Features Section */}
      <section className="py-8 sm:py-12 lg:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            id="features-header"
            data-animate
            className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${
              isVisible["features-header"]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Product <span className="text-[#7BBE4B]">Features</span>
            </h2>
            <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto px-4">
              Advanced engineering meets innovative design in every Proflex
              window profile
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Products;
