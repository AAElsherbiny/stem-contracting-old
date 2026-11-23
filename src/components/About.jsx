import { motion } from 'framer-motion';
import projectImage from '../assets/about.jpg'; // Placeholder for one of the project images

const About = () => {
  const values = [
    { title: "Trust & Professionalism", description: "Building partnerships with respect, integrity, and professionalism." },
    { title: "Passion for Perfection", description: "Innovating with the latest technologies to deliver top-quality services." },
    { title: "Sustainability", description: "Promoting environmentally responsible practices for a better future." },
  ];

  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Founded in 2021, STEM Contracting Company is a leading Egyptian firm based in Alexandria, specializing in integrated construction, electrical, and electronic services.
          </p>
        </motion.div>

        {/* Company Overview with Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={projectImage}
              alt="STEM Contracting Project"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-[#D4AF37] mb-4">Our Expertise</h3>
            <p className="text-gray-600 mb-4">
              We excel in residential, commercial, and industrial projects, offering services from concrete works to advanced electrical installations and smart home systems. Our skilled teams leverage modern techniques to deliver exceptional quality, on time and within budget.
            </p>
            <p className="text-gray-600">
              With a focus on safety, sustainability, and innovation, we collaborate closely with clients and consultants to meet the highest standards and exceed expectations.
            </p>
          </motion.div>
        </div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be a leading company in construction and services, achieving excellence through safety, quality, innovation, and advanced technology, contributing to the growth of our nation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver high-quality, sustainable construction solutions that exceed client expectations, using the latest technologies while maintaining a safe and healthy work environment.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-[#D4AF37] mb-6">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-semibold text-[#D4AF37] mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;