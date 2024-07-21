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


  useEffect(() => {
    authService.getUser()
      .then((account) => dispatch(authlogin(account)))
      .catch((error) => {
        dispatch(authlogout())
      })
      .finally(() => {
        setLoading(false)
      })
    
  }, [])

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
