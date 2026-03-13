import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

/**
 * ServicesSection Component
 * Displays all services offered with descriptions
 */
const ServicesSection = () => {
  const services = [
    {
      icon: '/tax-icon.png',
      title: 'Income Tax Filing',
      description:
        'Expert assistance with individual and business income tax returns. Maximize your refunds and ensure compliance with latest tax laws.',
      benefits: ['Accurate filing', 'Maximum refunds', 'E-filing support'],
    },
    {
      icon: '/gst-icon.png',
      title: 'GST Registration & Filing',
      description:
        'Complete GST registration, monthly/quarterly filing, and compliance management for your business. Stay hassle-free with our GST services.',
      benefits: ['Quick registration', 'Timely filing', 'Compliance tracking'],
    },
    {
      icon: '/business-icon.png',
      title: 'Business Registration',
      description:
        'Register your business with ease - from sole proprietorship to private limited company. We handle all paperwork and legal formalities.',
      benefits: ['Fast registration', 'Legal compliance', 'Complete support'],
    },
    {
      icon: '/bookkeeping-icon.png',
      title: 'Accounting & Bookkeeping',
      description:
        'Professional accounting and bookkeeping services to keep your financial records organized and compliant. Focus on growth while we manage the numbers.',
      benefits: ['Accurate records', 'Financial clarity', 'Regular reports'],
    },
    {
      icon: '/tax-consulting-icon.png',
      title: 'Tax Planning & Consultation',
      description:
        'Strategic tax planning to minimize your tax liability legally. Get expert advice on tax-saving investments and financial planning.',
      benefits: ['Tax optimization', 'Expert guidance', 'Financial planning'],
    },
    {
      icon: '/compliance-icon.png',
      title: 'Compliance Services',
      description:
        'Ensure your business meets all regulatory and compliance requirements. Avoid penalties with our comprehensive compliance management.',
      benefits: ['Full compliance', 'Risk mitigation', 'Peace of mind'],
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive tax and business solutions tailored to your needs. We provide 
            expert services to help individuals and businesses thrive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                {/* Icon */}
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain mb-4"
                />

                {/* Title */}
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Benefits */}
                <ul className="space-y-2 mb-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors duration-200"
                >
                  Get Started
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
