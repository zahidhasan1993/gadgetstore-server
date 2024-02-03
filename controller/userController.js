import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";


//get all users


const getAllUser = async (req, res) => {
    const allUsers = await User.find();
    if (allUsers) {
        res.send(allUsers)
    } else {
        res.status(402).send({ error: true, message: "user found failed" })
    }
}

//authUser

const authUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ email: email, password: password })
    // console.log(user);

    if (user) {
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(402).send({ error: true, message: "unauthorized user" })
    }
}

// user profile (protectted)

const userProfile = async (req, res) => {
    res.send("success")
}

export {
    getAllUser,
    authUser,
    userProfile
}