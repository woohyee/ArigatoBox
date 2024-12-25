'use client';

import { MapPin, Phone, Clock } from 'lucide-react';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container mx-auto px-2 py-4 pt-14 sm:pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-0.5">
              Contact Information
            </h2>
            <hr className="mb-1 sm:mb-2 w-60 border-gray-300 sm:block hidden" />
            <ul className="space-y-1 sm:space-y-2">
              <li className="flex items-start space-y-0.5">
                <MapPin className="mr-2 mt-1 flex-shrink-0" />
                <span className="leading-tight text-sm sm:text-base">
                  <span className="sm:hidden">
                    Dixie Park Centre
                    <br />
                    1550 S Gateway Rd Unit #1A, Mississauga, ON L4W 5G6
                  </span>
                  <span className="hidden sm:inline">
                    Dixie Park Centre
                    <br />
                    1550 S Gateway Rd Unit #1A, Mississauga, ON L4W 5G6
                  </span>
                </span>
              </li>

              <li className="flex items-center space-y-0.5 mt-1 sm:mt-16 mb-2 sm:mb-4">
                <Phone className="mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">(905) 617-8294</span>
              </li>

              <li className="flex items-center pt-2 sm:pt-6">
                <Clock className="mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">Business Hours:</span>
              </li>
              <li className="pl-6 space-y-0.5">
                <p className="leading-tight flex items-center text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                  Monday: Closed
                </p>
                <p className="leading-tight flex items-start text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 mt-1.5"></span>
                  <span>
                    <span className="sm:hidden">
                      Tuesday to Saturday:
                      <br />
                      <span className="ml-0">11:30 AM - 8:00 PM</span>
                    </span>
                    <span className="hidden sm:inline">
                      Tuesday to Saturday: 11:30 AM - 8:00 PM
                    </span>
                  </span>
                </p>
                <p className="leading-tight flex items-center text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                  Sunday: 11:30 AM - 7:00 PM
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-0.5">
              Find Us
            </h2>
            <hr className="mb-1 sm:mb-2 w-24 border-gray-300 sm:block hidden" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2685163705387!2d-79.63290548451422!3d43.63494207912147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3854b9bb79e1%3A0x9f6f866e0c2d8517!2s1550%20S%20Gateway%20Rd%20Unit%20%231A%2C%20Mississauga%2C%20ON%20L4W%205G6%2C%20Canada!5e0!3m2!1sen!2sus!4v1625120281048!5m2!1sen!2sus"
              className="w-full h-[205px] sm:h-[285px] border-0"
              allowFullScreen
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
