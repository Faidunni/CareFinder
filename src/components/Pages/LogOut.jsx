import React from "react";
// import { auth } from "../Auth/firebase";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const LogOut = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  //   const navigate = useNavigate();

  //   async function handleLogout() {
  //     try {
  //       await auth.signOut();
  //       navigate("/login");
  //     } catch (error) {
  //       toast.error("Guess you are stuck😂");
  //     }
  //   }

  return (
    <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex items-center justify-center z-10">
      <div className="bg-white rounded-lg p-4 w-full max-w-md py-10">
        <button
          className="text-gray-500 hover:text-gray-700 absolute sm:top-2 sm:right-2 text-5xl top-1"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default LogOut;

// import React from 'react';
// import { auth } from "../Auth/firebase";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const LogOut = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;
//   const LogOut = () => {
//     const navigate = useNavigate();

//     async function handleLogout() {
//       try {
//         await auth.signOut();
//         navigate("/login");
//       } catch (error) {
//         toast.error("Guess you are stuck😂");
//       }
//     }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white rounded-lg p-4 w-full max-w-md">
//         <button
//           className="text-gray-500 hover:text-gray-700 absolute top-2 right-2"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default LogOut;
