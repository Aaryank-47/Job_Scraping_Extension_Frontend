import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import "./Login.css";


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/users/login",
        userInfo
      );
      if (res.data) {
        toast.success("Logged in Successfully");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setTimeout(() => window.location.reload(), 1000);
      }
    } catch (err) {
      toast.error(
        `Error: ${err.response?.data?.message || "Something went wrong"}`
      );
    }
  };

  return (
    <dialog id="login-container" className="login-modal-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="login-modal"
      >
        <div className="modal-background">
          <div className="gradient-overlay"></div>
          <div className="modal-glass">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
              <motion.button
                type="button"
                className="login-close-btn"
                onClick={() => document.getElementById("login-container").close()}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.button>

              <h3 className="modal-title">Welcome Back</h3>

              <div className="form-group">
                <label>Email Address</label>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", { required: true })}
                  />
                </motion.div>
                {errors.email && (
                  <span className="error-text">Email is required</span>
                )}
              </div>

              <div className="form-group">
                <label>Password</label>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", { required: true })}
                  />
                </motion.div>
                {errors.password && (
                  <span className="error-text">Password is required</span>
                )}
              </div>

              <div className="form-footer">
                <motion.button
                  type="submit"
                  className="login-btn"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign In
                </motion.button>
                <p>
                  Don't have an account?{" "}
                  <motion.span whileHover={{ scale: 1.05 }}>
                    <button
                      type="button"
                      className="signup-link"
                      onClick={()=>{
                        document.getElementById("login-container").close();
                        document.getElementById("signup-container").showModal();
                      }}
                      >
                      Create Account
                    </button>
                    {/* <Link to="/signup" className="signup-link">
                      Create Account
                    </Link> */}
                  </motion.span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </dialog>
  );
}

export default Login;




// import { Link } from "react-router-dom"; // Importing Link for navigation
// import { useForm } from "react-hook-form"; // Importing useForm hook for form validation
// import axios from "axios"; // Importing axios for making API requests
// import toast from "react-hot-toast"; // Importing toast for notifications
// import "./Login.css"; // Importing external CSS file for styling

// function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm(); // Using react-hook-form for form handling and validation

//   const onSubmit = async (data) => {
//     const userInfo = {
//       email: data.email, // Collecting email from form data
//       password: data.password, // Collecting password from form data
//     };
//     try {
//       const res = await axios.post(
//         "http://localhost:3000/api/v1/users/login",
//         userInfo
//       ); // Sending login request to backend
//       if (res.data) {
//         toast.success("Logged in Successfully"); // Showing success toast message
//         localStorage.setItem("Users", JSON.stringify(res.data.user)); // Storing user data in localStorage
//         setTimeout(() => window.location.reload(), 1000); // Reloading the page after 1 second
//       }
//     } catch (err) {
//       toast.error(
//         `Error: ${err.response?.data?.message || "Something went wrong"}`
//       ); // Showing error toast message
//     }
//   };

//   return (
//     <dialog id="login-container"> {/* Modal container for login */}
//     <div className="login-modal"> {/* Main modal wrapper */}
//       <div className="modal-box"> {/* Box that holds the modal content */}
//         <form className="login-form" onSubmit={handleSubmit(onSubmit)}> {/* Login form */}
//           <button
//             type="button"
//             className="close-btn"
//             onClick={() =>
//               document.getElementById("login-container").close()
//             } // Closing the modal when clicked
//           >
//             ✕ {/* Close button */}
//           </button>
//           <h3 className="modal-title">Login</h3> {/* Modal title */}

//           <div className="form-group"> {/* Grouping email input field */}
//             <label>Email</label> {/* Label for email */}
//             <input
//               type="email"
//               placeholder="Enter your email"
//               {...register("email", { required: true })} // Registering email input with validation
//             />
//             {errors.email && (
//               <span className="error-text">This field is required</span>
//             )} {/* Error message for email field */}
//           </div>

//           <div className="form-group"> {/* Grouping password input field */}
//             <label>Password</label> {/* Label for password */}
//             <input
//               type="password"
//               placeholder="Enter your password"
//               {...register("password", { required: true })} // Registering password input with validation
//             />
//             {errors.password && (
//               <span className="error-text">This field is required</span>
//             )} {/* Error message for password field */}
//           </div>

//           <div className="form-footer"> {/* Footer for form actions */}
//             <button type="submit" className="login-btn">Login</button> {/* Submit button for login */}
//             <p> {/* Text for redirecting to signup */}
//               Not registered?{" "}
//               <Link to="/signup" className="signup-link"> {/* Link to signup page */}
//                 Signup
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   </dialog>
//   );
// }

// export default Login; // Exporting Login component
