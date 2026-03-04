import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminRouter.js";

const app = express();
const port = 5000;

connectDB();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));

app.use("/admin", adminRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});