import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, TrendingUp } from 'lucide-react'

/**
 * HeroSection Component
 * Main hero section with headline and call-to-action
 */
const HeroSection = () => {
  return (
    <section className="relative text-white section-padding pt-32 min-h-screen flex items-center" style={{ 
      backgroundImage: 'url(/hero-bg.png)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundColor: '#1a2942'
    }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1a2942]/85"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award className="text-[#E8B41F]" size={20} />
              <span className="text-sm font-medium">5.0 Google Rating</span>
            </div>
            
            <h1 className="heading-xl text-white leading-tight">
              Professional Tax & Business Solutions You Can Trust
            </h1>
            
            <p className="text-lg text-gray-200 leading-relaxed">
              Expert tax preparation, GST filing, business registration, and comprehensive 
              accounting services for individuals and businesses in Durgapur and beyond.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E8B41F]">500+</div>
                <div className="text-sm text-gray-200">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E8B41F]">10+</div>
                <div className="text-sm text-gray-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E8B41F]">5.0</div>
                <div className="text-sm text-gray-200">Google Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#E8B41F] hover:bg-[#D4A01D] text-[#1a2942] font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Tax Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-[#2c4463] hover:bg-[#3a5478] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 border border-white/30"
              >
                View Our Services
              </Link>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#0f1829]/60 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <Users className="text-[#E8B41F] mb-3" size={32} />
              <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
              <p className="text-sm text-gray-200">
                Certified professionals with years of experience
              </p>
            </div>
            <div className="bg-[#0f1829]/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 mt-8">
              <TrendingUp className="text-[#E8B41F] mb-3" size={32} />
              <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
              <p className="text-sm text-gray-200">
                Track record of successful tax savings
              </p>
            </div>
            <div className="bg-[#0f1829]/60 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <Award className="text-[#E8B41F] mb-3" size={32} />
              <h3 className="text-lg font-semibold mb-2">Trusted Service</h3>
              <p className="text-sm text-gray-200">
                5-star rated by satisfied clients
              </p>
            </div>
            <div className="bg-[#0f1829]/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 mt-8">
              <svg
                className="text-[#E8B41F] mb-3"
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-lg font-semibold mb-2">Timely Support</h3>
              <p className="text-sm text-gray-200">
                Quick response and efficient service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
