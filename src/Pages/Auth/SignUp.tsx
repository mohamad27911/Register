/* eslint-disable @typescript-eslint/no-unused-vars */
import WelcomeImage2 from '../../assets/Welcom2.jpg';
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

function SignUp() {
  const [hover, setHover] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues
  } = useForm();

  const onsubmit = async (data: FieldValues) => {
    await new Promise((res) => setTimeout(res, 1000))
    reset();
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen py-10 sm:py-40"
      style={gradientBackground}
    >
      <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">



        {/* Form Container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
          <div className="pb-20 px-8 pt-10 mb-4 w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <p className="pb-5 text-center">
              Join us today! Create an account to start exploring our services and enjoy a personalized experience.
            </p>

            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  {...register("name", {
                    required: "This field is required",

                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}

              </div>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "This field is required",

                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}

              </div>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}

              </div>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2" htmlFor="password_confirmation">
                  Confirm Password
                </label>
                <input
                  {...register("password_confirmation", {
                    required: "Confirm Password is required",
                    validate: (value: string) =>
                      value === getValues("password") || "Passwords must match!"
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  placeholder="Confirm Password"
                />
                {errors.password_confirmation && <p className="text-red-500 text-xs mt-1">{errors.password_confirmation.message}</p>}

              </div>
              <div className="mb-4">
                <button
                  className="w-full disabled:bg-gray-500"
                  style={hover ? { ...buttonStyles, ...buttonHoverStyles } : buttonStyles}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  type="submit"
                  disabled={isSubmitting
                  }
                >
                  Create Account
                </button>
              </div>
              <p className="text-center mb-4">
                Already have an account?{' '}
                <Link
                  to="/signin"
                  className="font-bold"
                  style={{ color: '#BD8F4D' }}
                // Updated path
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
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
      </div>

    </div>
  );
}

export default SignUp;
