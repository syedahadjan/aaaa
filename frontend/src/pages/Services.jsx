import React from 'react';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaChartLine, FaMoneyBillWave, FaBusinessTime, FaRegHandshake, FaUserShield } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaHandsHelping size={50} />,
      title: 'Micro Loans',
      description: 'Providing small, short-term loans to individuals and businesses in need.',
    },
    {
      id: 2,
      icon: <FaChartLine size={50} />,
      title: 'Financial Literacy Training',
      description: 'Empowering communities with knowledge about managing finances, savings, and investments.',
    },
    {
      id: 3,
      icon: <FaMoneyBillWave size={50} />,
      title: 'Interest-Free Loans',
      description: 'Offering interest-free loans to those in need to encourage financial inclusion.',
    },
    {
      id: 4,
      icon: <FaBusinessTime size={50} />,
      title: 'Business Development Support',
      description: 'Assisting small businesses with growth strategies, resources, and networking opportunities.',
    },
    {
      id: 5,
      icon: <FaRegHandshake size={50} />,
      title: 'Community Partnership',
      description: 'Building strong partnerships with local businesses and community organizations to drive collective success.',
    },
    {
      id: 6,
      icon: <FaUserShield size={50} />,
      title: 'Financial Security Programs',
      description: 'Offering tools and resources to ensure long-term financial security for individuals and families.',
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="text-green-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
