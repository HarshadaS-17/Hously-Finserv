
// import React from 'react';
// import { ArrowRight, Tag, Percent } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';

// interface TrendingOffer {
//   title: string;
//   description: string;
//   benefits: string[];
//   tag: string;
//   icon: 'tag' | 'percent';
//   cta: string;
// }

// const trendingOffers: TrendingOffer[] = [
//   {
//     title: 'Special Home Loan Offer',
//     description: 'Interest rates starting at just 8.5%* p.a. for salaried individuals with minimal processing fees.',
//     benefits: [
//       'Rate of Interest starting at 8.5%* p.a.',
//       'Processing fee of just 0.25%*',
//       'Zero pre-payment charges',
//       'Loan up to ₹10 Crore'
//     ],
//     tag: 'Limited Time',
//     icon: 'percent',
//     cta: 'Apply Now'
//   },
//   {
//     title: 'Property Loan Cashback',
//     description: 'Get up to ₹25,000 cashback on property loans above ₹50 Lakhs with doorstep document collection.',
//     benefits: [
//       'Cashback of up to ₹25,000',
//       'Doorstep document collection',
//       'Approval within 3 working days',
//       'Flexible repayment options'
//     ],
//     tag: 'Cashback',
//     icon: 'tag',
//     cta: 'Claim Offer'
//   },
//   {
//     title: 'Balance Transfer + Top-up',
//     description: 'Transfer your existing home loan and get additional top-up loan at the same low interest rate.',
//     benefits: [
//       'Reduce your interest by up to 2%',
//       'Top-up loan at same interest rate',
//       'No processing fee on balance transfer',
//       'Zero hidden charges'
//     ],
//     tag: 'Save More',
//     icon: 'percent',
//     cta: 'Calculate Savings'
//   }
// ];

// const TrendingOffers: React.FC = () => {
//   return (
//     <section className="section-padding bg-gray-50">
//       <div className="container mx-auto">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Trending <span className="text-gradient">Loans & Offers</span>
//           </h2>
//           <p className="text-gray-600">
//             Check out our latest offers and trending loan products designed to provide you maximum value.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {trendingOffers.map((offer, index) => (
//             <Card key={index} className="overflow-hidden hover-scale">
//               <div className="h-1.5 gradient-primary"></div>
//               <div className="absolute top-4 right-4">
//                 <span className="inline-flex items-center py-1 px-3 rounded-full bg-white shadow-md text-sm font-medium text-teal-600">
//                   {offer.icon === 'tag' ? (
//                     <Tag className="h-3.5 w-3.5 mr-1 text-teal-500" />
//                   ) : (
//                     <Percent className="h-3.5 w-3.5 mr-1 text-teal-500" />
//                   )}
//                   {offer.tag}
//                 </span>
//               </div>
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold mb-3">{offer.title}</h3>
//                 <p className="text-gray-600 mb-6">{offer.description}</p>
                
//                 <ul className="space-y-2 mb-8">
//                   {offer.benefits.map((benefit, idx) => (
//                     <li key={idx} className="flex items-start">
//                       <ArrowRight className="h-4 w-4 text-teal-500 mt-1 mr-2 flex-shrink-0" />
//                       <span className="text-sm">{benefit}</span>
//                     </li>
//                   ))}
//                 </ul>
                
//                 <Button className="w-full gradient-primary">{offer.cta}</Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
        
//         <div className="mt-12 text-center">
//           <p className="text-gray-600 mb-4">Looking for more offers? Explore our complete collection of loan products.</p>
//           <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
//             View All Offers
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingOffers;
