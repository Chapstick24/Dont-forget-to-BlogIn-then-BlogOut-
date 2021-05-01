
const { Post } = require('../models');

const postData = [
    {
        title: "What is Lorem Ipsum?",
        post_content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
        user_id: 3
    },
    {
        title: "Why do we use it?!",
        post_content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        user_id: 1
    },
    {
        title: "Suspendisse molestie sit amet nisi at porta. Donec congue!",
        post_content: "Duis et condimentum est, vitae tincidunt enim. Curabitur eu pharetra ante, et fringilla nisl.",
        user_id: 2

    },
    {
        title: "",
        post_content: "",
        user_id: 5
    },
    {
        title: "Suspendisse potenti. Maecenas posuere, velit vel fermentum dictum",
        post_content: "Phasellus erat augue, imperdiet ac dolor a, ornare sodales felis. Maecenas nec sapien vitae velit eleifend gravida vulputate nec justo.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;