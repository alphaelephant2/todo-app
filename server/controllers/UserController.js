const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt.js");
const { signToken } = require("../helpers/jwt.js");

class UserController {
    static async register(req, res, next) {
        try {
            const payload = {
                email: req.body.email,
                password: req.body.password,
                name: req.body.name
            }

            const user = await User.create(payload);

            res.status(201).json({
                id: user.id,
                email: user.email
            })
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    static async login(req, res, next) {
        try {
            const payload = {
                email: req.body.email,
                password: req.body.password
            }

            const user = await User.findOne({
                where: {
                    email: payload.email
                }
            })

            if(!user) { //if user isn't found
                throw { name: "InvalidUserPassword" }

            } else if (!comparePassword(payload.password, user.password)) { //user is found but password doesn't matched
                throw { name: "InvalidUserPassword" }

            } else { //if email & pass are matched, access token is give 
                const access_token = signToken({
                    id: user.id,
                    email: user.email
                });

                res.status(200).json({
                    access_token, msg: "login success"
                });
            }

        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}

module.exports = UserController;