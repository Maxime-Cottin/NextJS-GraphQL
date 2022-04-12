// Import components from Next
import Script from "next/script";

// Import custom components
import { Footer, Header, TabBar } from "../components";

// Other imports
import { clientGraphQL, queryRepliques } from "../utils";

const PageContact = () => {
  return (
    <main>
      <Header isHomePage={false} />

      <TabBar />

      <section className="pageContent"></section>

      <Footer isScroll={false} />
      <Script src="https://kit.fontawesome.com/ec5d791fc6.js"></Script>
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
