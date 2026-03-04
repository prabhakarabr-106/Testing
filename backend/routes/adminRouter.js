import express from "express";
import { registerAdmin, loginAdmin } from "../Controller/admincontroller.js";

const adminRouter = express.Router();

adminRouter.post("/register", registerAdmin);
adminRouter.post("/login", loginAdmin);

export default adminRouter;