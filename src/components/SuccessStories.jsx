import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const SuccessStories = () => {
  const stories = [
    {
      name: "EcoHarvest",
      founder: "Rajiv & Sunita Kumar",
      description: "An agritech startup that has revolutionized organic farming in the Aravali region, creating sustainable livelihoods for over 500 farmers through their farm-to-table marketplace.",
      image: "https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      achievement: "₹2 Cr annual revenue | 500+ farmer network | 70% increase in farmer income"
    },
    {
      name: "WaterWise",
      founder: "Ananya Desai",
      description: "A cleantech venture developing low-cost water filtration systems using indigenous materials, providing clean drinking water to over 100 villages in water-scarce areas.",
      image: "https://images.pexels.com/photos/1098764/pexels-photo-1098764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      achievement: "100+ villages served | 50,000+ beneficiaries | 7 patents filed"
    },
    {
      name: "Artisanal Heritage",
      founder: "Mohammed Qureshi",
      description: "An e-commerce platform connecting traditional artisans from the Aravali region with global markets, preserving cultural heritage while providing sustainable income opportunities.",
      image: "https://images.pexels.com/photos/2351277/pexels-photo-2351277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      achievement: "200+ artisans onboarded | Exports to 12 countries | 3x income growth for artisans"
    },
    {
      name: "RuralTech Solutions",
      founder: "Karan & Preeti Agarwal",
      description: "A tech venture bringing digital literacy and essential digital services to remote villages through a network of micro-entrepreneurs and mobile technology hubs.",
      image: "https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      achievement: "50 digital hubs | 10,000+ villagers trained | 150+ rural entrepreneurs"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  return (
    <section id="success-stories" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-serif text-primary text-center font-bold mb-4">
            Success Stories
          </h2>
          <div className="h-1 w-20 bg-primary-light mx-auto mb-8"></div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
            Discover how entrepreneurs supported by Aravali Foundation are building innovative businesses
            that create economic opportunities and address local challenges.
          </p>
        </AnimatedSection>

        <div className="relative">
          <button 
            onClick={prevStory}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors duration-300 z-10"
            aria-label="Previous story"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="overflow-hidden relative mx-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {stories.map((story, index) => (
                <div 
                  key={story.name}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-2/5">
                      <img 
                        src={story.image} 
                        alt={story.name} 
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6 md:p-8">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary bg-opacity-10 rounded-full">
                          Success Story #{index + 1}
                        </span>
                      </div>
                      <h3 className="text-2xl font-serif text-primary font-bold mb-1">{story.name}</h3>
                      <p className="text-primary-light font-medium mb-4">Founded by {story.founder}</p>
                      <p className="text-gray-600 mb-6">{story.description}</p>
                      <div className="bg-background p-4 rounded-md">
                        <p className="text-sm font-medium text-primary">Key Achievements</p>
                        <p className="text-gray-600">{story.achievement}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={nextStory}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors duration-300 z-10"
            aria-label="Next story"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                currentIndex === index ? 'bg-primary' : 'bg-gray-300'
              } transition-colors duration-300`}
              aria-label={`Go to story ${index + 1}`}
            />
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-16 text-center">
            <a 
              href="#contact" 
              className="inline-block bg-primary hover:bg-primary-light text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 shadow-md"
            >
              Share Your Story
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SuccessStories;