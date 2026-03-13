import React from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle,
  ArrowRight,
  IndianRupee,
  TrendingUp,
  Shield,
  FileText,
} from 'lucide-react'

/**
 * Services Page Component
 * Detailed listing of all services offered
 */
const Services = () => {
  const services = [
    {
      icon: import.meta.env.BASE_URL + 'tax-icon.png',
      title: 'Income Tax Filing',
      description:
        'Expert assistance with individual and business income tax returns. We ensure accurate filing, maximize your refunds, and help you stay compliant with the latest tax laws.',
      features: [
        'Individual tax returns (ITR-1, ITR-2, ITR-3, ITR-4)',
        'Business tax returns',
        'E-filing support and verification',
        'Tax refund tracking',
        'Assessment and notice handling',
        'Previous year return filing',
      ],
      pricing: 'Starting from ₹500',
    },
    {
      icon: import.meta.env.BASE_URL + 'gst-icon.png',
      title: 'GST Registration & Filing',
      description:
        'Complete GST registration, monthly/quarterly filing, and compliance management. Stay hassle-free with our comprehensive GST services tailored to your business needs.',
      features: [
        'New GST registration',
        'GST return filing (GSTR-1, GSTR-3B)',
        'Annual GST return (GSTR-9)',
        'Input tax credit reconciliation',
        'GST notice handling',
        'GST cancellation and amendments',
      ],
      pricing: 'Starting from ₹1,000/month',
    },
    {
      icon: import.meta.env.BASE_URL + 'business-icon.png',
      title: 'Business Registration',
      description:
        'Register your business with ease - from sole proprietorship to private limited company. We handle all paperwork and legal formalities for a smooth registration process.',
      features: [
        'Sole proprietorship registration',
        'Partnership firm registration',
        'Private limited company incorporation',
        'LLP registration',
        'MSME/Udyam registration',
        'Shop and establishment license',
      ],
      pricing: 'Starting from ₹2,000',
    },
    {
      icon: import.meta.env.BASE_URL + 'bookkeeping-icon.png',
      title: 'Accounting & Bookkeeping',
      description:
        'Professional accounting and bookkeeping services to keep your financial records organized and compliant. Focus on growing your business while we manage the numbers.',
      features: [
        'Monthly bookkeeping',
        'Financial statement preparation',
        'Accounts payable and receivable',
        'Bank reconciliation',
        'Inventory management',
        'Financial reporting and analysis',
      ],
      pricing: 'Starting from ₹3,000/month',
    },
    {
      icon: import.meta.env.BASE_URL + 'tax-consulting-icon.png',
      title: 'Tax Planning & Consultation',
      description:
        'Strategic tax planning to legally minimize your tax liability. Get expert advice on tax-saving investments, deductions, and financial planning for long-term success.',
      features: [
        'Personal tax planning',
        'Business tax optimization',
        'Investment advice for tax savings',
        'Retirement planning',
        'Estate planning',
        'Year-round tax consultation',
      ],
      pricing: 'Starting from ₹5,000',
    },
    {
      icon: import.meta.env.BASE_URL + 'compliance-icon.png',
      title: 'Compliance Services',
      description:
        'Ensure your business meets all regulatory and statutory compliance requirements. Avoid penalties and legal issues with our comprehensive compliance management.',
      features: [
        'TDS return filing',
        'PF and ESI compliance',
        'ROC compliance',
        'Audit support',
        'Regulatory filings',
        'Compliance calendar management',
      ],
      pricing: 'Contact for pricing',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive tax and business solutions designed to help you succeed. 
            Expert guidance, professional service, and competitive pricing.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => {
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`card ${
                    isEven ? 'lg:ml-0' : 'lg:ml-12'
                  } hover:scale-[1.02] transition-transform duration-300`}
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Icon and Title */}
                    <div className="lg:col-span-1">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-20 h-20 object-contain mb-4"
                      />
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center space-x-2 text-secondary font-semibold">
                        <IndianRupee size={18} />
                        <span>{service.pricing}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-primary mb-4 text-lg">
                        What's Included:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle
                              className="text-secondary flex-shrink-0 mt-1"
                              size={18}
                            />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <Link
                          to="/contact"
                          className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors"
                        >
                          Get Started with {service.title}
                          <ArrowRight size={18} className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md text-primary mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine expertise, efficiency, and affordability to deliver exceptional 
              value to our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: 'Accuracy Guaranteed',
                description: 'Precise and error-free service delivery',
              },
              {
                icon: TrendingUp,
                title: 'Save Money',
                description: 'Maximize savings through expert planning',
              },
              {
                icon: Shield,
                title: 'Full Compliance',
                description: 'Stay compliant with all regulations',
              },
              {
                icon: FileText,
                title: 'Timely Filing',
                description: 'Never miss a deadline with our service',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and get a customized 
            solution for your tax and business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Request a Consultation
            </Link>
            <a
              href="tel:+919832833434"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-white/30"
            >
              Call +91 98328 33434
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
