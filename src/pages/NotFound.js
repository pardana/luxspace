import React from "react";
import Header from "parts/Header";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import PagesErrorMessage from "parts/PagesErrorMessage";
import Document from "parts/Document";

export default function NotFound() {
  return (
    <Document>
      <Header theme="black" />
      <PagesErrorMessage />
      <Sitemap />
      <Footer />
    </Document>
  );
}
