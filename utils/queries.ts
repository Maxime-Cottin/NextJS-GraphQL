import { gql } from "@apollo/client";

export const queryPage = gql`
  query Articles {
    allArticles {
      edges {
        node {
          name
          gallery {
            image
          }
          price
          product_description
          content_of_the_box
        }
      }
    }
  }
`;
