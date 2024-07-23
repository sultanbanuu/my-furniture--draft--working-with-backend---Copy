//packages
// import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import categoryRoutes from "../backend/routes/categoryRoutes.js";
import cors from "cors";

//Utiles
import connectDB from "./config/db.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

const corsOptions = {
  origin: "http://localhost:5000",
  methods: "GET, POST",
  allowHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/category", categoryRoutes);

app.get("/", (req, res) => {
  res.send("Hellou");
});



app.listen(port, () => console.log(`Server running on port ${port}`));
