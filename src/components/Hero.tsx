import React, { ReactNode } from "react";

interface HeroProps {
  title: ReactNode;
  details: string;
  img: string;
}

const Hero: React.FC<HeroProps> = ({ title, details, img }) => {
  return (
    <section>
      <div className="bg-[#21234F] my-40">
        <div className="container mx-auto flex flex-col justify-between items-center pt-16 pb-36 relative lg:flex-row">
          <div className="text-white text-center saira mb-5 md:mb-10 lg:mb-0">
            <p className="text-3xl font-semibold leading-8 mb-3 lg:mb-0 lg:leading-16 lg:text-5xl">{title}</p>
            <p className="text-base lg:text-xl">{details}</p>
          </div>

          <div className="right-0 top-[-3.5rem] w-full h-[140%] md:w-[60%] lg:absolute">
            <img
              src={img}
              alt="faculty-of-science"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
