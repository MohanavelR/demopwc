import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import SEO from "../components/SEO";
import Footer from "../components/Footer";

// Import Gallery Images - Sliding
import sliding1 from "../images/Gallery/Sliding/PIX_1920.jpg";
import sliding2 from "../images/Gallery/Sliding/PIX_1923.jpg";
import sliding3 from "../images/Gallery/Sliding/PIX_1925.jpg";
import sliding4 from "../images/Gallery/Sliding/PIX_1931.jpg";
import sliding5 from "../images/Gallery/Sliding/PIX_1933.jpg";
import sliding6 from "../images/Gallery/Sliding/PIX_1934.jpg";
import sliding7 from "../images/Gallery/Sliding/PIX_1936.jpg";

// Import Gallery Images - Casement
import casement1 from "../images/Gallery/Casement/PIX_1922.jpg";
import casement2 from "../images/Gallery/Casement/PIX_1937.jpg";
import casement3 from "../images/Gallery/Casement/PIX_1939.jpg";
import casement4 from "../images/Gallery/Casement/PIX_1940.jpg";

// Import Gallery Images - Finished
import product1 from "../images/product1.jpg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";
import product4 from "../images/product4.jpg";
import product5 from "../images/product5.jpeg";
import product6 from "../images/product6.jpeg";
import product7 from "../images/product7.jpeg";
import product8 from "../images/product8.jpeg";
import product9 from "../images/product9.jpg";
import product10 from "../images/product10.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState({});

  const projects = [
    // Sliding Projects
    {
      id: 1,
      title: "ECOVENT Sliding Door System",
      category: "sliding",
      image: sliding1,
      description:
        "Premium uPVC sliding door system with smooth operation and excellent weatherproofing",
    },
    {
      id: 2,
      title: "ECOVENT Sliding Window Installation",
      category: "sliding",
      image: sliding2,
      description:
        "Modern uPVC sliding windows maximizing natural light in residential spaces",
    },
    {
      id: 3,
      title: "ECOVENT Sliding Glass Doors",
      category: "sliding",
      image: sliding3,
      description:
        "Large sliding glass doors connecting indoor and outdoor spaces seamlessly",
    },
   

   
    {
      id: 7,
      title: "ECOVENT Sliding Window Complex",
      category: "sliding",
      image: sliding7,
      description:
        "Complete sliding window installation for residential complex",
    },

    // Casement Projects
    {
      id: 8,
      title: "ECOVENT Casement Window System",
      category: "casement",
      image: casement1,
      description:
        "Premium uPVC casement windows with superior weather sealing and thermal performance",
    },
    {
      id: 9,
      title: "ECOVENT Casement Door Installation",
      category: "casement",
      image: casement2,
      description:
        "Modern casement door system with excellent security features",
    },
    {
      id: 10,
      title: "ECOVENT Casement Windows",
      category: "casement",
      image: casement3,
      description:
        "Energy-efficient casement windows for residential applications",
    },
   

    // Finished Projects (using existing images)
    {
      id: 12,
      title: "ECOVENT Commercial Office Complex",
      category: "finished",
      image: product1,
      description:
        "Large-scale commercial installation with ECOVENT uPVC windows for maximum natural light",
    },
    {
      id: 13,
      title: "ECOVENT Residential Complex",
      category: "finished",
      image: product2,
      description:
        "Modern residential complex featuring ECOVENT uPVC windows throughout all units",
    },
    {
      id: 14,
      title: "ECOVENT Premium Installation",
      category: "finished",
      image: product3,
      description:
        "Complete ECOVENT system installation showcasing premium quality and craftsmanship",
    },
    {
      id: 15,
      title: "ECOVENT Modern Home Project",
      category: "finished",
      image: product4,
      description:
        "Contemporary home featuring complete ECOVENT window and door solutions",
    },
    {
      id: 16,
      title: "ECOVENT Premium Installation",
      category: "finished",
      image: product5,
      description:
        "High-quality ECOVENT installation showcasing superior craftsmanship and design",
    },
    {
      id: 17,
      title: "ECOVENT Residential Project",
      category: "finished",
      image: product6,
      description:
        "Beautiful residential installation with ECOVENT windows and doors",
    },
    {
      id: 18,
      title: "ECOVENT Commercial Building",
      category: "finished",
      image: product7,
      description:
        "Modern commercial building featuring complete ECOVENT window systems",
    },
 
    {
      id: 20,
      title: "ECOVENT Office Complex",
      category: "finished",
      image: product9,
      description:
        "Professional office complex with ECOVENT commercial window systems",
    },
    {
      id: 21,
      title: "ECOVENT Villa Project",
      category: "finished",
      image: product10,
      description:
        "Elegant villa featuring complete ECOVENT window and door installation",
    },
  ];

  const categories = [
    { id: "all", name: "All", count: projects.length },
    {
      id: "sliding",
      name: "Sliding",
      count: projects.filter((p) => p.category === "sliding").length,
    },
    {
      id: "casement",
      name: "Casement",
      count: projects.filter((p) => p.category === "casement").length,
    },
    {
      id: "finished",
      name: "Finished",
      count: projects.filter((p) => p.category === "finished").length,
    },
  ];

  const filteredProjects = () => {
    if (selectedCategory === "all") {
      return projects;
    } else {
      return projects.filter(
        (project) => project.category === selectedCategory
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
  }, [filteredProjects]);

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Gallery - Proflex Window Profiles UPVC Windows & Doors Projects"
        description="View our gallery of completed UPVC windows and doors projects. See real installations of casement windows, sliding doors, and custom solutions by Proflex Window Profiles across India."
        keywords="proflex window profiles gallery, UPVC windows projects, window installation photos, casement windows gallery, sliding doors gallery, window projects India, completed installations"
        url="/gallery"
      />
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#7BBE4B] to-[#0A6EA1] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1618832515490-e181c4794a45?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbnxlbnwwfHx8fDE3NTc0MzAxNjZ8MA&ixlib=rb-4.1.0&q=85"
            alt="Gallery Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
              ECOVENT<sup>TM</sup> Gallery
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto px-4">
              Explore our portfolio of ECOVENT<sup>TM</sup> installations -
              where strength meets style in every project
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
    

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProjects().map((project, index) => (
              <Card
                key={project.id}
                id={`project-${project.id}`}
                data-animate
                className={`group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 cursor-pointer ${
                  isVisible[`project-${project.id}`]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                      <Badge
                        className={`mb-2 sm:mb-3 text-xs ${
                          project.category === "sliding"
                            ? "bg-[#7BBE4B]"
                            : project.category === "casement"
                            ? "bg-[#0A6EA1]"
                            : "bg-[#FF6B35]"
                        } text-white border-0`}
                      >
                        {project.category === "sliding"
                          ? "Sliding"
                          : project.category === "casement"
                          ? "Casement"
                          : "Finished"}
                      </Badge>
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm opacity-90 mb-1 sm:mb-2">
                        {project.description}
                      </p>
                    </div>
                  </div> */}
                </div>
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

export default Gallery;
