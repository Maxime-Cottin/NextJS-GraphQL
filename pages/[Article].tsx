// Import custom components
import Script from "next/script";
import { Footer, Header, ItemFull, TabBar } from "../components";

// Other imports
import { clientGraphQL, queryFindReplique } from "../utils";

interface PageArticleDetailsProps {
  replique: any;
  uid: any;
}
const PageArticleDetails = ({ replique }: PageArticleDetailsProps) => {
  return (
    <main>
      <Header isHomePage={false} />

      <TabBar />

      <section className="pageContent">
        <h1>Nos répliques</h1>
        <div>
          <ItemFull
            itemGallery={replique.node.gallery}
            itemName={replique.node.name}
            itemPrice={replique.node.price}
            itemDescription={replique.node.product_description}
            itemContent={replique.node.product_content}
          />
        </div>
      </section>

      <Footer isScroll={true} />
      <Script src="https://kit.fontawesome.com/ec5d791fc6.js"></Script>
    </main>
  );
};

export async function getServerSideProps({ params }: { params: any }) {
  // const uid = (params?.path as string[])?.join('/') || 'PageShop';
  const uid = params.Article;
  const data = await clientGraphQL.query({
    query: queryFindReplique,
    variables: {
      uid,
    },
  });

  return {
    props: {
      replique: data.data.allArticles.edges[0],
    },
  };
}

export default PageArticleDetails;
