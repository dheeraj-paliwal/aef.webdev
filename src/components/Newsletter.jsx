import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-bold mb-4">
              Stay Connected
            </h2>
            <p className="text-white text-opacity-90 mb-8 text-lg">
              Subscribe to our newsletter for updates on programs, events, success stories, and opportunities.
            </p>
            
            {subscribed ? (
              <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-6 inline-block">
                <p className="text-white">Thank you for subscribing! We'll keep you updated with our latest news.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-grow px-4 py-3 rounded-md focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-white text-primary font-medium rounded-md transition-colors duration-300 hover:bg-gray-100 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
              </form>
            )}
            
            <p className="text-white text-opacity-70 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Newsletter;