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
      "calcway, react, javascript, html, calculator, typescript, html5, reactjs, project, free, html-css, html-css-javascript, javascipt, calculator-application, calculator-javascript, calculator-app, vite, react-typescript, vitejs, natainditama, vite-ts, react-ts, typescript, calculator-ts",
  },
  {
    name: "description",
    content:
      "Beautiful Online Calculator with 11-digit keypad and 4 functions to add, subtract, multiply and divide numbers.",
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
  title: "Beautiful a simple calculator website build with React",
  link: [...linkTags],
  meta: [...metaTags],
};

export default seoDefaults;
