import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Post from "../components/Blog/Post/Post";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO title="Blog" />
      <Post post={post} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        ISODate: date(formatString: "YYYY-MM-DD")
        tags
      }
    }
  }
`;
