import React from "react";

interface AboutProps {
  title: string;
  details: string;
  title2: string;
  details2: string;
}

const About: React.FC<AboutProps> = ({ title, details, title2, details2 }) => {
  return (
    <section>
      <div className="border-2 rounded bg-[#FFFFFF] text-[#21234F] saira p-10 shadow-md">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <br />
        <p className="leading-7">{details}</p>
        <br /> <br />
        <h2 className="text-3xl font-semibold">{title2}</h2>
        <br />
        <p className="leading-7">{details2}</p>
      </div>
    </section>
  );
};

export default About;
