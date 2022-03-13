// Import components from Next / React
import Head from "next/head";

// Import custom components
import { Footer, Form, Header, TabBar } from "../components";

const PageContact = () => {
  return (
    <main>
      <Head>
        <script src="https://kit.fontawesome.com/ec5d791fc6.js"></script>
      </Head>

      <Header isHomePage={false} />

      <TabBar />

      <section>
        <Form />
      </section>

      <Footer isScroll={false} />
    </main>
  );
};

export default PageContact;
