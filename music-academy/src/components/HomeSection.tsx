import { AuroraBackground } from "./ui/aurora-background";

const HeroSection = () => {
  return (
    <>
      <AuroraBackground>
        <div className="h-screen z-10 md:h-[40rem] w-full flex items-center justify-center">
          <div className="lg:w-2/3 text-center space-y-4 p-6">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Master the Art of Music
            </h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
              Dive into our comprehensive music courses and transform your
              musical journey today. Whether you're a beginner or looking to
              refine your skills, join us to unlock your true potential.
            </p>
            <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(200,200,200)] transition duration-200">
              Explore now
            </button>
          </div>
        </div>
      </AuroraBackground>
    </>
  );
};

export default HeroSection;
