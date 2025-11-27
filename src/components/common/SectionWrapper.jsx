const SectionWrapper = ({ children, className }) => {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${className || ""}`}>
      <div className="container mx-auto px-4 sm:px-6">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
