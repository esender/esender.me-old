import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Pagination from "../components/Blog/Pagination/Pagination";
import PostPreview from "../components/Blog/PostPreview/PostPreview";

const BlogIndex = ({ data, pageContext: { totalPages, page } }) => {
  const posts = data.blog.posts
  return (
    <Layout>
      <SEO title="Blog" />
      {posts.map(({ node: post }) => <PostPreview {...post} />)}
      <Pagination page={page} totalPages={totalPages} />
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
        id
        frontmatter {
          title
          description
          date(formatString: "MMMM DD, YYYY")
          tags
        }
      }
    }
  }
}
`;

export default BlogIndex