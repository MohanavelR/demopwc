import React from "react";
import SEO from "../../components/SEO";
import Footer from "../../components/Footer";

import SectionWrapper from "../../components/common/SectionWrapper";
import SectionTitle from "../../components/common/SectionTitle";
import FadeInOnScroll from "../../components/common/FadeInOnScroll";

import FeatureCard from "../../components/cards/FeatureCard";
import ProfileCard from "../../components/cards/ProfileCard";
import FAQItem from "../../components/faq/FAQItem";
import { Badge } from "../../components/ui/badge";

import { CheckCircle, Zap, Shield, Eye, Leaf } from "lucide-react";

// ======================
// Data
// ======================
const features = [
  {
    icon: Shield,
    title: "Created to Last",
    description:
      "Profiles are strong and resist sunlight, moisture, and daily wear.",
    color: "bg-[#0A6EA1]",
  },
  {
    icon: Zap,
    title: "Comfortable & Energy Efficient",
    description:
      "Multiple-chamber insulation helps keep rooms cool, reduces noise, and saves energy.",
    color: "bg-[#7BBE4B]",
  },
  {
    icon: Eye,
    title: "Easy to Maintain",
    description:
      "No painting or polishing needed; simple cleaning keeps them looking new.",
    color: "bg-[#969798]",
  },
  {
    icon: CheckCircle,
    title: "New Styles",
    description:
      "Available in a variety of colors and shapes to match any building style.",
    color: "bg-indigo-600",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "Produced using safe materials and responsible, sustainable manufacturing methods.",
    color: "bg-red-500",
  },
];

const profiles = [
  {
    title: "Sliding Window Profiles",
    description:
      "Space-saving design and smooth movement with excellent noise and dust protection.",
  },
  {
    title: "Casement Window Profiles",
    description:
      "Secure, sturdy, and designed for a clear view and fresh airflow.",
  },
  {
    title: "Door Profiles",
    description:
      "Elegant and durable for balconies, main entrances, and offices.",
  },
  {
    title: "Fixed & Combination Profiles",
    description:
      "Perfect for large glass panels, modern facades, and strong structural support.",
  },
];

const faqs = [
  {
    question: "How long will uPVC profiles last?",
    answer: "They last a long time and only require simple cleaning.",
  },
  {
    question: "Can profiles be customized?",
    answer:
      "Yes, we offer a variety of sizes, colors, and styles to meet your preferences.",
  },
  {
    question: "Do you supply builders and fabricators?",
    answer: "Yes, we provide regular and bulk supplies for all projects.",
  },
  {
    question: "Are uPVC profiles easy to maintain?",
    answer: "Yes, no painting required; just clean them regularly.",
  },
];

