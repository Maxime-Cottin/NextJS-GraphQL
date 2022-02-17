import { PrismicLink } from "apollo-link-prismic";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const clientGraphQL = new ApolloClient({
  link: PrismicLink({
    uri: "https://ras-website.prismic.io/graphql",
    catch(e) {
      console.warn(e);
    },
  }),
  cache: new InMemoryCache(),
});
