import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ItemFull } from "../../components/ItemFull";
import { TabBar } from "../../components/Tabbar";

import { clientGraphQL, queryRepliques } from "../../utils";

interface PageArticleProps {
    articles: any;
}
const PageArticle = ({articles}: PageArticleProps) => {
  // Log on client side
  // console.log('This is client side');
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
        {/* All articles repliques */}
        {articles.map((replique: any, key: number) => {
          return (
          <div>
            <ItemFull
              itemKey={key}
              itemGallery={replique.node.gallery}
              itemName={replique.node.name}
              itemPrice={replique.node.price}
              itemDescription={replique.node.product_description}
              itemContent={replique.node.product_content}
            />
          </div>
        )})}
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
    query: queryRepliques,
  });

  return {
    props : { 
        articles: data.data.allArticles.edges
    },
  }
}

export default PageArticle