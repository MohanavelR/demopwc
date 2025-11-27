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
    title: "Extraordinary Weather & Salt-Air Resistance",
    description:
      "Designed for coastal conditions. Free from corrosion, rust, warping, and fading – ideal for Chennai's humidity and heat.",
    color: "bg-[#0A6EA1]",
  },
  {
    icon: Zap,
    title: "Thermal & Acoustic Insulation",
    description:
      "Multi-chamber technology ensures comfortable indoor temperature and reduces external noise.",
    color: "bg-[#7BBE4B]",
  },
  {
    icon: Eye,
    title: "Zero Maintenance Requirements",
    description:
      "Unlike metal or wood, uPVC does not require painting. Simple cleaning keeps it looking fresh for decades.",
    color: "bg-[#969798]",
  },
  {
    icon: CheckCircle,
    title: "Customizable Shades & Profiling",
    description:
      "Available in multiple colors, finishes, and designs suitable for modern interiors and architecture.",
    color: "bg-indigo-600",
  },
  {
    icon: Leaf,
    title: "Lead-Free & Eco-Friendly Production",
    description:
      "We follow environmentally safe manufacturing using non-toxic materials.",
    color: "bg-red-500",
  },
];

const profiles = [
  {
    title: "Sliding Window Profiles",
    description:
      "Smooth movement, secure sealing and excellent dust resistance – perfect for urban areas.",
  },
  {
    title: "Casement Window Profiles",
    description:
      "Maximum airflow, solid locking systems, and excellent security.",
  },
  {
    title: "Door Profiles",
    description:
      "Elegant and sturdy profiles ideal for main entrances, balconies, rooms, and offices.",
  },
  {
    title: "Fixed & Combination Profiles",
    description:
      "Perfect for modern elevations, large glass surfaces, and designs that require maximum stability.",
  },
];

const faqs = [
  {
    question: "What makes uPVC profiles perfect for Chennai?",
    answer:
      "uPVC is highly resistant to heat, humidity, and corrosion, making it ideal for Chennai's coastal climate.",
  },
  {
    question: "Do you offer customization options?",
    answer:
      "Yes, we provide multiple colors, finishes, and sizes tailored to your project requirements.",
  },
  {
    question: "How long will uPVC profiles last?",
    answer:
      "Top-quality uPVC profiles usually last 30-40 years with minimal upkeep.",
  },
  {
    question: "Do you supply fabricators and builders in Chennai?",
    answer:
      "Yes, as leading uPVC profiles manufacturers in Chennai, we supply architects, builders, and fabricators regularly with bulk orders.",
  },
];

// ==========================
// Page Component
// ==========================
const ManuFacChennai = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <SEO
        title="Top Durable uPVC Profiles Manufacturers in Chennai | Proflex"
        description="Proflex Window Profiles is among the top uPVC profiles manufacturers in Chennai, offering durable, stylish, and eco-friendly uPVC profiles. Ideal for homes, offices, and commercial spaces, built to withstand Chennai's coastal climate with superior insulation and noise reduction."
        url="/upvc-profiles-manufacturer-chennai"
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
            Chennai’s Trusted uPVC Manufacturer
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4">
            Top Durable uPVC Profiles Manufacturers in <span>Chennai</span>
          </h1>

          <p className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-4xl mx-auto px-4">
            Proflex Window Profiles provides premium uPVC profiles engineered to last
            for years. Our profiles are durable, thermally efficient, and visually
            stunning, built to withstand Chennai's coastal climate while delivering
            superior insulation and noise reduction.
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <SectionWrapper className="text-white py-20">
        <SectionTitle
          title="Why Choose Proflex uPVC Profiles in Chennai?"
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
        <SectionTitle title="Our Range of uPVC Profiles in Chennai" />

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
      </SectionWrapper>

      {/* ================= SUPPLIER SECTION ================= */}
      <SectionWrapper className="py-20">
        <SectionTitle
          title="Trusted uPVC Profile Supplier for Homes & Projects in Chennai"
          className="text-gray-900"
        />

        <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full mb-10"></div>

        <FadeInOnScroll animation="fadeIn">
          <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed mb-12 text-gray-700 px-4">
            Proflex provides top-quality profiles for homeowners, architects, developers, and fabricators.
            Our products are designed for Chennai's climate and ensure long-term value, efficiency, and
            aesthetics. Large orders or custom-designed profiles are handled seamlessly for a smooth supply experience.
          </p>
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

export default ManuFacChennai;
