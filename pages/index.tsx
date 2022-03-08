import type { NextPage } from 'next'
import Head from 'next/head';
import React from 'react';
import { Footer, Header, TabBar, Presentation } from '../components';

import {clientGraphQL, queryRepliques} from '../utils' 

clientGraphQL
  .query({
    query: queryRepliques,
  })
  .then(result => console.log(result));

  
  const Home: NextPage = () => {
    return (
    <>
    <div>
      <Head>
        <script src="https://kit.fontawesome.com/ec5d791fc6.js"></script>
      </Head>
      <Header 
      isHomePage={true} />
      <TabBar />
      <Presentation />
    </div>
    <Footer />
    </>
  )
}

export default Home
