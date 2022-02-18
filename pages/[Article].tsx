import { gql } from "@apollo/client";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ItemFull } from "../components/ItemFull";
import { TabBar } from "../components/Tabbar";

import { clientGraphQL, queryFindReplique } from "../utils";

interface PageArticleDetailsProps {
    replique: any;
}
const PageArticleDetails = ({replique}: PageArticleDetailsProps) => {
    console.log(replique)

  return (
    <main>
      <Head>
        <script src="https://kit.fontawesome.com/ec5d791fc6.js"></script>
      </Head>
      <Header />
      <TabBar />
      <section>
        <h1>Nos répliques</h1>
          <div>
            <ItemFull
              itemGallery={replique.gallery}
              itemName={replique.name}
              itemPrice={replique.price}
              itemDescription={replique.product_description}
              itemContent={replique.product_content}
            />
          </div>
      </section>
      <Footer />
    </main>
  )
}

export async function getServerSideProps() {
    const uid = {ItemFull.itemSlug}
  // Log only on server side
  console.log('This is server side');
  // Get data from API
  const data = await clientGraphQL.query({
    query: queryFindReplique,
    variables: {
        uid,
    },
  });

  return {
    props : { 
        articles: data.data.allArticles.edges[0]
    },
  }
}

export default PageArticleDetails