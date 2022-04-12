// Import custom components
import Script from "next/script";
import { Footer, Form, Header, TabBar } from "../components";

const PageContact = () => {
  return (
    <main>
      <Header isHomePage={false} />

      <TabBar />

      <section>
        <Form />
      </section>

      <Footer isScroll={false} />
      <Script src="https://kit.fontawesome.com/ec5d791fc6.js"></Script>
    </main>
  );
};

export default PageContact;
