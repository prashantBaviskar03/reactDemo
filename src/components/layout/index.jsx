import React from "react";
import Header from "../header";
import Footer from "../footer";

function Layout(props) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "82vh" }}>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
