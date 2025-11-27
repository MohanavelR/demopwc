import React, { useState } from "react";
import { MessageCircle, Download, ChevronUp, ChevronDown } from "lucide-react";
import whatsappIcon from "../images/whatsapp.png";

const FloatingActions = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "917760012233";
    const message =
      "Hello! I am interested in your UPVC windows and doors. Please provide more information.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleDownloadBrochure = () => {
    // Import the brochure file
    import("../images/Proflex_window_profiles_brouchure.pdf")
      .then((brochure) => {
        const link = document.createElement("a");
        link.href = brochure.default;
        link.download = "Proflex-Window-Profiles-Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(() => {
        // Fallback: try direct path
        const link = document.createElement("a");
        link.href = "/static/media/Proflex_window_profiles_brouchure.pdf";
        link.download = "Proflex-Window-Profiles-Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end space-y-3">
        {/* Brochure Download Button - Shows when expanded */}

        {/* WhatsApp Button - Always visible */}
        <div className="relative">
          <button onClick={handleWhatsAppClick}>
            {/* <MessageCircle className="h-8 w-8 relative z-10 group-hover:animate-bounce" /> */}
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className="h-16 w-16 relative z-10 group-hover:animate-bounce"
            />
          </button>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Chat with us on WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-gray-900 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
          </div>
        </div>

        {/* Expand/Collapse Toggle */}
        <div
          className={`transform transition-all duration-500 ease-in-out ${"translate-y-0 opacity-100 scale-100"}`}
        >
          <button
            onClick={handleDownloadBrochure}
            className="group relative flex items-center bg-gradient-to-r bg-[#0A6EA1] text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <div className="relative flex items-center">
              <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              <span className="font-semibold text-sm whitespace-nowrap">
                Download Brochure
              </span>
            </div>
          </button>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Get our complete product catalog
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-gray-900 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingActions;
