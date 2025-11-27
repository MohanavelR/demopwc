import React, { useEffect } from "react";

const SEO = ({
  title = "Proflex Window Profiles - Premium UPVC Windows & Doors | Made in India",
  description = "Premium UPVC window profiles and doors manufacturer in India. Energy-efficient casement & sliding windows with weather-proof design. Get free quotes for your home renovation.",
  keywords = "UPVC windows, UPVC doors, window profiles, casement windows, sliding windows, energy efficient windows, weather proof windows, made in India, home renovation, window installation, door installation, Kolar, Karnataka",
  image = "https://customer-assets.emergentagent.com/job_eeea0b95-9990-4fa8-9999-43fbd081fd29/artifacts/ivnncfh7_PWP_logo.png",
  url = "https://proflexwindowprofiles.com",
  type = "website",
  structuredData = null,
}) => {
  const fullTitle = title.includes("Proflex Window Profiles")
    ? title
    : `${title} | Proflex Window Profiles`;
  const fullUrl = url.startsWith("http")
    ? url
    : `https://proflexwindowprofiles.com${url}`;

  // Default structured data for business
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Proflex Window Profiles",
    alternateName: "PWP",
    url: "https://proflexwindowprofiles.com",
    logo: "https://customer-assets.emergentagent.com/job_eeea0b95-9990-4fa8-9999-43fbd081fd29/artifacts/ivnncfh7_PWP_logo.png",
    description:
      "Premium UPVC window profiles and doors manufacturer in India. Energy-efficient casement & sliding windows with weather-proof design.",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot no 107/P2i, Harjenahalli main road",
      addressLocality: "KIADB industrial area, Vemgal",
      addressRegion: "Kolar (TK), Kolar (DT)",
      postalCode: "563102",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7760012233",
      contactType: "customer service",
      email: "proflexwindowprofiles@gmail.com",
      availableLanguage: ["English", "Hindi", "Kannada"],
    },
    sameAs: [
      "https://www.facebook.com/proflexwindowprofiles",
      "https://www.instagram.com/proflexwindowprofiles",
      "https://www.linkedin.com/company/proflex-window-profiles",
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 13.1367,
        longitude: 78.1336,
      },
      geoRadius: "500000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "UPVC Windows and Doors",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Casement Windows",
            description:
              "Energy-efficient casement windows with weather-proof design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Casement Doors",
            description:
              "Secure and durable casement doors with superior security features",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Sliding Windows",
            description: "Space-saving sliding windows with smooth operation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Sliding Doors",
            description: "Large opening sliding doors with elegant design",
          },
        },
      ],
    },
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);

      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Update primary meta tags
    updateMetaTag("title", fullTitle);
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    // Update Open Graph tags
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:url", fullUrl, true);
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:image:width", "1200", true);
    updateMetaTag("og:image:height", "630", true);
    updateMetaTag("og:site_name", "Proflex Window Profiles", true);
    updateMetaTag("og:locale", "en_IN", true);

    // Update Twitter tags
    updateMetaTag("twitter:card", "summary_large_image", true);
    updateMetaTag("twitter:url", fullUrl, true);
    updateMetaTag("twitter:title", fullTitle, true);
    updateMetaTag("twitter:description", description, true);
    updateMetaTag("twitter:image", image, true);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    // Add structured data
    let structuredDataScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (!structuredDataScript) {
      structuredDataScript = document.createElement("script");
      structuredDataScript.setAttribute("type", "application/ld+json");
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(finalStructuredData);
  }, [
    fullTitle,
    description,
    keywords,
    image,
    fullUrl,
    type,
    finalStructuredData,
  ]);

  return null; // This component doesn't render anything
};

export default SEO;
