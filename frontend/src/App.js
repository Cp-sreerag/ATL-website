import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="relative">
                  <span className="text-2xl font-bold text-white">ATL</span>
                  {/* Upside down crescent moon with fading U shape */}
                  <div className="absolute -top-1 -right-6 w-5 h-5">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-slate-400/30 to-transparent transform rotate-180"></div>
                      <div className="absolute inset-0.5 rounded-full bg-slate-900 transform rotate-180"></div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-300/60 via-transparent to-transparent transform rotate-180"></div>
                    </div>
                  </div>
                </div>
                <span className="text-teal-400 ml-2 text-sm font-light">Where Data Illuminates</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-teal-400 transition-colors duration-200">About</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Services</button>
                <button onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Products</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Contact</button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-teal-400 transition-colors duration-200">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-teal-400 transition-colors duration-200">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-teal-400 transition-colors duration-200">Services</button>
              <button onClick={() => scrollToSection('products')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-teal-400 transition-colors duration-200">Products</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-teal-400 transition-colors duration-200">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-800/90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHxibHVlfDE3NTIxNTA0NTF8MA&ixlib=rb-4.1.0&q=85" 
            alt="Technology Background" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-sm bg-slate-900/20 rounded-3xl p-8 md:p-12 border border-slate-700/30">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  ATL
                </h1>
                {/* Upside down crescent moon with fading U shape */}
                <div className="absolute -top-2 -right-8 w-8 h-8 md:w-12 md:h-12">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-slate-300/40 to-transparent transform rotate-180"></div>
                    <div className="absolute inset-1 rounded-full bg-slate-900 transform rotate-180"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-200/70 via-transparent to-transparent transform rotate-180"></div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Arkay Technology Limited
            </h2>
            <p className="text-xl md:text-2xl text-teal-400 mb-8 font-light tracking-wide">
              Where Data Illuminates
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transforming businesses with cutting-edge AI/ML solutions, Edge AI integrations, and intelligent automation tools that illuminate the path to digital excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
              >
                Know More
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Talk to ZIPI
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About ATL</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of intelligent technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
                <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  At Arkay Technologies Limited, we specialize in AI/ML solutions, data analytics, Edge AI integrations, and custom automation tools. We build smart systems that revolutionize how enterprises, startups, and government sectors operate.
                </p>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
                <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  We're part of a global community aiming to revolutionize tech and data services, with our flagship product ZIPI leading the way as an evolving AI assistant designed specifically for businesses.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 rounded-2xl blur-xl"></div>
              <img 
                src="https://images.pexels.com/photos/8532850/pexels-photo-8532850.jpeg" 
                alt="Professional Technology Workspace" 
                className="relative z-10 w-full h-96 object-cover rounded-2xl border border-slate-700/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and technology solutions tailored for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* AI/ML Solutions */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHxibHVlfDE3NTIxNTA0NTF8MA&ixlib=rb-4.1.0&q=85" 
                  alt="AI/ML Solutions" 
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI/ML Solutions</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Predictive models, natural language processing, and computer vision solutions that transform raw data into actionable insights.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Predictive Analytics Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision Systems</li>
                <li>• Machine Learning Algorithms</li>
              </ul>
            </div>

            {/* Edge AI & Embedded Intelligence */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHxibHVlfDE3NTIxNTA0NTF8MA&ixlib=rb-4.1.0&q=85" 
                  alt="Edge AI Technology" 
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Edge AI & Embedded Intelligence</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Hardware-integrated AI solutions that bring intelligent processing closer to the data source for real-time decision making.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Hardware-Integrated AI Systems</li>
                <li>• Real-time Processing Solutions</li>
                <li>• IoT Intelligence Integration</li>
                <li>• Embedded AI Optimization</li>
              </ul>
            </div>

            {/* Data Analytics Dashboards */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1648134859182-98df6e93ef58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTIxNTA0NTd8MA&ixlib=rb-4.1.0&q=85" 
                  alt="Data Analytics Dashboard" 
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Data Analytics Dashboards</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Interactive dashboards and automation tools that transform complex data into clear, actionable business intelligence.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Interactive Data Visualization</li>
                <li>• Real-time Business Intelligence</li>
                <li>• Custom Dashboard Development</li>
                <li>• Automated Reporting Systems</li>
              </ul>
            </div>

            {/* AI Chatbots & Virtual Assistants */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="mb-6">
                <img 
                  src="https://images.pexels.com/photos/8728384/pexels-photo-8728384.jpeg" 
                  alt="AI Chatbot Assistant" 
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI Chatbots & Virtual Assistants</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Intelligent conversational AI solutions including our flagship product ZIPI, designed to enhance customer engagement and business productivity.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• ZIPI - Our Flagship AI Assistant</li>
                <li>• Custom Chatbot Development</li>
                <li>• Virtual Customer Support</li>
                <li>• Business Process Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-slate-900/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Products</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flagship products that embody our commitment to AI innovation and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 hover:border-teal-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <h3 className="text-4xl font-bold text-white">ZIPI</h3>
                  {/* Moon symbol for ZIPI */}
                  <div className="absolute -top-1 -right-6 w-6 h-6">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-teal-400/40 to-transparent transform rotate-180"></div>
                      <div className="absolute inset-0.5 rounded-full bg-slate-900 transform rotate-180"></div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-teal-300/60 via-transparent to-transparent transform rotate-180"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-teal-400 text-lg font-semibold mb-4">AI Assistant & Virtual Intelligence Platform</p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our flagship AI assistant designed specifically for businesses. ZIPI evolves continuously to meet the dynamic needs of modern enterprises, providing intelligent automation, customer support, and business process optimization.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-gray-300">Intelligent Business Automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-gray-300">Advanced Customer Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-gray-300">Continuous Learning & Evolution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-gray-300">Multi-Platform Integration</span>
                </div>
              </div>
              <div className="mt-8">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Talk to ZIPI
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30">
                <h4 className="text-xl font-semibold text-white mb-3">Smart Analytics Suite</h4>
                <p className="text-gray-300">
                  Comprehensive data analytics platform that transforms raw data into actionable business insights.
                </p>
              </div>
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30">
                <h4 className="text-xl font-semibold text-white mb-3">Edge AI Solutions</h4>
                <p className="text-gray-300">
                  Hardware-integrated AI systems for real-time processing and decision-making at the edge.
                </p>
              </div>
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30">
                <h4 className="text-xl font-semibold text-white mb-3">Custom AI Models</h4>
                <p className="text-gray-300">
                  Tailored machine learning models built specifically for your business requirements and data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ATL Section */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose ATL?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unique advantages that set us apart in the AI and technology landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We leverage the latest AI/ML frameworks and technologies to deliver state-of-the-art solutions that keep you ahead of the competition.
              </p>
            </div>

            <div className="text-center bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Diverse Client Focus</h3>
              <p className="text-gray-300">
                From SMEs to government projects, startups to industrial automation - we understand and serve diverse business needs with tailored solutions.
              </p>
            </div>

            <div className="text-center bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovation-Driven</h3>
              <p className="text-gray-300">
                Our flagship product ZIPI represents our commitment to innovation, continuously evolving to meet the dynamic needs of modern businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with AI? Let's discuss your project and illuminate the path to success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300">Email</p>
                      <p className="text-white font-semibold">contact@arkaytech.in</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V9a2 2 0 11-4 0V6m0 0V4a2 2 0 112 2v2m-6 0V4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300">Company</p>
                      <p className="text-white font-semibold">Arkay Technologies Limited</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
                <h3 className="text-2xl font-semibold text-white mb-4">Our Specialties</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-900/50 rounded-xl">
                    <p className="text-blue-400 font-semibold">AI/ML</p>
                    <p className="text-gray-300 text-sm">Solutions</p>
                  </div>
                  <div className="text-center p-4 bg-slate-900/50 rounded-xl">
                    <p className="text-blue-400 font-semibold">Edge AI</p>
                    <p className="text-gray-300 text-sm">Integration</p>
                  </div>
                  <div className="text-center p-4 bg-slate-900/50 rounded-xl">
                    <p className="text-blue-400 font-semibold">Data</p>
                    <p className="text-gray-300 text-sm">Analytics</p>
                  </div>
                  <div className="text-center p-4 bg-slate-900/50 rounded-xl">
                    <p className="text-blue-400 font-semibold">ZIPI</p>
                    <p className="text-gray-300 text-sm">AI Assistant</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
              <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors duration-200"
                    placeholder="Project Discussion"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows="5" 
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors duration-200"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-white">ATL</span>
                <span className="text-blue-400 ml-2 text-sm font-light">data illuminated</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Arkay Technologies Limited - Transforming businesses with intelligent AI solutions and cutting-edge technology.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI/ML Solutions</li>
                <li>Edge AI Integration</li>
                <li>Data Analytics</li>
                <li>ZIPI AI Assistant</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@arkaytech.in</li>
                <li>Arkay Technologies Limited</li>
                <li>AI & Technology Solutions</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700/50 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Arkay Technologies Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;