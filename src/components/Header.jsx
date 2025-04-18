import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/hero-image.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-center text-white px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-500 uppercase mb-4 tracking-widest">
          Welcome to GadgetHaven
        </h1>

        <p className="text-lg md:text-xl mb-6 font-light">
          Explore the best gadgets from around the world, with curated selections tailored for your needs.
        </p>

        <div className="flex justify-center gap-6 flex-col sm:flex-row">
          <Link to="/products" className="bg-amber-500 text-white px-8 py-3 rounded-md text-lg hover:bg-amber-600 transition-all duration-300">
            Shop Now
          </Link>
          <Link to="/about" className="border-2 border-white text-white px-8 py-3 rounded-md text-lg hover:bg-white hover:text-amber-500 transition-all duration-300">
            Learn More
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 mb-8 flex justify-center">
        <img src="/path/to/your/gadget-image.png" alt="Gadget Showcase" className="w-3/4 md:w-1/2 lg:w-1/3 object-contain shadow-xl" />
      </div>
    </header>
  );
};

export default Header;
