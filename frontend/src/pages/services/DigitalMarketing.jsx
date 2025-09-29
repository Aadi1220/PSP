import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Search, 
  Target, 
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
  Megaphone,
  Heart,
  Video,
  AtSign,
  ThumbsUp
} from "lucide-react";

export default function DigitalMarketing() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 50, easing: "ease-out" });
  }, []);

  const mainServices = [
    { 
      icon: Search, 
      title: "Search Engine Optimization (SEO)", 
      desc: "Improve your website's ranking and attract organic traffic with expert SEO services. Get higher visibility on search engines and drive quality traffic to your website.", 
      color: "blue",
      features: ["Keyword Research & Analysis", "On-Page Optimization", "Technical SEO", "Link Building", "Local SEO", "SEO Audits"]
    },
    { 
      icon: Target, 
      title: "Google Ads", 
      desc: "Drive instant traffic and leads to your business with targeted Google Ads campaigns. Maximize your ROI with professionally managed advertising campaigns.", 
      color: "green",
      features: ["Campaign Setup & Management", "Keyword Targeting", "Ad Copy Creation", "Bid Optimization", "Conversion Tracking", "Performance Reports"]
    },
    { 
      icon: Share2, 
      title: "Social Media Marketing (SMM)", 
      desc: "Boost your brand visibility and engagement with powerful social media marketing strategies. Connect with your audience across all major platforms.", 
      color: "purple",
      features: ["Content Strategy", "Post Creation & Scheduling", "Community Management", "Paid Social Campaigns", "Influencer Marketing", "Performance Analytics"]
    },
    { 
      icon: ThumbsUp, 
      title: "Social Media Optimization (SMO)", 
      desc: "Enhance your online presence and audience engagement with effective Social Media Optimization strategies for maximum reach and engagement.", 
      color: "pink",
      features: ["Profile Optimization", "Content Optimization", "Hashtag Strategy", "Engagement Improvement", "Brand Consistency", "Social Listening"]
    }
  ];

  const stats = [
    { number: "200+", label: "Campaigns Managed", icon: TrendingUp },
    { number: "95%", label: "Client Satisfaction", icon: Users },
    { number: "300%", label: "Average Growth", icon: BarChart3 },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  const benefits = [
    { icon: TrendingUp, title: "Increased Brand Visibility", desc: "Get your brand seen by more potential customers online" },
    { icon: Target, title: "Targeted Audience Reach", desc: "Connect with the right people at the right time" },
    { icon: BarChart3, title: "Measurable Results", desc: "Track your ROI with detailed analytics and reporting" },
    { icon: Users, title: "Enhanced Customer Engagement", desc: "Build stronger relationships with your audience" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 font-semibold text-sm mb-6 border border-blue-100">
                <TrendingUp className="h-4 w-4" />
                Digital Marketing Services
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
                Boost Your Brand with
                <span className="block text-blue-600">Digital Marketing</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                Transform your business with comprehensive digital marketing services. From SEO to social media marketing, 
                we help you reach your target audience and achieve measurable growth online.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Rocket className="h-6 w-6" />
                  Start Your Campaign
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
                  src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=600&auto=format&fit=crop"
                  alt="Digital marketing team analyzing data and campaigns"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
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
              Our Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer specialized digital marketing services designed to boost your online presence and drive business growth.
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
                        service.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                        service.color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
                        service.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700 text-white' :
                        service.color === 'pink' ? 'bg-pink-600 hover:bg-pink-700 text-white' :
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
                          ? "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=600&auto=format&fit=crop"
                          : index === 1 
                          ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
                          : index === 2
                          ? "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=600&auto=format&fit=crop"
                          : "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop"
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
              Why Choose Our Digital Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive digital marketing approach delivers measurable results that drive business growth.
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
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
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
              Our Digital Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a strategic approach to ensure your digital marketing campaigns deliver maximum results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
                alt="Marketing team strategy meeting"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div data-aos="fade-left">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { step: "01", title: "Research & Analysis", desc: "Analyze your market, competitors, and target audience", icon: Search },
                  { step: "02", title: "Strategy Development", desc: "Create customized marketing strategies for your goals", icon: Target },
                  { step: "03", title: "Campaign Execution", desc: "Launch and manage your marketing campaigns effectively", icon: Rocket },
                  { step: "04", title: "Monitor & Optimize", desc: "Track performance and continuously improve results", icon: BarChart3 }
                ].map((process, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200"
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
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto" data-aos="zoom-in">
          <div className="bg-gray-50 rounded-3xl p-16 shadow-lg border border-gray-200 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              Ready to Boost Your Brand?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Let's create a digital marketing strategy that drives real results and grows your business online.
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
