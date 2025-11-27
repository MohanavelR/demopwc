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
    title: "Long-Lasting and Strong",
    description:
      "uPVC profiles are made to withstand harsh sunlight, heavy rain, and daily wear and tear without fading, cracking, breaking, or warping.",
    color: "bg-[#0A6EA1]",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description:
      "Multi-chamber design keeps your home or office cool in summer and warm in winter, reducing energy costs and maintaining comfort all year round.",
    color: "bg-[#7BBE4B]",
  },
  {
    icon: Eye,
    title: "Easy to Maintain",
    description:
      "Unlike metal or wood, uPVC profiles require minimal maintenance. No painting or polishing is needed—simple cleaning keeps them fresh for years.",
    color: "bg-[#969798]",
  },
  {
    icon: CheckCircle,
    title: "Stylish Designs",
    description:
      "Wide range of shapes, colors, and finishes complement modern building styles while improving insulation and reducing noise.",
    color: "bg-indigo-600",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Safe",
    description:
      "All profiles are produced using lead-free, environmentally responsible materials and methods for safe and sustainable construction.",
    color: "bg-red-500",
  },
];

const profiles = [
  {
    title: "Sliding Window Profiles",
    description:
      "Smooth operation, space-saving design, and excellent noise and dust protection.",
  },
  {
    title: "Casement Window Profiles",
    description:
      "Secure, strong, and ideal for maximum airflow and clear outdoor views.",
  },
  {
    title: "Door Profiles",
    description:
      "Elegant and durable for balconies, main entrances, and office spaces.",
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
    answer: "They can last for 30–40 years with minimal maintenance.",
  },
  {
    question: "Are there custom sizes and colors?",
    answer: "Yes, we provide profiles in a variety of sizes, colors, and finishes.",
  },
  {
    question: "Do you supply builders and architects across India?",
    answer:
      "Yes, we provide regular and bulk supplies for residential and commercial projects nationwide.",
  },
  {
    question: "Is maintenance simple?",
    answer:
      "Yes, uPVC profiles require only simple cleaning—no polishing or painting is needed.",
  },
];

// ==========================
// Page Component
// ==========================
const ManuFacIndia = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <SEO
        title="Leading uPVC Profile Manufacturers in India | Proflex"
        description="Proflex is one of the leading uPVC profile manufacturers in India. We produce durable, stylish, and eco-friendly uPVC profiles for homes, offices, and commercial projects, built for long-lasting performance and minimal maintenance."
        url="/upvc-profiles-manufacturer-india"
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
            Leading uPVC Profile Manufacturers in India
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4">
            Proflex – Premium uPVC Profiles for Homes & Offices
          </h1>

          <p className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-4xl mx-auto px-4">
            Proflex creates robust, stylish, and durable uPVC profiles ideal for offices, homes, and commercial
            projects across India. Built to withstand heat, rain, and dust while keeping spaces comfortable,
            modern, and energy-efficient.
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <SectionWrapper className="text-white py-20">
        <SectionTitle
          title="Why Choose Proflex uPVC Profiles in India?"
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
        <SectionTitle title="Our uPVC Profile Range in India" />

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
          title="Trusted Supplier Across India"
          className="text-gray-900"
        />

        <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full mb-10"></div>

        <FadeInOnScroll animation="fadeIn">
          <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed mb-12 text-gray-700 px-4">
            Proflex is a reliable partner for builders, homeowners, architects, and fabricators nationwide.
            We provide top-quality profiles with prompt delivery, consistent quality, and tailored solutions
            for projects of all sizes.
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

export default ManuFacIndia;
