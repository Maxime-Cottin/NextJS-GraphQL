// Import components from Next
import Head from "next/head";

// Import custom components
import { Footer, Header, TabBar } from "../components";

// Other imports
import { clientGraphQL, queryRepliques } from "../utils";

const PageContact = () => {
  return (
    <main>
      <Head>
        <script src="https://kit.fontawesome.com/ec5d791fc6.js"></script>
      </Head>

      <Header isHomePage={false} />

      <TabBar />

      <section></section>

      <Footer isScroll={false} />
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

export default PageContact;
