import { useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import "./Signup.css";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3000/api/v1/users/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successful!");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <dialog id="signup-container" className="signup-dialog">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="signup-popup-container"
      >
        <div className="gradient-background"></div>
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="signup-popup"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <motion.button
              type="button"
              className="close-btn"
              onClick={() => document.getElementById("signup-container").close()}
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

            <h3 className="signup-heading">Join CareerLaunch</h3>
            <p className="signup-subheading">Start your professional journey today</p>

            <div className="form-group">
              <label>Full Name</label>
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  {...register("fullname", { required: true })}
                  className="form-input"
                />
              </motion.div>
              {errors.fullname && (
                <span className="error-text">Name is required</span>
              )}
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                  className="form-input"
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
                  placeholder="Create a password"
                  {...register("password", { required: true })}
                  className="form-input"
                />
              </motion.div>
              {errors.password && (
                <span className="error-text">Password is required</span>
              )}
            </div>

            <div className="form-footer">
              <motion.button 
                type="submit" 
                className="signup-btn"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Create Account
              </motion.button>
              <p className="login-text">
                Already have an account?{" "}
                <motion.span whileHover={{ scale: 1.05 }}>
                  <button
                    type="button"
                    className="login-link"
                    onClick={() => {
                      document.getElementById("signup-container").close();
                      document.getElementById("login-container").showModal();
                    }}
                  >
                    Sign In
                  </button>
                </motion.span>
              </p>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </dialog>
  );
}

export default Signup;











// import { useLocation, useNavigate } from "react-router-dom";
// import Login from "./Login";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";
// import "./Signup.css"; // import external CSS

// function Signup() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/";
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       name: data.fullname,
//       email: data.email,
//       password: data.password,
//     };
//     await axios
//       .post("http://localhost:3000/api/v1/users/signup", userInfo)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data) {
//           toast.success("Signup Successfully");
//           navigate(from, { replace: true });
//         }
//         localStorage.setItem("Users", JSON.stringify(res.data.user));
//       })
//       .catch((err) => {
//         if (err.response) {
//           console.log(err);
//           toast.error("Error: " + err.response.data.message);
//         }
//       });
//   };

//   return (
//     <dialog id="signup-container" className="signup-dialog">
//       <div className="signup-popup-container">
//         <div className="signup-popup">
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <button type="button" className="close-btn" onClick={() => document.getElementById("signup-container").close()}>
//               ✕
//             </button>

//             <h3 className="signup-heading">Signup</h3>

//             <div className="form-group">
//               <label>Name</label>
//               <br />
//               <input
//                 type="text"
//                 placeholder="Enter your fullname"
//                 {...register("fullname", { required: true })}
//                 className="form-input"
//               />
//               {errors.fullname && (
//                 <span className="error-text">This field is required</span>
//               )}
//             </div>

//             <div className="form-group">
//               <label>Email</label>
//               <br />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 {...register("email", { required: true })}
//                 className="form-input"
//               />
//               {errors.email && (
//                 <span className="error-text">This field is required</span>
//               )}
//             </div>

//             <div className="form-group">
//               <label>Password</label>
//               <br />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 {...register("password", { required: true })}
//                 className="form-input"
//               />
//               {errors.password && (
//                 <span className="error-text">This field is required</span>
//               )}
//             </div>

//             <div className="form-footer">
//               <button type="submit" className="signup-btn">
//                 Signup
//               </button>
//               <p className="login-text">
//                 Have an account?
//                 <button
//                   type="button"
//                   className="login-link"
//                   onClick={() =>
//                     document.getElementById("login-container").showModal()
//                   }
//                 >
//                   Login
//                 </button>
//                 <Login />
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </dialog>
//   );
// }

// export default Signup;


