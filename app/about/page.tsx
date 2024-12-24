import { MapPin, Phone, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-0.5">Contact Information</h2>
          <hr className="mb-2 w-60 border-gray-300" />
          <ul className="space-y-2">
            <li className="flex items-start space-y-0.5">
              <MapPin className="mr-2 mt-1 flex-shrink-0" />
              <span className="leading-tight">
                Dixie Park Centre
                <br />
                <br />
                1550 S Gateway Rd Unit #1A, Mississauga, ON L4W 5G6
              </span>
            </li>

            <br />

            <li className="flex items-center space-y-0.5 mt-4 mb-4">
              <Phone className="mr-2 flex-shrink-0" />
              <span>(905) 617-8294</span>
            </li>

            <li className="flex items-center pt-6">
              <Clock className="mr-2 flex-shrink-0" />
              <span>Hours of Operation:</span>
            </li>
            <li className="pl-6 space-y-0.5">
              <p className="leading-tight">Saturday: 11:30 AM – 8:00 PM</p>
              <p className="leading-tight">Sunday: 12:00 PM – 6:00 PM</p>
              <p className="leading-tight">Monday: Closed</p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-0.5">Find Us</h2>
          <hr className="mb-2 w-24 border-gray-300" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2685163705387!2d-79.63290548451422!3d43.63494207912147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3854b9bb79e1%3A0x9f6f866e0c2d8517!2s1550%20S%20Gateway%20Rd%20Unit%20%231A%2C%20Mississauga%2C%20ON%20L4W%205G6%2C%20Canada!5e0!3m2!1sen!2sus!4v1625120281048!5m2!1sen!2sus"
            width="80%"
            height="260"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
