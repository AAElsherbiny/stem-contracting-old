import { motion } from 'framer-motion';
import buildingBg from '../assets/background.jpg';

const Home = () => {
  // Typing animation for the tagline
  const tagline = "Building the Future with Excellence .";
  const taglineVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05, // Delay each character for typing effect
      },
    }),
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${buildingBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mb-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-[#D4AF37] mb-4">
          STEM Contracting 
        </h1>

        {/* Tagline with Typing Animation */}
        <div className="text-xl md:text-2xl text-white mb-6 flex flex-wrap justify-center">
          {tagline.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={taglineVariants}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-[#D4AF37] text-white rounded-lg shadow-lg hover:bg-opacity-90 transition"
          href="#contact"
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Home;