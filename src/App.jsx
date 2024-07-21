// App.js
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { authService } from "./appwrite/auth";
import { useDispatch , useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { authlogin, authlogout } from "./store/authSlice";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const getSession = async () => {
    try {
      const sess = await authService.getUser();
      if (sess) {
        dispatch(authlogin(sess));
      } else {
        dispatch(authlogout());
      }
    }
    catch(e) {
      dispatch(authlogout());
    }
    

  };
  useEffect(() => {
    getSession();
    setLoading(false);
  }, []);

  return (
    !loading ? (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ) : ""
  );
}

export default App;
