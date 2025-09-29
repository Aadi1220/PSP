import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import {
  Globe,
  Palette,
  Zap,
  Target,
  Search,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Star,
  Award,
  Code,
  Smartphone,
  ShoppingCart,
  Brush,
  Image,
  BarChart3,
  Phone,
  Youtube,
  FileText,
  Eye,
  Mail,
  MapPin,
  Clock,
  Shield,
  Rocket
} from "lucide-react";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 50, easing: "ease-out" });
  }, []);

  const mainServices = [
    {
      id: "web-development",
      title: "Website Development",
      description: "Custom websites and e-commerce solutions that drive business growth with modern design and functionality.",
      icon: Globe,
      color: "blue",
      features: ["Custom Development", "Responsive Design", "E-Commerce Solutions", "CMS Integration"],
      stats: "50+ Websites Built",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "graphics-media",
      title: "Graphics & Media",
      description: "Professional logo design, branding, and creative solutions that make your business stand out.",
      icon: Palette,
      color: "purple",
      features: ["Logo Design", "Brand Identity", "Video Production", "Digital Graphics"],
      stats: "100+ Brands Designed",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Comprehensive SEO, social media marketing, and online advertising strategies to maximize your reach.",
      icon: Zap,
      color: "green",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
      stats: "200+ Campaigns Managed",
      image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const additionalServices = [
    { title: "Google Ads Management", icon: Target, desc: "Targeted PPC advertising campaigns that deliver results", color: "blue" },
    { title: "YouTube Advertising", icon: Youtube, desc: "Video advertising campaigns that engage audiences", color: "red" },
    { title: "Content Creation", icon: FileText, desc: "Engaging content strategies that drive engagement", color: "purple" },
    { title: "Social Media Optimization", icon: Eye, desc: "Optimize your social media presence effectively", color: "pink" },
    { title: "E-commerce Solutions", icon: ShoppingCart, desc: "Complete online store development and management", color: "indigo" },
    { title: "Mobile App Development", icon: Smartphone, desc: "Native and cross-platform mobile applications", color: "cyan" }
  ];

  const stats = [
    { number: "300+", label: "Projects Completed", icon: CheckCircle },
    { number: "225+", label: "Happy Clients", icon: Users },
    { number: "99%", label: "Success Rate", icon: Award },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 font-semibold text-sm mb-6 border border-blue-100">
                <Sparkles className="h-4 w-4" />
                Our Services
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
                Digital Solutions That
                <span className="block text-blue-600">Drive Real Results</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                From stunning websites to powerful marketing campaigns, we offer comprehensive 
                digital solutions designed to help your business thrive in today's competitive landscape.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Rocket className="h-6 w-6" />
                  Get Started Today
                  <ArrowRight className="h-6 w-6" />
                </Link>
                <a
                  href="tel:+918920267022"
                  className="inline-flex items-center gap-3 px-10 py-5 border-2 border-gray-300 text-gray-700 hover:border-blue-300 hover:text-blue-600 rounded-xl font-bold text-lg transition-all duration-300"
                >
                  <Phone className="h-6 w-6" />
                  Call Now
                </a>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop"
                  alt="Professional team working on digital solutions"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-8 w-8 text-blue-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mt-20" data-aos="fade-up" data-aos-delay="200">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-black text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions designed to transform your business and accelerate growth 
              through innovative digital strategies.
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-${service.color}-100 rounded-2xl flex items-center justify-center`}>
                        <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                        <p className={`text-${service.color}-600 font-semibold`}>{service.stats}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to={`/services/${service.id}`}
                      className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                        service.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                        service.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700 text-white' :
                        service.color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
                        'bg-gray-600 hover:bg-gray-700 text-white'
                      }`}
                    >
                      Learn More
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                      <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete your digital transformation with our comprehensive range of specialized services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-14 h-14 bg-${service.color}-100 rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className={`h-7 w-7 text-${service.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures successful project delivery and exceptional results every time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
                alt="Team planning and strategy session"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div data-aos="fade-left">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { step: "01", title: "Discovery", desc: "Understanding your needs and goals", icon: Search },
                  { step: "02", title: "Strategy", desc: "Creating a custom action plan", icon: Target },
                  { step: "03", title: "Development", desc: "Building your solution", icon: Code },
                  { step: "04", title: "Launch", desc: "Going live and optimization", icon: Rocket }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {item.step}
                      </div>
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                Why Choose Perfect Service Provider
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We combine expertise, creativity, and dedication to deliver exceptional results 
                that drive real business growth and sustainable success.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Award, title: "Proven Results", desc: "300+ successful projects delivered", color: "blue" },
                  { icon: Users, title: "Expert Team", desc: "Skilled and experienced professionals", color: "green" },
                  { icon: Clock, title: "Fast Delivery", desc: "On-time project completion", color: "purple" },
                  { icon: Shield, title: "Quality Guarantee", desc: "100% satisfaction guaranteed", color: "red" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                alt="Team working together on projects"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto" data-aos="zoom-in">
          <div className="bg-white rounded-3xl p-16 shadow-lg border border-gray-200 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Let's discuss your project and create a customized solution that drives 
              real results for your business growth and success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Sparkles className="h-6 w-6" />
                Get Started Today
                <ArrowRight className="h-6 w-6" />
              </Link>
              <a
                href="tel:+918920267022"
                className="inline-flex items-center gap-3 px-10 py-5 border-2 border-gray-300 text-gray-700 hover:border-blue-300 hover:text-blue-600 rounded-xl font-bold text-lg transition-all duration-300"
              >
                <Phone className="h-6 w-6" />
                Call Us Now
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-2">Call Us</div>
                <a href="tel:+918920267022" className="text-blue-600 hover:text-blue-700">
                  +91-89202 67022
                </a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-2">Email Us</div>
                <a href="Support@perfectserviceprovider.com" className="text-green-600 hover:text-green-700">
                  Support@perfectserviceprovider.com
                </a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-2">Visit Us</div>
                <span className="text-purple-600">Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