// ==========================
// Page Component
// ==========================
const ManuFacCoimbatore = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <SEO
        title="Trusted uPVC Profiles Manufacturers in Coimbatore | Proflex"
        description="Proflex is among the top uPVC profiles manufacturers in Coimbatore. We create stylish, durable, and eco-friendly uPVC profiles for homes, offices, and commercial spaces. Our profiles are low-maintenance and built to handle heat, dust, and rain while keeping interiors modern and comfortable."
        url="/upvc-profiles-manufacturer-coimbatore"
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0A6EA1] via-[#7BBE4B] to-[#0A6EA1] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=srgb&fm=jpg"
            alt="Modern Manufacturing"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-base mb-6">
            Coimbatore’s Leading uPVC Manufacturer
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4">
            Welcome to{" "}
            <span>
              ECOVENT<sup>TM</sup>
            </span>
          </h1>

          <p className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-4xl mx-auto px-4">
            Proflex is among the most renowned uPVC profiles manufacturers in
            Coimbatore. We specialize in durable, stylish, and modern profiles
            for homes, offices, and commercial spaces. Built to handle heat,
            dust, and rain, our profiles keep interiors peaceful, comfortable,
            and contemporary.
          </p>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <SectionWrapper className="bg-blue-50/50 pb-16">
        <FadeInOnScroll animation="slideUp">
          <h1 className="text-4xl sm:text-6xl font-black mb-6 text-center text-gray-900 leading-tight">
            Smart uPVC Profiles for{" "}
            <span className="text-blue-700">Modern Living</span>
          </h1>

          <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-4xl mt-5 mx-auto text-center leading-normal">
            At Proflex, we provide robust, elegant, and low-maintenance uPVC
            profiles. Perfect for new homes, office renovations, and large
            projects, our products are built to last while enhancing style,
            comfort, and energy efficiency.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= FEATURES ================= */}
      <SectionWrapper className="text-white py-20">
        <SectionTitle
          title="Why Choose Proflex uPVC Profiles in Coimbatore?"
          className="text-white"
        />

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {features.map((f, i) => (
              <FadeInOnScroll key={i} delay={i * 150}>
                <FeatureCard
                  {...f}
                  className="bg-white text-gray-800 shadow-xl p-6 rounded-lg w-full h-full"
                />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ================= PROFILES ================= */}
      <SectionWrapper className="bg-white">
        <SectionTitle title="Our uPVC Profile Range in Coimbatore" />

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {profiles.map((p, i) => (
            <FadeInOnScroll
              key={i}
              animation={i % 2 === 0 ? "slideLeft" : "slideRight"}
              delay={i * 200}
            >
              <ProfileCard
                {...p}
                className="p-6 border-l-4 border-blue-600 shadow-md hover:shadow-xl transition-shadow"
              />
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll delay={600}>
          <blockquote className="mt-12 max-w-3xl mx-auto p-4 border-l-8 border-blue-600 bg-blue-50 text-gray-700 italic text-lg rounded-lg">
            All our profiles are made from environmentally-friendly, sustainable
            materials, designed for long-lasting performance and low maintenance.
          </blockquote>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= SUPPLIER SECTION ================= */}
      <SectionWrapper className="py-20">
        <SectionTitle
          title="Reliable Supply for Homes & Businesses in Coimbatore"
          className="text-gray-900"
        />

        <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full mb-10"></div>

        <FadeInOnScroll animation="fadeIn">
          <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed mb-12 text-gray-700 px-4">
            Proflex is a trusted partner for homeowners, builders, and architects
            across Coimbatore. Timely delivery, consistent quality, and seamless
            service make us a preferred choice for projects of any size.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll animation="slideUp">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center px-4">
            <div className="bg-white shadow-xl p-6 rounded-lg transition-transform hover:scale-[1.02]">
              <i className="fas fa-tools text-4xl mb-3"></i>
              <h4 className="text-xl font-semibold mb-2">Precision Engineering</h4>
              <p className="text-sm text-gray-700">
                Advanced machinery ensures accuracy and consistent performance.
              </p>
            </div>

            <div className="bg-white shadow-xl p-6 rounded-lg transition-transform hover:scale-[1.02]">
              <i className="fas fa-shield-alt text-4xl mb-3"></i>
              <h4 className="text-xl font-semibold mb-2">Premium Durability</h4>
              <p className="text-sm text-gray-700">
                Designed to withstand extreme weather and daily use.
              </p>
            </div>

            <div className="bg-white shadow-xl p-6 rounded-lg transition-transform hover:scale-[1.02]">
              <i className="fas fa-truck text-4xl mb-3"></i>
              <h4 className="text-xl font-semibold mb-2">Reliable Delivery</h4>
              <p className="text-sm text-gray-700">
                Fast and dependable supply for residential and commercial projects.
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= FAQ ================= */}
      <SectionWrapper className="bg-white pb-20">
        <SectionTitle title="Frequently Asked Questions (FAQ)" />

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <FadeInOnScroll key={i} animation="slideLeft" delay={i * 150}>
              <FAQItem {...faq} index={i} />
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default ManuFacCoimbatore;
