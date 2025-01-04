import { createContext, useContext, useEffect, useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Initializing user as null instead of an array
    const [isAuth, setIsAuth] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false);
    const [loading, setLoading] = useState(true);

    // Register user function
    async function registerUser(name, email, password, navigate) {
        setBtnLoading(true);
        try {
            const { data } = await axios.post("/api/user/register", { name, email, password });
            toast.success(data.message);
            setUser(data.user);
            setIsAuth(true);
            setBtnLoading(false);
            navigate("/");
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
            setBtnLoading(false);
        }
    }

    // Login user function
    async function loginUser(email, password, navigate) {
        setBtnLoading(true);
        try {
            const { data } = await axios.post("/api/user/login", { email, password }, { withCredentials: true });
            toast.success(data.message);
            setUser(data.user); // Store the user data including role
            setIsAuth(true);
            setBtnLoading(false);

            // Log the user to check the role
            console.log('Logged in user:', data.user);

            // Redirect based on the role
            if (data.user.role === 'admin') {
                navigate('/admin'); // Redirect to admin page
            } else {
                navigate('/'); // Redirect to home page for regular users
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
            setBtnLoading(false);
        }
    }

    // Fetch user info (usually on app load to check if user is already authenticated)
    async function fetchUser() {
        try {
            const { data } = await axios.get("/api/user/me", { withCredentials: true });
            setUser(data);
            setIsAuth(true);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setIsAuth(false);
            setLoading(false);
        }
    }
    async function logoutUser() {
        try {
          const { data } = await axios.get("/api/user/logout");
    
          window.location.reload();
        } catch (error) {
          toast.error(error.response.data.message);
        }
      }
    async function addToPlaylist(id) {
        try {
          const { data } = await axios.post("/api/user/song/"+ id);
    
          toast.success(data.message);
          fetchUser();
        } catch (error) {
          toast.error(error.response.data.message);
        }
      }
    

    // Effect to check if user is logged in when the app is loaded
    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ registerUser, user, isAuth, btnLoading, loading, loginUser,logoutUser,addToPlaylist }}>
            {children}
            <Toaster />
        </UserContext.Provider>
    );
};

export const UserData = () => useContext(UserContext);
