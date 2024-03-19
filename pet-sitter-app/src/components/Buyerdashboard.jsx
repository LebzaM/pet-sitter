import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import useSWR from 'swr';
import SellerMap from './SellerMap';
import PaymentModal from './PaymentModal';
import Loader from './Loader';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Buyerdashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const fetcher = async () => {
    const response = await axios.get('http://localhost:5000/sellers');
    return response.data;
  };
  


  const { data, error } = useSWR('sellers', fetcher);

  if (error) return <div>Error fetching data</div>;
  if (!data) return <div><Loader /></div>;

  // Filter the data based on the search term
  const filteredData = data.filter((seller) =>
    seller.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (seller) => {
    setSelectedSeller(seller);
    setShowPaymentModal(true);
  };

  const handlePaymentModalClose = () => {
    setShowPaymentModal(false);
  };

  const handleOrder = (email) => {
    window.open(`mailto:${email}`);
  };

  // Data for the bar chart (sellers' experience)
  const experienceData = filteredData.map((seller) => {
    const experience = seller.experience;
    if (!experience) return { name: seller.name, experience: 0 };
    const years = parseInt(experience.split(' ')[0]);
    return { name: seller.name, experience: years };
  });

  // Data for the pie chart (cities)
  const cityData = filteredData.reduce((acc, seller) => {
    acc[seller.city] = acc[seller.city] ? acc[seller.city] + 1 : 1;
    return acc;
  }, {});

  const pieChartData = Object.keys(cityData).map((city) => ({
    name: city,
    value: cityData[city]
  }));

  return (
    <div className="container mx-auto px-4 py-8 font-gaya">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <h2 className="text-3xl font-gaya mb-2 md:mb-0">Sellers List</h2>
        <div className="relative mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search by city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-gaya"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 font-gaya border border-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Experience
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rates
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                City
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((seller) => (
              <tr key={seller.id}>
                <td className="px-6 py-4 whitespace-nowrap">{seller.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{seller.experience}</td>
                <td className="px-6 py-4 whitespace-nowrap">{seller.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{seller.phoneNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{seller.companyName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{seller.city}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => handleViewDetails(seller)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showPaymentModal && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={handlePaymentModalClose}
          seller={selectedSeller}
        />
      )}

      {selectedSeller && (
        <div className="mt-8 p-4 border rounded-md">
          <h3 className="text-lg font-bold">{selectedSeller.name}</h3>
          <p className="text-gray-600">Company Size: {selectedSeller.companySize}</p>
          <p className="text-gray-600">Phone Number: {selectedSeller.phoneNumber}</p>
          <p className="text-gray-600">Email: {selectedSeller.email}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            onClick={() => handleOrder(selectedSeller.email)}
          >
            Order
          </button>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">Sellers' Experience</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={experienceData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="experience" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">Cities of Sellers</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <SellerMap />
    </div>
  );
};

export default Buyerdashboard;