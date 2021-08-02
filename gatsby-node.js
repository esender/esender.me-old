const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { queries, blogPrefixPath, tagPrefixPath } = require("./src/blog.config");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const allPosts = await graphql(queries.getAllPosts);

  if (allPosts.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = allPosts.data.allMarkdownRemark.edges;
  createBlogListPages(posts, createPage);
  createBlogPostPages(posts, createPage);

  const postsByTags = await graphql(queries.getPostsByTags);

  if (postsByTags.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const postsByTagsNodes = postsByTags.data.allMarkdownRemark.group;
  createBlogTagsPages(postsByTagsNodes, createPage);
};

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

function paginate(items, options = {}, callback) {
  const { itemsPerPage = 15 } = options;
  const totalItems = Array.isArray(items) ? items.length : items;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  Array.from({ length: totalPages }).forEach((_, i) => {
    const page = i + 1;
    callback({
      page,
      limit: itemsPerPage,
      skip: i * itemsPerPage,
      totalPages,
    });
  });
}

function createBlogListPages(posts, createPage) {
  paginate(posts.length, {}, function (context) {
    createPage({
      path:
        context.page === 1
          ? blogPrefixPath
          : `${blogPrefixPath}/${context.page}`,
      component: path.resolve("./src/templates/blog.js"),
      context,
    });
  });
}

function createBlogPostPages(posts, createPage) {
  posts.forEach(({ node: post }) => {
    createPage({
      path: post.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: post.fields.slug,
      },
    });
  });
}

function createBlogTagsPages(tags, createPage) {
  tags.forEach(({ tag, totalCount }) => {
    paginate(totalCount, {}, function (context) {
      const tagPath = `${tagPrefixPath}/${toKebabCase(tag)}`;
      createPage({
        path: context.page === 1 ? tagPath : `${tagPath}/${context.page}`,
        component: path.resolve("./src/templates/tag.js"),
        context: {
          ...context,
          tag,
        },
      });
    });
  });
}

function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}
