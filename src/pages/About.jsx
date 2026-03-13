import React from 'react'
import { Link } from 'react-router-dom'
import {
  Award,
  Target,
  Heart,
  Users,
  TrendingUp,
  Shield,
  CheckCircle,
} from 'lucide-react'

/**
 * About Page Component
 * Company introduction, mission, vision, and why choose us
 */
const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">About Rudra Tax & Business Solution</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your trusted partner for professional tax and business consulting services 
            in Durgapur and beyond.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md text-primary mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Rudra Tax & Business Solution is a premier tax consulting and business 
                services firm based in Durgapur, West Bengal. Established with a vision 
                to simplify complex financial and regulatory processes, we have been 
                serving individuals and businesses for over 10 years.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our team of certified professionals brings extensive expertise in taxation, 
                accounting, GST compliance, and business registration. We understand the 
                unique challenges faced by businesses in today's dynamic regulatory 
                environment and provide tailored solutions to meet your specific needs.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With a 5.0 Google rating and a growing base of satisfied clients, we have 
                established ourselves as a trusted name in the industry. Our commitment to 
                excellence, transparency, and client satisfaction sets us apart.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <p className="text-gray-600 text-sm">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-gray-600 text-sm">Clients Served</p>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="space-y-4">
              <div className="card bg-gradient-to-br from-primary to-primary-light text-white">
                <Award className="mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">Certified Excellence</h3>
                <p className="text-gray-200">
                  Our team consists of certified tax professionals with proven expertise 
                  in handling complex tax and business matters.
                </p>
              </div>
              <div className="card bg-gradient-to-br from-secondary to-secondary-light">
                <Users className="mb-4 text-primary" size={40} />
                <h3 className="text-xl font-bold text-primary mb-2">Client-Focused</h3>
                <p className="text-primary-dark">
                  We prioritize our clients' needs and work closely with them to achieve 
                  their financial and business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="card">
              <Target className="text-primary mb-4" size={48} />
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide comprehensive, accurate, and timely tax and business solutions 
                that help our clients achieve financial success while maintaining full 
                compliance with regulatory requirements. We strive to build long-term 
                relationships based on trust, integrity, and exceptional service.
              </p>
            </div>

            {/* Vision */}
            <div className="card">
              <Heart className="text-secondary mb-4" size={48} />
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and preferred tax and business consulting firm in 
                Eastern India, known for our expertise, innovation, and commitment to 
                client success. We envision empowering businesses and individuals with 
                the knowledge and tools they need to thrive financially.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md text-primary mb-4">
              Why Choose Rudra Tax & Business Solution?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer more than just tax and business services – we offer peace of mind 
              and a partnership for your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Team',
                description:
                  'Our certified professionals have years of experience in taxation, accounting, and business consulting.',
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description:
                  'Track record of helping clients save money through strategic tax planning and efficient compliance.',
              },
              {
                icon: Shield,
                title: 'Full Compliance',
                description:
                  'We ensure all your tax and business registrations are compliant with the latest regulations.',
              },
              {
                icon: CheckCircle,
                title: 'Transparent Pricing',
                description:
                  'No hidden fees. We provide clear, upfront pricing for all our services.',
              },
              {
                icon: Heart,
                title: 'Personalized Service',
                description:
                  'Every client receives individualized attention and tailored solutions for their unique needs.',
              },
              {
                icon: Award,
                title: '5-Star Rated',
                description:
                  'Highly rated by clients on Google for our professionalism and quality of service.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="card text-center">
                  <Icon className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
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
            Ready to Experience Professional Tax & Business Services?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let us handle your tax and business needs so you can focus on what you do best. 
            Get in touch today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Contact Us Today
            </Link>
            <Link
              to="/services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-white/30"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
