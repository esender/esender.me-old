import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";

const BlogIndex = ({
    data: {
        blog: { posts },
    },
}) => {
    return (
        <Layout>
            <SEO title="Blog" />
            <div>
                {posts.map(({ node }) => (
                    <div>
                        <h1>{node.frontmatter.title}</h1>
                        <div>{node.fields.slug}</div>
                        {node.excerpt}
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
query BlogPostsQuery($skip: Int!, $limit: Int!) {
  blog: allMarkdownRemark(
    sort: { order: DESC, fields: frontmatter___date }
    filter: { fileAbsolutePath: { regex: "/blog/" } }
    limit: $limit
    skip: $skip
  ) {
    posts: edges {
      node {
          fields {
              slug
          }
        excerpt(pruneLength: 250)
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`;

export default BlogIndex