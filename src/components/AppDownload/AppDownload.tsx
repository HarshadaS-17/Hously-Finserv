
import React from 'react';
import { Button } from '@/components/ui/button';
import { Apple, Store } from 'lucide-react';

const AppDownload: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Available Across <span className="text-gradient">India</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Hously Finserv is now available in major cities across India, with our headquarters in Pune. 
              Download our mobile app to access all our financial services on the go.
            </p>
            
            <div className="mb-8">
              <h3 className="font-bold mb-4">Why download our app?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full gradient-primary text-white flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Track your loan application status in real-time</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full gradient-primary text-white flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Make payments and manage your loan account</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full gradient-primary text-white flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Access all loan calculators and apply directly</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full gradient-primary text-white flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>24/7 customer support through the app</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="flex items-center gap-2 bg-black text-white hover:bg-gray-900">
                <Apple className="h-5 w-5" />
                <div className="text-left">
                  <p className="text-xs">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </Button>
              
              <Button className="flex items-center gap-2 bg-black text-white hover:bg-gray-900">
                <Store className="h-5 w-5" />
                <div className="text-left">
                  <p className="text-xs">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full h-[400px] lg:h-[500px]">
              {/* India Map SVG with Pune highlighted */}
              <svg
                viewBox="0 0 640 640"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M422 228L440 224L461 236L470 250L481 247L497 252L521 242L532 225L539 232L546 231L550 242L544 251L551 258L549 266L556 272L563 271L575 280L584 278L593 270L606 274L614 268L613 282L619 290L613 301L623 302L628 316L624 328L629 336L631 351L626 355L620 369L632 388L643 390L654 406L661 404L668 417L670 433L663 442L666 455L659 459L654 472L661 480L657 487L639 502L638 518L625 528L619 546L611 551L610 569L599 574L589 585L572 589L553 589L540 595L532 603L518 603L504 593L492 590L485 581L473 581L467 574L453 574L447 583L437 586L431 598L420 603L406 597L398 602L387 592L381 593L374 583L377 569L372 556L363 547L358 534L344 522L347 513L343 502L332 490L309 480L299 465L289 460L287 444L279 436L274 422L279 408L273 399L269 378L258 364L250 364L247 348L257 329L253 311L242 307L246 292L258 290L266 281L264 270L253 259L255 245L249 234L249 225L256 214L267 210L276 213L294 206L304 195L313 195L327 183L336 167L344 169L350 183L359 184L370 194L372 204L383 212L390 212L404 222L417 222L422 228Z"
                  fill="#E6F7FF"
                  stroke="#319795"
                  strokeWidth="3"
                />
                
                {/* Pune highlighting */}
                <circle
                  cx="392"
                  cy="385"
                  r="15"
                  fill="#319795"
                  stroke="white"
                  strokeWidth="2"
                  className="animate-pulse-gentle"
                />
                
                {/* Decorative circles for other cities */}
                <circle cx="286" cy="306" r="5" fill="#D1D5DB" />
                <circle cx="485" cy="260" r="5" fill="#D1D5DB" />
                <circle cx="440" cy="224" r="5" fill="#D1D5DB" />
                <circle cx="574" cy="466" r="5" fill="#D1D5DB" />
                <circle cx="310" cy="450" r="5" fill="#D1D5DB" />
              </svg>
              
              {/* App mockup */}
              <div className="absolute bottom-0 right-0 transform translate-x-1/4">
                <div className="relative w-64 h-[400px]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-[32px] blur opacity-50"></div>
                  <div className="relative bg-black rounded-[30px] w-full h-full p-3">
                    <div className="bg-white rounded-[24px] w-full h-full overflow-hidden">
                      {/* App screenshot mockup */}
                      <div className="bg-gradient-to-b from-teal-100 to-gray-100 w-full h-full flex flex-col">
                        <div className="bg-teal-600 text-white py-4 px-6">
                          <div className="text-xs pb-1">Hously Finserv</div>
                          <div className="text-sm font-semibold">Loan Dashboard</div>
                        </div>
                        <div className="p-4">
                          <div className="mb-4 bg-white rounded-lg p-3 shadow-sm">
                            <div className="text-xs text-gray-500">Loan Status</div>
                            <div className="text-sm font-bold">Approved</div>
                            <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                              <div className="w-3/4 h-2 bg-teal-500 rounded-full"></div>
                            </div>
                          </div>
                          <div className="mb-4 bg-white rounded-lg p-3 shadow-sm">
                            <div className="text-xs text-gray-500">Next Payment</div>
                            <div className="text-sm font-bold">₹24,500</div>
                            <div className="text-xs">Due on 15 June 2023</div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-white rounded-lg p-3 shadow-sm">
                              <div className="text-xs text-gray-500">EMI</div>
                              <div className="text-sm font-bold">₹24,500</div>
                            </div>
                            <div className="bg-white rounded-lg p-3 shadow-sm">
                              <div className="text-xs text-gray-500">Tenure</div>
                              <div className="text-sm font-bold">18 Years</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
