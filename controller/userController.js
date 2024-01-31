import User from "../models/userModel.js";


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
    // console.log(email);
    const user = await User.findOne({ email: email, password: password })
    // console.log(user);

    if (user) {
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: null
        })
    } else {
        res.status(402).send({ error: true, message: "unauthorized user" })
    }
}

export {
    getAllUser,
    authUser
}