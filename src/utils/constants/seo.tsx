import { HelmetProps } from "react-helmet";

const metaTags = [
  {
    name: "mobile-web-app-capable",
    content: "yes",
  },
  {
    charSet: "utf-8",
  },
  {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
  },
  {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
  },
  {
    name: "apple-mobile-web-app-capable",
    content: "yes",
  },
  {
    name: "msapplication-starturl",
    content: "/",
  },
  {
    name: "application-name",
    content: "Calcway App",
  },
  {
    name: "apple-mobile-web-app-status-bar-style",
    content: "default",
  },
  {
    name: "apple-mobile-web-app-title",
    content: "Calcway App",
  },
  {
    name: "format-detection",
    content: "telephone=no",
  },
  {
    name: "msapplication-TileColor",
    content: "#000000",
  },
  {
    name: "msapplication-tap-highlight",
    content: "no",
  },
  {
    name: "keywords",
    content:
      "Stunning calculator, App website, React, Elegant design, Seamless user interface, Mathematical calculations, Web application, Calculator app, React framework, Beautiful UI, User-friendly calculator, Advanced calculations, Responsive design, Interactive interface, Front-end development, Modern calculator, Efficient calculations, Interactive user experience, Customizable calculator, React components.",
  },
  {
    name: "description",
    content:
      "Experience the elegance of a stunning calculator app website, crafted with React, offering a seamless and visually captivating user interface for effortless mathematical calculations",
  },
];

const linkTags = [
  {
    rel: "manifest",
    href: "/manifest.json",
  },
  {
    rel: "icon",
    type: "image/x-icon",
    href: "/favicon.ico",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/icons/favicon-16x16.png",
    sizes: "16x16",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/icons/favicon-32x32.png",
    sizes: "32x32",
  },
  {
    rel: "shortcut icon",
    href: "/favicon.ico",
    type: "image/x-icon",
  },
  {
    rel: "apple-touch-icon",
    href: "icons/apple-touch-icon.png",
  },
];

const seoDefaults: HelmetProps = {
  titleTemplate: "Calcway - %s",
  title: "Stunning calculator app website built with React",
  link: [...linkTags],
  meta: [...metaTags],
};

export default seoDefaults;
