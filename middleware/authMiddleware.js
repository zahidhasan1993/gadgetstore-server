import jwt from "jsonwebtoken";

import User from "../models/userModel.js";



const protect = async (req, res, next) => {
    let token

    if (req.headers.authorization) {
        try {
            token = req.headers.authorization.split(" ")[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            // console.log("come from decoded", decoded);
            // console.log('after decoded', token);

            req.user = await User.findById(decoded.id).select('-password');

            next()
        } catch (error) {
            console.log(error);
        }
    }


    if (!token) {
        res.status(401).send({ error: true, message: "not Authorized" })
    }


}


export {
    protect
}