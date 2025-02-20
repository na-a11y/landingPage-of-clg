import React, { useState } from 'react';
import { FaCode, FaPaintBrush, FaImage, FaPencilRuler } from 'react-icons/fa';

const WeDo = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <FaCode className="text-5xl mb-4" />,
      title: "Skill Development & Research",
      shortDesc: "We emphasize practical learning, research projects, and skill-based training to enhance student expertise.",
      longDesc: "Education goes beyond textbooks at CT Group of Institutions. We encourage students to participate in real-world projects, research initiatives, and skill development programs to bridge the gap between academics and industry demands. With cutting-edge labs, innovation centers, and expert mentorship, we nurture a culture of learning and discovery."
    },
    {
      icon: <FaPaintBrush className="text-5xl mb-4" />,
      title: "Quality Education",
      shortDesc: " We offer industry-relevant courses across multiple disciplines with a focus on practical learning.",
      longDesc: " At CT Group of Institutions, we provide high-quality education across diverse fields, including Engineering, Management, Computer Applications, Pharmacy, Hotel Management, and Law. Our modern curriculum, experienced faculty, and hands-on learning approach ensure that students are well-equipped for professional success in their respective fields."
    },
    {
      icon: <FaImage className="text-5xl mb-4" />,
      title: "Global Exposure",
      shortDesc: " International collaborations, student exchange programs, and industry visits provide a global learning experience.",
      longDesc: " In today’s interconnected world, global exposure is key to career success. We offer international student exchange programs, industry tie-ups, and global partnerships to provide students with a broader perspective and opportunities to excel on a worldwide scale."
    },
    {
      icon: <FaPencilRuler className="text-5xl mb-4" />,
      title: "Community & Social Initiatives",
      shortDesc: "We engage in CSR activities, environmental initiatives, and social welfare programs to give back to society.",
      longDesc: "As a responsible institution, CT Group of Institutions actively contributes to community service, environmental sustainability, and social upliftment initiatives. From tree plantation drives to skill development programs for the underprivileged, we encourage our students to be socially responsible citizens."
    }
  ];

  const Modal = ({ service, onClose }) => {
    if (!service) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <div className="text-gray-800">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#1D857B]">{service.title}</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-600 leading-relaxed">{service.longDesc}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full px-4 py-8">
      {/* Title Section */}
      <div className="flex justify-center mb-20">
        <span 
          className="text-[30px] font-semibold text-white px-8 py-3 rounded-[30px]"
          style={{
            background: 'linear-gradient(to bottom, #1D857B 15%, #071F1D 100%)'
          }}
        >
          What we do ?
        </span>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index}
            className="rounded-[20px] p-8 text-white transition-transform duration-300 hover:-translate-y-2 min-h-[300px] max-w-[280px] mx-auto w-full flex flex-col items-center justify-between text-center"
            style={{
              background: 'linear-gradient(to bottom, #1D857B 15%, #071F1D 100%)'
            }}
          >
            {service.icon}
            <h3 className="text-2xl font-semibold mb-4">
              {service.title}
            </h3>
            <p className="text-gray-200 leading-relaxed mb-6">
              {service.shortDesc}
            </p>
            <button
              onClick={() => {
                setSelectedService(service);
                setShowModal(true);
              }}
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <Modal 
          service={selectedService} 
          onClose={() => {
            setShowModal(false);
            setSelectedService(null);
          }}
        />
      )}
    </div>
  );
};

export default WeDo;