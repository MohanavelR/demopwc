import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Menu as AntMenu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import MainLogo from "../images/main.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Cleanup timeout on unmount
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Products",
      path: "/products",
      dropdown: [
        {
          category: "ECOVENT Series",
          items: [
            {
              name: "Casement",
              submenu: [
                { name: "Windows", path: "/products/casement/windows" },
                { name: "Doors", path: "/products/casement/doors" },
              ],
            },
            {
              name: "Sliding",
              submenu: [
                { name: "Windows", path: "/products/sliding/windows" },
                { name: "Doors", path: "/products/sliding/doors" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Technical",
      path: "/technical",
      dropdown: [
        {
          category: "Technical Specifications",
          items: [
            {
              name: "Casement Series",
              submenu: [
                { name: "60 Series", path: "/technical/casement/i-60" },
              ],
            },
            {
              name: "Sliding Series",
              submenu: [{ name: "60 Series", path: "/technical/sliding/i-60" }],
            },
            {
              name: "Auxiliary Profiles",
              path: "/technical/auxiliary-profiles",
            },

            {
              name: "Cross Sectional Designs",
              submenu: [
                {
                  name: "Casement",
                  path: "/technical/cross-sectional-designs/casement",
                },
                {
                  name: "Sliding",
                  path: "/technical/cross-sectional-designs/sliding",
                },
              ],
            },
          ],
        },
      ],
    },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleDropdownToggle = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const handleMouseEnter = (itemName) => {
    if (window.innerWidth >= 1024) {
      // Only on desktop
      // Clear any existing timeout
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        setHoverTimeout(null);
      }
      setOpenDropdown(itemName);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      // Only on desktop
      // Add delay before closing dropdown
      const timeout = setTimeout(() => {
        setOpenDropdown(null);
      }, 300); // 300ms delay
      setHoverTimeout(timeout);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 bg-white/95 backdrop-blur-md shadow-lg py-2 `}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between">
          {/* Logos */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-4 group"
          >
            <img src={MainLogo} width={50} height={60} alt="logo" />
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl lg:text-3xl font-bold text-gray-900 group-hover:text-[#0A6EA1] transition-colors duration-300 font-monument">
                Proflex Window Profiles
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.dropdown) {
                const menuItems = item.dropdown[0].items.map((subItem) => {
                  if (subItem.submenu) {
                    return {
                      key: subItem.name,
                      label: subItem.name,
                      children: subItem.submenu.map((subSubItem) => ({
                        key: subSubItem.path,
                        label: (
                          <Link
                            to={subSubItem.path}
                            className="block w-full"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subSubItem.name}
                          </Link>
                        ),
                      })),
                    };
                  } else {
                    return {
                      key: subItem.path,
                      label: (
                        <Link
                          to={subItem.path}
                          className="block w-full"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ),
                    };
                  }
                });

                return (
                  <Dropdown
                    key={item.name}
                    menu={{ items: menuItems }}
                    placement="bottomLeft"
                    trigger={["hover"]}
                    overlayStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(12px)",
                      borderRadius: "16px",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`relative font-medium transition-all duration-300 hover:scale-105 flex items-center ${
                        location.pathname === item.path
                          ? "text-[#0A6EA1]"
                          : "text-gray-600 hover:text-[#0A6EA1]"
                      }`}
                    >
                      {item.name}
                      <DownOutlined className="ml-1 text-xs" />
                      {location.pathname === item.path && (
                        <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#0A6EA1] rounded-full animate-pulse" />
                      )}
                    </Link>
                  </Dropdown>
                );
              } else {
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                      location.pathname === item.path
                        ? "text-[#0A6EA1]"
                        : "text-gray-600 hover:text-[#0A6EA1]"
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#0A6EA1] rounded-full animate-pulse" />
                    )}
                  </Link>
                );
              }
            })}
            <Button
              className="bg-[#7BBE4B] hover:bg-[#6DA63F] text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm px-4 py-2"
              asChild
            >
              <Link to="/contact">Get Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  !isScrolled && location.pathname === "/"
                    ? "text-white"
                    : "text-gray-600"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  !isScrolled && location.pathname === "/"
                    ? "text-white"
                    : "text-gray-600"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 sm:mt-4 p-3 sm:p-4 bg-white/95 backdrop-blur-md rounded-lg shadow-xl animate-fadeInDown">
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        className={`flex items-center justify-between w-full font-medium transition-colors duration-300 text-sm sm:text-base ${
                          location.pathname.startsWith(item.path) ||
                          openDropdown === item.name
                            ? "text-[#0A6EA1]"
                            : "text-gray-600 hover:text-[#0A6EA1]"
                        }`}
                        onClick={() => handleDropdownToggle(item.name)}
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            openDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Dropdown */}
                      {openDropdown === item.name && (
                        <div className="mt-2 sm:mt-3 ml-3 sm:ml-4 space-y-2 sm:space-y-3 animate-fadeInDown">
                          {item.dropdown.map((category) => (
                            <div key={category.category}>
                              <h4 className="text-xs font-bold text-[#0A6EA1] mb-1 sm:mb-2 uppercase tracking-wide">
                                {category.category}
                              </h4>
                              <div className="space-y-1 sm:space-y-2 ml-2">
                                {category.items.map((subItem) => (
                                  <div key={subItem.path || subItem.name}>
                                    {subItem.submenu ? (
                                      <div>
                                        <div className="block text-xs sm:text-sm text-gray-600 hover:text-[#0A6EA1] transition-colors duration-300 font-medium">
                                          {subItem.name}
                                        </div>
                                        <div className="ml-2 sm:ml-3 mt-1 space-y-1">
                                          {subItem.submenu.map((subSubItem) => (
                                            <Link
                                              key={subSubItem.path}
                                              to={subSubItem.path}
                                              className="block text-xs text-gray-500 hover:text-[#0A6EA1] transition-colors duration-300"
                                              onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setOpenDropdown(null);
                                              }}
                                            >
                                              {subSubItem.name}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    ) : (
                                      <Link
                                        to={subItem.path}
                                        className="block text-xs sm:text-sm text-gray-600 hover:text-[#0A6EA1] transition-colors duration-300"
                                        onClick={() => {
                                          setIsMobileMenuOpen(false);
                                          setOpenDropdown(null);
                                        }}
                                      >
                                        {subItem.name}
                                      </Link>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`font-medium transition-colors duration-300 text-sm sm:text-base ${
                        location.pathname === item.path
                          ? "text-[#0A6EA1]"
                          : "text-gray-600 hover:text-[#0A6EA1]"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button
                className="bg-[#7BBE4B] hover:bg-[#6DA63F] text-white transition-all duration-300 text-sm px-4 py-2"
                asChild
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
