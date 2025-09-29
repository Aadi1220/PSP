import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { 
  Palette, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Brush, 
  Video, 
  Users,
  Award,
  Clock,
  Star,
  BarChart3,
  Eye,
  Shield,
  Rocket,
  Phone,
  Mail,
  MessageCircle,
  Share2,
  FileText,
  Monitor,
  Zap,
  Globe,
  MapPin,
  Image,
  Heart,
  Camera,
  Play,
  Edit,
  Layers,
  Pen,
  Target
} from "lucide-react";

export default function Graphic() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 50, easing: "ease-out" });
  }, []);

  const mainServices = [
    { 
      icon: Palette, 
      title: "Creative Logo Designing", 
      desc: "Professional logo design services that create memorable brand identities. We craft unique, creative logos that perfectly represent your brand's personality and values.", 
      color: "purple",
      features: ["Brand Identity Design", "Logo Concepts & Variations", "Vector File Formats", "Brand Guidelines", "Trademark Support", "Unlimited Revisions"]
    },
    { 
      icon: Video, 
      title: "Video Designing", 
      desc: "Comprehensive video production and design services that bring your stories to life. From concept to final edit, we create engaging videos that captivate your audience.", 
      color: "red",
      features: ["Video Production", "Motion Graphics", "Video Editing", "Animation Design", "Social Media Videos", "Corporate Videos"]
    }
  ];

  const stats = [
    { number: "100+", label: "Brands Designed", icon: Palette },
    { number: "98%", label: "Client Satisfaction", icon: Users },
    { number: "500+", label: "Creative Projects", icon: BarChart3 },
    { number: "24/7", label: "Design Support", icon: Clock }
  ];

  const benefits = [
    { icon: Brush, title: "Creative Excellence", desc: "Eye-catching visuals that make your brand stand out from the competition" },
    { icon: Target, title: "Brand Identity Focus", desc: "Designs that perfectly capture and communicate your brand's essence" },
    { icon: Users, title: "Engaging Content", desc: "Visual content that connects with your audience and drives engagement" },
    { icon: Rocket, title: "Professional Quality", desc: "High-quality designs that elevate your brand's professional image" }
  ];

  const designTypes = [
    { name: "Logo Design", icon: Palette, color: "purple" },
    { name: "Brand Identity", icon: Brush, color: "pink" },
    { name: "Motion Graphics", icon: Video, color: "red" },
    { name: "Video Editing", icon: Edit, color: "orange" },
    { name: "Animation Design", icon: Play, color: "blue" },
    { name: "Social Media Graphics", icon: Share2, color: "green" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full text-purple-700 font-semibold text-sm mb-6 border border-purple-100">
                <Palette className="h-4 w-4" />
                Graphic Design & Video Production
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
                Elevate Your Brand with
                <span className="block text-purple-600">Creative Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                Creative graphic and media design services that bring your ideas to life with eye-catching visuals, 
                engaging content, and a strong brand identity that makes your business unforgettable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-purple-600 text-white rounded-xl font-bold text-lg hover:bg-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Rocket className="h-6 w-6" />
                  Start Your Project
                  <ArrowRight className="h-6 w-6" />
                </Link>
                <a
                  href="tel:+918920267022"
                  className="inline-flex items-center gap-3 px-10 py-5 border-2 border-gray-300 text-gray-700 hover:border-purple-300 hover:text-purple-600 rounded-xl font-bold text-lg transition-all duration-300"
                >
                  <Phone className="h-6 w-6" />
                  Call Now
                </a>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop"
                  alt="Creative design team working on brand identity projects"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <Palette className="h-8 w-8 text-purple-600" />
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
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-black text-purple-600 mb-2">{stat.number}</div>
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
              Our Creative Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating stunning visual content that captures attention and builds strong brand identities.
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
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
                      <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.desc}
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
                      to="/contact"
                      className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                        service.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700 text-white' :
                        service.color === 'red' ? 'bg-red-600 hover:bg-red-700 text-white' :
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
                      src={
                        index === 0 
                          ? "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop"
                          : "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&auto=format&fit=crop"
                      }
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

      {/* Benefits Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why Choose Our Creative Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine creativity with strategic thinking to deliver designs that not only look great but also drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Types Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Complete Design Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                From logo design to video production, we provide comprehensive creative services 
                that bring your brand vision to life with professional quality and creative excellence.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {designTypes.map((type, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className={`w-10 h-10 bg-${type.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <type.icon className={`h-5 w-5 text-${type.color}-600`} />
                    </div>
                    <span className="font-semibold text-gray-900">{type.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=600&auto=format&fit=crop"
                  alt="Creative design process and tools"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">Creative</div>
                      <div className="text-sm text-gray-600">Excellence</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">100%</div>
                      <div className="text-sm text-gray-600">Original</div>
                    </div>
                    <Brush className="h-8 w-8 text-purple-600" />
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
              Our Creative Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured creative process to ensure every project delivers exceptional results that exceed expectations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
                alt="Creative team brainstorming and design process"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div data-aos="fade-left">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { step: "01", title: "Discovery", desc: "Understanding your brand, goals, and target audience", icon: Eye },
                  { step: "02", title: "Concept", desc: "Developing creative concepts and design directions", icon: Brush },
                  { step: "03", title: "Creation", desc: "Bringing designs to life with professional execution", icon: Palette },
                  { step: "04", title: "Delivery", desc: "Final review, revisions, and project delivery", icon: Rocket }
                ].map((process, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {process.step}
                      </div>
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <process.icon className="h-5 w-5 text-purple-600" />
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
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Let's create stunning visual content that makes your brand unforgettable and drives real business results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-purple-600 text-white rounded-xl font-bold text-lg hover:bg-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Sparkles className="h-6 w-6" />
                Start Your Design Project
                <ArrowRight className="h-6 w-6" />
              </Link>
              <a
                href="mailto:Support@perfectserviceprovider.com"
                className="inline-flex items-center gap-3 px-10 py-5 border-2 border-gray-300 text-gray-700 hover:border-purple-300 hover:text-purple-600 rounded-xl font-bold text-lg transition-all duration-300"
              >
                <Mail className="h-6 w-6" />
                Email Us
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-2">Call Us</div>
                <a href="tel:+918920267022" className="text-purple-600 hover:text-purple-700">
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
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-2">Visit Us</div>
                <span className="text-blue-600">Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
