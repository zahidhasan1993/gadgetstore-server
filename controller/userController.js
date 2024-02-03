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
    // console.log(req.body);
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
    // console.log("come from user", req.user);
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(401).send({ error: true, message: "Authorization Failed" })
    }
}

//register user 


const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    // console.log(req.body);
    const userExist = await User.findOne({ email: email })

    if (userExist) {
        res.status(400).send({ error: true, message: "User all ready exist" })
    }

    const newUser = await User.create({
        name,
        email,
        password
    })


    if (newUser) {
        res.status(201).send({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
        })
    } else {
        res.status(400).send({ error: true, message: "Invalid User" })
    }

}


export {
    getAllUser,
    authUser,
    userProfile,
    registerUser
}