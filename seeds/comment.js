const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "wonderful!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "amazing!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Fantastic!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "great news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "coolio!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Nice!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Kewl!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
