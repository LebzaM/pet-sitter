import React from 'react'

import { GiJumpingDog } from 'react-icons/gi'; // Example React Icon
import { FaLock, FaUserFriends } from 'react-icons/fa'; // More example React Icons

const Card = ({ icon, heading, text }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center mb-4 md:mb-0 md:w-1/3">
      <div className="p-4">
        {/* Icon */}
        {icon}
        {/* Heading */}
        <h2 className="text-xl font-semibold mb-2 text-center">{heading}</h2>
        {/* Text */}
        <p className="text-gray-600 text-center">{text}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const featureData = [
    {
      icon: <GiJumpingDog className="h-16  w-[100%] text-center text-blue-500" />,
      heading: 'Reliable',
      text: 'Schedule with our expert sitters anytime',
    },
    {
      icon: <FaLock className="h-16 w-[100%] text-center text-blue-500" />,
      heading: 'Secure Dealings',
      text: 'Secure Payment Solutions',
    },
    {
      icon: <FaUserFriends className="h-16 w-[100%] text-center text-blue-500" />,
      heading: 'Experienced Sitters',
      text: 'Experienced and pet loving sitters',
    },
  ];

  return (
    <>
    <h3 className="text-3xl font-bold mb-6 text-center font-gaya">Join Us</h3>
    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-20 font-gaya">
      
      {featureData.map((feature, index) => (
        
        <Card key={index} icon={feature.icon} heading={feature.heading} text={feature.text} />
      ))}
    </div>
    </>
  );
};

export default Features;