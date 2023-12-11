const {User} = require('../models')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
class Controller {
    static async handleRegister(req, res, next) {
        try {
            const {username, email, password} = req.body

            

            const user = await User.create({
                username,
                email,
                password
            })

            res.status(201).json({
                id: user.id,
                username: user.username,
                email: user.email
            })
        } catch (error) {
            // console.log(error)
            next(error)
        }
    }

    static async handleLogin(req, res, next) {
        try {
            const {email, password} = req.body

            if (!email || !password) {
                throw {name: "BadRequest", message: "all form must be filled"}
                
            }

            const user = await User.findOne({
                where: {
                    email: email
                }
            })

            if (!user) {
                throw {name: "BadRequest", message: "email or password incorrect"}
            }
            
            const passwordCorrect = bcrypt.compareSync(password, user.password)

            if (!passwordCorrect) {
                throw {name: "BadRequest", message: "email or password incorrect"}
            }

            const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET)

            res.status(200).json({access_token: token})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller