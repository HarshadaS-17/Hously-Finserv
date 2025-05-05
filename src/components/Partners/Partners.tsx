
// import React from 'react';

// const partnerLogos = [
//   {
//     name: 'HDFC Bank',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg',
//   },
//   {
//     name: 'ICICI Bank',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg',
//   },
//   {
//     name: 'State Bank of India',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg',
//   },
//   {
//     name: 'Axis Bank',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg',
//   },
//   {
//     name: 'Kotak Mahindra Bank',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Kotak_Mahindra_Bank_logo.svg',
//   },
//   {
//     name: 'Punjab National Bank',
//     logo: 'https://upload.wikimedia.org/wikipedia/en/0/09/Punjab_National_Bank_logo.svg',
//   },
//   {
//     name: 'Bank of Baroda',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Bank_of_Baroda_logo.svg',
//   },
//   {
//     name: 'Union Bank of India',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Union_Bank_of_India_Logo.svg',
//   },
// ];

// const Partners: React.FC = () => {
//   return (
//     <section className="section-padding">
//       <div className="container mx-auto">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Our <span className="text-gradient">Partners</span>
//           </h2>
//           <p className="text-gray-600">
//             We have partnered with India's leading banks and financial institutions to bring you the best loan products and interest rates.
//           </p>
//         </div>
        
//         <div className="partner-logos py-8">
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
//             {partnerLogos.map((partner, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center transition-transform hover:shadow-md hover:-translate-y-1 duration-300"
//               >
//                 <img
//                   src={partner.logo}
//                   alt={`${partner.name} logo`}
//                   className="max-h-12 max-w-full object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="mt-16 bg-gradient-to-r from-teal-700 to-teal-500 rounded-2xl overflow-hidden shadow-xl">
//           <div className="grid grid-cols-1 md:grid-cols-2">
//             <div className="p-8 md:p-12">
//               <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Partner With Us</h3>
//               <p className="text-white/80 mb-6">
//                 Join our network of financial partners and help customers find the best financial solutions for their needs while growing your business.
//               </p>
//               <ul className="space-y-3 mb-8">
//                 <li className="flex items-center text-white">
//                   <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3">
//                     <span className="text-white text-xs">✓</span>
//                   </div>
//                   <span>Expanded customer reach</span>
//                 </li>
//                 <li className="flex items-center text-white">
//                   <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3">
//                     <span className="text-white text-xs">✓</span>
//                   </div>
//                   <span>Higher lead conversion rates</span>
//                 </li>
//                 <li className="flex items-center text-white">
//                   <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3">
//                     <span className="text-white text-xs">✓</span>
//                   </div>
//                   <span>Co-branded marketing opportunities</span>
//                 </li>
//               </ul>
//               <button className="px-6 py-3 bg-white text-teal-600 rounded-lg hover:bg-gray-100 transition-colors">
//                 Become a Partner
//               </button>
//             </div>
            
//             <div className="hidden md:block relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-transparent"></div>
//               <img
//                 src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
//                 alt="Partnership"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;
