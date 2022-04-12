import type { NextPage } from "next";
import Script from "next/script";
import React from "react";
import { Footer, Header, TabBar, Presentation } from "../components";

import { clientGraphQL, queryRepliques } from "../utils";

clientGraphQL
  .query({
    query: queryRepliques,
  })
  .then((result) => console.log(result));

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Header isHomePage={true} />
        <TabBar />
        <Presentation />
      </div>
      <Footer isScroll={true} />
      <Script src="https://kit.fontawesome.com/ec5d791fc6.js"></Script>
    </>
  );
};

export default Home;
