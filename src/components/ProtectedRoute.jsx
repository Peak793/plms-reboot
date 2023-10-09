import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import { userAtom } from '@/store/store';

const ONE_MINUTE = 60000; // 1 minute in milliseconds

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useAtom(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const performLoginCheck = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_BASE_API_URL + "/auth_rest/logged_in_check", { withCredentials: true });
        if (response.data.status) {
          console.log(response.data.payload)
          setUser(response.data.payload);
          localStorage.setItem('user', JSON.stringify(response.data.payload));
        } else {
          setUser(null);
          localStorage.removeItem('user');
          navigate('/signin')
        }
      } catch (error) {
        console.error("Failed to perform login check:", error);
        setUser(null);
        localStorage.removeItem('user');
        navigate('/signin')
      }
    };

    // Initial login check
    performLoginCheck();

    // Periodically check isLoggedIn every 1 minute
    const intervalId = setInterval(performLoginCheck, ONE_MINUTE);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return <>
    {children}
  </>;
};

export default ProtectedRoute;
