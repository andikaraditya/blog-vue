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

    static async getPostById(req, res, next) {
        try {
            const {id} = req.params

            const post = await Post.findByPk(id)

            if (!post) {
                throw {name: "NotFound", message: "post not found"}
            }

            res.status(200).json(post)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller