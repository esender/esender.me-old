import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>{post.frontmatter.title}</h1>
      <small>{post.frontmatter.date}</small>
      <ul>
        {post.frontmatter.tags.map(tag => <li>{tag}</li>)}
      </ul>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`