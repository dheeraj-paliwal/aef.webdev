import { Leaf, Target, Users, BarChart3 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Mission = () => {
  const values = [
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: "Sustainability",
      description: "Promoting business models that balance profit with environmental stewardship and social responsibility."
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description: "Fostering creative problem-solving and out-of-the-box thinking to address real-world challenges."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Inclusivity",
      description: "Ensuring entrepreneurship opportunities are accessible to all, regardless of background, gender, or social status."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Impact",
      description: "Measuring success beyond financial returns to include social, economic, and environmental outcomes."
    }
  ];

  return (
    <section id="mission" className="py-20 bg-background bg-opacity-70 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-serif text-primary text-center font-bold mb-4">
            Our Mission & Values
          </h2>
          <div className="h-1 w-20 bg-primary-light mx-auto mb-8"></div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
            We are committed to fostering entrepreneurial spirit, driving innovation, and creating sustainable economic opportunities across the Aravali region, with a focus on transforming local challenges into business solutions.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={0.2 + index * 0.1} animation="leafGrow">
              <div className="bg-white rounded-lg p-6 shadow-md transition-transform duration-300 hover:transform hover:scale-105 h-full flex flex-col">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-serif text-primary text-center font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-center flex-grow">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6}>
          <div className="mt-16 bg-primary rounded-lg p-8 text-white">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-center">Strategic Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-white border-opacity-30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Capacity Building</h4>
                <p className="text-sm opacity-90">Providing entrepreneurs with the skills, knowledge, and resources needed to launch and scale successful businesses.</p>
              </div>
              <div className="border border-white border-opacity-30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Ecosystem Development</h4>
                <p className="text-sm opacity-90">Building a supportive network of mentors, investors, partners, and service providers to help entrepreneurs thrive.</p>
              </div>
              <div className="border border-white border-opacity-30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Policy Advocacy</h4>
                <p className="text-sm opacity-90">Working with stakeholders to create an enabling policy environment for entrepreneurship and innovation in the region.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Mission;