import { gql } from "@apollo/client";

export const queryRepliques = gql`
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
          product_brand {
            ... on Brand {
              name
              logo
              brand_description
              brand_link {
                _linkType
              }
            }
          }
          gun_type
          _meta {
            uid
          }
        }
      }
    }
  }
`;
