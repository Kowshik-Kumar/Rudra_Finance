import React from 'react'
import { Star, Quote } from 'lucide-react'

/**
 * TestimonialsSection Component
 * Displays client reviews and testimonials
 */
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      rating: 5,
      review:
        'Excellent service! Rudra Tax & Business Solution helped me with GST registration and tax filing. Very professional and responsive team. Highly recommended!',
      date: '2 months ago',
    },
    {
      name: 'Priya Sharma',
      role: 'Entrepreneur',
      rating: 5,
      review:
        'Best tax consultants in Durgapur. They handled my business registration smoothly and provided excellent guidance on tax planning. Very satisfied with their service.',
      date: '3 months ago',
    },
    {
      name: 'Amit Banerjee',
      role: 'Individual Client',
      rating: 5,
      review:
        'Professional and reliable service. They helped me file my income tax returns efficiently and saved me money with proper tax planning. Great experience!',
      date: '1 month ago',
    },
  ]

  const renderStars = (rating) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className={
              index < rating
                ? 'fill-secondary text-secondary'
                : 'fill-gray-300 text-gray-300'
            }
          />
        ))}
      </div>
    )
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied clients have to 
            say about our services.
          </p>
        </div>

        {/* Google Rating Highlight */}
        <div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl p-8 mb-12 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-8"
            />
            <div className="text-4xl font-bold text-secondary">5.0</div>
          </div>
          <div className="flex justify-center mb-2">
            {renderStars(5)}
          </div>
          <p className="text-gray-200">Based on Google Reviews</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card relative hover:scale-105 transition-transform duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 text-secondary/20" size={48} />

              {/* Rating */}
              <div className="mb-4">{renderStars(testimonial.rating)}</div>

              {/* Review */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.review}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Date */}
              <p className="text-xs text-gray-400 mt-3">{testimonial.date}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">5.0</div>
            <p className="text-gray-600">Google Rating</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
