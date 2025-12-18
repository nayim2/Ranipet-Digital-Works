import React from "react";
import './Clients.css'
import { assets } from "../../assets/assets";

const clients = [
  { id: 3, image: assets.logo4 },
  { id: 4, image: assets.logo5 },
  { id: 5, image: assets.logo6 },
  { id: 6, image: assets.logo7 },
  { id: 7, image: assets.logo8 },
  { id: 8, image: assets.logo9 },
];

const Clients = () => {
  return (
    <section className="py-10 overflow-hidden">
      {/* Title */}
      <h2 className="text-center text-white text-2xl md:text-4xl font-bold mb-8 tracking-wide">
        Clients
      </h2>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">
        {/* Moving Track */}
        <div className="flex animate-slide space-x-12 md:space-x-20 w-max">
          {/* Duplicate logos for smooth infinite effect */}
          {[...clients, ...clients].map((client, index) => (
            <img
              key={index}
              src={client.image}
              alt={`Client ${index}`}
              className="h-40 w-40 object-contain grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition duration-500"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
