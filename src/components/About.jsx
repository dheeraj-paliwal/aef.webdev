import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary text-center font-bold mb-4">
            About Aravali Foundation
          </h2>
          <div className="h-1 w-20 bg-primary-light mx-auto mb-8 sm:mb-12"></div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
          <AnimatedSection delay={0.2} animation="slideUp">
            <div className="h-full bg-background rounded-lg p-6 sm:p-8 shadow-md">
              <h3 className="text-lg sm:text-xl font-serif text-primary font-semibold mb-3">Our Story</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                With 61 years of legacy, the College of Technology and Engineering has expanded from Agriculture to many other domains offering Engineering and Management courses. The Aravali Entrepreneurship Foundation (AEF) aims to be a leading center for innovation, entrepreneurship, and academic-industry collaboration.
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                Led by entrepreneurs and alumni, we provide mentorship, networking, and initial funding to foster startup success, focusing on AI-based innovation in agriculture, sustainable living, and emerging technologies.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} animation="slideUp">
            <div className="h-full bg-background rounded-lg p-6 sm:p-8 shadow-md">
              <h3 className="text-lg sm:text-xl font-serif text-primary font-semibold mb-3">Our Approach</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                We focus on AI-driven solutions in agriculture, sustainable living, disability technology, biotechnology, and other domains including regional industry like Mining. Our approach combines academic excellence with practical industry exposure.
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                Through structured programs, we provide mentorship, industry connections, and financial support to bridge the gap between innovation and market success.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} animation="slideUp">
            <div className="h-full bg-background rounded-lg p-6 sm:p-8 shadow-md">
              <h3 className="text-lg sm:text-xl font-serif text-primary font-semibold mb-3">Our Impact</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-primary-light">200+</p>
                  <p className="text-xs sm:text-sm text-gray-600">Expected Startups</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-primary-light">1000+</p>
                  <p className="text-xs sm:text-sm text-gray-600">Expected Jobs</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-primary-light">20+</p>
                  <p className="text-xs sm:text-sm text-gray-600">Districts Coverage</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-primary-light">50Cr+</p>
                  <p className="text-xs sm:text-sm text-gray-600">Expected Funding</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5} animation="slideUp">
            <div className="h-full bg-background rounded-lg p-6 sm:p-8 shadow-md">
              <h3 className="text-lg sm:text-xl font-serif text-primary font-semibold mb-3">Our Vision</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                We envision becoming a transformative initiative aimed at fostering AI-driven entrepreneurship, sustainability, social impact and regional economic development in the Aravali region.
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                By 2030, we aim to support 1,000 entrepreneurs, generate 5,000 jobs, and establish the region as a hub for sustainable entrepreneurship and innovation in India.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;