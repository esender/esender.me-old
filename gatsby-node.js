const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { queries, blogPrefixPath } = require("./src/blog.config")

function paginate(items, options = {}, callback) {
  const {
    itemsPerPage = 15
  } = options;
  const totalItems = Array.isArray(items) ? items.length : items;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  Array.from({ length: totalPages }).forEach((_, i) => {
    const page = i + 1;
    callback({
      page,
      limit: itemsPerPage,
      skip: i * itemsPerPage,
      totalPages
    })
  })
}

function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')    // get all lowercase letters that are near to uppercase ones
    .replace(/[\s_]+/g, '-')                // replace all spaces and low dash
    .toLowerCase()                          // convert to lower case
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(queries.getAllPosts)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create blog-list pages
  const posts = result.data.allMarkdownRemark.edges
  paginate(posts, {}, function (context) {
    createPage({
      path: context.page === 1 ? blogPrefixPath : `${blogPrefixPath}/${context.page}`,
      component: path.resolve("./src/templates/blog.js"),
      context
    })
  })

  // Create blog-post pages
  posts.forEach(({ node: post }) => {
    createPage({
      path: post.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: post.fields.slug,
      },
    })
  })

  const postsByTags = await graphql(queries.getPostsByTags);

  postsByTags.data.allMarkdownRemark.group.forEach(({ tag, totalCount }) => {
    paginate(totalCount, {}, function (context) {
      const tagPath = `${blogPrefixPath}/tags/${toKebabCase(tag)}`
      createPage({
        path: context.page === 1 ? tagPath : `${tagPath}/${context.page}`,
        component: path.resolve("./src/templates/tag.js"),
        context: {
          ...context,
          tag
        }
      })
    })
  })
}

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}