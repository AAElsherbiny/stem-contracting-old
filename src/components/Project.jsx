import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Placeholder image imports (replace with actual images)
import civilImage1 from '../assets/prj1/img1.jpg';
import civilImage2 from '../assets/prj1/img2.jpg';
import civilImage3 from '../assets/prj1/img3.jpg';
import civilImage4 from '../assets/prj1/img4.jpg';
import elec1 from '../assets/elec/img1.jpg';
import elec2 from '../assets/elec/img2.jpg';
import elec3 from '../assets/elec/img3.jpg';
import elec4 from '../assets/elec/img4.jpg';
import school1 from '../assets/school/img1.jpg';
import school2 from '../assets/school/img2.jpg';
import school3 from '../assets/school/img3.jpg';
import villa1 from '../assets/villa/img1.jpg';
import villa2 from '../assets/villa/img2.jpg';
import villa3 from '../assets/villa/img3.jpg';
import villa4 from '../assets/villa/img4.jpg';  
import villa5 from '../assets/villa/img5.jpg';
import villa6 from '../assets/villa/img6.jpg';

const Projects = () => {
  const projects = [
    {
        title: "Villa",
        description:
            "Our villa projects are designed to provide luxury and comfort, with a focus on modern architecture and sustainable practices. We handle everything from initial design to final construction, ensuring each villa is a unique reflection of our clients' vision.",
        images: [villa1, villa2, villa3, villa4, villa5, villa6],
    },
    {
      title: "Construction Projects",
      description:
        "Our construction services cover everything from concrete works to finishing and furnishing. We handle skeleton structures, masonry, insulation, plastering, electrical installations, smart home systems, and more—delivering high-quality homes and buildings with attention to every detail.",
      images: [civilImage1, civilImage2 , civilImage3, civilImage4],
    },
    {
      title: "Electrical Services",
      description:
        "We provide comprehensive electrical and electronic services, including inspections, maintenance, medium/low voltage equipment services, renewable energy feasibility studies, and hazardous area compliance. Our certified teams ensure safety and efficiency in every project.",
      images: [elec1, elec2, elec3, elec4]
    },
    {
      title: "School",
      description:
        "We specialize in constructing and renovating educational facilities, ensuring they meet modern standards for safety, accessibility, and functionality. Our projects include classrooms, laboratories, libraries, and recreational areas designed to foster learning and growth.",
      images: [school1, school2, school3],
    },
    
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of construction and electrical projects, showcasing our commitment to quality, innovation, and excellence.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Project Details */}
              <div className={index % 2 === 0 ? "order-1" : "order-1 md:order-2"}>
                <h3 className="text-2xl font-semibold text-[#D4AF37] mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>

              {/* Project Slider */}
              <div className={index % 2 === 0 ? "order-2" : "order-2 md:order-1"}>
                <Slider {...sliderSettings}>
                  {project.images.map((image, imgIndex) => (
                    <div key={imgIndex}>
                      <img
                        src={image}
                        alt={`${project.title} ${imgIndex + 1}`}
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;