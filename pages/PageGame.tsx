// Import components from Next
import Head from "next/head";

// Import custom components
import { Footer, Header, RichText, TabBar } from "../components";

// Other imports
import { clientGraphQL, queryPageGame } from "../utils";
interface PageGameProps {
  pageContent: any;
}

const PageGame = ({ pageContent }: PageGameProps) => {
  console.log(pageContent);
  return (
    <main>
      <Head>
        <script src="https://kit.fontawesome.com/ec5d791fc6.js"></script>
      </Head>

      <Header isHomePage={false} />

      <TabBar />

      <img src={pageContent.cover.url} alt="" className="coverGame" />
      <section>
        {pageContent.body.map((slice: any, key: number) => {
          switch (slice.type) {
            case "titlentable":
              return (
                <div key={key}>
                  <RichText
                    className=""
                    richTextContent={slice.primary.title}
                  />
                  <div className="tabPricing">
                    {slice.fields.map((tabLine: any, key: number) => {
                      return (
                        <div className="tabLine" key={key}>
                          <RichText
                            className="name"
                            richTextContent={tabLine.line_name}
                          />
                          <p className="price">{tabLine.line_price} €</p>
                          <RichText
                            className="details"
                            richTextContent={tabLine.line_details}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );

              break;
            case "titlentext":
              return (
                <div key={key}>
                  <RichText
                    className=""
                    richTextContent={slice.primary.title}
                  />
                  <RichText className="" richTextContent={slice.primary.text} />
                </div>
              );
              break;

            default:
              break;
          }
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
    query: queryPageGame,
  });

  return {
    props: {
      pageContent: data.data.allPagegames.edges[0].node,
    },
  };
}

export default PageGame;
