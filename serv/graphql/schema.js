var { buildSchema } = require('graphql');

// Schema for GraphQL
exports.schema = buildSchema(`
  type Article {
    _id: String
    article: String
    title: String
    description: String
    image: String
    content: String
    category: String
    author: String
    date: String
    comments: String
  }
  
  type User {
    steam: String
    trade: String
    vk: String
    email: String
    file: String
  }

  input ArticleInput {
    _id: String
    title: String
    description: String
    image: String
    content: String
    category: String
    author: String
    date: String
    comments: String
  }

  type Edit {
    isDone: String
  }
  input UserAdd {
    steam: String
    trade: String
    vk: String
    email: String
    file: String
  }

  type Query {
    articleOne(id: Int!): Article
    articleAll(page: Int!): [Article]
    articleCategory(category: String!): [Article]
    users(cols: Int!): [User]
  }
  type Mutation {
    articleEdit(input: ArticleInput): Edit
    userAdd(input: UserAdd): Edit
  }
`);