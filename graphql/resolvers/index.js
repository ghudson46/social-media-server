const PostResolvers = require('./posts');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');

module.exports = {
    Post: {
        likeCount(parent) {
            return parent.likes.length
        },
        commentCount(parent) {
            return parent.comments.length
        }
    },
    Query: {
        ...PostResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...PostResolvers.Mutation,
        ...commentsResolvers.Mutation
    },
    Subscription: {
        ...PostResolvers.Subscription
    }
};