import { useEffect, useRef, useState } from "react";

const FadeInOnScroll = ({ children, animation = "slideUp", delay = 0 }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(ref.current);
      }
    }, { threshold: 0.1 });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animations = {
    slideUp: "opacity-0 translate-y-10",
    slideLeft: "opacity-0 -translate-x-10",
    slideRight: "opacity-0 translate-x-10",
    fadeIn: "opacity-0"
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 transform ease-out 
      ${visible ? "opacity-100 translate-y-0 translate-x-0" : animations[animation]}
      `}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
