import { User } from '../../backend/model/User.model.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { error, success } from '../../backend/util/responseWrapper.js'
import { ACCESS_TOKE_PRIVATE_KEY } from '../../backend/envData.js'


const signupController = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        if (!email || !password || !firstname || !lastname)
            return res.send(error(400, "All fields are required"));

        const oldUser = await User.findOne({ email });

        if(oldUser)
            return res.send(error(409, "Sorry, a user with this email is already registered"));

        const hashPassword = await bcryptjs.hash(password, 10);
        const user = await User.create({
            firstname,
            lastname,
            email,
            password: hashPassword    
        })

        const authToken = generateAccessToken({
            _id: user._id
        })

        return res.send(success(201, { authToken }))

    } catch (err) {
        console.log(error(500, err.message));
    }
}

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.send(error(400, "All fields are required."));
        }

        //// checking the email is registered or not.
        const user = await User.findOne({ email, admin: true });
        if (!user) {
            return res.send(error(404, "User is not authorized."));
        }

        const matchPassword = await bcryptjs.compare(password, user.password);
        if (!matchPassword) {
            return res.send(error(401, "Incorrect Password"))
        }

        const authToken = generateAccessToken({
            _id: user._id
        })

        return res.send(success(200, { authToken }))

    } catch (err) {
        console.log(error(500, err.message));
    }

}


const generateAccessToken = ( credential ) => {
    const token = jwt.sign(credential, ACCESS_TOKE_PRIVATE_KEY, {
        expiresIn: "30d"
    });
    return token
}

export {
    signupController,
    loginController
}