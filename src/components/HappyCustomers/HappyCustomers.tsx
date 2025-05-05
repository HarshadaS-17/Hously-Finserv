
// import React from 'react';
// import { Star } from 'lucide-react';

// interface Testimonial {
//   name: string;
//   position: string;
//   quote: string;
//   rating: number;
//   image: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     name: 'Rohit Sharma',
//     position: 'Business Owner',
//     quote: 'Hously Finserv made the entire loan process effortless. They offered me a competitive interest rate for my business loan that helped me expand operations.',
//     rating: 5,
//     image: 'https://randomuser.me/api/portraits/men/32.jpg',
//   },
//   {
//     name: 'Priya Patel',
//     position: 'Teacher',
//     quote: 'I was surprised by how quickly my home loan was approved. The staff was extremely helpful and guided me through each step of the process.',
//     rating: 5,
//     image: 'https://randomuser.me/api/portraits/women/44.jpg',
//   },
//   {
//     name: 'Vikram Mehta',
//     position: 'IT Professional',
//     quote: 'The balance transfer option saved me a significant amount on my existing home loan. Their calculators helped me understand exactly how much I would save.',
//     rating: 4,
//     image: 'https://randomuser.me/api/portraits/men/66.jpg',
//   },
// ];

// const HappyCustomers: React.FC = () => {
//   return (
//     <section className="section-padding bg-gray-50">
//       <div className="container mx-auto">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             <span className="text-gradient">Happy Customers</span>, Real Stories
//           </h2>
//           <p className="text-gray-600">
//             Don't just take our word for it. See what our clients have to say about their experience with Hously Finserv.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div 
//               key={index} 
//               className="glass-card rounded-xl p-6 hover-scale"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <div className="flex items-center mb-4">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full object-cover border-2 border-teal-400"
//                 />
//                 <div className="ml-4">
//                   <h3 className="font-bold">{testimonial.name}</h3>
//                   <p className="text-sm text-gray-600">{testimonial.position}</p>
//                 </div>
//               </div>
              
//               <div className="flex mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className={`h-5 w-5 ${
//                       i < testimonial.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-300'
//                     }`}
//                   />
//                 ))}
//               </div>
              
//               <p className="text-gray-700 italic">"{testimonial.quote}"</p>
//             </div>
//           ))}
//         </div>
        
//         <div className="mt-16 text-center">
//           <div className="flex flex-wrap justify-center items-center gap-8">
//             <div className="flex items-center">
//               <div className="text-4xl font-bold text-teal-600">10k+</div>
//               <div className="ml-2 text-left text-gray-600">Happy<br />Customers</div>
//             </div>
            
//             <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>
            
//             <div className="flex items-center">
//               <div className="text-4xl font-bold text-teal-600">₹2500Cr+</div>
//               <div className="ml-2 text-left text-gray-600">Loan Value<br />Disbursed</div>
//             </div>
            
//             <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>
            
//             <div className="flex items-center">
//               <div className="text-4xl font-bold text-teal-600">4.9/5</div>
//               <div className="ml-2 text-left text-gray-600">Customer<br />Rating</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HappyCustomers;
