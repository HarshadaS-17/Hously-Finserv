
// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// interface HeroSlide {
//   title: string;
//   description: string;
//   image: string;
//   backgroundClass: string;
// }

// const slides: HeroSlide[] = [
//   {
//     title: 'Home Loan Solutions',
//     description: 'Get the best home loan interest rates starting from 8.5%* p.a. with flexible repayment options',
//     image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
//     backgroundClass: 'bg-gradient-to-r from-teal-600/90 to-teal-400/90',
//   },
//   {
//     title: 'Property Loan',
//     description: 'Unlock the value of your property with loans up to ₹10 Cr with minimal documentation',
//     image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80',
//     backgroundClass: 'bg-gradient-to-r from-blue-600/90 to-blue-400/90',
//   },
//   {
//     title: 'Balance Transfer',
//     description: 'Transfer your existing loan and save up to ₹8 Lakhs* with lower interest rates',
//     image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
//     backgroundClass: 'bg-gradient-to-r from-purple-600/90 to-purple-400/90',
//   },
//   {
//     title: 'Business Loan',
//     description: 'Grow your business with collateral-free loans up to ₹50 Lakhs with quick approval',
//     image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
//     backgroundClass: 'bg-gradient-to-r from-amber-600/90 to-amber-400/90',
//   },
// ];

// const Hero: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   const goToNextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const goToPrevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(goToNextSlide, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative pt-20 min-h-screen flex items-center">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentSlide ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <div className="absolute inset-0">
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//             />
//             <div className={`absolute inset-0 ${slide.backgroundClass}`}></div>
//           </div>
//         </div>
//       ))}
      
//       <div className="container mx-auto px-4 z-10 py-16">
//         <div className="flex flex-col-reverse lg:flex-row items-center">
//           <div className="w-full lg:w-1/2 text-white lg:pr-10 mt-10 lg:mt-0">
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 className={`transition-all duration-700 transform ${
//                   index === currentSlide 
//                     ? 'translate-x-0 opacity-100' 
//                     : 'translate-x-20 opacity-0 absolute'
//                 }`}
//               >
//                 {index === currentSlide && (
//                   <>
//                     <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm inline-block mb-4">
//                       Trusted by 10,000+ clients
//                     </span>
//                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//                       {slide.title}
//                     </h1>
//                     <p className="text-lg md:text-xl mb-8 max-w-lg">
//                       {slide.description}
//                     </p>
//                     <div className="flex flex-wrap gap-4">
//                       <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50 hover:text-teal-700">
//                         Apply Now
//                       </Button>
//                       <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
//                         Calculate EMI
//                       </Button>
//                     </div>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
          
//           <div className="w-full lg:w-1/2 relative flex justify-center">
//             <div className="relative w-full max-w-md glass-card rounded-xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
//               <div className="absolute top-0 left-0 right-0 h-1 gradient-secondary"></div>
//               <div className="p-8">
//                 <h3 className="text-lg font-bold mb-4">Quick Loan Application</h3>
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="text-sm text-gray-600 block mb-1">Full Name</label>
//                       <input
//                         type="text"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
//                         placeholder="John Doe"
//                       />
//                     </div>
//                     <div>
//                       <label className="text-sm text-gray-600 block mb-1">Phone Number</label>
//                       <input
//                         type="tel"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
//                         placeholder="+91 XXXXX XXXXX"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="text-sm text-gray-600 block mb-1">Loan Type</label>
//                     <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500">
//                       <option value="">Select loan type</option>
//                       <option>Home Loan</option>
//                       <option>Property Loan</option>
//                       <option>Balance Transfer</option>
//                       <option>Business Loan</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="text-sm text-gray-600 block mb-1">Loan Amount</label>
//                     <input
//                       type="text"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
//                       placeholder="₹ 25,00,000"
//                     />
//                   </div>
//                   <Button className="w-full gradient-primary">Submit Application</Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Carousel Navigation */}
//         <div className="flex justify-center mt-8">
//           <div className="flex items-center space-x-2">
//             <button
//               onClick={goToPrevSlide}
//               className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition"
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </button>
//             <div className="flex space-x-2">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
//                     index === currentSlide 
//                       ? 'bg-white w-8' 
//                       : 'bg-white/50 hover:bg-white/80'
//                   }`}
//                 ></button>
//               ))}
//             </div>
//             <button
//               onClick={goToNextSlide}
//               className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition"
//             >
//               <ChevronRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
