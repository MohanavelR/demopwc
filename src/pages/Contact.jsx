import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  User,
  MessageSquare,
  Calendar,
  Wrench,
} from "lucide-react";
import MapImage from "../images/map.png";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    userType: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  const services = [
    "Casement Windows",
    "Casement Doors",
    "Sliding Windows",
    "Sliding Doors",
  ];

  const projectTypes = [
    "Single Room",
    "Whole House",
    "Commercial Building",
    "Historic Restoration",
    "New Construction",
    "Renovation",
  ];

  const timelines = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Just exploring options",
  ];

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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = "service_2ibqesp"; // You'll need to create this in EmailJS
      const templateId = "template_0r1zv8h"; // You'll need to create this in EmailJS
      const publicKey = "BDrStsIvng_pFyOWn"; // You'll need to get this from EmailJS

      // Prepare email template parameters
      const templateParams = {
        to_email: "proflexwindowprofiles@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company || "Not provided",
        user_type: formData.userType,
        location: formData.location,
        message: formData.message,
        reply_to: formData.email,
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Success message
      alert(
        "Thank you! We'll contact you within 24 hours to discuss your project."
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        userType: "",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again or contact us directly at proflexwindowprofiles@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91-7760012233",
      description: "Monday - Saturday: 8AM - 6PM",
      color: "bg-[#0A6EA1]",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "proflexwindowprofiles@gmail.com",
      description: "We respond within 24 hours",
      color: "bg-[#7BBE4B]",
    },
    {
      icon: MapPin,
      title: "Manufacturing Unit",
      info: "Plot no 107/P2i, Harjenahalli main road",
      description:
        "KIADB industrial area, Vemgal, Kolar (TK), Kolar (DT) -563102",
      color: "bg-[#969798]",
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon-Sat: 8AM-6PM",
      description: "Sunday: Closed",
      color: "bg-[#0A6EA1]",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Free in-home assessment and design consultation",
      icon: User,
    },
    {
      step: "2",
      title: "Custom Quote",
      description: "Detailed proposal with materials and timeline",
      icon: MessageSquare,
    },
    {
      step: "3",
      title: "Schedule Installation",
      description: "Professional installation at your convenience",
      icon: Calendar,
    },
    {
      step: "4",
      title: "Quality Assurance",
      description: "Final inspection and lifetime warranty activation",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Contact Proflex Window Profiles - Get Free Quote for UPVC Windows & Doors"
        description="Contact Proflex Window Profiles for premium UPVC windows and doors. Get free quotes, expert consultation, and professional installation services. Located in Kolar, Karnataka. Call +91-7760012233."
        keywords="contact proflex window profiles, UPVC windows quote, window installation consultation, Kolar Karnataka, window company contact, free quote, professional installation, customer service"
        url="/contact"
      />
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-14 bg-gradient-to-br from-[#0A6EA1] to-[#7BBE4B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1559891185-8f039d5a9c6c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxjYXNlbWVudCUyMHdpbmRvd3N8ZW58MHx8fHwxNzU3NDMwMTUxfDA&ixlib=rb-4.1.0&q=85"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Let's discuss your project and create premium uPVC solutions that
              last.
            </p>
            <Badge className="bg-white/20 text-white border-white/30 px-4 sm:px-6 py-2 text-sm sm:text-lg">
              Free Consultation & Quote
            </Badge>
          </div>
        </div>

        {/* Animated shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float hidden sm:block"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#7BBE4B]/20 rounded-full animate-float-delayed hidden sm:block"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse hidden sm:block"></div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <Card
              id="contact-form"
              data-animate
              className={`border-0 shadow-2xl transform transition-all duration-1000 ${
                isVisible["contact-form"]
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Get Your Free Quote
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    Tell us about your ECOVENT<sup>TM</sup> project and we'll
                    provide a detailed estimate
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  {/* Personal Info */}
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0A6EA1] focus:border-transparent transition-all duration-300 hover:shadow-md text-sm sm:text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0A6EA1] focus:border-transparent transition-all duration-300 hover:shadow-md text-sm sm:text-base"
                        placeholder="+91 99400 00000"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Id *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A6EA1] focus:border-transparent transition-all duration-300 hover:shadow-md"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company || ""}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A6EA1] focus:border-transparent transition-all duration-300 hover:shadow-md"
                        placeholder="Your company name (optional)"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Who you are? *
                      </label>
                      <select
                        name="userType"
                        value={formData.userType || ""}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A6EA1] focus:border-transparent transition-all duration-300 hover:shadow-md"
                      >
                        <option value="">Select option</option>
                        <option value="client">Fabricator</option>
                        <option value="customer">Builder</option>
                        <option value="customer">Client</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Location *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location || ""}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A6EA1] focus:border-transparent transition-all duration-300 hover:shadow-md"
                        placeholder="Your city/location"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message Box
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A6EA1] focus:border-transparent transition-all duration-300 hover:shadow-md resize-none"
                      placeholder="Tell us about your ECOVENT requirements, project details, measurements, or any questions..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-[#7BBE4B] hover:bg-[#6DA63F] text-white py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      <>
                        Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Location Details */}
            <div
              id="contact-info"
              data-animate
              className={`space-y-8 transform transition-all duration-1000 delay-300 ${
                isVisible["contact-info"]
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Location Details
                </h2>
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-[#0A6EA1] rounded-xl">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">
                            Manufacturing Unit
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            Plot no 107/P2i, Harjenahalli main road
                            <br />
                            KIADB industrial area, Vemgal, Kolar (TK), Kolar
                            (DT) -563102
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-[#7BBE4B] rounded-xl">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">
                            Call Us
                          </h3>
                          <p className="text-[#0A6EA1] font-medium">
                            +91-7760012233
                          </p>
                          <p className="text-sm text-gray-600">
                            Monday - Saturday: 8AM - 6PM
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-[#969798] rounded-xl">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">
                            Email Us
                          </h3>
                          <p className="text-[#0A6EA1] font-medium">
                            proflexwindowprofiles@gmail.com
                          </p>
                          <p className="text-sm text-gray-600">
                            We respond within 24 hours
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div
            id="map-section"
            data-animate
            className={`text-center mb-8 transform transition-all duration-1000 ${
              isVisible["map-section"]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find Us Here
            </h2>
            <p className="text-xl text-gray-600">
              Visit our facility to experience ECOVENT<sup>TM</sup> quality
              firsthand
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="relative">
                <a
                  href="https://maps.app.goo.gl/J8SwXQedbvFt792Q8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative group cursor-pointer"
                >
                  <img
                    src={MapImage}
                    alt="Proflex Window Profiles Location - Click to open in Google Maps"
                    className="w-full h-[450px] object-cover rounded-lg transition-transform duration-300 "
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center rounded-lg">
                    <div className="bg-white rounded-lg p-4 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-semibold text-gray-800">
                          Click to open in Google Maps
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
