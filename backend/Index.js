import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { testConnection } from "./Database/db.js";
import booksRouter from "./Routes/Books.js";

dotenv .config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(booksRouter);

app.listen(process.env.APP_PORT, async () => {
    await testConnection();
    console.log(`http://localhost:${process.env.APP_PORT}`);
});