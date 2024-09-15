import WelcomeImage2 from '../../assets/Welcome2.jpg';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Inline style for gradient background
const gradientBackground = {
  background: '#191919',
};

// Base button styles
const buttonStyles = {
  background: '#191919',
  color: '#BD8F4D',
  padding: '0.5rem 1rem',
  borderRadius: '0.375rem', // Tailwind's rounded-md
  fontWeight: 'bold',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: '0.3s ease',
};

// Hover styles for button
const buttonHoverStyles = {
  background: '#BD8F4D',
  color: '#191919',
};

function SignIn() {
  const [hover, setHover] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues
  } = useForm();

  const onsubmit = async (data: FieldValues) => {
    await new Promise((res)=> setTimeout(res,1000))
    reset();
  }


  return (

    <div
      className="flex items-center justify-center min-h-screen py-10 sm:py-40"
      style={gradientBackground}
    >
      <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">

        {/* Image Container */}
        <div
          className="w-full lg:w-1/2 flex items-center justify-center p-0 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${WelcomeImage2})`,
            minHeight: '300px', // Adjust this as needed
          }}
        >
          {/* Background image is set here */}
        </div>

        {/* Form Container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
          <div className="pb-20 px-8 pt-10 mb-4 w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
            <p className="pb-5 text-center">
              Welcome back! Please enter your email and password to access your account.
            </p>
            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  {...register("email", { required: "Email is required" })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters!"
                    }
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name='password'
                  type="password" // Changed to password type
                  placeholder="Password"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
              </div>
              <p className="text-center mb-4">
                Don't have an account?{' '}
                <Link
                  className="font-bold"
                  style={{ color: '#BD8F4D' }}
                  to="/" 
                >
                  Sign Up
                </Link>
              </p>
              <div className="relative flex items-center justify-between">
                <button
                  style={hover ? { ...buttonStyles, ...buttonHoverStyles } : buttonStyles}
                  className="relative overflow-hidden focus:outline-none disabled:bg-gray-400"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign In
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm"
                  style={{ color: '#191919' }}
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
