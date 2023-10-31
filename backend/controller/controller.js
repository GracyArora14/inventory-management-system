import bcrypt from "bcrypt";
import UserModel from "../models/user_model.js";

export async function register(req, res) {
    const { password, email, shopName } = req.body;

    try {
        // Check if user already exists
        try {
            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "User already exists" });
            }
        } catch (error) {
            throw new Error(error);
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new UserModel({

            password: hashedPassword,
            email,
            shopName
        });
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}
