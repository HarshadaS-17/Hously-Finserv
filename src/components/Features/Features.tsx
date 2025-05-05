
import React from 'react';
import { 
  Calculator, 
  PiggyBank, 
  BarChart, 
  Clock, 
  Shield, 
  Award
} from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Calculator,
    title: 'Personalized Rates',
    description: 'Get personalized loan interest rates based on your profile and requirements.'
  },
  {
    icon: PiggyBank,
    title: 'Low Interest Rates',
    description: 'Enjoy competitive interest rates starting from 8.5%* p.a. on all our loan products.'
  },
  {
    icon: BarChart,
    title: 'Flexible Repayment',
    description: 'Choose from multiple repayment options that fit your financial situation.'
  },
  {
    icon: Clock,
    title: 'Quick Approval',
    description: 'Get your loan approved in as little as 24 hours with minimal documentation.'
  },
  {
    icon: Shield,
    title: 'Secure Process',
    description: 'Your data is protected with bank-grade security throughout the application process.'
  },
  {
    icon: Award,
    title: 'Expert Advisors',
    description: 'Our financial experts will guide you to the best loan products for your needs.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">Hously Finserv</span>
          </h2>
          <p className="text-gray-600">
            We offer the best financial solutions tailored to your unique needs with transparent terms and excellent service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div 
                key={index} 
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-teal-400 rounded-xl blur-sm opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
