import React from "react";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="content">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
