import React from "react";
import APP from "../Components/APP";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Shishir Bhurtel, full stack developer from Butwal, Nepal. Personal Portfolio Site. SkillSet:- Node.js, react.js, express.js, mongodb, sql, microservices, python, redux.js, MVC, Ajax, html, css, javascript etc"
        />
        <meta
          name="keywords"
          content="shishir, bhurtel, shishir bhurtel, developer, web developer, full stack developer, mern stack developer, node.js, react.js, react, node, cceer bhurtel, cceer, ccr, developer from nepal, "
        />
        <meta
          name="og:title"
          content="Shishir Bhurtel | Full Stack Developer"
        />
        <meta name="og:url" content="https://www.shishirbhurtel.com.np/" />
        <meta name="og:image" content="https://www.shishirbhurtel.com.np/images/me.jpeg" />

        <link rel="canonical" href="https://www.shishirbhurtel.com.np/" />
        <link rel="shortcut icon" type="image/jpg" href="./favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="../src/images/logo_background.png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        />

        <title>
          Shishir Bhurtel | Full Stack Developer -Web Developer at gigatech
        </title>
      </Head>
      <APP />
    </>
  );
}

export default Index;
