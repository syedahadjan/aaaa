import React from "react";
import Laptop from "../assets/analytics.jpg";

const Analytics = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-white py-16">
      <div className="container mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={Laptop}
            className="rounded-xl shadow-lg max-w-full transform hover:scale-105 transition duration-300"
            alt="Microfinance Analytics"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-6">
          <p className="text-green-600 font-semibold text-xl mb-4">MICROFINANCE DATA ANALYTICS</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Empowering the Qarze Hasana Program with Data Insights
          </h1>
          <p className="text-gray-600 mb-4 text-lg leading-relaxed">
            Our data-driven approach enables better decision-making and transparent tracking of funds under the Qarze Hasana program. By harnessing advanced analytics, we ensure that every penny is efficiently used to help those in need.
          </p>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            With real-time data monitoring and predictive models, we’re committed to maximizing the impact of our microfinance efforts, ensuring the successful distribution of funds to those who need it the most.
          </p>
          <div className="text-center md:text-left">
            {/* Custom Button */}
            <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-110 transform transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
