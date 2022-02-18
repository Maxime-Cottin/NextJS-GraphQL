import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

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
    </div>
  )
}

export default Home
