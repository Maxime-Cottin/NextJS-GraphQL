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
          product_brand {
            __typename
            _linkType
          }
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
        }
      }
    }
  }
`;
