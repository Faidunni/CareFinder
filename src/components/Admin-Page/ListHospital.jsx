// import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../Auth/firebase";
// import { IoClose } from "react-icons/io5";
// import { Link, useNavigate } from "react-router-dom";
// import Footer from "../Footer/Footer";
// import { doc, setDoc } from "firebase/firestore";
// import { toast } from "react-toastify";
// import PageNav from "../Pages/PageNav";
// import { collection, addDoc } from "firebase/firestore";

// const ListHospital = () => {
//   const [contact, setHcontact] = useState("");
//   const [name, setHname] = useState("");
//   const [address, setHaddress] = useState("");

//   const navigate = useNavigate();

//   const adminRegister = async (e) => {
//     e.preventDefault();
//     try {
//       // Create user with email and password
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // Store user details in Firestore
//       if (user) {
//         await setDoc(doc(db, "Users", user.uid), {
//           HospitalName: name,
//           HospitalAddr: address,
//           HospitalContact: contact,
//           Email: email,
//         });
//       }

//       // Store hospital details in the "hospitals" collection
//       await addDoc(collection(db, "hospitals"), {
//         name,
//         address,
//         contact,
//         adminUid: user.uid,
//       });

//       navigate("/");
//       toast.success("Hospital added successfully and you are now an Admin!");
//     } catch (error) {
//       console.log(error.message);
//       toast.error("Error: " + error.message);
//     }
//   };

//   return (
//     <main className="bg-primary">
//       <div className="border-b-2 border-white">
//         <PageNav />
//       </div>
//       <form
//         onSubmit={adminRegister}
//         className="relative px-10 py-10 lg:w-[700px] h-[650px] lg:bg-white md:bg-white rounded-xl w-[100%] mt-[50px] lg:mx-[23%]"
//       >
//         <Link to="/">
//           <IoClose className="text-5xl absolute right-4 top-4" />
//         </Link>
//         <h1 className="font-Rochester text-5xl font-bold text-center mt-10 mb-5">
//           CF
//         </h1>
//         <h2 className="font-Montserrat text-[24px] font-bold text-center">
//          Admin Dashboard
//         </h2>
//         <div className="mt-10">
//           <label className="text-[12px] font-Montserrat font-bold">
//             HOSPITAL NAME
//           </label>
//           <input
//             type="text"
//             className="w-[100%] px-3 py-2 outline-none shadow-sm mt-[5px] border-b-2 border-black rounded-b-xl"
//             placeholder="Enter Hospital's Name"
//             onChange={(e) => setHname(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-[5px] mt-10">
//           <label className="text-[12px] font-Montserrat font-bold">
//             HOSPITAL ADDRESS
//           </label>
//           <input
//             type="text"
//             className="w-[100%] px-3 py-2 outline-none shadow-sm mt-[5px] border-b-2 border-black rounded-b-xl"
//             placeholder="Enter Hospital's Address"
//             onChange={(e) => setHaddress(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-[5px] mt-10">
//           <label className="font-Montserrat text-[12px] font-bold">
//             HOSPITAL CONTACT
//           </label>
//           <input
//             type="tel"
//             className="w-[100%] px-3 py-2 outline-none shadow-sm mt-[5px] border-b-2 border-black rounded-b-xl"
//             placeholder="+234-****-***-****"
//             onChange={(e) => setHcontact(e.target.value)}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-black text-white rounded-lg flex mx-auto px-10 py-3 mt-5 font-bold hover:bg-transparent hover:border-2 hover:text-black"
//         >
//           ADD
//         </button>
//       </form>
//       <Footer />
//     </main>
//   );
// };

// export default ListHospital;

// hi
