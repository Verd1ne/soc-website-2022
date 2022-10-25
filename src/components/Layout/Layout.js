import React, {useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return(
    <div className="relative">
      <ScrollToTop/>
      <Header/>
        { children }
      <Footer/>
    </div>
  )
}

const ScrollToTop = () => {
  const url = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    window.scrollTo(0,0);
  }, [url])

  return null;
}

export default Layout;  