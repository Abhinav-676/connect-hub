const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-100 py-20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between px-4 space-y-8 md:space-y-0 md:divide-x md:divide-gray-700">
          {/* About Us Section */}
          <div className="flex-1 min-w-[250px] px-16">
            <h3 className="border-b-2 border-gray-100 pb-2 mb-4">About Us</h3>
            <p>Connecting with diverse NGOs to create a more inclusive and equitable world. Join us in making a lasting impact!</p>
          </div>
  
          {/* Quick Links Section */}
          <div className="flex-1 min-w-[250px] px-16">
            <h3 className="border-b-2 border-gray-100 pb-2 mb-4">Quick Links</h3>
            <ul className="list-none p-0">
              <li className="mb-2"><a href="#home" className="text-gray-100 hover:text-gray-300">Home</a></li>
              <li className="mb-2"><a href="#about" className="text-gray-100 hover:text-gray-300">About Us</a></li>
              <li className="mb-2"><a href="#services" className="text-gray-100 hover:text-gray-300">Services</a></li>
              <li className="mb-2"><a href="#contact" className="text-gray-100 hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact Information Section */}
          <div className="flex-1 min-w-[250px] px-16">
            <h3 className="border-b-2 border-gray-100 pb-2 mb-4">Contact Us</h3>
            <p>123 NGO Street, Ranchi, India</p>
            <p>Email: infoNGO@ngoexample.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
  
          {/* Social Media Section */}
          <div className="flex-1 min-w-[250px] px-16">
            <h3 className="border-b-2 border-gray-100 pb-2 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook">
                <img src="https://static-00.iconduck.com/assets.00/facebook-color-icon-2048x2048-bfly1vxr.png" alt="Facebook" className="w-12 mr-4" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <img src="https://www.freeiconspng.com/uploads/logo-twitter-icon-symbol-0.png" alt="Twitter" className="w-12 mr-4" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/415/original/instagram-logo-instagram-icon-transparent-free-png.png" alt="Instagram" className="w-12 mr-4" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-12 rounded mr-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  