import React from "react";
import Helmet from "react-helmet";
import seoDefaults from "@/utils/constants/seo";

function DefaultSeo() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <Helmet base={baseUrl} {...seoDefaults}>
      <link rel="canonical" href={baseUrl} />
    </Helmet>
  );
}

export default DefaultSeo;
