const postsResovlers = require("./posts");
const userResolvers = require("./users");
const commentsResolvers = require("./comments");

module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postsResovlers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...postsResovlers.Mutation,
    ...commentsResolvers.Mutation,
  },
  Subscription: {
    ...postsResovlers.Subcription,
  },
};
