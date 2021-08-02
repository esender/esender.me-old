import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Pagination from "../components/Blog/Pagination/Pagination";
import PostPreview from "../components/Blog/PostPreview/PostPreview";

const CategoryTemplate = ({ pageContext: { tag, totalPages, page }, data }) => {
  const posts = data.blog.posts
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Tag: "{tag}"</h1>
      {posts.map(({ node: post }) => <PostPreview {...post} />)}
      <Pagination page={page} totalPages={totalPages} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query TagPage($tag: String, $skip: Int!, $limit: Int!) {
    blog: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } }, fileAbsolutePath: { regex: "/blog/" } }
      sort: { order: DESC, fields: frontmatter___date }
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
            tags
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default CategoryTemplate