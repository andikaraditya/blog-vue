const {User} = require('../models')

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
}

module.exports = Controller