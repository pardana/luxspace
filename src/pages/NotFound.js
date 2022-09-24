import React from "react";
import Header from "parts/Header";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import PagesErrorMessage from "parts/PagesErrorMessage";

export default function NotFound() {
  return (
    <>
      <Header theme="black" />
      <PagesErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
}
