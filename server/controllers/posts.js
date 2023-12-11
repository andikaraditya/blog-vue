const {Post} = require('../models');

class Controller {
    static async getPosts(req, res, next) {
        try {
            const posts = await Post.findAll()

            console.log(posts[0].Title)

            res.status(200).json(posts)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller