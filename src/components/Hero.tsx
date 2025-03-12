const Hero = () => {
  return (
    <section>
      <div className="bg-[#21234F] my-30">
        <div className="container mx-auto flex justify-between items-center pt-16 pb-36 relative">
          <div className="text-white saira">
            <p className="text-5xl font-semibold leading-16">
              Faculty <br /> of Science
            </p>
            <p className="text-xl">(Ago-Iwoye)</p>
          </div>

          <div className="absolute right-0 top-[-3.5rem]">
            <img
              src="/faculty.png"
              alt="faculty-of-science"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
