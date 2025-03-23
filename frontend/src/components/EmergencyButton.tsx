import React from 'react';
import { PhoneCall, AlertCircle } from 'lucide-react';

const EmergencyButton = () => {
  const handleEmergencyCall = () => {
    // Replace with actual emergency number or API call
    const emergencyNumber = '108'; // Example: Indian emergency number
    window.open(`tel:${emergencyNumber}`, '_blank');
  };

  return (
    <button
      onClick={handleEmergencyCall}
      className="fixed bottom-24 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition flex items-center space-x-2"
    >
      <AlertCircle className="h-6 w-6" />
      <span>Emergency</span>
    </button>
  );
};

export default EmergencyButton;



// #######################################
// this code use for phone call, only you  can call phone this alert on
// import React from 'react';
// import { PhoneCall, AlertCircle } from 'lucide-react';

// const EmergencyButton = () => {
//   const handleEmergencyCall = () => {
//     const emergencyNumber = '108'; // Example: Indian emergency number

//     // Check if the device is mobile
//     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

//     if (isMobile) {
//       window.location.href = `tel:${emergencyNumber}`;
//     } else {
//       alert('Please use a mobile device to make an emergency call.');
//     }
//   };

//   return (
//     <button
//       onClick={handleEmergencyCall}
//       className="fixed bottom-24 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition flex items-center space-x-2"
//     >
//       <AlertCircle className="h-6 w-6" />
//       <span>Emergency</span>
//     </button>
//   );
// };

// export default EmergencyButton;




