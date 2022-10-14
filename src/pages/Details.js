import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import useAsync from "helpers/hooks/useAsync";
import fetch from "helpers/fetch";

import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb/";
import ProductDetails from "parts/Details/ProductDetails";
import Suggestion from "parts/Details/Suggestion";
import Clients from "parts/Clients";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";

export default function HomePage() {
  const { idp } = useParams();

  const { data, run, isLoading } = useAsync();

  useEffect(() => {
    run(fetch({ url: `/api/products/${idp}` }));
  }, [run]);

  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />
      {isLoading ? "Loading..." : <ProductDetails data={data} />}
      {isLoading ? (
        "Loading..."
      ) : (
        <Suggestion data={data?.relatedProducts || {}} />
      )}

      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
