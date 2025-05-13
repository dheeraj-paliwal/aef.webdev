import { useState } from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/yourFormId', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitMessage('Thank you for your message. We will get back to you soon!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-serif text-primary text-center font-bold mb-4">
            Contact Us
          </h2>
          <div className="h-1 w-20 bg-primary-light mx-auto mb-8"></div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
            Whether you're an aspiring entrepreneur, potential partner, or donor, we'd love to hear from you.
            Get in touch with us to learn more about our programs or how you can get involved.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <AnimatedSection delay={0.3} className="lg:col-span-2">
            <div className="bg-background rounded-lg p-8 shadow-md h-full">
              <h3 className="text-2xl font-serif text-primary font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <MapPin className="h-6 w-6 text-primary-light" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Our Location</h4>
                    <p className="text-gray-600">
                     Aravali Entrepreneurship Foundation,<br />
                      Udaipur,<br />
                      Rajasthan - 313001 , India
                    </p>
                  </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Phone className="h-6 w-6 text-primary-light" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">aravali.entrepreneurship@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Mail className="h-6 w-6 text-primary-light" />
                 
                 </div>
                  

              </div>

              <h3 className="text-xl font-serif text-primary font-semibold mt-10 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-3 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="lg:col-span-3">
            <div className="bg-background rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-serif text-primary font-semibold mb-6">Send Us a Message</h3>
              
              {submitMessage ? (
                <div className="bg-primary-lighter bg-opacity-20 text-primary-light p-4 rounded-md mb-6">
                  {submitMessage}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-primary hover:bg-primary-light text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 shadow-md w-full md:w-auto ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;