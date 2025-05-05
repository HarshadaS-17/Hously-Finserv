
// import React from 'react';
// import { Check, FileText, Search, CreditCard } from 'lucide-react';

// interface Step {
//   icon: React.ElementType;
//   title: string;
//   description: string;
//   color: string;
// }

// const steps: Step[] = [
//   {
//     icon: Search,
//     title: 'Find Your Loan',
//     description: 'Browse our loan products or use our calculators to find the right loan for your needs.',
//     color: 'bg-blue-500'
//   },
//   {
//     icon: FileText,
//     title: 'Apply Online',
//     description: 'Fill out our simple online application form with your details and required documents.',
//     color: 'bg-teal-500'
//   },
//   {
//     icon: Check,
//     title: 'Get Approved',
//     description: 'Our team reviews your application and provides quick approval with the best terms.',
//     color: 'bg-purple-500'
//   },
//   {
//     icon: CreditCard,
//     title: 'Receive Funds',
//     description: 'Once approved, the loan amount is disbursed directly to your bank account.',
//     color: 'bg-gold-500'
//   }
// ];

// const HowItWorks: React.FC = () => {
//   return (
//     <section className="section-padding">
//       <div className="container mx-auto">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             How It <span className="text-gradient">Works</span>
//           </h2>
//           <p className="text-gray-600">
//             Our streamlined loan process is designed to get you from application to approval in just a few simple steps.
//           </p>
//         </div>
        
//         <div className="relative">
//           {/* Connector line */}
//           <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {steps.map((step, index) => (
//               <div key={index} className="relative z-10">
//                 <div className="flex flex-col items-center">
//                   <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white mb-6`}>
//                     <step.icon className="h-8 w-8" />
//                   </div>
                  
//                   <div className="text-center">
//                     <h3 className="text-xl font-bold mb-3">Step {index + 1}: {step.title}</h3>
//                     <p className="text-gray-600">{step.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="mt-16 glass-card p-8 rounded-2xl">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h3 className="text-2xl font-bold mb-4">Need Help with the Process?</h3>
//               <p className="text-gray-600 mb-6">
//                 Our financial experts are available to guide you through every step of the loan application process. Get personalized assistance to make your loan journey smooth.
//               </p>
//               <div className="flex items-center space-x-4">
//                 <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors">
//                   Schedule a Call
//                 </button>
//                 <button className="px-6 py-3 border border-teal-600 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
//                   Chat with Us
//                 </button>
//               </div>
//             </div>
//             <div className="hidden md:block">
//               <div className="flex justify-center">
//                 <div className="relative w-64 h-64">
//                   <div className="absolute inset-0 bg-teal-200 rounded-full opacity-20 animate-pulse-gentle"></div>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="relative w-52 h-52 bg-gradient-to-br from-teal-600 to-teal-400 rounded-full flex items-center justify-center">
//                       <span className="text-2xl text-white font-bold">24/7</span>
//                       <span className="text-lg text-white absolute bottom-16">Support</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;
