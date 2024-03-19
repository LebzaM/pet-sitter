import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const SellerLogin = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    city: "",
    phoneNumber: "",
    companyWebsite: "",
    companySize: "",
    email: "",
    price: "",
    experience: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    const response =await axios.post("http://localhost:5000/sellers", formData);
    
    if (response.status === 201) {
      // Store data in local storage
      localStorage.setItem('sellerLoggedIn', 'true');
      localStorage.setItem('sellerData', JSON.stringify(response));
      

      // Navigate to the buyer dashboard
      navigate("/sellerdash");

      // Handle submission of data, e.g., make an API call
      
      // Close modal after form submission
      
    }
    // Reset form fields after submission if needed
    
  };
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-2xl font-bold mb-6 text-align flex">
        Sign Up as a Pet Sitter
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Experience
          </label>
          <input
            type="text"
            id="experience"
            name="experience"
            placeholder="Eg. 2 Years"
            value={formData.experience}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Rates
          </label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Eg. R150 p/h"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select City</option>
            <option value="Pretoria">Pretoria</option>
            <option value="Joburg">Joburg</option>
            <option value="CapeTown">Cape Town</option>
            <option value="Durban">Durban</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="companyWebsite"
            className="block text-sm font-medium text-gray-700"
          >
            Company Website (Optional)
          </label>
          <input
            type="url"
            id="companyWebsite"
            name="companyWebsite"
            value={formData.companyWebsite}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="companySize"
            className="block text-sm font-medium text-gray-700"
          >
            Company Size
          </label>
          <select
            id="companySize"
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select Company Size</option>
            <option value="sole_trader">Sole Trader</option>
            <option value="1-5">1-5 Employees</option>
            <option value="6-12">6-12 Employees</option>
            <option value="20+">20+ Employees</option>
          </select>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SellerLogin;
