import React from "react";

const SeoBanner = () => {
  return (
    <section
      className="py-10  px-6 md:px-20 text-white h-40 flex justify-center items-center bg-cover bg-center opacity-"
      // style={{ backgroundImage: `url(${assets.Image})` }}
    >
      {/* Content */}
      <div className="space-y-4 text-center">
        <h1 className="text-[22px] md:text-4xl font-semibold text-white">
          Search Engine Optimization
        </h1>
      </div>
    </section>
  );
};

export default SeoBanner;
