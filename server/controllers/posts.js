const {Post} = require('../models');
const {v4:uuidv4} = require('uuid');

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

    static async createPost(req, res, next) {
        try {
            const {Title, Description, Image} = req.body
            const {id} = req.user
            const post = await Post.create({
                Uuid: uuidv4(),
                User_id: id,
                Title: Title,
                Description: Description,
                Image: Image
            })

            res.status(201).json(post)
        } catch (error) {
            next(error)
        }
    }

    static async editPost(req, res, next) {
        try {
            const {id} = req.params
            const {id:userId} = req.user
            const {Title, Description} = req.body

            const post = await Post.findByPk(id)

            if (!post) {
                throw {name: "NotFound", message: "post not found"}
            }

            if (post.User_id !== userId) {
                throw {name: "Unauthorized", message: "authorization error"}
            }

            await post.update({
                Title,
                Description
            })

            res.status(200).json(post)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller