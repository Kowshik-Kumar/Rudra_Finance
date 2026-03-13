import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import { CheckCircle, Phone, MapPin, Clock } from 'lucide-react'

/**
 * Home Page Component
 * Main landing page with hero, services overview, and testimonials
 */
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="heading-md text-primary mb-6">
                Welcome to Rudra Tax & Business Solution
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are a leading tax consulting and business solution provider in Durgapur, 
                West Bengal. With over 10 years of experience, we specialize in providing 
                comprehensive tax preparation, GST services, business registration, and 
                accounting solutions for individuals and businesses.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our mission is to simplify complex tax and business processes, helping our 
                clients save time and money while ensuring full compliance with regulations. 
                We pride ourselves on delivering personalized, professional service that you 
                can trust.
              </p>

              {/* Why Choose Us */}
              <div className="space-y-3 mb-8">
                {[
                  'Expert certified professionals',
                  'Personalized service for each client',
                  'Affordable and transparent pricing',
                  'Quick turnaround time',
                  'Comprehensive business solutions',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>

            {/* Image/Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Call Us</p>
                      <a href="tel:+919832833434" className="text-gray-200 hover:text-secondary">
                        +91 98328 33434
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Visit Us</p>
                      <p className="text-sm text-gray-200">
                        E1/11C, near ISHANESHWAR SHIV MANDIR,<br />
                        Bhiringi, Benachity, Durgapur<br />
                        West Bengal 713213
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Working Hours</p>
                      <p className="text-gray-200">Open Daily - Closes at 10 PM</p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-6 inline-block bg-secondary hover:bg-secondary-light text-primary font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                >
                  Get Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <ServicesSection />

      {/* Client Trust Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6">
            Trusted by 500+ Clients Across Durgapur
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust us with their tax and business 
            needs. Experience professional service and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Get Tax Consultation
            </Link>
            <Link
              to="/services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-white/30"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />
    </div>
  )
}

export default Home
