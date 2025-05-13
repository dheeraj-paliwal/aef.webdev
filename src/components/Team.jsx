import { Linkedin, Mail } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Team = () => {
  const teamMembers = [
    {
      name: "Mr. Dilip Bharatee",
      role: "Chairman",
      bio: "Alumni of CTAE (1978-84) and IIM Mumbai. Pioneer in software industry with over 35 years of experience. Co-founded EComScience Consulting and actively supports social initiatives in education and sanitation.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      linkedin: "https://www.linkedin.com/in/dilipbharatee"
    },
    {
      name: "Ms. Avni Chandaliya",
      role: "CEO",
      bio: "CTAE alumnus with a decade of multi-domain experience. Led innovation at Reliance Retail, developing deep understanding of Indian mass consumer needs. Winner of the Deming Award for quality in services.",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
      linkedin: "https://www.linkedin.com/in/avnichandaliya"
    },
    {
      name: "Ms. Archana Bharatee",
      role: "Advisor",
      bio: "Technology leader with 30+ years experience. Co-founder of SenseiAlgo specializing in AI/ML solutions. IIM Mumbai NITIE alumna focused on deploying cutting-edge technologies for social impact.",
      image: "https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg",
      linkedin: "https://www.linkedin.com/in/archanabharatee"
    },
    {
      name: "Mr. Purvabh Surana",
      role: "Advisor",
      bio: "Technology enthusiast with BTech from Manipal and MBA from IIFT. Expert in AI-driven solutions and business transformation, bridging technology and business needs.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      linkedin: "https://www.linkedin.com/in/purvabhsurana"
    },
    {
      name: "Dr. Shailendra Mohan Mathur",
      role: "Advisor",
      bio: "CTAE alumnus (1984) with PhD in FM&PE. Established TBIC and TREMAP at CTAE. Expert in innovation ecosystem development and technology commercialization.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      linkedin: "https://www.linkedin.com/in/shailendramohanmathur"
    },
    {
      name: "Mr. Hemendra Mathur",
      role: "Advisor", 
      bio: "Venture Partner at Bharat Innovation Fund with 28 years experience in VC, PE, and investment banking. Expert in agribusiness, clean tech, and digital technology investments.",
      image: "https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg",
      linkedin: "https://www.linkedin.com/in/hemendramathur"
    }
  ];

  return (
    <section id="team" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary text-center font-bold mb-4">
            Our Leadership Team
          </h2>
          <div className="h-1 w-20 bg-primary-light mx-auto mb-8"></div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-sm sm:text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            Meet our experienced team of industry leaders, entrepreneurs, and innovators dedicated to fostering entrepreneurship and innovation in the Aravali region.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection 
              key={member.name} 
              delay={0.2 + index * 0.1} 
              className="h-full"
            >
              <div className="bg-background rounded-lg overflow-hidden shadow-md h-full group">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-3">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <button className="p-2 bg-white rounded-full text-primary hover:bg-primary-light hover:text-white transition-colors duration-300">
                          <Linkedin size={20} />
                        </button>
                      </a>
                      <button className="p-2 bg-white rounded-full text-primary hover:bg-primary-light hover:text-white transition-colors duration-300">
                        <Mail size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-serif text-primary font-semibold">{member.name}</h3>
                  <p className="text-primary-light font-medium mb-2 sm:mb-3">{member.role}</p>
                  <p className="text-sm sm:text-base text-gray-600">{member.bio}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;