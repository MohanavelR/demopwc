import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  Home, 
  Shield, 
  Zap, 
  Award, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Wrench
} from 'lucide-react';
import mockData from '../data/mock';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleQuoteRequest = (formData) => {
    console.log('Quote request submitted:', formData);
    // Mock API call
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_eeea0b95-9990-4fa8-9999-43fbd081fd29/artifacts/ivnncfh7_PWP_logo.png" 
                alt="PWP Logo" 
                className="h-12 w-auto"
              />
              <img 
                src="https://customer-assets.emergentagent.com/job_eeea0b95-9990-4fa8-9999-43fbd081fd29/artifacts/epkjcnb9_EV_logo.png" 
                alt="EcoVent Logo" 
                className="h-10 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-[#0A6EA1] transition-colors duration-300">Services</a>
              <a href="#why-us" className="text-gray-600 hover:text-[#0A6EA1] transition-colors duration-300">Why Us</a>
              <a href="#testimonials" className="text-gray-600 hover:text-[#0A6EA1] transition-colors duration-300">Reviews</a>
              <Button className="bg-[#7BBE4B] hover:bg-[#6DA63F] text-white transition-all duration-300 transform hover:scale-105">
                Get Quote
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              id="hero-content"
              data-animate
              className={`transform transition-all duration-1000 ${
                isVisible['hero-content'] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
            >
              <Badge className="bg-[#7BBE4B]/10 text-[#7BBE4B] border-[#7BBE4B]/20 mb-6">
                Premium Casement Windows & Doors
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Home with 
                <span className="text-[#0A6EA1] block">Premium Windows</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience superior energy efficiency, security, and style with our custom casement windows and doors. Professional installation with lifetime warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#0A6EA1] hover:bg-[#085A87] text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-[#7BBE4B] text-[#7BBE4B] hover:bg-[#7BBE4B] hover:text-white transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (555) 123-4567
                </Button>
              </div>
            </div>
            <div 
              id="hero-image"
              data-animate
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible['hero-image'] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A6EA1]/20 to-[#7BBE4B]/20 rounded-3xl transform rotate-3"></div>
                <img 
                  src="https://via.placeholder.com/600x400/f8f9fa/0A6EA1?text=Premium+Casement+Windows" 
                  alt="Premium Casement Windows" 
                  className="relative rounded-3xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div 
            id="services-header"
            data-animate
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible['services-header'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From custom design to professional installation, we provide comprehensive window and door solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.services.map((service, index) => (
              <Card 
                key={service.id}
                id={`service-${index}`}
                data-animate
                className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg ${
                  isVisible[`service-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#0A6EA1]/10 rounded-lg group-hover:bg-[#0A6EA1] transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-[#0A6EA1] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-[#7BBE4B] mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div 
              id="why-us-content"
              data-animate
              className={`transform transition-all duration-1000 ${
                isVisible['why-us-content'] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose PWP EcoVent?</h2>
              <p className="text-xl text-gray-600 mb-8">
                With over 20 years of experience, we deliver superior quality windows and doors that enhance your home's comfort, security, and value.
              </p>
              
              <div className="space-y-6">
                {mockData.benefits.map((benefit, index) => (
                  <div 
                    key={benefit.id}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="p-2 bg-[#7BBE4B]/10 rounded-lg">
                      <benefit.icon className="h-5 w-5 text-[#7BBE4B]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div 
              id="why-us-stats"
              data-animate
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible['why-us-stats'] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
            >
              <div className="grid grid-cols-2 gap-6">
                {mockData.stats.map((stat, index) => (
                  <Card key={stat.id} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-[#0A6EA1] mb-2">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div 
            id="testimonials-header"
            data-animate
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible['testimonials-header'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - hear from satisfied homeowners</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                id={`testimonial-${index}`}
                data-animate
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                  isVisible[`testimonial-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-[#0A6EA1]/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-[#0A6EA1]" />
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div 
            id="contact-header"
            data-animate
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible['contact-header'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Home?</h2>
            <p className="text-xl text-gray-600">Get your free quote today and discover the PWP EcoVent difference</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card 
              id="contact-form"
              data-animate
              className={`border-0 shadow-xl p-8 transform transition-all duration-1000 ${
                isVisible['contact-form'] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get Your Free Quote</h3>
              <QuoteForm onSubmit={handleQuoteRequest} />
            </Card>
            
            <div 
              id="contact-info"
              data-animate
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible['contact-info'] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#0A6EA1]/10 rounded-lg">
                    <Phone className="h-6 w-6 text-[#0A6EA1]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-gray-600">(555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#7BBE4B]/10 rounded-lg">
                    <Mail className="h-6 w-6 text-[#7BBE4B]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-gray-600">info@pwpecovent.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#969798]/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#969798]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Visit Our Showroom</div>
                    <div className="text-gray-600">123 Window Lane, City, State 12345</div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-[#0A6EA1]/5 rounded-lg">
                    <Clock className="h-8 w-8 text-[#0A6EA1] mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Quick Response</div>
                    <div className="text-sm text-gray-600">Same day quotes</div>
                  </div>
                  <div className="p-4 bg-[#7BBE4B]/5 rounded-lg">
                    <Wrench className="h-8 w-8 text-[#7BBE4B] mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Expert Install</div>
                    <div className="text-sm text-gray-600">Certified technicians</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_eeea0b95-9990-4fa8-9999-43fbd081fd29/artifacts/ivnncfh7_PWP_logo.png" 
                  alt="PWP Logo" 
                  className="h-8 w-auto brightness-0 invert"
                />
                <img 
                  src="https://customer-assets.emergentagent.com/job_eeea0b95-9990-4fa8-9999-43fbd081fd29/artifacts/epkjcnb9_EV_logo.png" 
                  alt="EcoVent Logo" 
                  className="h-6 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 mb-4">Premium casement windows and doors for your home</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Casement Windows</li>
                <li>Entry Doors</li>
                <li>Patio Doors</li>
                <li>Installation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Warranties</li>
                <li>Certifications</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div>(555) 123-4567</div>
                <div>info@pwpecovent.com</div>
                <div>123 Window Lane<br />City, State 12345</div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 PWP EcoVent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Quote Form Component
const QuoteForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    alert('Quote request submitted! We\'ll contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A6EA1] focus:border-transparent transition-all duration-300"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A6EA1] focus:border-transparent transition-all duration-300"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A6EA1] focus:border-transparent transition-all duration-300"
          placeholder="your@email.com"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A6EA1] focus:border-transparent transition-all duration-300"
        >
          <option value="">Select a service</option>
          <option value="casement-windows">Casement Windows</option>
          <option value="entry-doors">Entry Doors</option>
          <option value="patio-doors">Patio Doors</option>
          <option value="consultation">Free Consultation</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A6EA1] focus:border-transparent transition-all duration-300"
          placeholder="Tell us about your project..."
        />
      </div>
      
      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-[#7BBE4B] hover:bg-[#6DA63F] text-white transition-all duration-300 transform hover:scale-105"
      >
        Get My Free Quote <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </form>
  );
};

export default LandingPage;