import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider.jsx";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import Signup from "./signup.jsx";
import "./Home.css"

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { authUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      navigate(`/hero`);
    }
  }, [authUser, navigate]);

  return (
    <div className="landing-container">
      <div className="landing-background"></div>
      <div className="landing-overlay"></div>
      
      <div className="landing-content">
        <div className="landing-text">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }} 
            className="logo-container"
          >
            <div className="logo-circle">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ815i8u4_W8gMoIwIA8ZKMOTPB57ctp1pgXA&s" 
                alt="CareerLaunch Logo" 
                className="logo-image" 
              />
            </div>
            <span className="logo-text">CareerLaunch</span>
          </motion.div>

          <h1 className="main-heading">
            Elevate Your Professional Journey
          </h1>
          
          <p className="subtext">
            Discover opportunities that align with your ambitions. 
            Join a community of professionals accelerating their careers.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.5 }} 
            className="category-container"
          >
            {[
              { title: "Leadership", color: "rgba(255,255,255,0.12)" }, 
              { title: "Innovation", color: "rgba(255,255,255,0.12)" }, 
              { title: "Growth", color: "rgba(255,255,255,0.12)" }
            ].map((item) => (
              <motion.div 
                key={item.title} 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }} 
                className="category-card"
                style={{ background: item.color }}
              >
                <p className="category-text">{item.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.3 }} 
          className="auth-container"
        >
          <h2 className="auth-heading">Begin Your Journey</h2>
          
          <div className="auth-buttons">
            {authUser ? (
              <p className="redirect-text">Redirecting...</p>
            ) : (
              <>
                <button 
                  className="auth-btn login-btn"
                  onClick={() => document.getElementById("login-container").showModal()}
                >
                  <span className="btn-text">Sign In</span>
                  <span className="btn-icon">→</span>
                </button>
                
                <Login isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
                
                <button 
                  className="auth-btn signup-btn"
                  onClick={() => document.getElementById("signup-container").showModal()}
                >
                  <span className="btn-text">Create Account</span>
                  <span className="btn-icon">+</span>
                </button>
                
                <Signup isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

















 
//  import { motion } from "framer-motion";
//  import { useState,useEffect } from "react";
//  import { useAuth } from "../context/AuthProvider.jsx"; 
//  import Login from "./Login";
//  import { useNavigate } from "react-router-dom"; // Import useNavigate
//  import "./Home.css"
//  import Signup from "./signup.jsx";

//  export default function LandingPage() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const {authUser} = useAuth();  // Check if the user is authenticated
//   const navigate = useNavigate(); // Get navigate function

  
//   useEffect(() => {
//     if (authUser) {
//       navigate(`/hero`); 
//     }
//   }, [authUser, navigate]); 


//    return (
//      <div style={{ minHeight: "100vh",minWidth: "100vw", backgroundColor: "#1a1a1a", color: "white", padding: "1rem", display: "flex", alignItems: "center", justifyContent: "center", width:"100vw" }}>
//        <div style={{ width: "100%", maxWidth: "64rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center" }}>
//          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
//            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
//              <div style={{ height: "5rem", width: "5rem", borderRadius: "50%", background: "linear-gradient(to right, #9333ea, #ec4899)", padding: "0.25rem", display: "flex", alignItems: "center", justifyContent: "center", animation: "pulse 2s infinite" }}>
//                <div style={{ height: "100%", width: "100%", borderRadius: "50%", backgroundColor: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ815i8u4_W8gMoIwIA8ZKMOTPB57ctp1pgXA&s" alt="Company Logo" style={{ height: "4.5rem", borderRadius:"70%",width: "4.5rem" }} />
//                </div>
//              </div>
//              <span style={{ fontSize: "1.875rem", fontWeight: "bold", background: "linear-gradient(to right, #c084fc, #ec4899)", WebkitBackgroundClip: "text", color: "transparent" }}>
//                CareerLaunch
//              </span>
//            </motion.div>

//            <h1 style={{ fontSize: "3rem", fontWeight: "bold", lineHeight: "1.2", background: "linear-gradient(to right, #c084fc, #ec4899, #f97316)", WebkitBackgroundClip: "text", color: "transparent" }}>
//              Your Next Career Move Starts Here
//            </h1>
//            <p style={{ color: "#9ca3af", fontSize: "1.125rem" }}>
//              Join thousands of professionals who have found their dream jobs through our platform.
//            </p>

//            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
//              {[{ title: "Corporate", color: "#9333ea" }, { title: "Tech", color: "#ec4899" }, { title: "Creative", color: "#f97316" }].map((item) => (
//                <motion.div key={item.title} whileHover={{ scale: 1.05 }} style={{ background: item.color, padding: "1rem", borderRadius: "1rem", textAlign: "center", cursor: "pointer", color: "white" }}>
//                  <p style={{ fontSize: "0.875rem", fontWeight: "500" }}>{item.title}</p>
//                </motion.div>
//              ))}
//            </motion.div>
//          </div>

//          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} style={{ display: "flex", flexDirection: "column", gap: "1.5rem", backgroundColor: "#2a2a3c", padding: "2rem", borderRadius: "1rem" }}>
//            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Create your account</h2>
//           <div className="btns" style={{ display: "flex", gap: "1rem" }}>
//           {authUser ? (
//             <p>Redirecting...</p> // Avoid rendering extra components before redirect
//           ) : (
//             <button className="auth-btn login"
//              onClick={() => document.getElementById("login-container").showModal()} >
//                login
//             </button>
//           )}
//             <Login isOpen={isModalOpen} setIsOpen={setIsModalOpen} />  {/* Pass modal state to Login component */}
//             <button className="auth-btn" onClick={() => document.getElementById("signup-container").showModal()}> 
//             SignUp
//             </button>
//             <Signup isOpen={isModalOpen} setIsOpen={setIsModalOpen}  />
//           </div>
//          </motion.div>
//        </div>
//      </div>
//    );
//  }

