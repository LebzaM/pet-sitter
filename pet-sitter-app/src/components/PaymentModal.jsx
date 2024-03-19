import React, { useState } from 'react';

const PaymentModal = ({ isOpen, onClose, seller }) => {
  const [paymentData, setPaymentData] = useState({
    
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleInputChange1 = (event) => {
    const value = event.target.value;
    setInput1(value);
    setInput2(value); 
  };

  const handleInputChange2 = (event) => {
    const value = event.target.value;
    setInput2(value);
    setInput1(value); 
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Payment Submitted:', paymentData);
    
    onClose();
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
    <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={onClose}></div>
    <div className="bg-white p-6 rounded-lg z-10 max-w-md w-full">
      <h2 className="text-lg font-bold mb-4 text-center">Complete Payment</h2>
      <form className="space-y-4" action="https://www.payfast.co.za/eng/process" method="post">
        <div className="flex flex-col">
          <label className="text-sm font-medium">
            Amount
          </label>
          <input
            type="number"
            value={input1}
            onChange={handleInputChange1}
            className="border border-gray-300 rounded-md px-3 py-2 mt-2"
            placeholder='E.g 200'
          />
        </div>
        <div className="flex flex-col">
         
         <input
           type="hidden"
           
           name="amount"
           value={input2} 
           onChange={handleInputChange2}
           className="border border-gray-300 rounded-md px-3 py-2"
           
         />
       </div>
        <div className="flex flex-col">
         
         <input
           type="hidden"
           
           name="item_name"
           value="Test Product" 
           className="border border-gray-300 rounded-md px-3 py-2"
           
         />
       </div>
        <div className="flex flex-col">
         
          <input
            type="hidden"
            
            name="merchant_id"
            value="22295776"
            className="border border-gray-300 rounded-md px-3 py-2"
            
          />
        </div>
        <div className="flex flex-col">
         
          <input
            type="hidden"
            name="merchant_key"
            value="a4d1f5b2qlkwz"
            className="border border-gray-300 rounded-md px-3 py-2"
            
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 mr-5"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
          >
             Pay Now
          </button>
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default PaymentModal;