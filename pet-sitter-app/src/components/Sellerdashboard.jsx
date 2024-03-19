import React,{useEffect, useState} from 'react'
import axios from 'axios';
import useSWR from 'swr';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Loader from './Loader';

  
    const Sellerdashboard = () => {
        const [sellerData, setSellerData] = useState(null);
        const [ownerData, setOwnerData] = useState(null);
        const [filteredOwners, setFilteredOwners] = useState([]);
        const [chartData, setChartData] = useState([]);
        const [userData, setUserData] = useState([]);
      
        const fetchSellerData = async () => {
          const response = await axios.get('http://localhost:5000/sellers');
          
          return response.data;
        };
      
        const fetchOwnerData = async () => {
          const response = await axios.get('http://localhost:5000/owners');
          return response.data;
        };
      
        useEffect(() => {
          const fetchData = async () => {
            const sellerResponse = await fetchSellerData();
            const ownerResponse = await fetchOwnerData();
            console.log(ownerResponse)
            console.log(sellerResponse)
            setSellerData(sellerResponse[2]); 
            setOwnerData(ownerResponse);
          };
      
          fetchData();
        }, []);
      
        useEffect(() => {
          if (sellerData && ownerData) {
            const filtered = ownerData.filter((owner) => owner.userId !== sellerData.id);
            setFilteredOwners(filtered);
      
            const animalTypes = filtered.map((owner) => owner.animalType);
            const animalTypeCounts = animalTypes.reduce((acc, type) => {
              acc[type] = (acc[type] || 0) + 1;
              return acc;
            }, {});
      
            const chartData = Object.keys(animalTypeCounts).map((type) => ({
              name: type,
              value: animalTypeCounts[type],
            }));
      
            setChartData(chartData);

      const userCounts = ownerData.length;
      setUserData([{ name: 'Users', value: userCounts }]);
    }
        }, [sellerData, ownerData]);
      
        if (!sellerData || !ownerData) return <div><Loader /></div>;

  const { name, companySize, phoneNumber, email } = sellerData;

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  return (
    <div className="container mx-auto px-4 py-8 font-gaya">
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Seller Dashboard</h1>
      <div className="p-6 rounded-lg  bg-white shadow-md overflow-hidden flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2">Your Information</h2>
        <p className="text-lg mb-2">Name: {name}</p>
        <p className="text-lg mb-2">Company Size: {companySize}</p>
        <p className="text-lg mb-2">Phone Number: {phoneNumber}</p>
        <p className="text-lg mb-2">Email: {email}</p>
      </div>
    </div>

    <div className="mb-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Owners</h2>
        <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 font-gaya border border-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Project Duration
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOwners.map((owner) => (
                <tr key={owner.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{owner.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{owner.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{owner.selectedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center font-gaya">Popular Pets</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="mb-8">
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center font-gaya">Number of Owners</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={userData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);
};

export default Sellerdashboard;