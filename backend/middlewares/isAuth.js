import jwt from 'jsonwebtoken';
import { User } from "../models/User.js";

export const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token; // Retrieve the token from cookies
        if (!token) return res.status(403).json({
            message: "Please Login", // If no token is found
        });
 
        // Verify the token
        const decodedData = jwt.verify(token, process.env.Jwt_secret);

        if (!decodedData) return res.status(403).json({
            message: "Token Expired", // If the token is invalid or expired
        });
        
        // Find user from database using decoded data
        req.user = await User.findById(decodedData.id);

        // Proceed to the next middleware/route handler
        next();
    } catch (error) {
        res.status(500).json({
            message: "Please Login", // Generic message if error occurs
        });
    }
};
