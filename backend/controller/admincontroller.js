import Admin from "../models/admin.js";

export const registerAdmin = async (req, res) => {
    try{
        const { username, email, password, confirmPassword } = req.body;

        if(!username || !email || !password || !confirmPassword){
            return res.status(400).json({message: "All fields are required"});
        }

        if(password !== confirmPassword){
            return res.status(400).json({message: "Passwords do not match"});
        }

        const newadmin = new Admin({ username, email, password });
        await newadmin.save();

        res.status(201).json({message:"Admin registered successfully"});
    }catch (error){
        res.status(500).json({message: error.message});
    }
};

export const loginAdmin = async (req, res) => {
    try{
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({message: "Email and password are required"});
        }

        const admin = await Admin.findOne({ email });

        if(!admin || admin.password !== password){
            return res.status(401).json({message:"Invalid email or password"});
        }

        res.status(200).json({message: "Admin logged in successfully"});
        
    }catch(error){
        res.status(500).json({message: error.message});
    }
};