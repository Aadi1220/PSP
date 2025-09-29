import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Code, 
  Smartphone, 
  ShoppingCart,
  Zap,
  Users,
  Award,
  Clock,
  Star,
  Target,
  TrendingUp,
  Eye,
  Shield,
  Rocket,
  Phone,
  Mail,
  MessageCircle,
  Settings,
  Layout,
  FileText,
  Database,
  Palette,
  Search,
  BarChart3,
  Monitor,
  Layers,
  GitBranch,
  MapPin,
  Server,
  Cpu,
  Cloud
} from "lucide-react";

export default function WebDev() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 50, easing: "ease-out" });
  }, []);

  const features = [
    { icon: Code, title: "Custom Development", desc: "Tailored solutions built from scratch using latest technologies", color: "blue" },
    { icon: Smartphone, title: "Responsive Design", desc: "Perfect viewing experience on all devices and screen sizes", color: "green" },
    { icon: ShoppingCart, title: "E-Commerce Solutions", desc: "Full-featured online stores with payment integration", color: "purple" },
    { icon: Zap, title: "Fast Performance", desc: "Optimized for speed and excellent user experience", color: "yellow" }
  ];

  const websiteTypes = [
    { 
      title: "Custom Web Development", 
      desc: "Fully tailored websites built from scratch with advanced functionality and unique features for your specific business needs",
      features: ["Custom Functionality", "Advanced Integrations", "Scalable Architecture", "API Development", "Admin Dashboard", "Database Design"],
      price: "Starting at ₹30,000",
      icon: Settings,
      color: "purple",
      popular: false
    },
    { 
      title: "Dynamic Website", 
      desc: "Interactive websites with content management systems, user interactions, and real-time data updates",
      features: ["Content Management System", "User Authentication", "Interactive Features", "Database Integration", "Admin Panel", "Regular Updates"],
      price: "Starting at ₹20,000",
      icon: Layout,
      color: "blue",
      popular: false
    },
    { 
      title: "Static Website", 
      desc: "Professional, fast-loading websites perfect for businesses that need elegant web presence",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Contact Forms", "Gallery Sections", "Mobile Friendly"],
      price: "Starting at ₹10,000",
      icon: FileText,
      color: "green",
      popular: false
    }
  ];

  const technologies = [
    { name: "React.js", icon: Code, color: "cyan" },
    { name: "Next.js", icon: Layers, color: "gray" },
    { name: "Node.js", icon: GitBranch, color: "green" },
    { name: "MongoDB", icon: Database, color: "emerald" },
    { name: "Express.js", icon: Server, color: "yellow" },
    { name: "MySQL", icon: BarChart3, color: "blue" },
    { name: "JavaScript", icon: Cpu, color: "orange" },
    { name: "Tailwind CSS", icon: Palette, color: "teal" },
    { name: "Firebase", icon: Cloud, color: "red" },
    { name: "TypeScript", icon: Code, color: "indigo" }
  ];

  const stats = [
    { number: "50+", label: "Websites Built", icon: Globe },
    { number: "98%", label: "Client Satisfaction", icon: Users },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "5+", label: "Years Experience", icon: Award }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 font-semibold text-sm mb-6 border border-blue-100">
                <Globe className="h-4 w-4" />
                Website Development Services
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
                Custom Websites That
                <span className="block text-blue-600">Drive Real Results</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                We create stunning, responsive websites that engage users and drive business growth. 
                From simple landing pages to complex e-commerce platforms, we deliver excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Rocket className="h-6 w-6" />
                  Start Your Project
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
                  alt="Web development team working on projects"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <Code className="h-8 w-8 text-blue-600" />
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

      {/* Features Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why Choose Our Web Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with creative design to deliver websites that perform exceptionally.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div data-aos="fade-right">
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className={`w-12 h-12 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                      <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop"
                alt="Modern web development workspace"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Website Types/Packages Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Website Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of website development solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {websiteTypes.map((type, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-${type.color}-100 rounded-2xl flex items-center justify-center`}>
                    <type.icon className={`h-8 w-8 text-${type.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                    <div className={`text-2xl font-black text-${type.color}-600`}>{type.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{type.desc}</p>
                
                <div className="space-y-3 mb-8">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 bg-${type.color}-100 text-${type.color}-600 hover:bg-${type.color}-200`}
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We work with the latest and most reliable technologies to build robust, scalable websites that perform exceptionally well.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {technologies.slice(0, 6).map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className={`w-10 h-10 bg-${tech.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <tech.icon className={`h-5 w-5 text-${tech.color}-600`} />
                    </div>
                    <span className="font-semibold text-gray-900">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
                  alt="Developer coding with modern technologies"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="grid grid-cols-4 gap-2 flex-1">
                      {technologies.slice(6).map((tech, index) => (
                        <div
                          key={index}
                          className={`w-8 h-8 bg-${tech.color}-100 rounded-lg flex items-center justify-center`}
                        >
                          <tech.icon className={`h-4 w-4 text-${tech.color}-600`} />
                        </div>
                      ))}
                    </div>
                    <div className="text-sm font-semibold text-gray-700">+More</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure your website is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
                alt="Team planning and development process"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div data-aos="fade-left">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { step: "01", title: "Planning", desc: "We understand your requirements and create a detailed plan", icon: Target },
                  { step: "02", title: "Design", desc: "Create stunning designs that reflect your brand identity", icon: Palette },
                  { step: "03", title: "Development", desc: "Build your website using best practices and latest tech", icon: Code },
                  { step: "04", title: "Launch", desc: "Test thoroughly and launch your website successfully", icon: Rocket }
                ].map((process, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {process.step}
                      </div>
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <process.icon className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{process.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - White Background */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto" data-aos="zoom-in">
          <div className="bg-white rounded-3xl p-16 shadow-lg border border-gray-200 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Let's discuss your project and create a website that drives real results for your business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Sparkles className="h-6 w-6" />
                Start Your Project Now
                <ArrowRight className="h-6 w-6" />
              </Link>
              <a
                href="mailto:Support@perfectserviceprovider.com"
                className="inline-flex items-center gap-3 px-10 py-5 border-2 border-gray-300 text-gray-700 hover:border-blue-300 hover:text-blue-600 rounded-xl font-bold text-lg transition-all duration-300"
              >
                <Mail className="h-6 w-6" />
                Email Us
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
                <a href="mailto:Support@perfectserviceprovider.com" className="text-green-600 hover:text-green-700">
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
