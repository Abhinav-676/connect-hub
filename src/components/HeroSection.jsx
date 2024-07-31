import Section from "./Section";

const HeroSection = ({img, title}) => {
    return (
      <Section className="mt-4">
        <div>
        <div className="flex justify-center">
            <div className="relative w-full h-[40vh] overflow-hidden rounded-lg shadow-lg">
                <img
                    src={img}
                    alt="Sample"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
                    <h1 className="text-white font-bold text-5xl sm:text-6xl">{title}</h1>
                </div>
            </div>
        </div>
      </div>
      </Section>
    );
  };
  
  export default HeroSection;