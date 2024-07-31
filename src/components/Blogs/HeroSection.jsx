import Section from "../Section";

const HeroSection = () => {
    return (
      <Section className="mt-4">
        <div>
        <div className="flex justify-center">
            <div className="relative w-full h-[40vh] overflow-hidden rounded-lg shadow-lg">
                <img
                    src="https://img.freepik.com/free-photo/high-angle-laptop-books-arrangement_23-2149765845.jpg?t=st=1722261058~exp=1722264658~hmac=d7bd06bad318f62b2fd2d45b4c619dd8a64250d1835ac68c211fa0eeba8d3b17&w=900"
                    alt="Sample"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
                    <h1 className="text-white font-bold text-5xl sm:text-6xl">Blog</h1>
                </div>
            </div>
        </div>
      </div>
      </Section>
    );
  };
  
  export default HeroSection;