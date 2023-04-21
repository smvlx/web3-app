import React from "react";
import Head from "next/head";
import Collection from "./components/collection/Collection";
import Header from "./components/header/Header";
import MainContent from "./components/main/MainContent";

const App = () => {
  return (
    <>
      <Head>
        <title>Trending Collections</title>
        <meta name="keywords" content="nft, next" />
      </Head>
      <Header />
      <MainContent />
      <Collection collectionData={null} />
    </>
  );
};

export default App;
