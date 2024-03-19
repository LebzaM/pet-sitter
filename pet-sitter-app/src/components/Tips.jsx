import React from 'react';
import Hero from '../assets/Hero1 (6).png'
const Tips = () => {
  return (
    <div className="mx-auto mt-10 px-4 sm:px-6 lg:px-2 lg:mb-36 font-gaya">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
        {/* Tips and Tricks Section */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4 font-mono" >Tips & Recommendations</h2>
          <p className="text-lg mb-4">
            Here are some helpful tips to keep your pet healthy and happy:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">Regular exercise is essential for your pet's well-being.</li>
            <li className="mb-2">Provide a balanced and nutritious diet.</li>
            <li className="mb-2">Keep up with veterinary check-ups and vaccinations.</li>
            <li className="mb-2">Provide mental stimulation with toys and games.</li>
            <li className="mb-2">Maintain a clean and comfortable living environment.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 p-6">
          <img
            src={Hero}
            alt="Pet Tips"
            className="object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Tips;