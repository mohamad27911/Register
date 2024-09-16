import axios from 'axios';
// Set the base URL of your Laravel backend
const BASE_URL = 'http://localhost:8000';
// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // This ensures cookies like the CSRF token are sent with requests
});
// Function to get the CSRF token
 const getCsrfToken = async () => {
  try {
    // Make a request to /sanctum/csrf-cookie to get the CSRF token
    await api.get('/sanctum/csrf-cookie',);
    console.log('CSRF token fetched successfully');
  } catch (error) {
    console.error('Error fetching CSRF token:', error);
    throw error;
  }
};
// Function to login
export const login = async (data:{email:string, password:string}) => {
  try {
    // First, get the CSRF token
    await getCsrfToken();
    // Then, send the login request
    const response = await api.post('/login', {
      email: email,
      password: password
    } , {
        headers : {
            Accept : 'application/json',
        },
        withXSRFToken:true,
        withCredentials:true
    });
    console.log('User logged in successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response ? error.response.data : error);
    throw error;
  }
};
export const getUsers = async () => {
  try {
    // Hit the sanctum/csrf-cookie endpoint to start the session
    await api.get(`/sanctum/csrf-cookie`);
    // Now make the request to get users
    const response = await api.get(`/users`, {
      headers: {
        Accept: 'application/json',
      },
      withCredentials: true,
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching users:', error.response ? error.response.data : error.message);
  }
};
export const logout = async () => {
    try {
      // Get the XSRF-TOKEN from cookies
      // Send the logout request to the Laravel backend
      const response = await api.post(
        '/logout',
        {},
        {
          headers: {
            Accept : 'application/json',
          },
          withXSRFToken: true
        }
      );
      console.log('User logged out successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error logging out:', error.response ? error.response.data : error);
      throw error;
    }
  };
  export const Register = async (data:{name:string, email:string, password:string,password_confirmation:string}) => {
    await api.get(`/sanctum/csrf-cookie`, {
      withCredentials: true, // Important to include credentials for cookies
    });
    const response = await api.post('/register',  {
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
    } , {
      headers: {
        Accept : 'application/json',
      },
      withCredentials: true,
      withXSRFToken: true
    });
    return response.data;
  };
export default api;