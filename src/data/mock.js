import { 
  Home, 
  Shield, 
  Zap, 
  Award, 
  Users,
  Clock,
  Star,
  CheckCircle,
  Wrench,
  TrendingUp
} from 'lucide-react';

const mockData = {
  services: [
    {
      id: 1,
      title: "Casement Windows",
      description: "Premium energy-efficient casement windows with superior ventilation and unobstructed views.",
      icon: Home,
      features: [
        "Energy Star certified",
        "Custom sizing available",
        "Multi-point locking system",
        "Lifetime warranty"
      ]
    },
    {
      id: 2,
      title: "Entry Doors",
      description: "Secure and stylish entry doors that enhance your home's curb appeal and security.",
      icon: Shield,
      features: [
        "Reinforced steel construction",
        "Weather resistant sealing",
        "Smart lock compatibility",
        "Custom finishes"
      ]
    },
    {
      id: 3,
      title: "Patio Doors",
      description: "Beautiful sliding and French patio doors that seamlessly connect indoor and outdoor spaces.",
      icon: Zap,
      features: [
        "Low-E glass coating",
        "Smooth operation",
        "Security features",
        "Various configurations"
      ]
    },
    {
      id: 4,
      title: "Professional Installation",
      description: "Expert installation by certified technicians ensures perfect fit and optimal performance.",
      icon: Award,
      features: [
        "Certified installers",
        "Quality guarantee",
        "Clean job site",
        "Post-installation support"
      ]
    },
    {
      id: 5,
      title: "Energy Audits",
      description: "Comprehensive energy assessments to identify opportunities for improved efficiency.",
      icon: TrendingUp,
      features: [
        "Thermal imaging",
        "Efficiency calculations",
        "Rebate assistance",
        "ROI projections"
      ]
    },
    {
      id: 6,
      title: "Repair Services",
      description: "Expert repair and maintenance services to extend the life of your windows and doors.",
      icon: Wrench,
      features: [
        "Same-day service",
        "Genuine parts",
        "Warranty work",
        "Preventive maintenance"
      ]
    }
  ],

  benefits: [
    {
      id: 1,
      title: "Energy Efficiency",
      description: "Save up to 30% on energy bills with our high-performance windows and doors",
      icon: Zap
    },
    {
      id: 2,
      title: "Enhanced Security",
      description: "Multi-point locking systems and reinforced frames provide maximum protection",
      icon: Shield
    },
    {
      id: 3,
      title: "Lifetime Warranty",
      description: "Comprehensive warranty coverage on all products and installation work",
      icon: Award
    },
    {
      id: 4,
      title: "Expert Installation",
      description: "Certified professionals ensure perfect installation every time",
      icon: CheckCircle
    }
  ],

  stats: [
    {
      id: 1,
      value: "5,000+",
      label: "Happy Customers"
    },
    {
      id: 2,
      value: "20+",
      label: "Years Experience"
    },
    {
      id: 3,
      value: "99%",
      label: "Satisfaction Rate"
    },
    {
      id: 4,
      value: "24/7",
      label: "Support Available"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Springfield, IL",
      content: "PWP EcoVent transformed our home with beautiful casement windows. The energy savings are incredible and the installation was flawless!",
      rating: 5
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      location: "Madison, WI",
      content: "Professional service from start to finish. Our new patio doors have completely changed how we use our outdoor space. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Chen",
      location: "Des Moines, IA",
      content: "The team at PWP EcoVent exceeded our expectations. Quality products, expert installation, and amazing customer service. Worth every penny!",
      rating: 5
    }
  ],

  projects: [
    {
      id: 1,
      title: "Modern Farmhouse Renovation",
      location: "Springfield, IL",
      description: "Complete window and door replacement for a beautiful farmhouse",
      beforeImage: "https://via.placeholder.com/400x300/f8f9fa/0A6EA1?text=Before",
      afterImage: "https://via.placeholder.com/400x300/f8f9fa/7BBE4B?text=After",
      features: ["12 Casement Windows", "2 Entry Doors", "1 Patio Door"]
    },
    {
      id: 2,
      title: "Contemporary Home Upgrade",
      location: "Madison, WI",
      description: "Energy-efficient window installation for modern home",
      beforeImage: "https://via.placeholder.com/400x300/f8f9fa/0A6EA1?text=Before",
      afterImage: "https://via.placeholder.com/400x300/f8f9fa/7BBE4B?text=After",
      features: ["8 Casement Windows", "1 Entry Door", "French Patio Doors"]
    }
  ]
};

export default mockData;