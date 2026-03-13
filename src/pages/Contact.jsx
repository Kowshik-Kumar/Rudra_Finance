import React from 'react'
import ContactForm from '../components/ContactForm'
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react'

/**
 * Contact Page Component
 * Contact form, office location, and Google Maps embed
 */
const Contact = () => {
  const contactInfo = {
    address:
      'SHIV MANDIR, NUTAN PALLY, E1/11C, near ISHANESHWAR, Bhiringi, Benachity, Durgapur, West Bengal 713213, India',
    phone: '+91 98328 33434',
    email: 'rudratax.stay7@gmail.com',
    hours: 'Open Daily - Closes at 10 PM',
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Have questions or need professional tax and business consulting? 
            We're here to help. Reach out to us today!
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 mb-16">
            <div className="card bg-white text-center hover:scale-105 transition-transform">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-primary mb-2">Call Us</h3>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-gray-600 hover:text-secondary transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>

            <div className="card bg-white text-center hover:scale-105 transition-transform">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-primary mb-2">Email Us</h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-gray-600 hover:text-secondary transition-colors break-all"
              >
                {contactInfo.email}
              </a>
            </div>

            <div className="card bg-white text-center hover:scale-105 transition-transform">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-primary mb-2">Working Hours</h3>
              <p className="text-gray-600">{contactInfo.hours}</p>
            </div>

            <div className="card bg-white text-center hover:scale-105 transition-transform">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-primary mb-2">Get Directions</h3>
              <a
                href="https://maps.app.goo.gl/TD4VExwhpkVnUg166"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-secondary transition-colors"
              >
                Open in Maps
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-md text-primary mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Office Location Info */}
            <div>
              <h2 className="heading-md text-primary mb-6">Visit Our Office</h2>
              <p className="text-gray-600 mb-6">
                We welcome you to visit our office for in-person consultations. 
                Our team is ready to assist you with all your tax and business needs.
              </p>

              <div className="card space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Address</h3>
                    <p className="text-gray-600 text-sm">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-gray-600 hover:text-secondary transition-colors text-sm"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-600 hover:text-secondary transition-colors text-sm"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Working Hours</h3>
                    <p className="text-gray-600 text-sm">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden shadow-lg h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.1234567890123!2d87.123456!3d23.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA3JzI0LjQiTiA4N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rudra Tax & Business Solution Location"
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Click on the map for directions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="heading-md text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'What are your consultation charges?',
                answer:
                  'We offer a free initial consultation to understand your needs. Service charges vary based on the complexity of your requirements. Contact us for a detailed quote.',
              },
              {
                question: 'How long does tax filing take?',
                answer:
                  'Most individual tax returns are filed within 2-3 business days once we receive all necessary documents. Business tax returns may take 5-7 business days.',
              },
              {
                question: 'Do you provide services online?',
                answer:
                  'Yes! While we welcome in-person visits, we also provide complete online services. You can share documents digitally and communicate via phone, email, or video call.',
              },
              {
                question: 'What documents do I need for tax filing?',
                answer:
                  "Required documents typically include PAN card, Aadhaar card, Form 16, bank statements, investment proofs, and property documents. We'll provide a complete checklist based on your specific situation.",
              },
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="font-bold text-primary mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
