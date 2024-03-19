import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { Document, Page, Text, View, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import Hero from '../assets/Hero1 (3).png'
import { IoMdDownload } from "react-icons/io";
import Features from '../components/Reliable';
import Testimonial from '../components/Testimonial';
import Tips from '../components/Tips';
import SellerMap from '../components/SellerMap';

const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      padding: 20,
    },
    section: {
      marginBottom: 10,
    },
    title: {
      fontSize: 16,
      marginBottom: 10,
      textDecoration: "underline",
    },
    table: {
      display: "table",
      width: "auto",
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    tableRow: {
      margin: "auto",
      flexDirection: "row",
    },
    tableCell: {
      margin: "auto",
      width: "25%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
  });
  
  const MyDocument = ({ service, animalType }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Pet Sitting Prices</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>Service</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Price</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>{service === 'pet_sitting' ? 'Pet Sitting' : 'Pet Walking'}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{service === 'pet_sitting' ? '$400' : 'To be determined'}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>{animalType === 'dog' ? 'Dog' : 'Cat'}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{animalType === 'dog' ? '$200' : 'To be determined'}</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );

const Home = () => {
    
    const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [animalType, setAnimalType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [duration, setDuration] = useState("");
  const navigate = useNavigate()

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAnimalTypeChange = (event) => {
    setAnimalType(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleSearch = () => {
    
    if (service === "pet_sitting" || service === "pet_walking") {
      setModalIsOpen(true);
    }
  };

  
    const closeModal = () => {
      setModalIsOpen(false);
      setModalStep(1);
      // reset 
      setName("");
      setPhone("");
      setEmail("");
      setPassword("");
      setAnimalType("");
      setSelectedDate("");
      setDuration("");
      setService("")
    };

     
  
    const handleContinue = async (e) => {
      e.preventDefault();
    
      if (modalStep === 1) {
        setModalStep(2);
      } else if (modalStep === 2) {
        setModalStep(3);
      } else if (modalStep === 3) {
        setModalStep(6);
      } else if (modalStep === 6) {
        setModalStep(4);
      } else {
        try {
          const response = await axios.post('https://pet-sitter-app-sand.vercel.app/owners', {
            name,
            email,
            password,
            phoneNumber: phone,
            service,
            animalType,
            selectedDate,
            duration,
          });
    
          
          if (response.status === 201) {
            // Store data in local storage
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userData', JSON.stringify(response));
            localStorage.setItem('userName', name);
    
            
            navigate('/buyerdash');
    
            
            console.log("Name:", name);
            console.log("Phone:", phone);
            console.log("Email:", email);
            console.log("Password:", password);
            console.log("Animal Type:", animalType);
            console.log("Selected Date:", selectedDate);
            console.log("Duration:", duration);
            
            closeModal();
          }
        } catch (error) {
          console.error('Error creating owner:', error);
          
        }
      }
    };

      
    
    const handleDownloadPDF = async () => {
      try {
        const response = await axios.get('https://pet-sitter-app-sand.vercel.app/owners'); 
        const { service, animalType } = response.data; 
  
        const blob = new Blob([<MyDocument service={service} animalType={animalType} />], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
  
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "pet_sitting_prices.pdf");
        document.body.appendChild(link);
        link.click();
  
        URL.revokeObjectURL(url);
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error fetching pet sitting prices:', error);
        
      }
    };
    
  
    return (
      <>
      <div className="min-h-screen flex  justify-center text-black font-gaya">
        <div className="flex flex-col lg:flex-row lg:w-1/1">
          <div className="lg:w-1/2 p-6 text-center">
            <h1 className="text-3xl font-bold mb-9 text font-gaya ">
              Welcome to Barkey
            </h1>
            <p className="text-1x1 mb-8  text-gray-500 font-gaya">
             Havent had the time to take the little ones for a walk?<br/>
             Simply Sign up and and our experts will do it for you.

            </p>
            <div className="mb-4">
              <label htmlFor="service" className="block text-xl mb-2 font-gaya">
                Choose a service:
              </label>
              <select
                id="service"
                name="service"
                value={service}
                onChange={handleServiceChange}
                className="px-4 py-2 rounded border w-full"
              >
                <option value="">Select</option>
                <option value="pet_sitting">Pet Sitting</option>
                <option value="pet_walking">Pet Walking</option>
              </select>
            </div>
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 font-gaya"
            >
              Explore Service
            </button>
          </div>
  
          <div className="lg:w-1/2 ">
            <img src={Hero} alt="Hero" className="object-fit" />
          </div>
        </div>
  
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-100"
        overlayClassName="modal-overlay fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 opacity-100 z-100 "
        ariaHideApp={false}
      >
        <div className="modal-content bg-white rounded-lg p-6 text-center shadow-lg z-100 w-96 ">
        {modalStep === 6 && (
            <>
              <h2 className="text-lg font-semibold mb-4">Enter Name and Phone Number</h2>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter Your Name"
                className="px-4 py-2 border rounded w-full mb-4"
              />
              <input
                type="text"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="Enter phone number"
                className="px-4 py-2 border rounded w-full mb-4"
              />
            </>
          )}
        {/* x-4 py-2 border rounded w-full mb-4 mt-4 */}
        {modalStep === 1 && (
            <>
              <h2 className="text-lg font-semibold mb-4">Choose Animal Type</h2>
              <div className="flex items-center mb-4">
                <label className="mr-4">
                  <input
                    type="radio"
                    value="dog"
                    checked={animalType === "dog"}
                    onChange={handleAnimalTypeChange}
                    className="mr-2"
                  />
                  Dog
                </label>
                <label>
                  <input
                    type="radio"
                    value="cat"
                    checked={animalType === "cat"}
                    onChange={handleAnimalTypeChange}
                    className="mr-2"
                  />
                  Cat
                </label>
              </div>
            </>
          )}
          {modalStep === 2 && (
            <>
              <h2 className="text-lg font-semibold mb-4">Date a professional is required</h2>
              {/* Replace this with your preferred date picker component */}
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => handleDateChange(e.target.value)}
                className="px-4 py-2 border rounded w-full mb-4"
              />
            </>
          )}
          {modalStep === 3 && (
            <>
              <h2 className="text-lg font-semibold mb-4">Select Duration</h2>
              <div className="flex items-center mb-4">
                <label className="mr-4">
                  <input
                    type="radio"
                    value="2-7 days"
                    checked={duration === "2-7 days"}
                    onChange={handleDurationChange}
                    className="mr-2"
                  />
                  2-7 days
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    value="1 day"
                    checked={duration === "1 day"}
                    onChange={handleDurationChange}
                    className="mr-2"
                  />
                  1 day
                </label>
                <label>
                  <input
                    type="radio"
                    value="full-day"
                    checked={duration === "full-day"}
                    onChange={handleDurationChange}
                    className="mr-2"
                  />
                  Full-day
                </label>
              </div>
            </>
          )}
          {modalStep === 4 && (
            <>
              <h2 className="text-lg font-semibold mb-4">Enter Email and Password</h2>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="px-4 py-2 border rounded w-full mb-4"
              />
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                className="px-4 py-2 border rounded w-full mb-4"
              />
            </>
          )}
          <div className="flex justify-between">
          {modalStep !== 4 && (
            <button
              onClick={handleContinue}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Continue
            </button>
          )}
           {modalStep === 4 && (
            
              <div className="flex justify-between">
                <button
                  onClick={handleContinue}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Submit
                </button>
                {/* <button
                  onClick={handleDownloadPDF}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ml-5"
                >
                  <IoMdDownload />
                </button> */}
              </div>
            
          )}
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
          >
            Close
          </button>
            </div>
          </div>
        </Modal>
      </div>
      <Features />
      <Tips />
      <SellerMap />
      <Testimonial />
      
      </>
    );
  };
  
  export default Home;