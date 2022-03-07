import type { NextPage } from 'next'
import Head from 'next/head';
import { Header } from '../components/Header';
import { TabBar } from '../components/TabBar';

import {clientGraphQL, queryRepliques} from '../utils' 
// const client = ...

clientGraphQL
  .query({
    query: queryRepliques,
  })
  .then(result => console.log(result));


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <script src="https://kit.fontawesome.com/ec5d791fc6.js"></script>
      </Head>
      <Header />
      <TabBar />
    </div>
  )
}

export default Home
