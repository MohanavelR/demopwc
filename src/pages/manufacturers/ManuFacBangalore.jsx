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
    title: "Superior Durability",
    description:
      "Engineered to withstand harsh sunlight, heavy rain, and everyday wear—ensuring long-term stability without fading, cracking, or warping.",
    color: "bg-[#0A6EA1]",
  },
  {
    icon: Zap,
    title: "Excellent Weather & Thermal Resistance",
    description:
      "Multi-chamber insulation technology maintains indoor temperature, reduces energy consumption.",
    color: "bg-[#7BBE4B]",
  },
  {
    icon: Eye,
    title: "Low Maintenance & Long Life",
    description:
      "Does not require polishing or repainting. A simple wipe keeps it new.",
    color: "bg-[#969798]",
  },
  {
    icon: CheckCircle,
    title: "Customizable Designs",
    description:
      "Wide range of styles and colors to match modern architectural designs.",
    color: "bg-indigo-600",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Manufacturing",
    description: "Lead-free materials and sustainable processes.",
    color: "bg-red-500",
  },
];

const profiles = [
  {
    title: "Sliding Window Profiles",
    description:
      "Smooth operation, space-saving, and excellent sealing for noise and dust reduction.",
  },
  {
    title: "Casement Window Profiles",
    description:
      "Strong, secure, and energy efficient—ideal for maximum ventilation.",
  },
  {
    title: "Door Profiles",
    description:
      "Stylish and sturdy profiles for main doors, balconies, and commercial spaces.",
  },
  {
    title: "Fixed & Combination Profiles",
    description: "Perfect for modern façades with large glass panels.",
  },
];

const faqs = [
  {
    question: "Why are uPVC profiles better than traditional materials?",
    answer:
      "They are weather-resistant, durable, and maintain energy efficiency.",
  },
  {
    question: "Do you provide customized uPVC profiles?",
    answer: "Yes, we offer customizable options for any project.",
  },
  { question: "How long do uPVC profiles last?", answer: "30–40 years with minimal maintenance." },
  {
    question: "Do you supply bulk orders to builders?",
    answer: "Yes, we supply builders, architects, and fabricators across Bangalore.",
  },
];

// ==========================
// Page Component
// ==========================
const ManuFacBangalore = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <SEO
        title="Leading uPVC Profiles Manufacturers in Bangalore | Proflex"
        description="Proflex is a top uPVC profiles manufacturer in Bangalore..."
        url="/upvc-profiles-manufacturer-bangalore"
      />

      {/* ================= HERO ================= */}
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
  Bangalore’s Leading uPVC Manufacturer
</Badge>

{/* Title */}
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4">
  Welcome to{" "}
  <span>
    ECOVENT<sup>TM</sup>
  </span>
</h1>

{/* Description */}
<p className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-4xl mx-auto px-4">
  At PROFLEX, we proudly bring you ECOVENT<sup>TM</sup> — a premium range of uPVC windows and doors
  manufactured right here in Bangalore, designed for modern living, durability, and energy efficiency.
</p>
        </div>
      </section>

      {/* ================= HERO SECTION ================= */}
      <SectionWrapper className="bg-blue-50/50 pb-16">
        <FadeInOnScroll animation="slideUp">
          <h1 className="text-4xl sm:text-6xl font-black mb-6 text-center text-gray-900 leading-tight">
            Leading uPVC Profiles{" "}
            <span className="text-blue-700">Manufacturers</span> in Bangalore
          </h1>

          <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-4xl mt-5 mx-auto text-center leading-normal">
            At Proflex Window Profiles, we specialize in manufacturing
            premium-quality uPVC profiles designed for long-lasting strength,
            superior insulation, and stunning aesthetics.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= FEATURES ================= */}
      <SectionWrapper className="text-white py-20">
        <SectionTitle
          title="Premium uPVC Profiles Designed for Strength, Style & Performance"
          className="text-white"
        />

        <div className="w-full">
  <div className="grid grid-cols-1 md:grid-cols-2  gap-8 w-full">
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
        <SectionTitle title="Our Range of uPVC Profiles in Bangalore" />

        <div className="grid md:grid-cols-2  gap-x-12 gap-y-8 max-w-5xl mx-auto">
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
            All our profiles are manufactured using world-class machinery,
            ensuring accuracy, precision, and consistent performance.
          </blockquote>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= SUPPLIER SECTION (UPDATED) ================= */}
      <SectionWrapper className="py-20">
        <SectionTitle
          title="Trusted uPVC Profile Supplier for Homes & Businesses"
          className="text-gray-900"
        />

        {/* 🔥 Heading Underline Added */}
        <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full mb-10"></div>

        {/* Intro */}
        <FadeInOnScroll animation="fadeIn">
          <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed mb-12 text-gray-700 px-4">
            Proflex Window Profiles has become a trusted choice for homeowners,
            builders, architects, and fabrication partners across Bangalore.
            Our commitment to innovation, quality testing, and timely delivery
            ensures reliability for both small-scale and large-scale projects.
          </p>
        </FadeInOnScroll>

        {/* Cards */}
        <FadeInOnScroll animation="slideUp">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center px-4">

            <div className="bg-white shadow-xl p-6 rounded-lg transition-transform hover:scale-[1.02]">
              <i className="fas fa-tools text-4xl mb-3"></i>
              <h4 className="text-xl font-semibold mb-2">Precision Engineering</h4>
              <p className="text-sm text-gray-700">
                World-class machinery ensures accuracy & long-term performance.
              </p>
            </div>

            <div className="bg-white shadow-xl p-6 rounded-lg transition-transform hover:scale-[1.02]">
              <i className="fas fa-shield-alt text-4xl mb-3"></i>
              <h4 className="text-xl font-semibold mb-2">Premium Durability</h4>
              <p className="text-sm text-gray-700">
                Built to withstand extreme weather & daily usage.
              </p>
            </div>

            <div className="bg-white shadow-xl p-6 rounded-lg transition-transform hover:scale-[1.02]">
              <i className="fas fa-truck text-4xl mb-3"></i>
              <h4 className="text-xl font-semibold mb-2">Reliable Delivery</h4>
              <p className="text-sm text-gray-700">
                Fast, dependable supply for builders & large projects.
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

export default ManuFacBangalore;
