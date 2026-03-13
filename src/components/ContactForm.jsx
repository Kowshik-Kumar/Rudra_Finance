import React, { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { web3FormsConfig } from '../config/web3FormsConfig'

/**
 * ContactForm Component
 * Form for clients to send inquiries with email notifications
 */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      if (!web3FormsConfig.accessKey) {
        throw new Error('Web3Forms access key is missing')
      }

      const payload = {
        access_key: web3FormsConfig.accessKey,
        subject: 'New Contact Form Submission - Rudra Tax & Business Solution',
        from_name: formData.name,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        replyto: formData.email,
        botcheck: '',
      }

      const response = await fetch(web3FormsConfig.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Form submission failed')
      }

      // Success - show confirmation
      setIsSubmitted(true)
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
      }, 5000)
    } catch (err) {
      console.error('Web3Forms submission failed:', err)
      setError('Failed to send message. Please try again or call us directly at +91 98328 33434.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    'Income Tax Filing',
    'GST Registration & Filing',
    'Business Registration',
    'Accounting & Bookkeeping',
    'Tax Planning & Consultation',
    'Compliance Services',
    'Other',
  ]

  if (isSubmitted) {
    return (
      <div className="card max-w-2xl mx-auto text-center py-12">
        <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
        <h3 className="text-2xl font-bold text-primary mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600">
          Your message has been received. We'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <div className="card max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-start space-x-3">
            <AlertCircle className="flex-shrink-0 mt-0.5" size={20} />
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email and Phone */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              placeholder="+91 98328 33434"
            />
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
          >
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
            placeholder="Tell us more about your requirements..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Send Message</span>
              <Send size={18} />
            </>
          )}
        </button>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to our privacy policy. We'll never 
          share your information with third parties.
        </p>
      </form>
    </div>
  )
}

export default ContactForm
