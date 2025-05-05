
// import React, { useState, useEffect, useRef } from 'react';
// import { Menu, X, PanelLeft } from 'lucide-react';
// import Logo from '../Logo';
// import NavbarMenu from './NavbarMenu';
// import MobileMenu from './MobileMenu';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

// const menuItems = [
//   {
//     title: 'Home',
//     url: '/'
//   },
//   {
//     title: 'About Us',
//     url: '/about'
//   },
//   {
//     title: 'Loan Services',
//     url: '/services',
//     submenu: [
//       {
//         title: 'Home Loan',
//         url: '/services/home-loan'
//       },
//       {
//         title: 'Property Loan',
//         url: '/services/property-loan'
//       },
//       {
//         title: 'Balance Transfer',
//         url: '/services/balance-transfer'
//       },
//       {
//         title: 'Business Loan',
//         url: '/services/business-loan'
//       }
//     ]
//   },
//   {
//     title: 'Loan Calculators',
//     url: '/calculators',
//     submenu: [
//       {
//         title: 'EMI Calculator',
//         url: '/calculators/emi'
//       },
//       {
//         title: 'Eligibility Calculator',
//         url: '/calculators/eligibility'
//       },
//       {
//         title: 'Foreclose Calculator',
//         url: '/calculators/foreclose'
//       },
//       {
//         title: 'Balance Transfer Calculator',
//         url: '/calculators/balance-transfer'
//       },
//       {
//         title: 'Pre-Payment Calculator',
//         url: '/calculators/pre-payment'
//       }
//     ]
//   },
//   {
//     title: 'Offers & Cashback',
//     url: '/offers'
//   },
//   {
//     title: 'Contact',
//     url: '/contact'
//   }
// ];

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const sidebarRef = useRef<HTMLDivElement>(null);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
//   const closeSidebar = () => setIsSidebarOpen(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isMenuOpen]);

//   // Handle clicks outside the sidebar to close it
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
//         setIsSidebarOpen(false);
//       }
//     };

//     if (isSidebarOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isSidebarOpen]);

//   return (
//     <>
//       <header 
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
//         }`}
//       >
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <Logo />
          
//           <div className="flex items-center gap-4">
//             <NavbarMenu items={menuItems} />
            
//             <Button 
//               className="hidden lg:flex gradient-primary"
//               size="sm"
//             >
//               Apply Now
//             </Button>
            
//             <Button 
//               variant="ghost" 
//               size="icon" 
//               onClick={toggleSidebar} 
//               className="hidden lg:flex"
//               aria-label="Toggle sidebar"
//             >
//               <PanelLeft className="h-5 w-5" />
//             </Button>
            
//             <button 
//               className="lg:hidden text-gray-700 focus:outline-none"
//               onClick={toggleMenu}
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Desktop Sidebar */}
//       <aside 
//         ref={sidebarRef}
//         className={`fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ${
//           isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
//         } z-40`}
//       >
//         <div className="py-6 px-4 flex justify-between items-center">
//           <Logo />
//           <Button 
//             variant="ghost" 
//             size="icon" 
//             onClick={closeSidebar}
//           >
//             <X className="h-5 w-5" />
//           </Button>
//         </div>
//         <nav className="px-4 py-4">
//           <ul className="space-y-1">
//             {menuItems.map((item, index) => (
//               <li key={index} className="mb-2">
//                 <a 
//                   href={item.url} 
//                   className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg"
//                   onClick={closeSidebar}
//                 >
//                   {item.title}
//                 </a>
//                 {item.submenu && (
//                   <ul className="pl-6 mt-1 space-y-1">
//                     {item.submenu.map((subItem, subIndex) => (
//                       <li key={subIndex}>
//                         <a 
//                           href={subItem.url} 
//                           className="block px-4 py-1.5 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-600 rounded-lg"
//                           onClick={closeSidebar}
//                         >
//                           {subItem.title}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </aside>

//       {/* Mobile Menu using Drawer */}
//       <MobileMenu 
//         isOpen={isMenuOpen} 
//         items={menuItems} 
//         toggleMenu={toggleMenu} 
//       />
      
//       {/* Overlay for both mobile menu and sidebar */}
//       {(isMenuOpen || isSidebarOpen) && (
//         <div 
//           className="fixed inset-0 bg-black/30 z-30"
//           onClick={() => {
//             if (isMenuOpen) toggleMenu();
//             if (isSidebarOpen) closeSidebar();
//           }}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;
