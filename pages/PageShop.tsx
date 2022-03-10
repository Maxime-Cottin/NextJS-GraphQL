// Import components from Next
import Head from "next/head";

// Import custom components
import { Footer, Header, ItemList, TabBar } from "../components";

// Other imports
import { clientGraphQL, queryRepliques } from "../utils";

interface PageArticleProps {
  articles: any;
}
const PageArticle = ({ articles }: PageArticleProps) => {
  return (
    <main>
      <Head>
        <script src="https://kit.fontawesome.com/ec5d791fc6.js"></script>
      </Head>

      <Header isHomePage={false} />

      <TabBar />

      <section className="pageContent">
        <h1>Nos répliques</h1>
        {/* All articles repliques */}
        {articles.map((replique: any, key: number) => {
          return (
            <ItemList
              itemKey={key}
              itemCover={replique.node.gallery[0].image}
              itemName={replique.node.name}
              itemPrice={replique.node.price}
              itemSlug={replique.node._meta.uid}
            />
          );
        })}
      </section>

      <Footer isScroll={true} />
    </main>
  );
};

export async function getStaticProps() {
  // Log only on server side
  console.log("This is server side");
  // Get data from API
  const data = await clientGraphQL.query({
    query: queryRepliques,
  });

  return {
    props: {
      articles: data.data.allArticles.edges,
    },
  };
}

export default PageArticle;
