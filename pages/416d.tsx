import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ItemFull } from "../components/ItemFull";
import { TabBar } from "../components/Tabbar";

import { clientGraphQL, queryFindReplique } from "../utils";

interface PageArticleProps {
    articles: any;
}
const PageArticle = ({articles}: PageArticleProps) => {
  console.log(articles)
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
              itemGallery={articles.node.gallery}
              itemName={articles.node.name}
              itemPrice={articles.node.price}
              itemDescription={articles.node.product_description}
              itemContent={articles.node.product_content}
            />
          </div>
      </section>
      <Footer />
    </main>
  )
}

export async function getStaticProps() {
  // Log only on server side
  console.log('This is server side');
  // Get data from API
  const data = await clientGraphQL.query({
    query: queryFindReplique,
  });

  return {
    props : { 
        articles: data.data.allArticles.edges[0]
    },
  }
}

export default PageArticle