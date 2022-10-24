import React from "react";
import Header from "parts/Header";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import PagesErrorMessage from "parts/PagesErrorMessage";
import useScrollToTop from "helpers/hooks/useScrollToTop";

export default function NotFound() {
  useScrollToTop();
  return (
    <>
      <Header theme="black" />
      <PagesErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
}
